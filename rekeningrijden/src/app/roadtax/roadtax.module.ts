import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoadtaxComponent } from './view-roadtax/view-roadtax.component';
import { UpdateRoadtaxComponent } from './update-roadtax/update-roadtax.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { CreateRoadtaxComponent } from './create-roadtax/create-roadtax.component';
import {FlexModule} from "@angular/flex-layout";

@NgModule({
    declarations: [
        ViewRoadtaxComponent,
        UpdateRoadtaxComponent,
        CreateRoadtaxComponent
    ],
  exports: [
    UpdateRoadtaxComponent,
    CreateRoadtaxComponent,
    ViewRoadtaxComponent
  ],
    imports: [
        CommonModule,
        MatInputModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        FlexModule
    ]
})
export class RoadtaxModule { }
