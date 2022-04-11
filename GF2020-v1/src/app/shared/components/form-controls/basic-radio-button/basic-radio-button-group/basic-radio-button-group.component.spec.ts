import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRadioButtonGroupComponent } from './basic-radio-button-group.component';

describe('BasicRadioButtonGroupComponent', () => {
  let component: BasicRadioButtonGroupComponent;
  let fixture: ComponentFixture<BasicRadioButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRadioButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRadioButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
