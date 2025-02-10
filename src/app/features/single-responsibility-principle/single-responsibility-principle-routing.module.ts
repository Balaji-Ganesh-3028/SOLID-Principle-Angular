import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleResponsibilityPrincipleComponent } from './single-responsibility-principle.component';
import { FixingViolationOfSrpComponent } from './_components/fixing-violation-of-srp/fixing-violation-of-srp.component';
import { ViolationOfSrpComponent } from './_components/violation-of-srp/violation-of-srp.component';

const routes: Routes = [
  {
    path: '',
    component: SingleResponsibilityPrincipleComponent,
    children: [
      { path: 'violation-of-srp', component: ViolationOfSrpComponent },
      {
        path: 'fixing-violation-of-srp',
        component: FixingViolationOfSrpComponent,
      },
      { path: '', redirectTo: 'violation-of-srp', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleResponsibilityPrincipleRoutingModule {}
