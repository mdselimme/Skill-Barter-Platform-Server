import crypto from "crypto";

export const OTP_EXPIRATION = 5 * 60 * 1000;

export const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString();
}
