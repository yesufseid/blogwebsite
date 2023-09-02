/*
  Warnings:

  - You are about to drop the `lottery` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `img` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `lottery`;
