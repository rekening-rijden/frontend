import {Coordinates} from "./coordinates";

export interface Route {
  id: number;
  carId: number;
  startTime: Date;
  endTime: Date;
  coordinates: Coordinates[];
}
