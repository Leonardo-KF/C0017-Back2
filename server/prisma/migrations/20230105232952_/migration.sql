/*
  Warnings:

  - A unique constraint covering the columns `[geralId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "geralId" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_geralId_key" ON "User"("geralId");
