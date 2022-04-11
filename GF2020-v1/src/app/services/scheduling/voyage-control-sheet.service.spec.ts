/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VoyageControlSheetService } from './voyage-control-sheet.service';

describe('Service: VoyageControlSheet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoyageControlSheetService]
    });
  });

  it('should ...', inject([VoyageControlSheetService], (service: VoyageControlSheetService) => {
    expect(service).toBeTruthy();
  }));
});
