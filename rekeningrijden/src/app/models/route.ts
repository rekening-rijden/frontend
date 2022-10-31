import {Coordinates} from "./Coordinates";

export interface Route {
  id: number;
  startTime: number;
  endTime: number;
  coordinates: Coordinates[];
}
