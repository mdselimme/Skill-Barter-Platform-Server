import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";


//generate token
const generateToken = (payload:JwtPayload,secret:Secret, expires:string) => {
    const token = jwt.sign(payload, secret as Secret, { expiresIn: expires } as SignOptions);
    return token;
};

//verify token
const verifyToken = (token:string, secret:Secret) => {
    const decoded = jwt.verify(token, secret as Secret) as JwtPayload;
    return decoded;
};


export const JwtToken = {
    generateToken,
    verifyToken
}