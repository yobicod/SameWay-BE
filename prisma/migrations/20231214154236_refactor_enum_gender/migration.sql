/*
  Warnings:

  - The primary key for the `EnumGender` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `EnumGender` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EnumGender" DROP CONSTRAINT "EnumGender_pkey",
DROP COLUMN "id",
ADD COLUMN     "description" TEXT,
ADD CONSTRAINT "EnumGender_pkey" PRIMARY KEY ("value");
