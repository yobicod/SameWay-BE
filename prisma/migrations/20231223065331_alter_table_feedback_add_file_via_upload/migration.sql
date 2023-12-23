-- CreateTable
CREATE TABLE "feedback_file" (
    "id" SERIAL NOT NULL,
    "feedbackId" INTEGER NOT NULL,
    "fileUrl" TEXT NOT NULL,

    CONSTRAINT "feedback_file_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "feedback_file_feedbackId_key" ON "feedback_file"("feedbackId");

-- AddForeignKey
ALTER TABLE "feedback_file" ADD CONSTRAINT "feedback_file_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
