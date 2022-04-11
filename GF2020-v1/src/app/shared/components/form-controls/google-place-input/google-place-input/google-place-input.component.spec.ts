import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePlaceInputComponent } from './google-place-input.component';

describe('GooglePlaceInputComponent', () => {
  let component: GooglePlaceInputComponent;
  let fixture: ComponentFixture<GooglePlaceInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglePlaceInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglePlaceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
