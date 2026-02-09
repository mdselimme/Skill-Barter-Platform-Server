import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Skill Barter Platform Server is running",
        version: "1.0.0",
        uptime: process.uptime().toFixed(2) + ' seconds',
        timestamp: new Date().toISOString(),
    })
});

export default app;