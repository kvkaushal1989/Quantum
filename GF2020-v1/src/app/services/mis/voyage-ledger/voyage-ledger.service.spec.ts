/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VoyageLedgerService } from './voyage-ledger.service';

describe('Service: VoyageLedger', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoyageLedgerService]
    });
  });

  it('should ...', inject([VoyageLedgerService], (service: VoyageLedgerService) => {
    expect(service).toBeTruthy();
  }));
});
