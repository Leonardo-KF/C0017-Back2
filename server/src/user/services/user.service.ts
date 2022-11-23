import { IUserEntity } from '../entities/user.entity';
import { UserDto } from './dto/userInput.dto';
import { randomUUID } from 'node:crypto';
import { PartialUserDto } from './dto/partialUserInput.dto';

export class UserService {
  private users: IUserEntity[] = [];

  async createUser(user: UserDto): Promise<IUserEntity> {
    const userEntity = { ...user, id: randomUUID() };
    this.users.push(userEntity);
    return userEntity;
  }

  async updateUser(userData: PartialUserDto): Promise<IUserEntity> {
    this.users.map((user, index) => {
      if (user.id === userData.id) {
        const UpdatedUser = Object.assign(user, userData);
        this.users.splice(index, 1, UpdatedUser);
      }
    });
    const updatedUser = this.users.find((user) => user.id === userData.id);
    return updatedUser;
  }

  async getAllUsers(): Promise<IUserEntity[]> {
    return this.users;
  }

  async deleteUserById(userId: string): Promise<boolean> {
    const existUser = this.users.find((user) => user.id === userId);
    if (!existUser) {
      return false;
    }
    this.users.map((user, index) => {
      if (user.id === userId) {
        this.users.splice(index, 1);
      }
    });
    return true;
  }

  async getUserById(userId: string): Promise<IUserEntity> {
    const existUser = this.users.find((user) => user.id === userId);
    if (!existUser) {
      throw new Error('User not found');
    }
    return existUser;
  }
}
