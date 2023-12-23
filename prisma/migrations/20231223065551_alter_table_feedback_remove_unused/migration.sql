/*
  Warnings:

  - You are about to drop the `feedback_file` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "feedback_file" DROP CONSTRAINT "feedback_file_feedbackId_fkey";

-- DropTable
DROP TABLE "feedback_file";
