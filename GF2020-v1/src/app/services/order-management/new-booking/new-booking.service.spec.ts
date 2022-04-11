/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewBookingService } from './new-booking.service';

describe('Service: NewBooking', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewBookingService]
    });
  });

  it('should ...', inject([NewBookingService], (service: NewBookingService) => {
    expect(service).toBeTruthy();
  }));
});
