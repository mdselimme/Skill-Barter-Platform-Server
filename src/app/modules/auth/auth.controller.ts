import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AuthServices } from "./auth.service";
import { setTokenCookie } from "../../utils/setTokenCookie";


//auth login controller
const authLoginUser = catchAsync(async (req: Request, res: Response) => {

    const result = await AuthServices.authLoginUser(req.body)

    setTokenCookie(res, result)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "User logged in successfully."
    })
    
});

//change password controller
const changePassword = catchAsync(async (req: Request, res: Response) => {

    const decodedToken = req.user;

    await AuthServices.changePassword(decodedToken.id, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: null,
        message: "Password changed successfully."
    })
})



export const AuthController = {
    authLoginUser,
    changePassword
}