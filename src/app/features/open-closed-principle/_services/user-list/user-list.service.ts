import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { userListMockData } from '../../_models/user-list-mock-data';
import { User } from '../../_models/user-list.models';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor() {}

  public getUserList(): Observable<User[]> {
    return of(userListMockData);
  }
}
