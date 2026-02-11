import z from "zod";


//user register validation
const userRegisterValidation = z.object({
    name: z.string(
        {
            error: "name is required."
        }
    ).length(3, "name must be at least 3 characters long."),
    email: z.email({
        error: "email is required & must be a valid email."
    }),
    password: z
        .string({ error: "password is required & string." })
        .length(8, { message: "Password must be 8 characters long." })
        .regex(/^(?=.*[A-Z])/, { message: "Password must be contain at least 1 uppercase letter" })
        .regex(/^(?=.*[a-z])/, { message: "Password must be contain at least 1 lowercase letter" })
        .regex(/^(?=.*[!@#$%^&*])/, { message: "Password must be contain at least 1 special character." })
        .regex(/^(?=.*\d)/, { message: "Password must be contain at least 1 number" }),
});


export const UserValidation = {
    userRegisterValidation
};