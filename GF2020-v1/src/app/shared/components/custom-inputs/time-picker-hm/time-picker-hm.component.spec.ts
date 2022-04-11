import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerHmComponent } from './time-picker-hm.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TimePickerHsComponent', () => {
  let component: TimePickerHmComponent;
  let fixture: ComponentFixture<TimePickerHmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerHmComponent ],
      imports : [
        MatInputModule,
        MatIconModule,
        FormsModule,
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerHmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
