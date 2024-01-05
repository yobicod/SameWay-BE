-- CreateTable
CREATE TABLE "enum_car_types" (
    "value" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "enum_car_types_pkey" PRIMARY KEY ("value")
);

-- CreateIndex
CREATE UNIQUE INDEX "enum_car_types_value_key" ON "enum_car_types"("value");
