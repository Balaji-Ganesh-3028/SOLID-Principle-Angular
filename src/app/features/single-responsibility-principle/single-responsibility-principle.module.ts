import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleResponsibilityPrincipleRoutingModule } from './single-responsibility-principle-routing.module';
import { SingleResponsibilityPrincipleComponent } from './single-responsibility-principle.component';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { ViolationOfSrpComponent } from './_components/violation-of-srp/violation-of-srp.component';
import { FixingViolationOfSrpComponent } from './_components/fixing-violation-of-srp/fixing-violation-of-srp.component';
import { ProductListViolationComponent } from './_components/product-list-violation/product-list-violation.component';
import { ProductListComponent } from './_components/product-list/product-list.component';
import { ProductFilterComponent } from './_components/product-filter/product-filter.component';

@NgModule({
  declarations: [
    SingleResponsibilityPrincipleComponent,
    ViolationOfSrpComponent,
    FixingViolationOfSrpComponent,
    ProductListViolationComponent,
    ProductListComponent,
    ProductFilterComponent,
  ],
  imports: [
    CommonModule,
    SingleResponsibilityPrincipleRoutingModule,
    MaterialsModule,
  ],
})
export class SingleResponsibilityPrincipleModule {}
