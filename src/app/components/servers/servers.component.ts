import { Component, OnInit } from "@angular/core";
import { ISearch } from "@interfaces/isearch";
import { ServerService } from "@services/server.service";
import { switchMap, catchError, debounceTime } from "rxjs/operators";
import { throwError } from "@node_modules/rxjs";

@Component({
  selector: "devon-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  apiResult;
  clearFilter = false;
  filterDisabled = true;
  search: ISearch = {};
  ram_checkboxVals;
  hardisk_multiSelVals;
  location_multiSelVals;
  storage_rangeVals;

  constructor(private _serverService: ServerService) {}

  ngOnInit() {
    this.initializeFilters();
    this.apiResult = this._serverService.search.pipe(
      debounceTime(1000),
      switchMap(p => {
        return this._serverService.getServers(p);
      }),
      catchError(error => {
        console.log(error);
        return throwError(error.message);
      })
    );
  }

  initializeFilters() {
    this.ram_checkboxVals = this._serverService
      .getFilters()
      ["ram"].map(elem => {
        let transform = {};
        transform["key"] = elem;
        transform["selected"] = false;
        return transform;
      });
    this.hardisk_multiSelVals = this._serverService
      .getFilters()
      ["hardisk"].map(elem => {
        let transform = {};
        transform["key"] = elem;
        transform["selected"] = false;
        return transform;
      });
    this.location_multiSelVals = this._serverService
      .getFilters()
      ["location"].map(elem => {
        let transform = {};
        transform["key"] = elem;
        transform["selected"] = false;
        return transform;
      });
    this.storage_rangeVals = [...this._serverService.getFilters()["storage"]]; // in GBs
  }

  updateStorage(value) {
    this.clearFilter = false;
    this.filterDisabled = false;
    this.search["storageMin"] = value[0];
    this.search["storageMax"] = value[1];
    this._serverService.search.next(this.search);
  }

  updateSearch(key, value) {
    this.clearFilter = false;
    if (value.toString() === "") {
      delete this.search[key];
    } else {
      this.search[key] = value;
    }
    if (JSON.stringify(this.search) !== "{}") {
      this.filterDisabled = false;
    } else {
      this.filterDisabled = true;
    }
    this._serverService.search.next(this.search);
  }

  clearFilters() {
    this.clearFilter = true;
    this.filterDisabled = true;
    this.search = {};
    this._serverService.search.next(this.search);
  }
}
