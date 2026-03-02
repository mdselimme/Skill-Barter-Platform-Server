-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('EARN', 'SPEND', 'BONUS', 'PENALTY');

-- DropForeignKey
ALTER TABLE "BarterSession" DROP CONSTRAINT "BarterSession_teacherId_fkey";

-- AlterTable
ALTER TABLE "BarterSession" ALTER COLUMN "teacherId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "CreditTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "type" "TransactionType" NOT NULL,
    "sessionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreditTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BarterSession_teacherId_idx" ON "BarterSession"("teacherId");

-- CreateIndex
CREATE INDEX "BarterSession_learnerId_idx" ON "BarterSession"("learnerId");

-- CreateIndex
CREATE INDEX "BarterSession_status_idx" ON "BarterSession"("status");

-- AddForeignKey
ALTER TABLE "BarterSession" ADD CONSTRAINT "BarterSession_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditTransaction" ADD CONSTRAINT "CreditTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
