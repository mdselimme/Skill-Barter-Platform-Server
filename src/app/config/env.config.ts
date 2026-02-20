import dotenv from "dotenv";
dotenv.config();

interface IEnv {
    PORT: number;
    NODE_ENV: "development" | "production";
    DATABASE_URL: string;
    PASSWORD_HASH_SALT: number;
    JWT_ACCESS_SECRET: string;
    JWT_ACCESS_EXPIRES: string;
    JWT_REFRESH_SECRET: string;
    JWT_REFRESH_EXPIRES: string;
    SMTP: {
        SMTP_USER: string;
        SMTP_PASS: string;
        SMTP_PORT: string;
        SMTP_HOST: string;
        SMTP_FROM: string;
    },
    REDIS: {
        REDIS_HOST: string;
        REDIS_PORT: string;
        REDIS_USERNAME: string;
        REDIS_PASSWORD: string;
    },
    SUPER_ADMIN: {
        SUPER_ADMIN_NAME: string;
        SUPER_ADMIN_EMAIL: string;
        SUPER_ADMIN_PASS: string;
    }
};

const envVariable = (): IEnv => {

    const requiredEnv = [
        "PORT",
        "NODE_ENV",
        "DATABASE_URL",
        "PASSWORD_HASH_SALT",
        "JWT_ACCESS_SECRET",
        "JWT_ACCESS_EXPIRES",
        "JWT_REFRESH_SECRET",
        "JWT_REFRESH_EXPIRES",
        "SMTP_USER",
        "SMTP_PASS",
        "SMTP_PORT",
        "SMTP_HOST",
        "SMTP_FROM",
        "REDIS_HOST",
        "REDIS_PORT",
        "REDIS_USERNAME",
        "REDIS_PASSWORD",
        "SUPER_ADMIN_NAME",
        "SUPER_ADMIN_EMAIL",
        "SUPER_ADMIN_PASS",
    ];

    for (const env of requiredEnv) {
        if (!process.env[env]) {
            throw new Error(`Missing required environment variable: ${env}`);
        }
    };

    return {
        PORT: Number(process.env.PORT),
        NODE_ENV: process.env.NODE_ENV as "development" | "production",
        DATABASE_URL: process.env.DATABASE_URL as string,
        PASSWORD_HASH_SALT: Number(process.env.PASSWORD_HASH_SALT),
        JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
        JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES as string,
        JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
        JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES as string,
        SMTP: {
            SMTP_USER: process.env.SMTP_USER as string,
            SMTP_PASS: process.env.SMTP_PASS as string,
            SMTP_PORT: process.env.SMTP_PORT as string,
            SMTP_HOST: process.env.SMTP_HOST as string,
            SMTP_FROM: process.env.SMTP_FROM as string,
        },
        REDIS: {
            REDIS_HOST: process.env.REDIS_HOST as string,
            REDIS_PORT: process.env.REDIS_PORT as string,
            REDIS_USERNAME: process.env.REDIS_USERNAME as string,
            REDIS_PASSWORD: process.env.REDIS_PASSWORD as string,
        },
        SUPER_ADMIN: {
            SUPER_ADMIN_NAME: process.env.SUPER_ADMIN_NAME as string,
            SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL as string,
            SUPER_ADMIN_PASS: process.env.SUPER_ADMIN_PASS as string,
        }
    }
};

export const envVariables = envVariable();