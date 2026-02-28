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


export const SkillsService = {
    createASkill
};