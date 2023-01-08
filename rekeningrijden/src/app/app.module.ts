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
import {FlexModule} from "@angular/flex-layout";
import {ViewBasepriceComponent} from "./baseprice/view-baseprice/view-baseprice.component";
import {ViewRoadtaxComponent} from "./roadtax/view-roadtax/view-roadtax.component";
import {ViewTaxComponent} from "./tax/view-tax/view-tax.component";
import {UpdateBasepriceComponent} from "./baseprice/update-baseprice/update-baseprice.component";
import {UpdateRoadtaxComponent} from "./roadtax/update-roadtax/update-roadtax.component";
import {UpdateTimetaxComponent} from "./timetax/update-timetax/update-timetax.component";
import {ViewTimetaxComponent} from "./timetax/view-timetax/view-timetax.component";
import {CreateBasepriceComponent} from "./baseprice/create-baseprice/create-baseprice.component";
import {CreateRoadtaxComponent} from "./roadtax/create-roadtax/create-roadtax.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InterpolComponent,
    LoginComponent,
    NotfoundComponent,
    SelectcarComponent,
    VehicleComponent,
    InvoiceComponent,
    ViewBasepriceComponent,
    ViewRoadtaxComponent,
    ViewTimetaxComponent,
    ViewTaxComponent,
    UpdateBasepriceComponent,
    UpdateRoadtaxComponent,
    UpdateTimetaxComponent,
    CreateBasepriceComponent,
    CreateRoadtaxComponent,
    ThankyouComponent
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
    FormsModule,
    MatTabsModule,
    FlexModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
