import { Component } from "@angular/core";
import { SpinnerService } from "../../services/spinner.service";

@Component({
  selector: "devon-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.css"]
})
export class SpinnerComponent {
  constructor(public _spinnerService: SpinnerService) {}
}
