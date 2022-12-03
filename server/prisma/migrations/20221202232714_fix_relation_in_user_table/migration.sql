-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_classroomStudentId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_classroomTeacherId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "classroomStudentId" DROP NOT NULL,
ALTER COLUMN "classroomTeacherId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_classroomStudentId_fkey" FOREIGN KEY ("classroomStudentId") REFERENCES "Classroom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_classroomTeacherId_fkey" FOREIGN KEY ("classroomTeacherId") REFERENCES "Classroom"("id") ON DELETE SET NULL ON UPDATE CASCADE;
