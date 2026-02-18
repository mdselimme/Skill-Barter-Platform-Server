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

export const UserControllers = {
    userRegistration,
    getMeUser,
    getUserByUserId
};