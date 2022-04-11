/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DailySalesReportService } from './daily-sales-report.service';

describe('Service: DailySalesReport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailySalesReportService]
    });
  });

  it('should ...', inject([DailySalesReportService], (service: DailySalesReportService) => {
    expect(service).toBeTruthy();
  }));
});
