import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleTestComponent } from './locale-test.component';

describe('LocaleTestComponent', () => {
  let component: LocaleTestComponent;
  let fixture: ComponentFixture<LocaleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
