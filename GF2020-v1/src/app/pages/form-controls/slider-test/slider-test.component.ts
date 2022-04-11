import { Component, OnInit } from '@angular/core';

import {
  slideInLeftAnimation,
  slideInRightAnimation,
  slideOutLeftAnimation,
  slideOutRightAnimation,
} from '../../../shared/components/basic-swiper/slider/lib';

@Component({
  selector: 'app-slider-test',
  templateUrl: './slider-test.component.html',
  styleUrls: ['./slider-test.component.scss']
})
export class SliderTestComponent implements OnInit {
  current = 0;
  prev = -1;

  constructor() { }

  ngOnInit() {
  }

  onPrev() {
    if (this.current > 0) {
      this.prev = this.current--;
    }
  }

  onNext() {
    if (this.current < 5) {
      this.prev = this.current++ ;
    }
  }

  isLeftTransition(idx: number): boolean {
    return this.current === idx ? this.prev > this.current : this.prev < this.current;
  }

}
