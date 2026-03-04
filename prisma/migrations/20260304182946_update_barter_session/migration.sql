/*
  Warnings:

  - You are about to drop the column `skillId` on the `BarterSession` table. All the data in the column will be lost.
  - Added the required column `learnerSkillId` to the `BarterSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherSkillId` to the `BarterSession` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BarterSession" DROP CONSTRAINT "BarterSession_skillId_fkey";

-- AlterTable
ALTER TABLE "BarterSession" DROP COLUMN "skillId",
ADD COLUMN     "learnerSkillId" TEXT NOT NULL,
ADD COLUMN     "teacherSkillId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "BarterSession" ADD CONSTRAINT "BarterSession_learnerSkillId_fkey" FOREIGN KEY ("learnerSkillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarterSession" ADD CONSTRAINT "BarterSession_teacherSkillId_fkey" FOREIGN KEY ("teacherSkillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
