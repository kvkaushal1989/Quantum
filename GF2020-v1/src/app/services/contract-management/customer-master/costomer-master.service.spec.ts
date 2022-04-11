/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CostomerMasterService } from './costomer-master.service';

describe('Service: CostomerMaster', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CostomerMasterService]
    });
  });

  it('should ...', inject([CostomerMasterService], (service: CostomerMasterService) => {
    expect(service).toBeTruthy();
  }));
});
