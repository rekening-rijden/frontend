import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTimetaxComponent } from './update-timetax/update-timetax.component';
import { ViewTimetaxComponent } from './view-timetax/view-timetax.component';
import {BasepriceModule} from "../baseprice/baseprice.module";
import {RoadtaxModule} from "../roadtax/roadtax.module";



@NgModule({
  declarations: [
    UpdateTimetaxComponent,
    ViewTimetaxComponent
  ],
  imports: [
    CommonModule,
    BasepriceModule,
    RoadtaxModule
  ]
})
export class TimetaxModule { }
