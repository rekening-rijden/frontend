import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { MapComponent } from './map/map.component';
import { HttpClientModule } from "@angular/common/http";
import {AgGridModule} from "ag-grid-angular";
import { InterpolComponent } from './interpol/interpol.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {FormsModule} from "@angular/forms";
import { SelectcarComponent } from './selectcar/selectcar.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {MatTabsModule} from "@angular/material/tabs";
import { InvoiceComponent } from './invoice/invoice.component';
import {TimetaxModule} from "./timetax/timetax.module";
import {RoadtaxModule} from "./roadtax/roadtax.module";
import {BasepriceModule} from "./baseprice/baseprice.module";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InterpolComponent,
    LoginComponent,
    NotfoundComponent,
    SelectcarComponent,
    VehicleComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LeafletModule,
    HttpClientModule,
    AgGridModule,

    BasepriceModule,
    TimetaxModule,
    RoadtaxModule,

    FormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
