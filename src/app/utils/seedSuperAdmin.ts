/* eslint-disable no-console */
import { envVariables } from "../config/env.config";
import { UserRole } from "../modules/auth/auth.interface";
import { prisma } from "./prisma";
import bcrypt from "bcrypt";


// seed super admin to database if not exists
const seedSuperAdmin = async () => {
    try {
        const superAdminEmail = envVariables.SUPER_ADMIN.SUPER_ADMIN_EMAIL;
        const superAdminPassword = envVariables.SUPER_ADMIN.SUPER_ADMIN_PASS;
        const name = envVariables.SUPER_ADMIN.SUPER_ADMIN_NAME || "Super Admin";

        if (!superAdminEmail || !superAdminPassword) {
            throw new Error("SUPER_ADMIN_EMAIL and SUPER_ADMIN_PASSWORD must be set in the environment variables.");
        }

        const existingSuperAdmin = await prisma.user.findUnique({
            where: { email: superAdminEmail as string },
        });

        if (existingSuperAdmin) {
            console.log("Super admin already exists. Skipping seeding.");
            return;
        }

        const hashedPassword = await bcrypt.hash(superAdminPassword as string, envVariables.PASSWORD_HASH_SALT);

        const createdSuperAdmin = await prisma.user.create({
            data: {
                name: name,
                email: superAdminEmail as string,
                password: hashedPassword,
                role: UserRole.SUPER_ADMIN,
                isVerified: true,
            },
        });
        if (!createdSuperAdmin) {
            throw new Error("Failed to create super admin.");
        }
        console.log("Super admin seeded successfully.");
    } catch (error) {
        console.error("Error seeding super admin:", error);
    }
};

export default seedSuperAdmin;