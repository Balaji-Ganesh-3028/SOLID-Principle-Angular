import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependencyInversionPrincipleRoutingModule } from './dependency-inversion-principle-routing.module';
import { DependencyInversionPrincipleComponent } from './dependency-inversion-principle.component';


@NgModule({
  declarations: [
    DependencyInversionPrincipleComponent
  ],
  imports: [
    CommonModule,
    DependencyInversionPrincipleRoutingModule
  ]
})
export class DependencyInversionPrincipleModule { }
