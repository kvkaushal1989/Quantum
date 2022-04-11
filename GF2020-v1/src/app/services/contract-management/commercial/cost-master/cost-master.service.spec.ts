import { TestBed } from '@angular/core/testing';

import { CostMasterService } from './cost-master.service';

describe('CostMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CostMasterService = TestBed.get(CostMasterService);
    expect(service).toBeTruthy();
  });
});
