/*
  Warnings:

  - You are about to drop the column `driverId` on the `feedback` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `feedback` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "feedback" DROP COLUMN "driverId",
DROP COLUMN "userId",
ADD COLUMN     "driverEmail" TEXT,
ADD COLUMN     "userEmail" TEXT;
