import { Component } from '@angular/core';
import {
  openClosedPrincipleConstants,
  openClosedPrincipleImagesConstants,
} from '../../_constants';

@Component({
  selector: 'app-fixing-violation-of-ocp',
  templateUrl: './fixing-violation-of-ocp.component.html',
  styleUrls: ['./fixing-violation-of-ocp.component.scss'],
})
export class FixingViolationOfOcpComponent {
  public readonly OCP_CONSTANTS = openClosedPrincipleConstants;
  public readonly OCP_IMAGE_CONSTANTS = openClosedPrincipleImagesConstants;
}
