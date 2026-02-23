/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from "passport";
import { Strategy as GoogleStrategy, Profile, VerifyCallback } from "passport-google-oauth20";
import { envVariables } from "./env.config";
import { prisma } from "../utils/prisma";
import { AuthProvider } from "../../../generated/prisma";

passport.use(
    new GoogleStrategy(
        {
            clientID: envVariables.GOOGLE.CLIENT_ID,
            clientSecret: envVariables.GOOGLE.CLIENT_SECRET,
            callbackURL: envVariables.GOOGLE.CALLBACK_URL,
        },
        async (_accessToken: string, _refreshToken: string, profile: Profile, done: VerifyCallback) => {
            try {
                const email = profile.emails?.[0]?.value ?? null;
                if (!email) {
                    return done(new Error("No email found in Google profile"));
                }

                const googleProviderId = profile.id;

                // Check if an Account already exists for this Google provider ID
                const existingAccount = await prisma.account.findFirst({
                    where: {
                        provider: AuthProvider.GOOGLE,
                        providerId: googleProviderId,
                    },
                    include: { user: true },
                });

                // Already linked just return the user
                if (existingAccount) {
                    return done(null, existingAccount.user);
                }

                // No Google account yet — find or create the User, then create the Account
                const user = await prisma.$transaction(async (tx) => {
                    let user = await tx.user.findUnique({ where: { email } });

                    if (!user) {
                        // Brand new user — create User + Account together
                        user = await tx.user.create({
                            data: {
                                name: profile.displayName,
                                email,
                                profileImg: profile.photos?.[0]?.value ?? null,
                                isVerified: true,
                                account: {
                                    create: {
                                        provider: AuthProvider.GOOGLE,
                                        providerId: googleProviderId,
                                    },
                                },
                            },
                        });
                    } else {
                        // Existing user (registered via LOCAL) — link their Google account
                        await tx.account.create({
                            data: {
                                userId: user.id,
                                provider: AuthProvider.GOOGLE,
                                providerId: googleProviderId,
                            },
                        });
                    }

                    return user;
                });

                return done(null, user);
            } catch (error) {
                return done(error as Error);
            }
        }
    )
);

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        done(null, user);
    } catch (error) {
        done(error as Error);
    }
});

export default passport;
