/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import nodemailer from "nodemailer";
import { sendEmailProps } from "../types/send-email.types";
import { envVariables } from "../config/env.config";
import path from "node:path";
import ejs from "ejs";
import ApiError from "./ApiError";

//SMTP Transporter
const transporter = nodemailer.createTransport({
    host: envVariables.SMTP.SMTP_HOST,
    port: Number(envVariables.SMTP.SMTP_PORT),
    secure: true,
    auth: {
        user: envVariables.SMTP.SMTP_USER,
        pass: envVariables.SMTP.SMTP_PASS
    }
});

//Send Email
const sendEmail = async (props:sendEmailProps) => {
    try {
        const templatePath = path.join(__dirname, `./templates/${props.templateName}.ejs`);
        const html = await ejs.renderFile(templatePath, props.templateData);
        const info = await transporter.sendMail({
            from: envVariables.SMTP.SMTP_FROM,
            to: props.to,
            subject: props.subject,
            html: html,
            attachments: props.attachments?.map((attachment) => {
                return {
                    filename: attachment.filename,
                    content: attachment.content,
                    contentType: attachment.contentType
                }
            })
        });
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error:any) {
        console.log(error);
        throw new ApiError(401, "Email Sending Failed.")
    }
};

export default sendEmail;