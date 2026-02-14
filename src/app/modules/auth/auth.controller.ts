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
});

// refresh token controller
const refreshToken = catchAsync(async (req: Request, res: Response) => {
    const refreshToken = req.cookies.refreshToken || req.headers["refresh-token"];
    if(!refreshToken){
        throw new Error("Refresh token not found");
    }
    const result = await AuthServices.refreshToken(refreshToken);
    setTokenCookie(res, result);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Access token refreshed successfully."
    })
});

//user logout controller
const authLogoutUser = catchAsync(async (req: Request, res: Response) => {

    res.clearCookie("accessToken",{
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
    });
    res.clearCookie("refreshToken",{
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
    });
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: null,
        message: "User logged out successfully."
    });
});



export const AuthController = {
    authLoginUser,
    changePassword,
    refreshToken,
    authLogoutUser
}