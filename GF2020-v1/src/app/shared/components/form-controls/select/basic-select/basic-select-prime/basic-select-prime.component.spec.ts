import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSelectPrimeComponent } from './basic-select-prime.component';

describe('BasicSelectPrimeComponent', () => {
  let component: BasicSelectPrimeComponent;
  let fixture: ComponentFixture<BasicSelectPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSelectPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSelectPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
