import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTextareaBoxComponent } from './basic-textarea-box.component';

describe('BasicTextareaBoxComponent', () => {
  let component: BasicTextareaBoxComponent;
  let fixture: ComponentFixture<BasicTextareaBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTextareaBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTextareaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
