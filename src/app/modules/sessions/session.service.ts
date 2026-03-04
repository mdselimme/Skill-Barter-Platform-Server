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

//delete session service
const deleteASession = async (sessionId: string, userId: string) => {
    //check if session exists
    const session = await prisma.barterSession.findUnique({
        where: {
            id: sessionId
        }
    });

    if (!session) {
        throw new ApiError(httpStatus.NOT_FOUND, "Session data does not found. Please check your session id");
    }

    //check if the user is the owner of the session
    if (session.learnerId !== userId) {
        throw new ApiError(httpStatus.FORBIDDEN, "You are not authorized to delete this session.");
    }

    //delete session logic here
    await prisma.barterSession.delete({
        where: {
            id: sessionId
        }
    });
};


export const SessionService = {
    createASession,
    deleteASession
};