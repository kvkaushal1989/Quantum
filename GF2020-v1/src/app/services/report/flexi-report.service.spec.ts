/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlexiReportService } from './flexi-report.service';

describe('Service: FlexiReport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlexiReportService]
    });
  });

  it('should ...', inject([FlexiReportService], (service: FlexiReportService) => {
    expect(service).toBeTruthy();
  }));
});
