import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() color;
  @Input() checked;
  @Input() disabled;
  @Input() label;

  @Input() name;

  @Output()
  slideChecked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSlideChange(name) {
    console.log('changed.......', this.checked);
    this.slideChecked.emit({[name]:!this.checked});
  }

}
