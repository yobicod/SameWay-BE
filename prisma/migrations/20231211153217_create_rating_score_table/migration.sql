-- CreateTable
CREATE TABLE "ratingScore" (
    "id" SERIAL NOT NULL,
    "driverId" TEXT NOT NULL,
    "ratingScore" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ratingScore_pkey" PRIMARY KEY ("id")
);
