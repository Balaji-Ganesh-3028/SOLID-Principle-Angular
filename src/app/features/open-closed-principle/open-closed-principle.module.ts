import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenClosedPrincipleRoutingModule } from './open-closed-principle-routing.module';
import { OpenClosedPrincipleComponent } from './open-closed-principle.component';


@NgModule({
  declarations: [
    OpenClosedPrincipleComponent
  ],
  imports: [
    CommonModule,
    OpenClosedPrincipleRoutingModule
  ]
})
export class OpenClosedPrincipleModule { }
