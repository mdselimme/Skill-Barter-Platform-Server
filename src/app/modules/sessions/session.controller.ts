import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

//create session controller
const createASession = catchAsync(async (req: Request, res: Response) => {
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Session created successfully",
        data: null
    })
})

export const SessionController = {
    createASession
};