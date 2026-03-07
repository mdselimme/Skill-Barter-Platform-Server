import { prisma } from "../../utils/prisma";
import ApiError from "../../utils/ApiError";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import { Prisma, User } from "../../../../generated/prisma";
import { IJwtToken } from "../../types/token.types";
import { UserRole, UserStatus } from "../auth/auth.interface";
import { deleteFromCloudinary } from "../../config/cloudinary.config";


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
    const passwordHash = await bcrypt.hash(payload.password as string, 10);
    const userData = {
        ...payload,
        password: passwordHash
    }
    //create user
    const result = await prisma.user.create({
        data: userData,
        select: {
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

//update user profile photo service
const userProfilePhotoUpdate = async (profilePhoto: string, user: IJwtToken) => {
    if (!profilePhoto) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Profile photo is required.");
    }
    const isUserExist = await prisma.user.findUnique({
        where: {
            id: user.id,
        },
    });
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "User data does not found.");
    };
    if (isUserExist.profileImg && isUserExist.profileImg.includes("cloudinary")) {
        await deleteFromCloudinary(isUserExist.profileImg);
    };
    const result = await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            profileImg: profilePhoto,
        },
        select: {
            profileImg: true,
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
        select: {
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

//get me user service
const getUserByUserId = async (id: string
) => {
    const result = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            address: true,
            profileImg: true,
        }
    });
    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, "User data does not found.");
    }
    return result;
};

//User role update service
const userRoleUpdate = async (payload: { role: Partial<UserRole>, email: string }) => {
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "User data does not found.");
    }
    if (isUserExist.isActive !== UserStatus.ACTIVE) {
        throw new ApiError(httpStatus.BAD_REQUEST, `User status is ${isUserExist.isActive}`);
    }
    if (!isUserExist.isVerified) {
        throw new ApiError(httpStatus.BAD_REQUEST, "User is not verified.");
    }
    const result = await prisma.user.update({
        where: {
            email: payload.email,
        },
        data: {
            role: payload.role
        },
        select: {
            role: true,
            name: true,
            email: true
        }
    });
    return result;
};

//User status update service
const userStatusUpdate = async (payload: { status: UserStatus, email: string }) => {
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "User data does not found.");
    }
    if (isUserExist.isActive === payload.status) {
        throw new ApiError(httpStatus.BAD_REQUEST, `User already have giving status.`);
    }
    const result = await prisma.user.update({
        where: {
            email: payload.email,
        },
        data: {
            isActive: payload.status
        },
        select: {
            isActive: true,
            name: true,
            email: true
        }
    });
    return result;
};

//get all users service
const getAllUsers = async () => {
    const result = await prisma.user.findMany({
        select: {
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
    return result;
};

//user profile update service
const userProfileUpdate = async (payload: Partial<User>, user: IJwtToken) => {
    const isUserExist = await prisma.user.findUnique({
        where: {
            id: user.id,
        },
    });
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "User data does not found.");
    };
    const result = await prisma.user.update({
        where: {
            id: user.id,
        },
        data: payload,
        select: {
            id: true,
            name: true,
        }
    });
    return result;
};

//user verification service
const userVerification = async (payload: { email: string, isVerified: boolean }) => {
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "User data does not found.");
    }
    if (isUserExist.isActive !== UserStatus.ACTIVE) {
        throw new ApiError(httpStatus.BAD_REQUEST, `User status is ${isUserExist.isActive}`);
    }
    if (isUserExist.isVerified === payload.isVerified) {
        throw new ApiError(httpStatus.BAD_REQUEST, `User already have giving verification status.`);
    }
    const result = await prisma.user.update({
        where: {
            email: payload.email,
        },
        data: {
            isVerified: payload.isVerified
        },
        select: {
            isVerified: true,
            name: true,
            email: true
        }
    });
    return result;
};


export const UserServices = {
    userRegistration,
    getMeUser,
    getUserByUserId,
    userRoleUpdate,
    userStatusUpdate,
    getAllUsers,
    userProfileUpdate,
    userProfilePhotoUpdate,
    userVerification
};