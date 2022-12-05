import {Time} from "@angular/common";

export class Timetax {
  id: number = 0;
  surTax: number = 0;
  startTime: Time | undefined;
  endTime: Time | undefined;
  dayOfWeek: number = 0;
}
