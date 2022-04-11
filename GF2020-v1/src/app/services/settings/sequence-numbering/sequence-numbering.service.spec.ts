import { TestBed } from '@angular/core/testing';

import { SequenceNumberingService } from './sequence-numbering.service';

describe('SequenceNumberingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SequenceNumberingService = TestBed.get(SequenceNumberingService);
    expect(service).toBeTruthy();
  });
});
