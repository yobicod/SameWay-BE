/*
  Warnings:

  - A unique constraint covering the columns `[plate]` on the table `driver` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "Role" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "driver_plate_key" ON "driver"("plate");
