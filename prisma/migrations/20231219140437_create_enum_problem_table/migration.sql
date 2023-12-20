-- CreateTable
CREATE TABLE "enum_problems" (
    "value" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "enum_problems_pkey" PRIMARY KEY ("value")
);

-- CreateIndex
CREATE UNIQUE INDEX "enum_problems_value_key" ON "enum_problems"("value");
