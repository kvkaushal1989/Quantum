import { TestBed } from '@angular/core/testing';

import { SupplierOverviewService } from './supplier-overview.service';

describe('SupplierOverviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplierOverviewService = TestBed.get(SupplierOverviewService);
    expect(service).toBeTruthy();
  });
});
