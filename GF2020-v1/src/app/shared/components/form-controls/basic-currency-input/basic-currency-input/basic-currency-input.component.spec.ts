import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCurrencyInputComponent } from './basic-currency-input.component';

describe('BasicCurrencyInputComponent', () => {
  let component: BasicCurrencyInputComponent;
  let fixture: ComponentFixture<BasicCurrencyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCurrencyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCurrencyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
