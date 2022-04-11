import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLabelsComponent } from './basic-labels.component';

describe('BasicLabelsComponent', () => {
  let component: BasicLabelsComponent;
  let fixture: ComponentFixture<BasicLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
