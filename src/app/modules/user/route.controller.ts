import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Request, Response } from 'express';
import { UserServices } from './route.service';


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


export const UserControllers = {
    userRegistration
};