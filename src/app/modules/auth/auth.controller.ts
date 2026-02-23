import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AuthServices } from "./auth.service";
import { setTokenCookie } from "../../utils/setTokenCookie";
import { IJwtToken } from "../../types/token.types";
import ApiError from "../../utils/ApiError";
import { generateToken } from "../../utils/jwtToken";
import { envVariables } from "../../config/env.config";


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

//google auth callback controller
const googleAuthCallback = catchAsync(async (req: Request, res: Response) => {

    let redirectTo = req.query.state ? req.query.state as string : "";

    if (redirectTo.startsWith("/")) {
        redirectTo = redirectTo.slice(1);
    };

    const user = req.user as IJwtToken

    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "User does not exist.");
    }

    const jwtPayload: IJwtToken = {
        id: user.id,
        email: user.email,
        role: user.role
    };

    const accessToken = generateToken(jwtPayload, envVariables.JWT_ACCESS_SECRET, envVariables.JWT_ACCESS_EXPIRES);

    const refreshToken = generateToken(jwtPayload, envVariables.JWT_REFRESH_SECRET, envVariables.JWT_REFRESH_EXPIRES);

    setTokenCookie(res, {
        accessToken,
        refreshToken
    });

    res.redirect(`${process.env.FRONTEND_URL}/${redirectTo}`);
});

//change password controller
const changePassword = catchAsync(async (req: Request, res: Response) => {

    const decodedToken = req.user as IJwtToken;

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
    if (!refreshToken) {
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

// verify email send
const verifyEmailSend = catchAsync(async (req: Request, res: Response) => {
    await AuthServices.verifyEmailSend(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: null,
        message: "Email verification sent successfully."
    })
})

// verify email code
const verifyEmailCode = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthServices.verifyEmailCode(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Email verification code verified successfully."
    })
})

//user logout controller
const authLogoutUser = catchAsync(async (req: Request, res: Response) => {

    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
    });
    res.clearCookie("refreshToken", {
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
    authLogoutUser,
    googleAuthCallback,
    verifyEmailSend,
    verifyEmailCode
}