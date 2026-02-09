import dotenv from "dotenv";
dotenv.config();

interface IEnv {
    PORT: number;
    NODE_ENV: "development"|"production";
    DATABASE_URL: string;
};

const envVariable = ():IEnv => {

    const requiredEnv = [
        "PORT",
        "NODE_ENV",
        "DATABASE_URL"
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
    }
};

export const envVariables = envVariable();