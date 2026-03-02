import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SessionService } from "./session.service";
import { IJwtToken } from "../../types/token.types";

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
})

export const SessionController = {
    createASession
};