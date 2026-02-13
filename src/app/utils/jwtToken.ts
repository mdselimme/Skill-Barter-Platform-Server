import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";


//generate token
export const generateToken = (payload:JwtPayload,secret:Secret, expires:string) => {
    const token = jwt.sign(payload, secret as Secret, { expiresIn: expires } as SignOptions);
    return token;
};

//verify token
export const verifyToken = (token:string, secret:Secret) => {
    const decoded = jwt.verify(token, secret as Secret) as JwtPayload;
    return decoded;
};

