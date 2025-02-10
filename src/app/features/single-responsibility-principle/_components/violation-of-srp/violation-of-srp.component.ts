import { Component } from '@angular/core';
import { singleResponsibilityPrincipleConstants } from '../../_constants';

@Component({
  selector: 'app-violation-of-srp',
  templateUrl: './violation-of-srp.component.html',
  styleUrls: ['./violation-of-srp.component.scss'],
})
export class ViolationOfSrpComponent {
  public readonly SRP_CONSTANTS = singleResponsibilityPrincipleConstants;
}
