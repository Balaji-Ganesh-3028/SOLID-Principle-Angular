import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceSegregationPrincipleComponent } from './interface-segregation-principle.component';

const routes: Routes = [{ path: '', component: InterfaceSegregationPrincipleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfaceSegregationPrincipleRoutingModule { }
