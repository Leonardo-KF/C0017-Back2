import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomRepository {
  private dataToReturn = {
    students: true, // incluir as informações no retorno da query da tabela de alunos que estão nessa sala
    teachers: true, // incluir as informações no retorno da query da tabela de professores que estão nessa sala
    attendances: {
      // incluir as informações no retorno da query da tabela de chamada dessa sala
      include: {
        students: true, // incluir na tabela no retorno da query de chamada os alunos que responderam as chamadas
      },
    },
  };
  constructor(private readonly prismaService: PrismaService) {}

  async createClassroom(
    { name, subject, theme }: CreateClassroomDto,
    id: string,
  ): Promise<Classroom> {
    try {
      return await this.prismaService.classroom.create({
        data: {
          id: id,
          name: name,
          subject: subject,
          theme: theme,
        },
        // incluir as informações no retorno da query de outras tabelas do banco
        include: this.dataToReturn,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }

  async addTeacherInToClassroom(teacherId: string, classroomId: string) {
    try {
      return await this.prismaService.classroom.update({
        where: { id: classroomId },
        data: {
          teachers: {
            connect: { id: teacherId },
          },
        },
        include: this.dataToReturn,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }
  async addStudentInToClassroom(studentId: string, classroomId: string) {
    try {
      return await this.prismaService.classroom.update({
        where: { id: classroomId },
        data: {
          students: {
            connect: { id: studentId },
          },
        },
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }
  async updateClassroom(updateData: UpdateClassroomDto): Promise<Classroom> {
    try {
      return await this.prismaService.classroom.update({
        where: { id: updateData.id },
        data: {
          ...updateData,
          students: {
            connect: updateData.studentsIds?.map((id) => ({ id: id })),
          },
          teachers: {
            connect: updateData.teachersIds?.map((id) => ({ id: id })),
          },
        },
        include: this.dataToReturn,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }

  async deleteClassroom(id: string): Promise<Classroom> {
    try {
      return await this.prismaService.classroom.delete({
        where: { id: id },
        include: this.dataToReturn,
      });
    } catch (err) {
      console.log('rodou', err);
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }

  async findClassroomById(id: string, role: string): Promise<Classroom> {
    try {
      return await this.prismaService.classroom.findUnique({
        where: { id: id },
        include: role === 'teacher' ? this.dataToReturn : null,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }

  async findAllClassrooms(): Promise<
    Omit<Classroom, 'students' | 'teachers' | 'attendances'>[]
  > {
    try {
      return await this.prismaService.classroom.findMany();
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }
}
