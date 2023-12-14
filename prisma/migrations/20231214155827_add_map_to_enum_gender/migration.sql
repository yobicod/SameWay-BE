/*
  Warnings:

  - You are about to drop the `EnumGender` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "EnumGender";

-- CreateTable
CREATE TABLE "enum_genders" (
    "value" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "enum_genders_pkey" PRIMARY KEY ("value")
);

-- CreateIndex
CREATE UNIQUE INDEX "enum_genders_value_key" ON "enum_genders"("value");
