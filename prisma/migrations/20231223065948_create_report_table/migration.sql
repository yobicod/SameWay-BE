-- CreateTable
CREATE TABLE "report" (
    "id" SERIAL NOT NULL,
    "driverEmail" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "problemType" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report_file" (
    "id" SERIAL NOT NULL,
    "reportId" INTEGER NOT NULL,
    "fileUrl" TEXT NOT NULL,

    CONSTRAINT "report_file_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "report_file_reportId_key" ON "report_file"("reportId");

-- AddForeignKey
ALTER TABLE "report_file" ADD CONSTRAINT "report_file_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
