/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { envVariables } from "../config/env.config";
import { ZodError } from "zod";
import { handleZodError } from "../errorHelpers/zodErrorHelpers";
import { IErrorSource } from "../types/error.types";



const globalErrorHandler = async (err:any, req:Request, res:Response, next:NextFunction) => {

    if(envVariables.NODE_ENV === "development"){
        console.log("Error:", err);
    }

    let statusCode = 500;
    let message = "Something went wrong";
    let errorSources: IErrorSource[] = [];

    //handle zod validation error
    if(err instanceof ZodError){
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSources = simplifiedError.errorSources;
    }
    else if(err instanceof Error){
        statusCode = 500
        message = err.message
    }
    

    res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        error: envVariables.NODE_ENV === "development" ? err : {},
        stack: envVariables.NODE_ENV === "development" ? err.stack : null
    });

};

export default globalErrorHandler;