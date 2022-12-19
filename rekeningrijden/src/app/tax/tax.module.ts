import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoadtaxModule} from "../roadtax/roadtax.module";
import {BasepriceModule} from "../baseprice/baseprice.module";
import {TimetaxModule} from "../timetax/timetax.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RoadtaxModule,
    BasepriceModule,
    TimetaxModule
  ]
})
export class TaxModule { }
