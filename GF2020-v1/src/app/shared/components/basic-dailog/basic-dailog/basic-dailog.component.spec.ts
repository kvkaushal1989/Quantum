import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDailogComponent } from './basic-dailog.component';

describe('BasicDailogComponent', () => {
  let component: BasicDailogComponent;
  let fixture: ComponentFixture<BasicDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
