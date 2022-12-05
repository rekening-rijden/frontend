import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTimetaxComponent } from './update-timetax/update-timetax.component';
import { ViewTimetaxComponent } from './view-timetax/view-timetax.component';



@NgModule({
  declarations: [
    UpdateTimetaxComponent,
    ViewTimetaxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TimetaxModule { }
