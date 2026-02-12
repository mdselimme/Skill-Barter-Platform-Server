import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import { AppRoutes } from "./app/routes";
import notFoundRoute from "./app/middleware/notFoundRoute";

const app :Application= express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Skill Barter Platform Server is running",
        version: "1.0.0",
        uptime: process.uptime().toFixed(2) + ' seconds',
        timestamp: new Date().toISOString(),
    })
});

app.use(
    "/api/v1",
    AppRoutes
)

app.use(notFoundRoute);

//global error handler
app.use(globalErrorHandler);

export default app;