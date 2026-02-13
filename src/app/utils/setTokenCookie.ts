import { Response } from "express";

interface IToken {
    accessToken?: string;
    refreshToken?: string;
};

// set token cookie
export const setTokenCookie = (res: Response, token: IToken) => {
    if (token.accessToken) {
        res.cookie("accessToken", token.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 60 * 60 * 1000 * 24,
        });
    }
    if (token.refreshToken) {
        res.cookie("refreshToken", token.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 60 * 60 * 1000 * 24 * 30,
        });
    }
};
