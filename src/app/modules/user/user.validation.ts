import z from "zod";
import { UserRole, UserStatus } from "../auth/auth.interface";


//user register validation
const userRegisterValidation = z.object({
    name: z.string(
        {
            error: "name is required."
        }
    ).min(3, "name must be at least 3 characters long."),
    email: z.email({
        error: "email is required & must be a valid email."
    }),
    password: z
        .string({ error: "password is required & string." })
        .min(8, { message: "Password must be 8 characters long." })
        .regex(/^(?=.*[A-Z])/, { message: "Password must be contain at least 1 uppercase letter" })
        .regex(/^(?=.*[a-z])/, { message: "Password must be contain at least 1 lowercase letter" })
        .regex(/^(?=.*[!@#$%^&*])/, { message: "Password must be contain at least 1 special character." })
        .regex(/^(?=.*\d)/, { message: "Password must be contain at least 1 number" }),
});

//user role validation
const userRoleValidationSchema = z.object({
    role: z.enum(
        [UserRole.ADMIN, UserRole.USER],
        {error: "User role value must be ADMIN OR USER."}
    ),
    email: z.email({
        error: "email is required & must be a valid email."
    }),
});

//user role validation
const userStatusSchema = z.object({
    status: z.enum(
        Object.values(UserStatus),
        {error: "User status value must be ACTIVE, INACTIVE, DELETED OR BLOCKED."}
    ),
    email: z.email({
        error: "email is required & must be a valid email."
    }),
});


export const UserValidation = {
    userRegisterValidation,
    userRoleValidationSchema,
    userStatusSchema
};