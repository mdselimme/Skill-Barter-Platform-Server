import { Router } from "express";
import { validateZodSchema } from "../../middleware/validateZodSchema";
import { AuthValidation } from "./auth.validation";


const router = Router();

//login router
router.post("/login",
    validateZodSchema(AuthValidation.loginZodSchema),
    
)

export const AuthRoutes = router;