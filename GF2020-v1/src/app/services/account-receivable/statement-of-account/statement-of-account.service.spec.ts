/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StatementOfAccountService } from './statement-of-account.service';

describe('Service: StatementOfAccount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatementOfAccountService]
    });
  });

  it('should ...', inject([StatementOfAccountService], (service: StatementOfAccountService) => {
    expect(service).toBeTruthy();
  }));
});
