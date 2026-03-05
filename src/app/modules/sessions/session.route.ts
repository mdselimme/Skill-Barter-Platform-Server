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
);

//add teacher to session route
router.patch("/teacher/add/:id",
    checkAuth(UserRole.USER),
    validateZodSchema(SessionValidation.addTeacherToSessionZodSchema),
    SessionController.addTeacherToSession
)

//get all sessions route
router.get("/",
    SessionController.getAllSessions
);

//delete session route
router.delete("/:id",
    checkAuth(UserRole.USER),
    SessionController.deleteASession
);


export const sessionRoutes = router;