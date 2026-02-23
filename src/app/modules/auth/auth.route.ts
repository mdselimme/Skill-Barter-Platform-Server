import { NextFunction, Request, Response, Router } from "express";
import { validateZodSchema } from "../../middleware/validateZodSchema";
import { AuthValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";
import checkAuth from "../../middleware/checkAuth";
import { UserRole } from "./auth.interface";
import passport from "passport";
import { envVariables } from "../../config/env.config";


const router = Router();

//login router
router.post("/login",
    validateZodSchema(AuthValidation.loginZodSchema),
    AuthController.authLoginUser
);

//google auth router
router.get("/google",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            passport.authenticate("google", { scope: ["profile", "email"] })(req, res, next);
        } catch (error) {
            next(error);
        }
    }
);

//google auth callback router
router.get("/google/callback",
    passport.authenticate("google", { failureRedirect: `${envVariables.FRONTEND_URL}/login?error=there is some issue with your account.Pleas contact with our support team.` }),
    AuthController.googleAuthCallback
);

//change password router
router.patch("/change-password",
    checkAuth(...Object.values(UserRole)),
    validateZodSchema(AuthValidation.changePasswordZodSchema),
    AuthController.changePassword
);

//verify email router
router.post("/verify-email",
    validateZodSchema(AuthValidation.verifyEmailSendZodSchema),
    AuthController.verifyEmailSend
);

//verify email code
router.post("/verify-email-code",
    validateZodSchema(AuthValidation.verifyEmailZodSchema),
    AuthController.verifyEmailCode
);

//refresh token router
router.post("/refresh-token",
    AuthController.refreshToken
);

//user logout router
router.post("/logout",
    checkAuth(...Object.values(UserRole)),
    AuthController.authLogoutUser
);

export const AuthRoutes = router;