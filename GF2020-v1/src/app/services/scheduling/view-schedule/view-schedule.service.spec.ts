import { TestBed } from '@angular/core/testing';

import { ViewScheduleService } from './view-schedule.service';

describe('ViewScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewScheduleService = TestBed.get(ViewScheduleService);
    expect(service).toBeTruthy();
  });
});
