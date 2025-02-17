import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenClosedPrincipleComponent } from './open-closed-principle.component';
import { ViolationOfOcpComponent } from './_components/violation-of-ocp/violation-of-ocp.component';
import { FixingViolationOfOcpComponent } from './_components/fixing-violation-of-ocp/fixing-violation-of-ocp.component';

const routes: Routes = [
  {
    path: '',
    component: OpenClosedPrincipleComponent,
    children: [
      { path: 'violation-of-ocp', component: ViolationOfOcpComponent },
      {
        path: 'fixing-violation-of-ocp',
        component: FixingViolationOfOcpComponent,
      },
      { path: '', redirectTo: 'violation-of-ocp', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenClosedPrincipleRoutingModule {}
