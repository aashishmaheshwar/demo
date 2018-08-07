import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-multi-checkbox",
  templateUrl: "./multi-checkbox.component.html",
  styleUrls: ["./multi-checkbox.component.css"]
})
export class MultiCheckboxComponent implements OnChanges {
  @Input() options: any;
  @Input() title: string;
  @Input() clear: boolean;
  @Output() changeObj: EventEmitter<any> = new EventEmitter<any>();
  selectedCheckBoxes = [];

  ngOnChanges() {
    if (this.clear) {
      let clist = document.getElementsByTagName("input");
      for (var i = 0; i < clist.length; ++i) {
        clist[i].checked = false;
      }
      this.selectedCheckBoxes = [];
    }
  }

  onChangeSelection(option, checked) {
    if (this.selectedCheckBoxes.indexOf(option.key) === -1 && checked) {
      this.selectedCheckBoxes.push(option.key);
    }
    if (this.selectedCheckBoxes.indexOf(option.key) !== -1 && !checked) {
      this.selectedCheckBoxes.splice(
        this.selectedCheckBoxes.indexOf(option.key),
        1
      );
    }
    this.changeObj.emit(this.selectedCheckBoxes);
  }
}
