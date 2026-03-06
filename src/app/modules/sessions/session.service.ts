import { Prisma } from "../../../../generated/prisma";
import ApiError from "../../utils/ApiError";
import { prisma } from "../../utils/prisma";
import httpStatus from "http-status";

//create session service
const createASession = async (payload: Prisma.BarterSessionCreateInput, userid: string) => {
    const skill = await prisma.skill.findUnique({
        where: {
            id: payload.learnerSkill as string
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
            learnerSkill: {
                connect: {
                    id: payload.learnerSkill as string
                }
            },
            learner: {
                connect: {
                    id: userid
                }
            }
        },
        include: {
            learnerSkill: true,
        }
    });
    return result;
};

//add teacher to session service
const addTeacherToSession = async (sessionId: string, payload: { teacherId: string; teacherSkillId: string }) => {
    //check if session exists
    const session = await prisma.barterSession.findUnique({
        where: {
            id: sessionId
        }
    });
    if (!session) {
        throw new ApiError(httpStatus.NOT_FOUND, "Session not found");
    }

    const teacherSkill = await prisma.skill.findUnique({
        where: {
            id: payload.teacherSkillId as string
        }
    });

    if (!teacherSkill) {
        throw new ApiError(httpStatus.NOT_FOUND, "Teacher skill not found");
    }
    if (teacherSkill.id === session.learnerSkillId) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Teacher skill cannot be the same as learner skill.");
    }
    //check if teacher skill is the same as learner skill
    if (session.learnerSkillId === payload.teacherSkillId) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Teacher skill cannot be the same as learner skill");
    }
    //add teacher to session logic here
    const result = await prisma.barterSession.update({
        where: {
            id: sessionId
        },
        data: {
            teacher: {
                connect: {
                    id: payload.teacherId
                },
            },
            teacherSkill: {
                connect: {
                    id: payload.teacherSkillId
                }
            }
        },
        include: {
            learnerSkill: true,
            teacher: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    profileImg: true
                }
            },
            teacherSkill: {
                select: {
                    id: true,
                    name: true,
                }
            }
        }
    });
    return result;
};

//get all sessions service
const getAllSessions = async () => {
    const sessions = await prisma.barterSession.findMany({
        include: {
            learnerSkill: {
                select: {
                    id: true,
                    name: true,
                }
            },
            learner: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    profileImg: true
                }
            }
        }
    });
    return sessions;
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

//get a session by id service
const getASessionById = async (sessionId: string) => {

    const session = await prisma.barterSession.findUnique({
        where: {
            id: sessionId
        },
        include: {
            learnerSkill: {
                select: {
                    id: true,
                    name: true,
                }
            },
            learner: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    profileImg: true
                }
            },
            teacher: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    profileImg: true
                }
            },
            teacherSkill: {
                select: {
                    id: true,
                    name: true,
                }
            }
        }
    });
    if (!session) {
        throw new ApiError(httpStatus.NOT_FOUND, "Session not found");
    }
    return session;
};

export const SessionService = {
    createASession,
    deleteASession,
    getAllSessions,
    addTeacherToSession,
    getASessionById
};