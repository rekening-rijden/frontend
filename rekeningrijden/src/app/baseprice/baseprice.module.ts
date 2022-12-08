import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBasepriceComponent } from './view-baseprice/view-baseprice.component';
import { UpdateBasepriceComponent } from './update-baseprice/update-baseprice.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { CreateBasepriceComponent } from './create-baseprice/create-baseprice.component';
import {FlexModule} from "@angular/flex-layout";

@NgModule({
    declarations: [
        ViewBasepriceComponent,
        UpdateBasepriceComponent,
        CreateBasepriceComponent
    ],
  exports: [
    UpdateBasepriceComponent,
    ViewBasepriceComponent
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
export class BasepriceModule { }
