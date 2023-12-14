/*
  Warnings:

  - You are about to drop the `driver` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `emergency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ratingScore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "driver";

-- DropTable
DROP TABLE "emergency";

-- DropTable
DROP TABLE "ratingScore";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "Driver" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "driverFirstName" TEXT,
    "driverLastName" TEXT,
    "plate" TEXT,
    "carType" TEXT,
    "sex" TEXT,
    "phoneNumber" TEXT,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emergency" (
    "id" SERIAL NOT NULL,
    "passengerName" TEXT NOT NULL,
    "driverName" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Emergency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RatingScore" (
    "id" SERIAL NOT NULL,
    "driverId" TEXT NOT NULL,
    "ratingScore" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RatingScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnumGender" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "EnumGender_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Driver_plate_key" ON "Driver"("plate");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EnumGender_value_key" ON "EnumGender"("value");
