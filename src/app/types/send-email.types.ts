/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";

export interface sendEmailProps {
    to:string;
    subject:string;
    templateName:string;
    templateData?:Record<string,any>;
    attachments?: {
        filename:string;
        content:Buffer|string;
        contentType:string;
    }[];
};

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});