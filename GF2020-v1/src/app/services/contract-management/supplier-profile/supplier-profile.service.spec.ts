import { TestBed } from '@angular/core/testing';

import { SupplierProfileService } from './supplier-profile.service';

describe('SupplierProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplierProfileService = TestBed.get(SupplierProfileService);
    expect(service).toBeTruthy();
  });
});
