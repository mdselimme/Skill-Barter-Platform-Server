/*
  Warnings:

  - You are about to drop the column `isDeleted` on the `User` table. All the data in the column will be lost.
  - The `isActive` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE', 'DELETED', 'BLOCKED');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isDeleted",
DROP COLUMN "isActive",
ADD COLUMN     "isActive" "Status" NOT NULL DEFAULT 'ACTIVE';
