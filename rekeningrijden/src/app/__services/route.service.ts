import { Injectable } from '@angular/core';
import {Route} from "../__models/route";
import {catchError, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ROUTES} from "../__CONSTANTS/mock-routes";

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private routesUrl = 'api/routes';

  // routes: Route[] = [
  //   {id: '1', startTime: new Date('2022-09-18 17:32'), endTime: new Date('2022-09-18 18:02'), coordinates: [{lat: 1, lng: 1}, {lat: 2, lng: 2}]},
  //   {id: '2', startTime: new Date('2022-10-29 09:29'), endTime: new Date('2022-10-29 11:04'), coordinates: [{lat: 2, lng: 2}, {lat: 3, lng: 3}]},
  //   {id: '3', startTime: new Date('2022-10-30 08:02'), endTime: new Date('2022-10-30 09:42'), coordinates: [{lat: 3, lng: 3}, {lat: 4, lng: 4}]},
  //   {id: '4', startTime: new Date('2022-11-1 06:14'), endTime: new Date('2022-11-01 08:51'), coordinates: [{lat: 4, lng: 4}, {lat: 5, lng: 5}]},
  // ]
  constructor(private http: HttpClient) { }

  getRoutes(): Observable<Route[]> {
    return new Observable<Route[]>(subscriber => {
      subscriber.next(ROUTES);
    })
    // return this.http.get<Route[]>(this.routesUrl)
    //   .pipe(
    //     catchError(this.handleError<Route[]>('getRoutes', []))
    //   );
  }

  getRoutesById(id: number): Observable<Route[]> {
    return this.http.get<Route[]>(this.routesUrl + '/' + id)
      .pipe(
        catchError(this.handleError<Route[]>('getRoutes', []))
      );
  }

  // getCoordinatesFromRouteId(id: string) {
  //   return this.http.get(this.)
  // }

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
