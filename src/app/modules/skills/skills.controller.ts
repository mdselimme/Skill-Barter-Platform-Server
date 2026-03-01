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

//update skill controller
const updateASkill = catchAsync(async (req: Request, res: Response) => {
    const skillId = req.params.id;

    const result = await SkillsService.updateASkill(skillId as string, req.body);
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Skill updated successfully",
        data: result
    });
});

//get all skills controller
const getAllSkills = catchAsync(async (req: Request, res: Response) => {
    const result = await SkillsService.getAllSkills();
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Skills retrieved successfully",
        data: result
    });
});

//delete skill controller
const deleteASkill = catchAsync(async (req: Request, res: Response) => {
    const skillId = req.params.id;

    const result = await SkillsService.deleteASkill(skillId as string);
    sendResponse(res, {
        statusCode: HttpStatus.OK,
        success: true,
        message: "Skill deleted successfully",
        data: result
    });
});

export const SkillsController = {
    createASkill,
    updateASkill,
    deleteASkill,
    getAllSkills
};