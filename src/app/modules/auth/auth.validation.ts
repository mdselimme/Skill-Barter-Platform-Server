import z from "zod";


//login data validation
const loginZodSchema = z.object({
    email: z.email({
        error: "Email is required & valida email string."
    }),
    password: z.string(
        {error: "Password is required"}
    ).min(8, "Password must be at least 8 characters long"),
});

//change password
const changePasswordZodSchema = z.object({
    oldPassword: z.string({
        error: "Old password is required"
    }).min(8, "Password must be at least 8 characters long"),
    newPassword: z
            .string({ error: "password is required & string." })
            .min(8, { message: "Password must be 8 characters long." })
            .regex(/^(?=.*[A-Z])/, { message: "Password must be contain at least 1 uppercase letter" })
            .regex(/^(?=.*[a-z])/, { message: "Password must be contain at least 1 lowercase letter" })
            .regex(/^(?=.*[!@#$%^&*])/, { message: "Password must be contain at least 1 special character." })
            .regex(/^(?=.*\d)/, { message: "Password must be contain at least 1 number" }),
});


export const AuthValidation = {
    loginZodSchema,
    changePasswordZodSchema
};