import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCheckBoxComponent } from './basic-check-box.component';

describe('BasicCheckBoxComponent', () => {
  let component: BasicCheckBoxComponent;
  let fixture: ComponentFixture<BasicCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
