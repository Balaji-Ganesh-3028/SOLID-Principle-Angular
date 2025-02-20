import { Injectable } from '@angular/core';
import { generate, print } from '../../_models/reports.models';

@Injectable({
  providedIn: 'root',
})
export class PdfReportService implements generate {
  constructor() {}

  generateReport(data: any): string {
    return 'csv report';
  }
}
