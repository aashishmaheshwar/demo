import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ISearch } from '../interfaces/isearch';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  apiResult;
  search: ISearch;
  // listVals = Observable.of([20, 32, 56, 77]);
  // create an interface ISearch where all are optional paramters.

  // ?storageMin={from}&storageMax={to}&ram={ram}&hdd={hdd}&location={location}
  // eg., http://85.17.31.99:4300/api/servers?storageMin=250&
  // storageMax=44000&ram=2,4,6,34&hdd=SAS,SATA2&location=AmsterdamAMS-01

  // move API call to a service. pass the ISearch object to the Service's 'GET' method
  // use subject.
  // on changes to checkbox, range slider or any of the dropdowns, emit a value to trigger an API call
  // and update the view with the search results 
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.apiResult = this._http.get("http://85.17.31.99:4300/api/servers");
  }

}
