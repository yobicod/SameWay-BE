/*
  Warnings:

  - You are about to drop the column `sex` on the `driver` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "driver" DROP COLUMN "sex",
ADD COLUMN     "gender" TEXT;

-- CreateTable
CREATE TABLE "booking" (
    "id" SERIAL NOT NULL,
    "userFullName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userStart" TEXT NOT NULL,
    "userDestination" TEXT NOT NULL,
    "userLat" INTEGER NOT NULL,
    "userLong" DOUBLE PRECISION NOT NULL,
    "userCreateAt" TIMESTAMP(3) NOT NULL,
    "driverFullName" TEXT NOT NULL,
    "driverEmail" TEXT NOT NULL,
    "driverStart" TEXT NOT NULL,
    "driverDestination" TEXT NOT NULL,
    "driverLat" INTEGER NOT NULL,
    "driverLong" DOUBLE PRECISION NOT NULL,
    "driverCreateAt" TIMESTAMP(3) NOT NULL,
    "driverGender" TEXT NOT NULL,
    "deliverType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "carType" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "plate" TEXT NOT NULL,

    CONSTRAINT "booking_pkey" PRIMARY KEY ("id")
);
