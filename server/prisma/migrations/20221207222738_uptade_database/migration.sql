-- DropForeignKey
ALTER TABLE "AttendanceList" DROP CONSTRAINT "AttendanceList_classroomId_fkey";

-- AddForeignKey
ALTER TABLE "AttendanceList" ADD CONSTRAINT "AttendanceList_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
