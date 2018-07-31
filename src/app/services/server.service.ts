import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private _http: HttpClient) { }

  getServers(params): Observable<any> {
    let qparameters = new HttpParams();
    Object.keys(params).forEach((key) => {
      qparameters = qparameters.append(key, params[key].toString());
    });
    return this._http.get("http://85.17.31.99:4300/api/servers", { params: qparameters });
  }
}
