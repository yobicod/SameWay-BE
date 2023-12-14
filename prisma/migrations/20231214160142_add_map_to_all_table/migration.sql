/*
  Warnings:

  - You are about to drop the `Driver` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Emergency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RatingScore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Driver";

-- DropTable
DROP TABLE "Emergency";

-- DropTable
DROP TABLE "RatingScore";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "driver" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "driverFirstName" TEXT,
    "driverLastName" TEXT,
    "plate" TEXT,
    "carType" TEXT,
    "sex" TEXT,
    "phoneNumber" TEXT,

    CONSTRAINT "driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emergency" (
    "id" SERIAL NOT NULL,
    "passengerName" TEXT NOT NULL,
    "driverName" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "emergency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating_score" (
    "id" SERIAL NOT NULL,
    "driverId" TEXT NOT NULL,
    "ratingScore" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rating_score_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "driver_plate_key" ON "driver"("plate");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
