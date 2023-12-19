/*
  Warnings:

  - A unique constraint covering the columns `[userEmail]` on the table `driver` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "driver" ADD COLUMN     "userEmail" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "driver_userEmail_key" ON "driver"("userEmail");

-- AddForeignKey
ALTER TABLE "driver" ADD CONSTRAINT "driver_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "user"("email") ON DELETE SET NULL ON UPDATE CASCADE;
