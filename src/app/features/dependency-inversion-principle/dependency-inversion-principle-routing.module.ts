import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInversionPrincipleComponent } from './dependency-inversion-principle.component';

const routes: Routes = [{ path: '', component: DependencyInversionPrincipleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependencyInversionPrincipleRoutingModule { }
