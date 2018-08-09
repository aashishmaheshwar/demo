import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@node_modules/@angular/common/http";
import { Observable, BehaviorSubject } from "@node_modules/rxjs";
import { of } from "@node_modules/rxjs";
import { ISearch } from "../interfaces/isearch";
import { SERVERDATA } from "@services/serverdata.model";

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

  getServers_StaticData(params): Observable<any> {
    let data = SERVERDATA["servers"];
    Object.keys(params).forEach(key => {
      let success = function(x) {
        if (Array.isArray(params[key])) {
          switch (key) {
            case "ram": {
              return params[key].indexOf(x["ram"]["memory"]) !== -1;
            }
            case "hdd": {
              return params[key].indexOf(x["hdd"]["type"]) !== -1;
            }
            case "location": {
              return params[key].indexOf(x["location"]) !== -1;
            }
          }
        } else {
          return true;
        }
      };
      data = data.filter(success);
    });
    data = this.getStorageFilterResult(data, params);
    let finalResult = {};
    finalResult["servers"] = data;
    return of(finalResult);
  }

  getStorageFilterResult(data, params) {
    let storageTemp = 0;
    let unit = "TB";
    let storeMin = 0;
    let storeMax = 0;
    storeMin = params["storageMin"] / 1000;
    storeMax = params["storageMax"] / 1000;
    let successForStorage = function(x) {
      if (
        params["storageMin"] !== undefined &&
        params["storageMax"] !== undefined
      ) {
        unit = x["hdd"]["unit"];
        storageTemp = +x["hdd"]["memory"] * +x["hdd"]["count"];
        if (unit === "TB") {
          return storageTemp >= storeMin && storageTemp <= storeMax;
        } else {
          storageTemp = storageTemp / 1000;
          return storageTemp >= storeMin && storageTemp <= storeMax;
        }
      } else {
        return true;
      }
    };
    data = data.filter(successForStorage);
    return data;
  }
}
