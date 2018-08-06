import { Component, OnInit, Input, Output, EventEmitter, OnChanges, Renderer2, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-multi-checkbox',
  templateUrl: './multi-checkbox.component.html',
  styleUrls: ['./multi-checkbox.component.css']
})
export class MultiCheckboxComponent implements OnInit, OnChanges {

  @Input() options: any;
  @Input() title: string;
  @Input() clear: boolean;
  @Output() changeObj: EventEmitter<any> = new EventEmitter<any>();
  selectedCheckBoxes = [];
  constructor(private _renderer: Renderer2, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.clear) {
      let clist = document.getElementsByTagName("input");
      for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
      this.selectedCheckBoxes = [];
    }
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
