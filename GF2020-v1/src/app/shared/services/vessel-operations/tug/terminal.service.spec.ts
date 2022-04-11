import { TestBed } from '@angular/core/testing';

import { TerminalService } from './tug.service';

describe('TerminalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerminalService = TestBed.get(TerminalService);
    expect(service).toBeTruthy();
  });
});
