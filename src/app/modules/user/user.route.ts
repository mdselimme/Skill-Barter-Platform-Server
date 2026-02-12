import { Router } from "express";
import { UserValidation } from "./user.validation";
import { validateZodSchema } from "../../middleware/validateZodSchema";
import { UserControllers } from "./user.controller";


const router = Router();

//user register
router.post("/register", 
    validateZodSchema(UserValidation.userRegisterValidation),
    UserControllers.userRegistration
)


export const UserRoutes = router;