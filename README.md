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

```

**Set up .env file with requirement variables**

```env

# initialize server environment variables
NODE_ENV=development
PORT=5000
DATABASE_URL=

PASSWORD_HASH_SALT=

# JSON WEB TOKEN
JWT_ACCESS_SECRET=
JWT_ACCESS_EXPIRES=
JWT_REFRESH_SECRET=
JWT_REFRESH_EXPIRES=

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

**1. Register**

- POST http://localhost:5000/api/v1/user/register

#### Register Request Body

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Auth Api Endpoints

**1. Login**

- POST http://localhost:5000/api/v1/auth/login

- credentials: true

#### Login Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**2. Change Password**

- PATCH http://localhost:5000/api/v1/auth/change-password

- credentials: true

#### Change Password Request Body

```json
{
  "oldPassword": "password123",
  "newPassword": "newPassword123"
}
```

**3. Refresh Token**

- POST http://localhost:5000/api/v1/auth/refresh-token

- credentials: true

#### Refresh Token Response Body

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

**4. Logout**

- POST http://localhost:5000/api/v1/auth/logout

- credentials: true

#### Logout Response Body

```json
{
  "statusCode": 200,
  "data": null,
  "message": "User logged out successfully.",
  "success": true
}
```
