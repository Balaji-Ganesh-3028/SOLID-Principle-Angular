import { Injectable } from '@angular/core';
import { SingleResponsibilityPrincipleModule } from '../../single-responsibility-principle.module';

@Injectable({
  providedIn: SingleResponsibilityPrincipleModule,
})
export class AuthService {
  constructor() {}

  public login(): void {
    console.log('Login');
  }

  public logout(): void {
    console.log('Logout');
  }
}
