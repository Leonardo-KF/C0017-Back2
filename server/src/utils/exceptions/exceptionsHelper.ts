import {
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Exception } from './IException';

export enum Exceptions {
  InvalidData,
  DatabaseException,
  NotFoundData,
  UnauthorizedException,
}

export function HandleException({ message, exception }: Exception) {
  if (
    exception === Exceptions.InvalidData ||
    exception === Exceptions.NotFoundData
  ) {
    throw new BadRequestException(message ? message : 'Invalid data');
  }
  if (exception === Exceptions.DatabaseException) {
    throw new InternalServerErrorException('Error in database');
  }
  if (exception === Exceptions.UnauthorizedException) {
    throw new UnauthorizedException(
      message ? message : 'You not have permissions to make this action',
    );
  }
}
