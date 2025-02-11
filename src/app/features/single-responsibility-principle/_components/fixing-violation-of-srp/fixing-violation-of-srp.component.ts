import { Component } from '@angular/core';
import {
  singleResponsibilityPrincipleConstants,
  singleResponsibilityPrincipleImagesConstants,
} from '../../_constants';

@Component({
  selector: 'app-fixing-violation-of-srp',
  templateUrl: './fixing-violation-of-srp.component.html',
  styleUrls: ['./fixing-violation-of-srp.component.scss'],
})
export class FixingViolationOfSrpComponent {
  public readonly SRP_CONSTANTS = singleResponsibilityPrincipleConstants;
  public readonly SRP_IMAGE_CONSTANTS =
    singleResponsibilityPrincipleImagesConstants;
  public selectedCategory: string = 'All';

  public selectCategory = (category: string) => {
    this.selectedCategory = category;
  };
}
