import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import { cloudinaryFileUpload } from "./cloudinary.config";



//cloudinary storage configuration for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinaryFileUpload,
    params: {
        public_id: (req, file) => {
            const fileName = file.originalname
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/\./g, "-")
                .replace(/[^a-z0-9\-.]/g, "-")
            const extension = file.originalname.split(".").pop();

            const uniqueFileName = Math.random().toString(36).substring(2) + "_" + Date.now() + "_" + fileName + "." + extension;
            return uniqueFileName;
        }
    }
});


export const multerUpload = multer({ storage: storage });