import { TestBed } from '@angular/core/testing';

import { FixedCostService } from './fixed-cost.service';

describe('FixedCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FixedCostService = TestBed.get(FixedCostService);
    expect(service).toBeTruthy();
  });
});
