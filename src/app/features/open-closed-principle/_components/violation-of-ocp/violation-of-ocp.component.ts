import { Component } from '@angular/core';
import {
  openClosedPrincipleConstants,
  openClosedPrincipleImagesConstants,
} from '../../_constants';

@Component({
  selector: 'app-violation-of-ocp',
  templateUrl: './violation-of-ocp.component.html',
  styleUrls: ['./violation-of-ocp.component.scss'],
})
export class ViolationOfOcpComponent {
  public readonly OCP_CONSTANTS = openClosedPrincipleConstants;
  public readonly OCP_IMAGE_CONSTANTS = openClosedPrincipleImagesConstants;
}
