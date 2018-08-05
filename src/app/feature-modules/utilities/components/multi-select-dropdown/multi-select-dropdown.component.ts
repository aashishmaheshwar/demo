import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.css']
})
export class MultiSelectDropdownComponent implements OnInit {

  @Input() options: any;
  @Input() title: string;
  @Output() changeObj: EventEmitter<any> = new EventEmitter<any>();
  selectedCheckBoxes = [];
  displayBox: string = 'none';
  selection: string = '';
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
    this.selection = this.selectedCheckBoxes.toString();
    this.changeObj.emit(this.selectedCheckBoxes);
  }

  openfor3secs() {
    setTimeout(() => {
      this.displayBox = 'none';
    }, 2000)
  }
}
