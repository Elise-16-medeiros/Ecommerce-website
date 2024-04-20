/*
  Warnings:

  - You are about to drop the column `media` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "media",
DROP COLUMN "title",
ADD COLUMN     "imagePath" TEXT[],
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "price" SET DATA TYPE INTEGER;
