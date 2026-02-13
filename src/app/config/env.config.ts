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
        "JWT_REFRESH_EXPIRES"
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
    }
};

export const envVariables = envVariable();