/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcrypt";
import { prisma } from "../../utils/prisma";
import { generateToken, verifyToken } from "../../utils/jwtToken";
import { envVariables } from "../../config/env.config";
import ApiError from "../../utils/ApiError";
import httpStatus from "http-status";
import { Prisma } from "../../../../generated/prisma";
import { UserStatus } from "./auth.interface";
import sendEmail from "../../utils/sendEmail";
import { generateOTP, OTP_EXPIRATION } from "../../utils/otpGenerate";
import { redisClient } from "../../config/redis.config";


//auth login service
const authLoginUser = async (payload: Prisma.UserCreateInput) => {
    const result = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });
    if(!result){
        throw new Error("User not found");
    }

    const isPasswordMatched = await bcrypt.compare(payload.password, result.password);
    if(!isPasswordMatched){
        throw new Error("Invalid password");
    }

    const tokenPayload = {
        id: result.id,
        email: result.email,
        role: result.role,
    }

    const accessToken = generateToken(tokenPayload, envVariables.JWT_ACCESS_SECRET, envVariables.JWT_ACCESS_EXPIRES);
    const refreshToken = generateToken(tokenPayload, envVariables.JWT_REFRESH_SECRET, envVariables.JWT_REFRESH_EXPIRES);

    const {password:_, ...userWithoutPassword} = result;
    return {user:userWithoutPassword, accessToken, refreshToken};
};

// change password 
const changePassword = async (userId: string, payload: {oldPassword: string, newPassword: string}) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    if(!user){
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    const isPasswordMatched = await bcrypt.compare(payload.oldPassword, user.password);
    if(!isPasswordMatched){
        throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid Old password");
    }
    if(payload.newPassword === payload.oldPassword){
        throw new ApiError(httpStatus.BAD_REQUEST, "New password cannot be same as old password");
    };
    const hashedPassword = await bcrypt.hash(payload.newPassword, envVariables.PASSWORD_HASH_SALT);
    const result = await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            password: hashedPassword,
        },
    });
    return result;
};

//refresh token service
const refreshToken = async (refreshToken: string) => {

    const decoded = verifyToken(refreshToken, envVariables.JWT_REFRESH_SECRET);
    if(!decoded){
        throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid refresh token");
    }
    const user = await prisma.user.findUnique({
        where: {
            email: decoded.email,
        },
    });
    if(!user){
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    const tokenPayload = {
        id: user.id,
        email: user.email,
        role: user.role,
    }
    const newAccessToken = generateToken(tokenPayload, envVariables.JWT_ACCESS_SECRET, envVariables.JWT_ACCESS_EXPIRES);
    const newRefreshToken = generateToken(tokenPayload, envVariables.JWT_REFRESH_SECRET, envVariables.JWT_REFRESH_EXPIRES);
    return {accessToken: newAccessToken, refreshToken: newRefreshToken};
};

// verify email send service
const verifyEmailSend = async (payload: Prisma.UserCreateInput) => {
    const result = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });
    if(!result){
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    if(result.isVerified){
        throw new ApiError(httpStatus.BAD_REQUEST, "User already verified");
    }
    if(result.isActive !== UserStatus.ACTIVE){
        throw new ApiError(httpStatus.BAD_REQUEST, "User is not active");
    }
    const otp = generateOTP();

    await redisClient.set(`otp:${result.email}`, otp, {
        expiration: {
            type: "EX",
            value:OTP_EXPIRATION
        }
    });

    await sendEmail(
       {
        to: result.email,
        subject: "Verify Your Email.",
        templateName: "verifyEmail",
        templateData: {
            otp,
            name: result.name,
        }
       }
    );
};


export const AuthServices = {
    authLoginUser,
    changePassword,
    refreshToken,
    verifyEmailSend
}