import z from "zod";


//add session validation
const addSessionZodSchema = z.object({
    skillId: z.uuid({
        error: "Skill ID is required",
    }),
    hours: z.iso.date({
        error: "Hours must be a valid datetime",
    }),
    scheduledAt: z.iso.time({
        error: "Scheduled At must be a valid datetime",
    }),
});

export const SessionValidation = {
    addSessionZodSchema
}