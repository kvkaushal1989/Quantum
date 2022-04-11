import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWeightInputComponent } from './basic-weight-input.component';

describe('BasicWeightInputComponent', () => {
  let component: BasicWeightInputComponent;
  let fixture: ComponentFixture<BasicWeightInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWeightInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWeightInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
