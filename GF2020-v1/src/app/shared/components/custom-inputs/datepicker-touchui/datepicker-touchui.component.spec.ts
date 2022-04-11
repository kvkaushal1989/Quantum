import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerTouchuiComponent } from './datepicker-touchui.component';

describe('DatepickerTouchuiComponent', () => {
  let component: DatepickerTouchuiComponent;
  let fixture: ComponentFixture<DatepickerTouchuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerTouchuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerTouchuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
