import { Inject, inject, Injectable } from '@angular/core';
import { MessageService } from '../../_models/message-service.models';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor(
    @Inject('MessageService') private messageSerivce: MessageService
  ) {}

  public notify(message: string): void {
    this.messageSerivce.sendMessage(message);
  }

  public getUserList(): void {
    this.messageSerivce.getUserList().subscribe((data) => {
      console.log('User List: ', data); // data
    });
  }
}
