-- CreateTable
CREATE TABLE "emergency" (
    "id" SERIAL NOT NULL,
    "passengerName" TEXT NOT NULL,
    "driverName" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "emergency_pkey" PRIMARY KEY ("id")
);
