import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@node_modules/@angular/common/http';
import { Observable, BehaviorSubject } from '@node_modules/rxjs';
import { ISearch } from '../interfaces/isearch';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  // public params: ISearch = {};
  public search: BehaviorSubject<ISearch> = new BehaviorSubject<ISearch>({});

  constructor(private _http: HttpClient) { }

  getServers(params): Observable<any> {
    let qparameters = new HttpParams();
    Object.keys(params).forEach((key) => {
      qparameters = qparameters.append(key, params[key].toString());
    });
    return this._http.get("http://85.17.31.99:4300/api/servers", { params: qparameters });
  }
}
