import { TestBed } from '@angular/core/testing';

import { SpotRateService } from './spot-rate.service';

describe('SpotRateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotRateService = TestBed.get(SpotRateService);
    expect(service).toBeTruthy();
  });
});
