import { TestBed } from '@angular/core/testing';

import { ReeferApprovalService } from './reefer-approval.service';

describe('ReeferApprovalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReeferApprovalService = TestBed.get(ReeferApprovalService);
    expect(service).toBeTruthy();
  });
});
