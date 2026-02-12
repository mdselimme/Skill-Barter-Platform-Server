import { Request, Response } from "express";


const notFoundRoute = (req:Request, res:Response) => {
    res.status(404).json(
        {
            message: "Route not found",
            status: 404,
            timestamp: new Date().toISOString(),
            url: req.originalUrl,
            method: req.method
        }
    );
};

export default notFoundRoute;