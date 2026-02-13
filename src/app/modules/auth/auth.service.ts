/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcrypt";
import { prisma } from "../../utils/prisma";
import { generateToken } from "../../utils/jwtToken";
import { envVariables } from "../../config/env.config";
import ApiError from "../../utils/ApiError";
import httpStatus from "http-status";
import { Prisma } from "../../../../generated/prisma";


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



export const AuthServices = {
    authLoginUser,
    changePassword
}