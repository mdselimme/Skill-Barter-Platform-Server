import { prisma } from "../../utils/prisma";
import ApiError from "../../utils/ApiError";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import { Prisma } from "../../../../generated/prisma";

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


export const UserServices = {
    userRegistration
};