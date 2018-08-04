import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpParams } from '../../../../node_modules/@angular/common/http';
import { ISearch } from '../../interfaces/isearch';
import { ServerService } from '../../services/server.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  apiResult;
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
  // listVals = Observable.of([20, 32, 56, 77]);
  // create an interface ISearch where all are optional paramters.

  // ?storageMin={from}&storageMax={to}&ram={ram}&hdd={hdd}&location={location}
  // eg., http://85.17.31.99:4300/api/servers?storageMin=250&
  // storageMax=44000&ram=2,4,6,34&hdd=SAS,SATA2&location=AmsterdamAMS-01

  // move API call to a service. pass the ISearch object to the Service's 'GET' method
  // use subject.
  // on changes to checkbox, range slider or any of the dropdowns, emit a value to trigger an API call
  // and update the view with the search results 
  constructor(private _serverService: ServerService) { }

  ngOnInit() {
    // Initialize Params Object
    // let qparameters = new HttpParams();

    // // Begin assigning parameters
    // qparameters = qparameters.append('ram', [2, 4, 6, 34].toString());
    // qparameters = qparameters.append('hdd', ['SAS', 'SATA2'].toString());

    // this.apiResult = this._http.get("http://85.17.31.99:4300/api/servers", { params: qparameters });
    // passing a sample object for testing purpose.

    // const obj = {};
    // obj['ram'] = [2, 4, 6, 34];
    // obj['hdd'] = ['SAS', 'SATA2'];

    // this.apiResult = this._serverService.getServers(obj);
    this.apiResult = this._serverService.search
      .pipe(
        switchMap(p => {
          return this._serverService.getServers(p);
        })
      )
  }

  updateSearch(key, value) {
    // let obj = {};
    // obj[key] = value;
    // this.search = { ...this.search, ...obj };
    this.search[key] = value;
    this._serverService.search.next(this.search);
  }

}
