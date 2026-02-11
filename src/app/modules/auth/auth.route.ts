import { Router } from "express";
import { validateZodSchema } from "../../middleware/validateZodSchema";
import { AuthValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";


const router = Router();

//login router
router.post("/login",
    validateZodSchema(AuthValidation.loginZodSchema),
    AuthController.authLoginUser
)

export const AuthRoutes = router;