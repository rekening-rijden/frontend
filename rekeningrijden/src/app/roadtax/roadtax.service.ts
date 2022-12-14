import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Roadtax} from "./roadtax";
import {environment as env} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoadtaxService {

  constructor(private http: HttpClient) {}

  readAllRoadtax(): Observable<Object> {
    return this.http.get(`${env.dev.serverUrl}/roadtax/all`);
  }

  postRoadtax(roadtax: Roadtax): Observable<Object> {
    return this.http.post<Roadtax>(`${env.dev.serverUrl}/roadtax`, roadtax);
  }

  putRoadtax(roadtax: Roadtax): Observable<Object> {
    return this.http.put<Roadtax>(`${env.dev.serverUrl}/roadtax`, roadtax);
  }

  deleteRoadtax(roadType: string): Observable<Object> {
    return this.http.delete(`${env.dev.serverUrl}/roadtax?roadType=` + roadType);
  }
}
