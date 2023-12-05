-- CreateTable
CREATE TABLE "driver" (
    "id" SERIAL NOT NULL,
    "driverFirstName" TEXT NOT NULL,
    "driverLastName" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "carType" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "driver_pkey" PRIMARY KEY ("id")
);
