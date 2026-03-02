import { Prisma } from "../../../../generated/prisma";
import ApiError from "../../utils/ApiError";
import { prisma } from "../../utils/prisma";
import httpStatus from "http-status";

//create session service
const createASession = async (payload: Prisma.BarterSessionCreateInput, userid: string) => {
    const skill = await prisma.skill.findUnique({
        where: {
            id: payload.skill as string
        }
    });

    if (!skill) {
        throw new ApiError(httpStatus.NOT_FOUND, "Skill not found");
    }

    //create session logic here
    const result = await prisma.barterSession.create({
        data: {
            hours: payload.hours,
            scheduledAt: new Date(payload.scheduledAt),
            skill: {
                connect: {
                    id: payload.skill as string
                }
            },
            learner: {
                connect: {
                    id: userid
                }
            }
        },
        include: {
            skill: true,
        }
    });
    return result;
};


export const SessionService = {
    createASession
};