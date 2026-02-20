import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Request, Response } from 'express';
import { UserServices } from './user.service';
import { IJwtToken } from '../../types/token.types';


//user registration controller
const userRegistration = catchAsync(async (req:Request, res:Response) => {
    const result = await UserServices.userRegistration(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "User registered successfully",
        data: result,
    });
});

//get all users controller
const getAllUsers = catchAsync(async (req:Request, res:Response) => {
    const result = await UserServices.getAllUsers();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All users retrieved successfully.",
        data: result,
    });
});

//get me user controller
const getMeUser = catchAsync(async (req:Request, res:Response) => {
    const result = await UserServices.getMeUser(req.user as IJwtToken);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Current User Retrieved Successfully.",
        data: result,
    });
});

//get user by user id controller
const getUserByUserId = catchAsync(async (req:Request, res:Response) => {
    const id = req.params.id;
    const result = await UserServices.getUserByUserId(id as string);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Get user by user id successfully.",
        data: result,
    });
});

//user role update controller
const userRoleUpdate = catchAsync(async (req:Request, res:Response) => {
    const result = await UserServices.userRoleUpdate(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User role updated Successfully.",
        data: result,
    });
});

//user status update controller
const userStatusUpdate = catchAsync(async (req:Request, res:Response) => {
    const result = await UserServices.userStatusUpdate(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User status updated Successfully.",
        data: result,
    });
});


export const UserControllers = {
    userRegistration,
    getMeUser,
    getUserByUserId,
    userRoleUpdate,
    userStatusUpdate,
    getAllUsers,
};