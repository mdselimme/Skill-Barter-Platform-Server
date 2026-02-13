import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "../../../generated/prisma";
import { envVariables } from '../config/env.config';

const connectionString = envVariables.DATABASE_URL;

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }