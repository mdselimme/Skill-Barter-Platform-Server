-- DropForeignKey
ALTER TABLE "BarterSession" DROP CONSTRAINT "BarterSession_teacherSkillId_fkey";

-- AlterTable
ALTER TABLE "BarterSession" ALTER COLUMN "teacherSkillId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "BarterSession" ADD CONSTRAINT "BarterSession_teacherSkillId_fkey" FOREIGN KEY ("teacherSkillId") REFERENCES "Skill"("id") ON DELETE SET NULL ON UPDATE CASCADE;
