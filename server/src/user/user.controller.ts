import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { IsTeacherAuthorization } from 'src/auth/decorators/is-teacher.decorator';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { IUserEntity } from './entities/user.entity';
import { PartialUserDto } from './services/dto/partialUserInput.dto';
import { UserDto } from './services/dto/userInput.dto';
import { UserService } from './services/user.service';

@Controller('user')
@ApiTags('Usuários')
export default class UserController {
  constructor(private readonly service: UserService) {}

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Get()
  async getAllUser(): Promise<IUserEntity[]> {
    return await this.service.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') userId: string): Promise<IUserEntity> {
    try {
      return await this.service.getUserById(userId);
    } catch (err) {
      HandleException(err);
    }
  }

  @Post()
  async createUser(
    @Body() { cpf, email, password, name }: UserDto,
    @Res() response: Response,
  ) {
    try {
      const result = await this.service.createUser({
        cpf,
        email,
        password,
        name,
      });

      response.status(201).send(result);
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Patch()
  async updateUser(@Body() userData: PartialUserDto): Promise<IUserEntity> {
    try {
      return await this.service.updateUser(userData);
    } catch (err) {
      HandleException(err);
    }
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  async deleteUserById(@Param('id') userId: string): Promise<string> {
    const userIsDeleted = await this.service.deleteUserById(userId);
    console.log(userIsDeleted);
    if (userIsDeleted) {
      return 'User deleted successfully';
    } else {
      return 'User not found';
    }
  }
}
