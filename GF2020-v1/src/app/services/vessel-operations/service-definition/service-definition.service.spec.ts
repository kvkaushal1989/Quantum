import { TestBed } from '@angular/core/testing';

import { ServiceDefinitionService } from './service-definition.service';

describe('ServiceDefinitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceDefinitionService = TestBed.get(ServiceDefinitionService);
    expect(service).toBeTruthy();
  });
});
