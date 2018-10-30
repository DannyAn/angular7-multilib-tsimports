import {User} from './user';

export class UserConverter {
  public static from(data: any): User {
    return {
      firstName: data['firstName'],
      lastName: data['lastName'],
      email: data['email']
    };
  }
}
