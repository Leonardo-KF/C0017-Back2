import { UserDto } from '../services/dto/userInput.dto';

export interface IUserEntity extends UserDto {
  id: string;
}
