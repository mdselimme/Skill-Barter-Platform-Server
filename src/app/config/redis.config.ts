/* eslint-disable no-console */

import { createClient } from 'redis';
import { envVariables } from './env.config';


//redis client
export const redisClient = createClient({
    username: envVariables.REDIS.REDIS_USERNAME,
    password: envVariables.REDIS.REDIS_PASSWORD,
    socket: {
        host: envVariables.REDIS.REDIS_HOST,
        port: Number(envVariables.REDIS.REDIS_PORT)
    }
});

redisClient.on('error', err => console.log('Redis Client Error', err));

//connect redis client
export const connectRedisClient = async () => {
    if(!redisClient.isOpen){
        await redisClient.connect();
        console.log("Redis is connected.");
    }
};
