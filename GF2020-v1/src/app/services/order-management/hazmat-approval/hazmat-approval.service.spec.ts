import { TestBed } from '@angular/core/testing';

import { HazmatApprovalService } from './hazmat-approval.service';

describe('HazmatApprovalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HazmatApprovalService = TestBed.get(HazmatApprovalService);
    expect(service).toBeTruthy();
  });
});
