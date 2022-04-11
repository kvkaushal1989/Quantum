import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionTableComponent } from './expansion-table.component';
import {TableModule} from 'primeng/table';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ExpansionTableComponent', () => {
  let component: ExpansionTableComponent;
  let fixture: ComponentFixture<ExpansionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionTableComponent ],
      imports : [TableModule],
      schemas: [ NO_ERRORS_SCHEMA ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
