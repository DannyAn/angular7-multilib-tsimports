import {Injectable} from '@angular/core';
import {User} from 'lib-utils';
import {UserConverter} from 'lib-utils';
import {Observable, of} from 'rxjs';

export const employees = [{
  firstName: 'Joe',
  lastName: 'Smith',
  email: 'joe.smith@company.com',
  role: 'Software Developer'
}];

@Injectable({
  providedIn: 'root'
})
export class LibSharedService {

  constructor() {
  }

  getUser(): Observable<User> {
    console.log(employees[0]);
    const user: User = UserConverter.from(employees[0]);
    console.log(user);
    return of(user);
  }
}
