import { Component, OnInit } from '@angular/core';
import { ISearch } from '../../interfaces/isearch';
import { ServerService } from '../../services/server.service';
import { switchMap, catchError, debounceTime } from 'rxjs/operators';
import { throwError } from '@node_modules/rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  apiResult;
  clearFilter = false;
  filterDisabled = true;
  search: ISearch = {};
  checkboxVals = [
    { key: '2', selected: false },
    { key: '4', selected: false },
    { key: '8', selected: false },
    { key: '12', selected: false },
    { key: '16', selected: false },
    { key: '24', selected: false },
    { key: '32', selected: false },
    { key: '48', selected: false },
    { key: '64', selected: false },
    { key: '96', selected: false }
  ];
  hardisk_multiSelVals = [
    { key: 'SAS', selected: false },
    { key: 'SATA2', selected: false },
    { key: 'SSD', selected: false }
  ];
  location_multiSelVals = [
    { key: 'AmsterdamAMS-01', selected: false },
    { key: 'Washington D.C.WDC-01', selected: false },
    { key: 'San FranciscoSFO-12', selected: false },
    { key: 'SingaporeSIN-11', selected: false },
    { key: 'DallasDAL-10', selected: false },
    { key: 'FrankfurtFRA-10', selected: false },
    { key: 'Hong KongHKG-10', selected: false }
  ];
  storage_rangeVals = [0, 250, 500, 1000, 2000, 3000, 4000, 8000, 12000, 24000, 48000, 72000]; // all in GBs
  // above is the input for rangeslider

  constructor(private _serverService: ServerService) { }

  ngOnInit() {
    this.apiResult = this._serverService.search
      .pipe(
        debounceTime(1000),
        switchMap(p => {
          return this._serverService.getServers(p);
        }),
        catchError(error => {
          console.log(error);
          return throwError(error.message);
        })
      )
  }

  updateStorage(value) {
    this.clearFilter = false;
    this.filterDisabled = false;
    this.search['storageMin'] = value[0];
    this.search['storageMax'] = value[1];
    this._serverService.search.next(this.search);
  }

  updateSearch(key, value) {
    this.clearFilter = false;
    if (value.toString() === '') {
      delete this.search[key];
    } else {
      this.search[key] = value;
    }
    if (JSON.stringify(this.search) !== '{}') {
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
