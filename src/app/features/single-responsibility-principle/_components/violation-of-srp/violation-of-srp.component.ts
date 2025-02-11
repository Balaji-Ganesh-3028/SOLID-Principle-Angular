import { Component } from '@angular/core';
import {
  singleResponsibilityPrincipleConstants,
  singleResponsibilityPrincipleImagesConstants,
} from '../../_constants';

@Component({
  selector: 'app-violation-of-srp',
  templateUrl: './violation-of-srp.component.html',
  styleUrls: ['./violation-of-srp.component.scss'],
})
export class ViolationOfSrpComponent {
  public readonly SRP_CONSTANTS = singleResponsibilityPrincipleConstants;
  public readonly SRP_IMAGE_CONSTANTS =
    singleResponsibilityPrincipleImagesConstants;
}
