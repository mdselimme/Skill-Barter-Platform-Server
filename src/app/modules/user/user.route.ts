import { Router } from "express";
import { UserValidation } from "./user.validation";
import { validateZodSchema } from "../../middleware/validateZodSchema";
import { UserControllers } from "./user.controller";
import checkAuth from "../../middleware/checkAuth";
import { UserRole } from "../auth/auth.interface";


const router = Router();

//user register
router.post("/register", 
    validateZodSchema(UserValidation.userRegisterValidation),
    UserControllers.userRegistration
);

//get me user
router.get("/me", 
    checkAuth(...Object.values(UserRole)),
    UserControllers.getMeUser
);

//get user by id
router.get("/:id",
    UserControllers.getUserByUserId
);

//update user role
router.patch("/update-role",
    validateZodSchema(UserValidation.userRoleValidationSchema),
    checkAuth(UserRole.ADMIN, UserRole.USER),
    UserControllers.userRoleUpdate
);

//update user status
router.patch("/update-status",
    validateZod
)

export const UserRoutes = router;