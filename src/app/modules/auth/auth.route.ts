import { Router } from "express";
import { validateZodSchema } from "../../middleware/validateZodSchema";
import { AuthValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";
import checkAuth from "../../middleware/checkAuth";
import { UserRole } from "./auth.interface";


const router = Router();

//login router
router.post("/login",
    validateZodSchema(AuthValidation.loginZodSchema),
    AuthController.authLoginUser
);

//change password router
router.patch("/change-password",
    checkAuth(...Object.values(UserRole)),
    validateZodSchema(AuthValidation.changePasswordZodSchema),
    AuthController.changePassword
);  

//verify email router
router.post("/verify-email",
    validateZodSchema(AuthValidation.verifyEmailSendZodSchema),
    AuthController.verifyEmailSend
);

//refresh token router
router.post("/refresh-token",
    AuthController.refreshToken
);

//user logout router
router.post("/logout",
    checkAuth(...Object.values(UserRole)),
    AuthController.authLogoutUser
);

export const AuthRoutes = router;