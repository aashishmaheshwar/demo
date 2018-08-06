import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit {

  @Input() rangeVals: [any];
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
