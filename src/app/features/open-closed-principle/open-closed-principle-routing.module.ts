import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenClosedPrincipleComponent } from './open-closed-principle.component';

const routes: Routes = [{ path: '', component: OpenClosedPrincipleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenClosedPrincipleRoutingModule { }
