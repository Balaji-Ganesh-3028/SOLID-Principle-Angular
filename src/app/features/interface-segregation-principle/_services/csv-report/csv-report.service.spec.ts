import { TestBed } from '@angular/core/testing';

import { CsvReportService } from './csv-report.service';

describe('CsvReportService', () => {
  let service: CsvReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
