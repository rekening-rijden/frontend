import {Coordinates} from "./coordinates";

export interface Route {
  id: number;
  startTime: Date;
  endTime: Date;
  coordinates: Coordinates[];
}
