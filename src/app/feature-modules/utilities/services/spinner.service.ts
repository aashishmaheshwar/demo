import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SpinnerService {
  display = "none";

  startLoading() {
    this.display = "block";
  }

  stopLoading() {
    this.display = "none";
  }
}
