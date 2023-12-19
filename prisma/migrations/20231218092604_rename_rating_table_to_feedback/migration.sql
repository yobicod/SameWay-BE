/*
  Warnings:

  - You are about to drop the `rating_score` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "rating_score";

-- CreateTable
CREATE TABLE "feedback" (
    "id" SERIAL NOT NULL,
    "driverId" TEXT,
    "userId" TEXT,
    "ratingScore" INTEGER,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id")
);
