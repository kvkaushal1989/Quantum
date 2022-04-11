import { TestBed } from '@angular/core/testing';

import { TaxConfigurationService } from './tax-configuration.service';

describe('TaxConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaxConfigurationService = TestBed.get(TaxConfigurationService);
    expect(service).toBeTruthy();
  });
});
