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


export const AuthValidation = {
    loginZodSchema
};