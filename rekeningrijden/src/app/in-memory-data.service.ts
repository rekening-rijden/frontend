import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Route} from "./__models/route";
import {Invoice} from "./__models/invoice";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const routes = [
      // RouteId, carId, startTime, endTime, coordinates[]
      {id: 1, carId: 12, startTime: new Date('2022-09-18 17:32'), endTime: new Date('2022-09-18 18:02'), coordinates: [{lat: 51.5007, lng: -0.1245}, {lat: 51.303, lng: -0.831}, {lat: 51.303, lng: -0.1245}]},
      {id: 2, carId: 12, startTime: new Date('2022-10-29 09:29'), endTime: new Date('2022-10-29 11:04'), coordinates: [{lat: 51.5007, lng: -0.1245}, {lat: 51.4575, lng: -0.1175}]},
      {id: 3, carId: 12, startTime: new Date('2022-10-30 08:02'), endTime: new Date('2022-10-30 09:42'), coordinates: [{lat: 51.5007, lng: -0.1245}, {lat: 4, lng: 4}]},
      {id: 4, carId: 12, startTime: new Date('2022-11-1 06:14'), endTime: new Date('2022-11-01 08:51'), coordinates: [{lat: 51.5007, lng: -0.1245}, {lat: 5, lng: 5}]},
    ];

    return {routes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(routes: Route[]): number {
    return routes.length > 0 ? Math.max(...routes.map(route => route.id)) + 1 : 11;
  }
}
