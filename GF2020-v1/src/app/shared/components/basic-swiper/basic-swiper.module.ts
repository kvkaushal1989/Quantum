import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from './lib';
import { CarouselSliderComponent } from './slider/carousel-slider.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 3,
  centeredSlides: true
};

@NgModule({
  declarations: [ CarouselComponent, CarouselItemDirective, CarouselSliderComponent ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [ CarouselComponent, CarouselSliderComponent, SwiperModule ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class BasicSwiperModule { }
