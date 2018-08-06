import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit, OnChanges {
  @Input() options: [any];
  @Input() title: string;
  @Input() clear: boolean;
  @Output() changeObj: EventEmitter<any> = new EventEmitter<any>();
  rangeValues = [];
  actualValues = [];
  constructor() { }

  ngOnInit() {
    this.rangeValues.push(0);
    this.rangeValues.push(this.options.length - 1);
    this.actualValues.push(this.options[this.rangeValues[0]]);
    this.actualValues.push(this.options[this.rangeValues[1]]);
  }

  ngOnChanges() {
    if (this.clear) {
      this.rangeValues.push(0);
      this.rangeValues.push(this.options.length - 1);
      this.actualValues.push(this.options[this.rangeValues[0]]);
      this.actualValues.push(this.options[this.rangeValues[1]]);
      this.changeObj.emit(this.actualValues);
    }
  }

  handleChange(e) {
    this.actualValues = [];
    this.actualValues.push(this.options[e.values[0]]);
    this.actualValues.push(this.options[e.values[1]]);
    this.changeObj.emit(this.actualValues);
  }

}
