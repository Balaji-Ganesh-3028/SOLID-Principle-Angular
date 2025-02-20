import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyInversionPrincipleRoutingModule } from './dependency-inversion-principle-routing.module';
import { DependencyInversionPrincipleComponent } from './dependency-inversion-principle.component';
import { NotifyService } from './_services/notify/notify.service';
import { EmailNotifyService } from './_services/email-notify/email-notify.service';

@NgModule({
  declarations: [DependencyInversionPrincipleComponent],
  imports: [CommonModule, DependencyInversionPrincipleRoutingModule],
  providers: [
    NotifyService,
    { provide: 'MessageService', useClass: EmailNotifyService },
  ],
})
export class DependencyInversionPrincipleModule {}
