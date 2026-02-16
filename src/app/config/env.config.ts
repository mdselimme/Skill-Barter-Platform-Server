import dotenv from "dotenv";
dotenv.config();

interface IEnv {
    PORT: number;
    NODE_ENV: "development"|"production";
    DATABASE_URL: string;
    PASSWORD_HASH_SALT: number;
    JWT_ACCESS_SECRET: string;
    JWT_ACCESS_EXPIRES: string;
    JWT_REFRESH_SECRET: string;
    JWT_REFRESH_EXPIRES: string;
    SMTP:{
        SMTP_USER:string;
SMTP_PASS:string;
SMTP_PORT:string;
SMTP_HOST:string;
SMTP_FROM:string;
    }
};

const envVariable = ():IEnv => {

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
        "SMTP_FROM"
    ];

    for (const env of requiredEnv) {
        if (!process.env[env]) {
            throw new Error(`Missing required environment variable: ${env}`);
        }
    };

    return {
        PORT: Number(process.env.PORT),
        NODE_ENV: process.env.NODE_ENV as "development"|"production",
        DATABASE_URL: process.env.DATABASE_URL as string,
        PASSWORD_HASH_SALT: Number(process.env.PASSWORD_HASH_SALT),
        JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
        JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES as string,
        JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
        JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES as string,
        SMTP:{
            SMTP_USER:process.env.SMTP_USER as string,
            SMTP_PASS:process.env.SMTP_PASS as string,
            SMTP_PORT:process.env.SMTP_PORT as string,
            SMTP_HOST:process.env.SMTP_HOST as string,
            SMTP_FROM:process.env.SMTP_FROM as string,
        }
    }
};

export const envVariables = envVariable();