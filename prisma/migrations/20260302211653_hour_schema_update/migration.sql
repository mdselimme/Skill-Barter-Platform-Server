/*
  Warnings:

  - Changed the type of `hours` on the `BarterSession` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "BarterSession" DROP COLUMN "hours",
ADD COLUMN     "hours" TIMESTAMP(3) NOT NULL;
