/*
  Warnings:

  - Added the required column `price` to the `booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "booking" ADD COLUMN     "price" INTEGER NOT NULL;
