import { TestBed } from '@angular/core/testing';

import { RulesPreferencesService } from './rules-preferences.service';

describe('RulesPreferencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RulesPreferencesService = TestBed.get(RulesPreferencesService);
    expect(service).toBeTruthy();
  });
});
