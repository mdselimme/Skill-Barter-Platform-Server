import { Prisma } from "../../../../generated/prisma";
import { prisma } from "../../utils/prisma";
import ApiError from "../../utils/ApiError";
import httpStatus from "http-status";


//skill create service
const createASkill = async (payload: Prisma.SkillCreateInput) => {
    const existingSkill = await prisma.skill.findUnique({
        where: {
            name: payload.name,
        },
    });
    if (existingSkill) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Skill already exists.");
    }
    const result = await prisma.skill.create({
        data: payload,
    });
    return result;
};

//skill update service
const updateASkill = async (skillId: string, payload: Prisma.SkillUpdateInput) => {

    const skillsNames = await prisma.skill.findUnique({
        where: {
            name: payload.name as string,
        },
    });
    if (skillsNames) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Skill already exists.");
    }
    const existingSkill = await prisma.skill.findUnique({
        where: {
            id: skillId,
        },
    });
    if (!existingSkill) {
        throw new ApiError(httpStatus.NOT_FOUND, "Skill not found.");
    }
    const result = await prisma.skill.update({
        where: {
            id: skillId,
        },
        data: payload,
    });
    return result;
};

//skill delete service
const deleteASkill = async (skillId: string) => {
    const existingSkill = await prisma.skill.findUnique({
        where: {
            id: skillId,
        },
    });
    if (!existingSkill) {
        throw new ApiError(httpStatus.NOT_FOUND, "Skill not found.");
    }
    const result = await prisma.skill.delete({
        where: {
            id: skillId,
        },
    });
    return result;
};


export const SkillsService = {
    createASkill,
    updateASkill,
    deleteASkill
};