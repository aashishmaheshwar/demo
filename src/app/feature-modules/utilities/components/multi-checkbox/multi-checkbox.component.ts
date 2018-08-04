import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multi-checkbox',
  templateUrl: './multi-checkbox.component.html',
  styleUrls: ['./multi-checkbox.component.css']
})
export class MultiCheckboxComponent implements OnInit {

  @Input() options: any;
  @Input() title: string;
  @Output() changeObj: EventEmitter<any> = new EventEmitter<any>();
  selectedCheckBoxes = [];
  constructor() { }

  ngOnInit() {
  }

  onChangeSelection(option, checked) {
    if (this.selectedCheckBoxes.indexOf(option.key) === -1 && checked) {
      this.selectedCheckBoxes.push(option.key);
    }
    if (this.selectedCheckBoxes.indexOf(option.key) !== -1 && !checked) {
      this.selectedCheckBoxes.splice(this.selectedCheckBoxes.indexOf(option.key), 1);
    }
    this.changeObj.emit(this.selectedCheckBoxes);
  }
}
