/*
  Warnings:

  - You are about to drop the column `image` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `description` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "image",
ADD COLUMN     "category" VARCHAR(255) NOT NULL,
ADD COLUMN     "photo" VARCHAR(255) NOT NULL DEFAULT 'image.png',
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "title" VARCHAR(255) NOT NULL,
ALTER COLUMN "description" DROP DEFAULT,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(255);
