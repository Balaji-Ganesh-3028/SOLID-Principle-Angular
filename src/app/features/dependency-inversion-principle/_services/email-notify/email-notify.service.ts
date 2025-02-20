import { Injectable } from '@angular/core';
import { NotifyService } from '../notify/notify.service';
import { MessageService } from '../../_models/message-service.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailNotifyService implements MessageService {
  constructor() {}
  sendMessage(message: string): void {
    console.log('EmailNotifyService: ', message);
  }

  private userList = ['user1', 'user2', 'user3', 'user4', 'user5'];

  public getUserList(): Observable<string[]> {
    return of(this.userList);
  }
}
