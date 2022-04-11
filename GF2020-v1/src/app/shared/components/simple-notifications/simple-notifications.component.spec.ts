import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNotificationsComponent } from './simple-notifications.component';

describe('SimpleNotificationsComponent', () => {
  let component: SimpleNotificationsComponent;
  let fixture: ComponentFixture<SimpleNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
