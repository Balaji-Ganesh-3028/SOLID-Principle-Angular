import { Component } from '@angular/core';
import {
  singleResponsibilityPrincipleRoutingConstants,
  singleResponsibilityPrincipleConstants,
} from './_constants';

@Component({
  selector: 'app-single-responsibility-principle',
  templateUrl: './single-responsibility-principle.component.html',
  styleUrls: ['./single-responsibility-principle.component.scss'],
})
export class SingleResponsibilityPrincipleComponent {
  public readonly SRP_CONSTANTS = singleResponsibilityPrincipleConstants;
  public readonly SRP_ROUTING_CONSTANTS =
    singleResponsibilityPrincipleRoutingConstants;

  constructor() {
    console.log('Single Responsibility Principle Component Loaded');
  }
}
