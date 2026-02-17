import { prisma } from "../../utils/prisma";
import ApiError from "../../utils/ApiError";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import { Prisma } from "../../../../generated/prisma";
import { IJwtToken } from "../../types/token.types";

//user registration service
const userRegistration = async (payload: Prisma.UserCreateInput) => {
    //check user exists
    const isUserExists = await prisma.user.findUnique({
        where: {
            email: payload.email
        }
    });
    if (isUserExists) {
        throw new ApiError(httpStatus.BAD_REQUEST, "User already exists");
    }
    const passwordHash = await bcrypt.hash(payload.password, 10);
    const userData = {
        ...payload,
        password:passwordHash
    }
    //create user
    const result = await prisma.user.create({
        data: userData,
        select:{
            id: true,
            name: true,
            email: true,
            role: true,
            isVerified: true,
            isActive: true,
        }
    });
    return result;
};

//get me user service
const getMeUser = async (user: IJwtToken
) => {
    const result = await prisma.user.findUnique({
        where: {
            id: user.id
        },
        select:{
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            address: true,
            profileImg: true,
            credits: true,
            isVerified: true,
            isActive: true,
        }
    });
    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, "User data does not found.");
    }
    return result;
};


export const UserServices = {
    userRegistration,
    getMeUser
};