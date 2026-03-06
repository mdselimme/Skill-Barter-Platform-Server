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

//add teacher to session controller
const addTeacherToSession = catchAsync(async (req: Request, res: Response) => {
    const sessionId = req.params.id;

    //add teacher to session logic here
    const result = await SessionService.addTeacherToSession(sessionId as string, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: result,
        message: "Teacher added to session successfully",
    })
});

//get all sessions controller
const getAllSessions = catchAsync(async (req: Request, res: Response) => {
    const result = await SessionService.getAllSessions();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Sessions retrieved successfully",
        data: result
    })
});

//get a session by id controller
const getASessionById = catchAsync(async (req: Request, res: Response) => {
    const sessionId = req.params.id;
    const result = await SessionService.getASessionById(sessionId as string);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Single Session retrieved successfully",
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
    deleteASession,
    getAllSessions,
    addTeacherToSession,
    getASessionById
};