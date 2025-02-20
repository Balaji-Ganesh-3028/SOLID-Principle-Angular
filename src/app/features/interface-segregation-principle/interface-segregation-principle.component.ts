import { Component } from '@angular/core';
import { Reports } from './_models/reports.models';
import {
  interfaceSegregationPrincipleImagesConstants,
  interfaceSegregationPrincipleConstants,
} from './_constants';

@Component({
  selector: 'app-interface-segregation-principle',
  templateUrl: './interface-segregation-principle.component.html',
  styleUrls: ['./interface-segregation-principle.component.scss'],
})
export class InterfaceSegregationPrincipleComponent implements Reports {
  public readonly ISP_CONSTANTS = interfaceSegregationPrincipleConstants;
  public readonly ISP_IMAGE_CONSTANTS =
    interfaceSegregationPrincipleImagesConstants;

  constructor() {}

  generateReport(data: any): string {
    return 'csv report';
  }

  printReport(data: any): void {
    console.log('csv report');
  }
}
