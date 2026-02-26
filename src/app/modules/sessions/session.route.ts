import { Router } from "express";
import checkAuth from "../../middleware/checkAuth";
import { UserRole } from "../auth/auth.interface";
import { SessionValidation } from "./session.validation";
import { validateZodSchema } from "../../middleware/validateZodSchema";
import { SessionController } from "./session.controller";


const router = Router();

//add session route 
router.post("/add",
    checkAuth(UserRole.USER),
    validateZodSchema(SessionValidation.addSessionZodSchema),
    SessionController.createASession
)


export const sessionRoutes = router;