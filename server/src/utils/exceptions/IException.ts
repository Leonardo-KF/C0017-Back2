import { Exceptions } from './exceptionsHelper';

export interface Exception {
  message?: string;
  exception: Exceptions;
}
