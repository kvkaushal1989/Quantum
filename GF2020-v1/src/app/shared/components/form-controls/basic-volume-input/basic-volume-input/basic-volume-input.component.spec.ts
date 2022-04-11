import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVolumeInputComponent } from './basic-volume-input.component';

describe('BasicVolumeInputComponent', () => {
  let component: BasicVolumeInputComponent;
  let fixture: ComponentFixture<BasicVolumeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicVolumeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicVolumeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
