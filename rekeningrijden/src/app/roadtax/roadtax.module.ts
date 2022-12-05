import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateRoadtaxComponent } from './update-roadtax/update-roadtax.component';
import { ViewRoadtaxComponent } from './view-roadtax/view-roadtax.component';



@NgModule({
  declarations: [
    UpdateRoadtaxComponent,
    ViewRoadtaxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoadtaxModule { }
