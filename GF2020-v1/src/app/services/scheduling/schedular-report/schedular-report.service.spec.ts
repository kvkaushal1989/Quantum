/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SchedularReportService } from './schedular-report.service';

describe('Service: SchedularReport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchedularReportService]
    });
  });

  it('should ...', inject([SchedularReportService], (service: SchedularReportService) => {
    expect(service).toBeTruthy();
  }));
});
