import { Server } from "node:http";
import app from "./app";
import { envVariables } from "./app/config/env.config";




let server: Server;


const bootstrap = () => {
    try {
        server = app.listen(envVariables.PORT, () => {
            console.log(`Server is running on port ${envVariables.PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

bootstrap();


