/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcrypt";
import { prisma } from "../../utils/prisma";
import { Prisma } from "@prisma/client";
import { generateToken } from "../../utils/jwtToken";
import { envVariables } from "../../config/env.config";


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

//



export const AuthServices = {
    authLoginUser
}