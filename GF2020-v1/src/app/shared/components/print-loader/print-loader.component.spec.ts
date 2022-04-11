import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintLoaderComponent } from './print-loader.component';

describe('PrintLoaderComponent', () => {
  let component: PrintLoaderComponent;
  let fixture: ComponentFixture<PrintLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
