/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Server } from "node:http";
import app from "./app";
import { envVariables } from "./app/config/env.config";
import { prisma } from "./app/utils/prisma";

let server: Server;

//function to start the server
const bootstrap = async () => {
    try {
        server = app.listen(envVariables.PORT, () => {
            console.log(`Server is running on port ${envVariables.PORT}`);
        }).on("error", (err) => {
            serverShutdown("Error starting server", err);
        });
    } catch (error) {
        serverShutdown("Failed to start server:", error);
    }
};

bootstrap()
  .then(async () => {
    console.log("database connected");
      await prisma.$connect()
    }).then(async () => {
      await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });


//function to handle server shutdown
const serverShutdown = async (message:string, err?:any) => {
    console.log(`Message : ${message}. Server is closing.`, err || "");
    if(server){
        server.close(()=>{
            process.exit(1);
        })
    }
    process.exit(1);
};

//when server is manually stopped
process.on("SIGINT", () => serverShutdown("SIGINT signal received"));
//when server is stopped by the system
process.on("SIGTERM", () => serverShutdown("SIGTERM signal received"));
//when server is stopped for uncaught exceptions
process.on("uncaughtException", (err) => serverShutdown("Uncaught exception", err));
//when server is stopped for unhandled rejections
process.on("unhandledRejection", (reason) => serverShutdown("Unhandled rejection", reason));
