/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AssignAllocationService } from './assign-allocation.service';

describe('Service: AssignAllocation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignAllocationService]
    });
  });

  it('should ...', inject([AssignAllocationService], (service: AssignAllocationService) => {
    expect(service).toBeTruthy();
  }));
});
