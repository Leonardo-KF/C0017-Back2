import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/services/user.service';
import { UserController } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [DatabaseModule, ProfileModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
