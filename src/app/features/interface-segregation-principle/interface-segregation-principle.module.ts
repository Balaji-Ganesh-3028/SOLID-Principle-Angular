import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterfaceSegregationPrincipleRoutingModule } from './interface-segregation-principle-routing.module';
import { InterfaceSegregationPrincipleComponent } from './interface-segregation-principle.component';


@NgModule({
  declarations: [
    InterfaceSegregationPrincipleComponent
  ],
  imports: [
    CommonModule,
    InterfaceSegregationPrincipleRoutingModule
  ]
})
export class InterfaceSegregationPrincipleModule { }
