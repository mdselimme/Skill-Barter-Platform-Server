/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcrypt";
import { prisma } from "../../utils/prisma";
import { Prisma } from "@prisma/client";


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

    const {password:_, ...userWithoutPassword} = result;
    return userWithoutPassword;
};

//



export const AuthServices = {
    authLoginUser
}