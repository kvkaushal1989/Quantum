/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgeingReportService } from './ageing-report.service';

describe('Service: AgeingReport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgeingReportService]
    });
  });

  it('should ...', inject([AgeingReportService], (service: AgeingReportService) => {
    expect(service).toBeTruthy();
  }));
});
