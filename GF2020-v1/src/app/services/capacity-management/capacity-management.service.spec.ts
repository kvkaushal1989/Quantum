/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CapacityManagementService } from './capacity-management.service';

describe('Service: CapacityManagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapacityManagementService]
    });
  });

  it('should ...', inject([CapacityManagementService], (service: CapacityManagementService) => {
    expect(service).toBeTruthy();
  }));
});
