import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleResponsibilityPrincipleRoutingModule } from './single-responsibility-principle-routing.module';
import { SingleResponsibilityPrincipleComponent } from './single-responsibility-principle.component';


@NgModule({
  declarations: [
    SingleResponsibilityPrincipleComponent
  ],
  imports: [
    CommonModule,
    SingleResponsibilityPrincipleRoutingModule
  ]
})
export class SingleResponsibilityPrincipleModule { }
