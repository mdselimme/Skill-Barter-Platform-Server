import z from "zod";


//add session validation
const addSessionZodSchema = z.object({
    skill: z.uuid({
        error: "Skill ID is required",
    }),
    hours: z.iso.time({
        error: "Hours must be a valid datetime",
    }),
    scheduledAt: z.iso.date({
        error: "Scheduled At must be a valid datetime",
    }),
});

//add teacher to session validation
const addTeacherToSessionZodSchema = z.object({
    teacherId: z.uuid({
        error: "Teacher ID is required",
    }),
    teacherSkillId: z.iso.time({
        error: "Hours must be a valid datetime",
    }),
});

export const SessionValidation = {
    addSessionZodSchema,
    addTeacherToSessionZodSchema
}