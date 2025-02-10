import { Injectable } from '@angular/core';
import { SingleResponsibilityPrincipleModule } from '../../single-responsibility-principle.module';

@Injectable({
  providedIn: SingleResponsibilityPrincipleModule,
})

// IN THIS AUTH SERVIVE WE WILL WRITE ONLY AUTHENTICATION LOGIC
// ALL OTHER LOGIC WILL BE WRITTEN IN OTHER SERVICES
export class AuthService {
  constructor() {}

  public login(): void {
    // WRITE YOUR LOGIN LOGIC HERE
  }

  public logout(): void {
    // WRITE YOUR LOGOUT LOGIC HERE
  }
}
