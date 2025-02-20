import { Observable } from 'rxjs';

export interface MessageService {
  sendMessage(message: string): void;
  getUserList(): Observable<string[]>;
}
