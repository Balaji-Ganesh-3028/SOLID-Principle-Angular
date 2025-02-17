import { Component, inject } from '@angular/core';
import { User } from '../../_models/user-list.models';
import { UserListService } from '../../_services/user-list/user-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  public users: User[] = [];
  private _userListService = inject(UserListService);
  constructor() {}

  ngOnInit(): void {}

  public getUserLists(): Observable<User[]> {
    return this._userListService.getUserList();
  }
}
