import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/prisma/database.module';
import { UserService } from './services/user.service';
import UserController from './user.controller';
import { UserRepository } from './user.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
