import { Injectable } from '@angular/core';
import {Route} from "../models/route";
import {catchError, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Coordinate} from "../models/coordinate";

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private baseUrl = 'http://localhost:8080/';
  private routesUrl = this.baseUrl.concat('api/v1/route/vehicleid/');

  constructor(private http: HttpClient) { }

  getRoutesByVehicleId(vehicleId: number): Observable<Route[]> {
    return this.http.get<Route[]>(this.routesUrl.concat(vehicleId.toString()))
      .pipe(
        catchError(this.handleError<Route[]>('getRoutes', []))
      );
  }

  getCoordinatesFromRouteId(id: string) {
    return this.http.get<Coordinate[]>(this.baseUrl.concat('api/v1/route/coordinates/').concat(id))
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
