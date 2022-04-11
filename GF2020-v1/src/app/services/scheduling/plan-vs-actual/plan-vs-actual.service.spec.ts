import { TestBed } from '@angular/core/testing';

import { PlanVsActualService } from './plan-vs-actual.service';

describe('PlanVsActualService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanVsActualService = TestBed.get(PlanVsActualService);
    expect(service).toBeTruthy();
  });
});
