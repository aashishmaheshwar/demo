import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@node_modules/@angular/common/http";
import { Observable, BehaviorSubject } from "@node_modules/rxjs";
import { ISearch } from "../interfaces/isearch";

export const FILTERS = {
  ram: ["2", "4", "8", "12", "16", "24", "32", "48", "64", "96"],
  hardisk: ["SAS", "SATA2", "SSD"],
  location: [
    "AmsterdamAMS-01",
    "Washington D.C.WDC-01",
    "San FranciscoSFO-12",
    "SingaporeSIN-11",
    "DallasDAL-10",
    "FrankfurtFRA-10",
    "Hong KongHKG-10"
  ],
  storage: [
    0,
    250,
    500,
    1000,
    2000,
    3000,
    4000,
    8000,
    12000,
    24000,
    48000,
    72000
  ]
};

@Injectable({
  providedIn: "root"
})
export class ServerService {
  public search: BehaviorSubject<ISearch> = new BehaviorSubject<ISearch>({});

  constructor(private _http: HttpClient) {}

  getFilters() {
    // Actual result will come from an API.
    return FILTERS;
  }

  getServers(params): Observable<any> {
    let qparameters = new HttpParams();
    Object.keys(params).forEach(key => {
      qparameters = qparameters.append(key, params[key].toString());
    });
    return this._http.get("http://85.17.31.99:4300/api/servers", {
      params: qparameters
    });
  }
}
