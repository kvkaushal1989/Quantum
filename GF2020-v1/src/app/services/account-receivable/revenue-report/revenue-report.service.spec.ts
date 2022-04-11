/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RevenueReportService } from './revenue-report.service';

describe('Service: RevenueReport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenueReportService]
    });
  });

  it('should ...', inject([RevenueReportService], (service: RevenueReportService) => {
    expect(service).toBeTruthy();
  }));
});
