import { Injectable } from '@angular/core';
import { generate, print } from '../../_models/reports.models';

@Injectable({
  providedIn: 'root',
})
export class CsvReportService implements generate, print {
  constructor() {}

  public generateReport(data: any): string {
    return 'csv report';
  }

  public printReport(data: any): void {
    console.log('csv report');
  }
}
