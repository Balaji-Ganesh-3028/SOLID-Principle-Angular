import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleResponsibilityPrincipleComponent } from './single-responsibility-principle.component';

const routes: Routes = [
  { path: '', component: SingleResponsibilityPrincipleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleResponsibilityPrincipleRoutingModule {}
