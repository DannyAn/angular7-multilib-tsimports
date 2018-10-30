import { Component, OnInit } from '@angular/core';
import {User} from 'lib-utils';
import {LibSharedService} from './lib-shared.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'sr-lib-shared',
  template: `
    <div>
      <h1>User Card</h1>
      <ul *ngIf="user$ | async as user">
        <li>First name: {{ user.firstName }}</li>
        <li>Last name: {{ user.lastName }}</li>
        <li>Email: {{ user.email }}</li>
      </ul>
    </div>
  `,
  styles: []
})
export class LibSharedComponent implements OnInit {

  user$: Observable<User>;

  constructor(private srv: LibSharedService) { }

  ngOnInit() {
    this.user$ = this.srv.getUser();
  }

}
