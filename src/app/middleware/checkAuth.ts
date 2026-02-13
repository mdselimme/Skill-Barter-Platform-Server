import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";
import httpStatus from "http-status";
import { prisma } from "../utils/prisma";
import { envVariables } from "../config/env.config";
import { verifyToken } from "../utils/jwtToken";

const checkAuth = (...auth:string[])=> {
    return async (req:Request, res:Response, next:NextFunction)=> {
        try {
            const accessToken = req.cookies.accessToken || req.headers.authorization;
        if(!accessToken){
            throw new ApiError(httpStatus.UNAUTHORIZED, "Token not found.")
        }
        const verifiedToken = verifyToken(accessToken, envVariables.JWT_ACCESS_SECRET);
        if(!verifiedToken){
            throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid token.")
        }
        const user = await prisma.user.findUnique({
            where: {
                id: accessToken
            }
        })
        if(!user){
            throw new ApiError(httpStatus.UNAUTHORIZED, "User not found.")
        }
        if(!user.isVerified){
            throw new ApiError(httpStatus.UNAUTHORIZED, "User is not verified.")
        }
        if(user.isActive !== "ACTIVE"){
            throw new ApiError(httpStatus.UNAUTHORIZED, "User is not active.")
        }
        if(!auth.includes(user.role)){
            throw new ApiError(httpStatus.UNAUTHORIZED, "User is not authorized.")
        }
        req.user = user;
        next();
        } catch (error) {
            next(error);
        }
    };
}

export default checkAuth;
