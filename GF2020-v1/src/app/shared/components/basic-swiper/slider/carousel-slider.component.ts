import { Component, OnInit, Input } from '@angular/core';
import {
  slideInLeftAnimation,
  slideInRightAnimation,
  slideOutLeftAnimation,
  slideOutRightAnimation,
} from './lib';

@Component({
  selector: 'carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss'],
  animations: [
    slideInLeftAnimation({duration: 500}),
    slideInRightAnimation({duration: 500}),
    slideOutLeftAnimation({duration: 500}),
    slideOutRightAnimation({duration: 500}),
  ]
})
export class CarouselSliderComponent implements OnInit {

  @Input() isIn = true;
  @Input() left = true;

  get right() {
    return !this.left;
  }

  get isOut() {
    return !this.isIn;
  }

  constructor() { }

  ngOnInit() {
  }

}
