import { Router } from "express";
import checkAuth from "../../middleware/checkAuth";
import { SkillsController } from "./skills.controller";
import { UserRole } from "../auth/auth.interface";
import { SkillsValidation } from "./skills.validation";
import { validateZodSchema } from "../../middleware/validateZodSchema";

const router = Router();

//skill create route
router.post("/create",
    checkAuth(...Object.values(UserRole)),
    validateZodSchema(SkillsValidation.skillCreateZodSchema),
    SkillsController.createASkill
);


export const SkillsRoutes = router;