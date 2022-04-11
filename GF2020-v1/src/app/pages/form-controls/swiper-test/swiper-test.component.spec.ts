import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperTestComponent } from './swiper-test.component';

describe('SwiperTestComponent', () => {
  let component: SwiperTestComponent;
  let fixture: ComponentFixture<SwiperTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
