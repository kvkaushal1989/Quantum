import { TestBed } from '@angular/core/testing';

import { CommercialScheduleService } from './commercial-schedule.service';

describe('CommercialScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommercialScheduleService = TestBed.get(CommercialScheduleService);
    expect(service).toBeTruthy();
  });
});
