import { TestBed } from '@angular/core/testing';

import { TerminalConfigurationService } from './terminal-configuration.service';

describe('TerminalConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerminalConfigurationService = TestBed.get(TerminalConfigurationService);
    expect(service).toBeTruthy();
  });
});
