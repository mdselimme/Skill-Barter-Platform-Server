import z from "zod"

// creating a skill validation schema
const skillCreateZodSchema = z.object({
    name: z.string({
        error: "Name is required",
    }),
})

export const SkillsValidation = {
    skillCreateZodSchema
}