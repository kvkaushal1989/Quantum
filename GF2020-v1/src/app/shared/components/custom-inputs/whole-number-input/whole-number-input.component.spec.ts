import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeNumberInputComponent } from './whole-number-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WholeNumberInputComponent', () => {
  let component: WholeNumberInputComponent;
  let fixture: ComponentFixture<WholeNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeNumberInputComponent ],
      imports : [
        MatInputModule,
        MatIconModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
