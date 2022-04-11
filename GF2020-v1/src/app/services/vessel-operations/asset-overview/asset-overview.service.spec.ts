import { TestBed } from '@angular/core/testing';

import { AssetOverviewService } from './asset-overview.service';

describe('AssetOverviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetOverviewService = TestBed.get(AssetOverviewService);
    expect(service).toBeTruthy();
  });
});
