import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenClosedPrincipleRoutingModule } from './open-closed-principle-routing.module';
import { OpenClosedPrincipleComponent } from './open-closed-principle.component';
import { UserListComponent } from './_components/user-list/user-list.component';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { ViolationOfOcpComponent } from './_components/violation-of-ocp/violation-of-ocp.component';
import { FixingViolationOfOcpComponent } from './_components/fixing-violation-of-ocp/fixing-violation-of-ocp.component';

@NgModule({
  declarations: [OpenClosedPrincipleComponent, UserListComponent, ViolationOfOcpComponent, FixingViolationOfOcpComponent],
  imports: [CommonModule, OpenClosedPrincipleRoutingModule, MaterialsModule],
})
export class OpenClosedPrincipleModule {}
