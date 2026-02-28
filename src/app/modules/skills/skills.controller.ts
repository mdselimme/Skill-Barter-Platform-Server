import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import HttpStatus from "http-status";
import { SkillsService } from "./skills.service";

//create skill controller
const createASkill = catchAsync(async (req: Request, res: Response) => {

    const result = await SkillsService.createASkill(req.body);

    sendResponse(res, {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: "Skill created successfully",
        data: result
    });
});


export const SkillsController = {
    createASkill
};