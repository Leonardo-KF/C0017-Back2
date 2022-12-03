import { PrismaService } from 'src/prisma/prisma.service';
import { Classroom } from './entities/classroom.entity';

export class ClassroomRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createClassroom({
    id,
    name,
    subject,
    theme,
  }: Classroom): Promise<Classroom> {
    return await this.prismaService.classroom.create({
      data: {
        id: id,
        name: name,
        subject: subject,
        theme: theme,
      },
      // incluir as informações de outras tabelas do banco
      include: {
        students: true, // incluir as informações da tabela de alunos que estão nessa sala
        teachers: true, // incluir as informações da tabela de professores que estão nessa sala
        attendances: {
          // incluir as informações da tabela de chamada dessa sala
          include: {
            students: true, // incluir na tabela de chamada os alunos que responderam as chamadas
          },
        },
      },
    });
  }

  async updateClassroom(): Promise<void> {
    const a = 'abc';
  }
}
