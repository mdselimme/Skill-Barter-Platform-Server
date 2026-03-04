import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SessionService } from "./session.service";
import { IJwtToken } from "../../types/token.types";
import httpStatus from "http-status";

//create session controller
const createASession = catchAsync(async (req: Request, res: Response) => {
    const decodedToken = req.user as IJwtToken;
    const result = await SessionService.createASession(req.body, decodedToken.id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Session created successfully",
        data: result
    })
});


//delete session controller
const deleteASession = catchAsync(async (req: Request, res: Response) => {
    const sessionId = req.params.id;
    const decodedToken = req.user as IJwtToken;

    //delete session logic here
    await SessionService.deleteASession(sessionId as string, decodedToken.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: null,
        message: "Session deleted successfully",
    })
});

export const SessionController = {
    createASession,
    deleteASession
};