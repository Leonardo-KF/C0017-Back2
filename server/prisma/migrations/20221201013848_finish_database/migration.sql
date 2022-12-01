/*
  Warnings:

  - Added the required column `classroomStudentId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classroomTeacherId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "classroomStudentId" TEXT NOT NULL,
ADD COLUMN     "classroomTeacherId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AttendanceList" (
    "id" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "day" TEXT NOT NULL,

    CONSTRAINT "AttendanceList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classroom" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "subject" TEXT NOT NULL,

    CONSTRAINT "Classroom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AttendanceListToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AttendanceList_id_key" ON "AttendanceList"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Classroom_id_key" ON "Classroom"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_AttendanceListToUser_AB_unique" ON "_AttendanceListToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AttendanceListToUser_B_index" ON "_AttendanceListToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_classroomStudentId_fkey" FOREIGN KEY ("classroomStudentId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_classroomTeacherId_fkey" FOREIGN KEY ("classroomTeacherId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceList" ADD CONSTRAINT "AttendanceList_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AttendanceListToUser" ADD CONSTRAINT "_AttendanceListToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "AttendanceList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AttendanceListToUser" ADD CONSTRAINT "_AttendanceListToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
