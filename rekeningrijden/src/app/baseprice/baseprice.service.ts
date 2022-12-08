import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Baseprice} from "./baseprice";
import {environment as env} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BasepriceService {

  constructor(private http: HttpClient) {}

  readAllBasePrices(): Observable<Object> {
    return this.http.get(`${env.dev.serverUrl}/baseprice/all`);
  }

  postBaseprice(baseprice: Baseprice): Observable<Object> {
    return this.http.post<Baseprice>(`${env.dev.serverUrl}/baseprice`, baseprice);
  }

  putBaseprice(baseprice: Baseprice): Observable<Object> {
    return this.http.put<Baseprice>(`${env.dev.serverUrl}/baseprice`, baseprice);
  }

  deleteBasePrice(engineType: string): Observable<Object> {
    return this.http.delete(`${env.dev.serverUrl}/baseprice/` + engineType);
  }
}
