import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiskovSubtitutionPrincipleRoutingModule } from './liskov-subtitution-principle-routing.module';
import { LiskovSubtitutionPrincipleComponent } from './liskov-subtitution-principle.component';


@NgModule({
  declarations: [
    LiskovSubtitutionPrincipleComponent
  ],
  imports: [
    CommonModule,
    LiskovSubtitutionPrincipleRoutingModule
  ]
})
export class LiskovSubtitutionPrincipleModule { }
