/* eslint-disable @typescript-eslint/no-explicit-any */
import { v2 as cloudinary } from "cloudinary";
import httpStatus from "http-status";
import stream from "stream";
import { envVariables } from "./env.config";
import ApiError from "../utils/ApiError";

cloudinary.config({
    cloud_name: envVariables.CLOUDINARY.CLOUDINARY_CLOUD_NAME,
    api_key: envVariables.CLOUDINARY.CLOUDINARY_API_KEY,
    api_secret: envVariables.CLOUDINARY.CLOUDINARY_API_SECRET
});

export const uploadToCloudinary = async (buffer: Buffer, fileName: string) => {
    try {
        return new Promise((resolve, reject) => {
            const public_id = `skill-barter/${fileName}-${Date.now()}`;
            const bufferStream = new stream.PassThrough();
            bufferStream.end(buffer);
            cloudinary.uploader.upload_stream(
                {
                    folder: "skill-barter",
                    public_id: public_id,
                    resource_type: "auto",
                    use_filename: true,
                },
                (error, result) => {
                    if (error) {
                        return reject(error);
                    } else {
                        resolve(result);
                    }
                }
            ).end(bufferStream);
        });
    } catch (error: any) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to upload image to Cloudinary", error);
    }
};

export const cloudinaryFileUpload = cloudinary;