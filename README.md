# Skill Barter Platform - Server

**Description:**

Skill Barter is a platform where users exchange their skill instead of money. Such as, I don't know React and also you don't know JavaScript. On the other side you know C Programming language but I don't know it. So, I will teach you one hour JavaScript Programming language and for this you will teach me C programming language. When you create and account here you will find 2 credit for free. After two credit you have by credit.

### Features:

- User Registration and Credit bonus.
- Skill Management Session.
- Credit System.
- Barter Request System.
- Session Management System.
- Reporting System
- Review System
- Role Based Access Control
- Notification System
- Otp System

### Technology Description:

- Node.js (Runtime).
- Express.js – RESTful API development.
- TypeScript – Strongly typed backend architecture.
- Postgres & Prisma – Schema-based SQL database design.
- Redis – OTP storage and verification.
- JWT Authentication – Secure user authorization.
- Bcrypt – Password hashing and encryption.
- Zod – Data validation and schema enforcement.
- Rate Limiter – API abuse prevention.
- Cloudinary - Upload File and Image.
- Nodemailer – Email notification system.
- SSLCommerz Payment Gateway – Secure subscription payments.
- Node Cron - Deleting data by date wise and activity.

# Set Up and Installation

**Clone the repository**

```bash

git clone https://github.com/mdselimme/Skill-Barter-Platform-Server.git

cd Skill-Barter-Platform-Server

```

**Set up .env file with requirement variables**

```env

# initialize server environment variables
NODE_ENV=development
PORT=5000
DATABASE_URL=

PASSWORD_HASH_SALT=

FRONTEND_URL=

# GOOGLE lOGIN 
CLIENT_SECRET=
CLIENT_ID=
CALLBACK_URL=

#SUPER ADMIN CREDENTIALS
SUPER_ADMIN_NAME=
SUPER_ADMIN_EMAIL=
SUPER_ADMIN_PASS=

# JSON WEB TOKEN
JWT_ACCESS_SECRET=
JWT_ACCESS_EXPIRES=
JWT_REFRESH_SECRET=
JWT_REFRESH_EXPIRES=

# SMTP EMAIL TRANSPORTER
SMTP_USER=
SMTP_PASS=
SMTP_PORT=
SMTP_HOST=

# REDIS CONFIG
REDIS_HOST=
REDIS_PORT=
REDIS_USERNAME=
REDIS_PASSWORD=

# CLOUDINARY CONFIG
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_SECRET=

```

## Getting Started

First, run the development server:

```bash

npm install

npm run dev
```

--

# API Documentation

### User Api Endpoints

**1. User Register**

- POST http://localhost:5000/api/v1/user/register

Register Request Body:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**2. User Update**

- PATCH http://localhost:5000/api/v1/user/me

Update Request Body:

```json
{
    "name": "Abdul",
    "phone": "01737210235",
    "address": "Dhaka"
}
```

**3. Current User Get**

- GET http://localhost:5000/api/v1/user/me

- credentials: true

Api Response Body:

```json
{
    "statusCode": 200,
    "data": {
        "id": "2fa56f87-3caf-4e1a-8295-b1d40dc5cf17",
        "name": "Selim",
        "email": "mdselimdev@gmail.com",
        "role": "USER",
        "phone": null,
        "address": null,
        "profileImg": null,
        "credits": 10,
        "isVerified": true,
        "isActive": "ACTIVE"
    },
    "message": "Current User Retrieved Successfully",
    "success": true
}
```

**4. User Get By Id**

- GET http://localhost:5000/api/v1/user/:id

Api Response Body:

```json
{
    "statusCode": 200,
    "data": {
        "id": "2fa56f87-3caf-4e1a-8295-b1d40dc5cf17",
        "name": "Selim",
        "email": "mdselimdev@gmail.com",
        "role": "USER",
        "phone": null,
        "address": null,
        "profileImg": null,
        "credits": 10,
        "isVerified": true,
        "isActive": "ACTIVE"
    },
    "message": "Current User Retrieved Successfully",
    "success": true
}
```

**5. Get All Users**

- GET http://localhost:5000/api/v1/user

Api Response Body:

```json
{
    "statusCode": 200,
    "data": [
        {
            "id": "e39b314e-2996-4d6b-9a03-421c04417b80",
            "name": "Selim",
            "email": "mdselimdevone@gmail.com",
            "role": "USER",
            "phone": null,
            "address": null,
            "profileImg": null,
            "credits": 10,
            "isVerified": true,
            "isActive": "ACTIVE"
        },
        ....
    ],
    "message": "All users retrieved successfully.",
    "success": true
}
```

**6. Update User role**

- PATCH http://localhost:5000/api/v1/user/update-role

- credentials: true

- role: ADMIN, SUPER_ADMIN

Api Request Body:

```json
{
    "email":"mdselimdevone@gmail.com",
    "role": "ADMIN"
}
```

**7. Update User Status**

- PATCH http://localhost:5000/api/v1/user/update-status

- credentials: true

- role: ADMIN, SUPER_ADMIN

Api Request Body:

```json
{
    "email":"mdselimdevone@gmail.com",
    "status": "INACTIVE"
}
```

**8. Update User Profile Photo**

- PATCH http://localhost:5000/api/v1/user/me/profile-photo

- credentials: true

- role: ADMIN, SUPER_ADMIN, USER

Form Data with file field: 

- Key: file

- support file type: png, jpg, jpeg, webp


Api Response Body:

```json
{
    "statusCode": 200,
    "data": {
        "profileImg": "https://res.cloudinary.com/dsla2viks/image/upload/v1771875254/2e8vasw9pa6_1771875251002_black-sweter-png.png.png"
    },
    "message": "User profile photo updated Successfully.",
    "success": true
}
```

#### Auth Api Endpoints

**1. Login**

- POST http://localhost:5000/api/v1/auth/login

- credentials: true

Login Request Body:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**2. Google Authentication**

- GET http://localhost:5000/api/v1/auth/google

- credentials: true


**3. Email Verify Email Send**

- POST http://localhost:5000/api/v1/auth/verify-email

Email Verify Email Send Request Body:

```json
{
  "email": "john.doe@example.com"
}
```

**4. Verify Email By OTP**

- POST http://localhost:5000/api/v1/auth/verify-email-code

- credentials: true

Verify Email By OTP Request Body:

```json
{
  "email": "john.doe@example.com",
  "otp": "123456"
}
```

**5. Change Password**

- PATCH http://localhost:5000/api/v1/auth/change-password

- credentials: true

Change Password Request Body:

```json
{
  "oldPassword": "password123",
  "newPassword": "newPassword123"
}
```

**6. Refresh Token**

- POST http://localhost:5000/api/v1/auth/refresh-token

- credentials: true

Refresh Token Response Body:

```json
{
  "statusCode": 200,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5"
  },
  "message": "Access token refreshed successfully.",
  "success": true
}
```

**7. Logout**

- POST http://localhost:5000/api/v1/auth/logout

- credentials: true

Logout Response Body:

```json
{
  "statusCode": 200,
  "data": null,
  "message": "User logged out successfully.",
  "success": true
}
```

**8. Password Reset Email**

- POST http://localhost:5000/api/v1/auth/password-reset-email

- role: USER, ADMIN, SUPER_ADMIN

Password Reset Email Request Body:

```json
{
  "email": "example@gmail.com"
}
```

Password Reset Response Body:

```json
{
    "statusCode": 200,
    "data": null,
    "message": "Password reset email sent successfully.",
    "success": true
}
```

**9. Reset Password**

- POST http://localhost:5000/api/v1/auth/reset-password

- role: USER, ADMIN, SUPER_ADMIN

Password Reset Request Body:

```json
{
    "email":"mdselimdevone@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "newPassword": "Ss@12345"
}
```

Password Reset Response Body:

```json
{
    "statusCode": 200,
    "data": null,
    "message": "Password reset successfully.",
    "success": true
}
```

#### Skills Api Endpoints

**1. Create Skill**

- POST http://localhost:5000/api/v1/skills/create

- credentials: true

- role: USER, ADMIN, SUPER_ADMIN

Create Skill Request Body:

```json
{
  "name": "JavaScript Programming",
}
```

**2. Update Skill**

- PATCH http://localhost:5000/api/v1/skills/:id

- credentials: true

- role: ADMIN, SUPER_ADMIN

Update Skill Request Body:

```json
{
  "name": "JavaScript Programming",
}
```

**3. Delete Skill**

- DELETE http://localhost:5000/api/v1/skills/:id

- credentials: true

- role: ADMIN, SUPER_ADMIN

Delete Skill Response Body:

```json
{
  "statusCode": 200,
  "data": null,
  "message": "Skill deleted successfully.",
  "success": true
}
```

**4. Get All Skills**

- GET http://localhost:5000/api/v1/skills

- credentials: true

Get All Skills Response Body:

```json
{
    "statusCode": 200,
    "data": [
        {
            "id": "ba825f6b-de97-49cc-bc3f-010d8fa1eeeb",
            "name": "React Js",
            "createdAt": "2026-02-28T08:15:32.036Z",
            "updatedAt": "2026-02-28T08:15:32.036Z"
        },
        {
            "id": "f5827713-4ba1-4e5d-92d2-c54fb0e29f0c",
            "name": "React",
            "createdAt": "2026-02-28T08:16:17.517Z",
            "updatedAt": "2026-02-28T08:20:03.300Z"
        }
    ],
    "message": "Skills retrieved successfully",
    "success": true
}
```

#### Session Api Endpoints

**1. Create Session**

- POST http://localhost:5000/api/v1/session/add

- credentials: true

- role: USER

Create Session Request Body:

```json
{
    "skill": "ba825f6b-de97-49cc-bc3f-010d8fa1eeeb",
    "hours": "02:05",
    "scheduledAt": "2026-03-08"
}
```

Create Session Response Body:

```json
{
    "statusCode": 200,
    "data": {
        "id": "b4fcb3ad-a0cd-48c5-a694-cf2666ea4a9c",
        "teacherId": null,
        "learnerId": "e39b314e-2996-4d6b-9a03-421c04417b80",
        "skillId": "ba825f6b-de97-49cc-bc3f-010d8fa1eeeb",
        "hours": "02:05",
        "status": "PENDING",
        "scheduledAt": "2026-03-08T00:00:00.000Z",
        "createdAt": "2026-03-02T21:19:44.684Z",
        "updatedAt": "2026-03-02T21:19:44.684Z",
        "skill": {
            "id": "ba825f6b-de97-49cc-bc3f-010d8fa1eeeb",
            "name": "React Js",
            "createdAt": "2026-02-28T08:15:32.036Z",
            "updatedAt": "2026-02-28T08:15:32.036Z"
        }
    },
    "message": "Session created successfully",
    "success": true
}
```

**2. Get All Sessions**

- GET http://localhost:5000/api/v1/session

Get All Sessions Response Body:

```json
{
    "statusCode": 200,
    "data": [
        {
            "id": "00c51076-e101-4ab3-a0bb-d908e2a00692",
            "teacherId": null,
            "learnerId": "e39b314e-2996-4d6b-9a03-421c04417b80",
            "skillId": "ba825f6b-de97-49cc-bc3f-010d8fa1eeeb",
            "hours": "02:05",
            "status": "PENDING",
            "scheduledAt": "2026-03-08T00:00:00.000Z",
            "createdAt": "2026-03-04T17:35:41.018Z",
            "updatedAt": "2026-03-04T17:35:41.018Z",
            "skill": {
                "id": "ba825f6b-de97-49cc-bc3f-010d8fa1eeeb",
                "name": "React Js",
            },
            "learner": {
                "id": "e39b314e-2996-4d6b-9a03-421c04417b80",
                "name": "Abdul",
                "email": "mdselimdevone@gmail.com",
                "profileImg": "https://res.cloudinary.com/dsla2viks/image/upload/v1771875254/2e8vasw9pa6_1771875251002_black-sweter-png.png.png"
            }
        }
    ],
    "message": "Sessions retrieved successfully",
    "success": true
}
```

**3. Add Teacher In Barter Session**

- PATCH http://localhost:5000/api/v1/session/teacher/add/:id

- credentials: true

- role: USER

Add Teacher In Barter Session Request Body:

```json
{
    "teacherId": "a504ba00-0cb4-4464-9595-347af7c5ed4c",
    "teacherSkillId": "8548e6ff-47c6-4a40-b79e-aa36d1a5da97"
}
```

Add Teacher In Barter Session Response Body:

```json
{
    "statusCode": 200,
    "data": {
        "id": "0f1eed7b-a475-44a5-b358-3fdfb5d015a7",
        "teacherId": "a504ba00-0cb4-4464-9595-347af7c5ed4c",
        "learnerId": "b9a33c34-ac8a-422f-9cb0-eac78ad5cf67",
        "learnerSkillId": "caad3f59-5428-4b1a-9a36-01e23fc3d355",
        "teacherSkillId": "8548e6ff-47c6-4a40-b79e-aa36d1a5da97",
        "hours": "02:05",
        "status": "PENDING",
        "scheduledAt": "2026-03-08T00:00:00.000Z",
        "createdAt": "2026-03-05T19:52:12.467Z",
        "updatedAt": "2026-03-05T19:59:50.770Z",
        "learnerSkill": {
            "id": "caad3f59-5428-4b1a-9a36-01e23fc3d355",
            "name": "React Js",
            "createdAt": "2026-03-05T19:48:51.127Z",
            "updatedAt": "2026-03-05T19:48:51.127Z"
        },
        "teacher": {
            "id": "a504ba00-0cb4-4464-9595-347af7c5ed4c",
            "name": "Selim",
            "email": "mdselimdev@gmail.com",
            "profileImg": null
        },
        "teacherSkill": {
            "id": "8548e6ff-47c6-4a40-b79e-aa36d1a5da97",
            "name": "TypeScript"
        }
    },
    "message": "Teacher added to session successfully",
    "success": true
}
```

**4. Get Session by ID**

- GET http://localhost:5000/api/v1/session/:id

- credentials: true

- role: USER

Get Session by ID Response Body:

```json
{
    "statusCode": 200,
    "data": {
        "id": "0f1eed7b-a475-44a5-b358-3fdfb5d015a7",
        "teacherId": "a504ba00-0cb4-4464-9595-347af7c5ed4c",
        "learnerId": "b9a33c34-ac8a-422f-9cb0-eac78ad5cf67",
        "learnerSkillId": "caad3f59-5428-4b1a-9a36-01e23fc3d355",
        "teacherSkillId": "8548e6ff-47c6-4a40-b79e-aa36d1a5da97",
        "hours": "02:05",
        "status": "PENDING",
        "scheduledAt": "2026-03-08T00:00:00.000Z",
        "createdAt": "2026-03-05T19:52:12.467Z",
        "updatedAt": "2026-03-05T19:59:50.770Z",
        "learnerSkill": {
            "id": "caad3f59-5428-4b1a-9a36-01e23fc3d355",
            "name": "React Js"
        },
        "learner": {
            "id": "b9a33c34-ac8a-422f-9cb0-eac78ad5cf67",
            "name": "Selim",
            "email": "mdselimdevone@gmail.com",
            "profileImg": null
        },
        "teacher": {
            "id": "a504ba00-0cb4-4464-9595-347af7c5ed4c",
            "name": "Selim",
            "email": "mdselimdev@gmail.com",
            "profileImg": null
        },
        "teacherSkill": {
            "id": "8548e6ff-47c6-4a40-b79e-aa36d1a5da97",
            "name": "TypeScript"
        }
    },
    "message": "Single Session retrieved successfully",
    "success": true
}
```

**5. Delete Sessions**

- DELETE http://localhost:5000/api/v1/session/:id

- credentials: true

- role: USER

Delete Sessions Response Body:

```json
{
    "statusCode": 200,
    "data": null,
    "message": "Session deleted successfully",
    "success": true
}
```