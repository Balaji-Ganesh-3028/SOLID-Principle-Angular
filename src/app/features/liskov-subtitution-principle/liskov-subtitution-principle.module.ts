import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiskovSubtitutionPrincipleRoutingModule } from './liskov-subtitution-principle-routing.module';
import { LiskovSubtitutionPrincipleComponent } from './liskov-subtitution-principle.component';
import { UserListComponent } from './_components/user-list/user-list.component';

@NgModule({
  declarations: [LiskovSubtitutionPrincipleComponent, UserListComponent],
  imports: [CommonModule, LiskovSubtitutionPrincipleRoutingModule],
})
export class LiskovSubtitutionPrincipleModule {}
