import { TestBed } from '@angular/core/testing';

import { OutstandingReportService } from './outstanding-report.service';

describe('OutstandingReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutstandingReportService = TestBed.get(OutstandingReportService);
    expect(service).toBeTruthy();
  });
});
