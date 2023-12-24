/*
  Warnings:

  - You are about to drop the column `driverFirstName` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `driverLastName` on the `driver` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "driver" DROP COLUMN "driverFirstName",
DROP COLUMN "driverLastName",
ADD COLUMN     "fullName" TEXT;
