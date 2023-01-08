import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapComponent} from "./map/map.component";
import {LoginComponent} from "./login/login.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {SelectcarComponent} from "./selectcar/selectcar.component";
import {VehicleComponent} from "./vehicle/vehicle.component";
import {ViewTaxComponent} from "./tax/view-tax/view-tax.component";
import {ThankyouComponent} from "./thankyou/thankyou.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  //route for map component
  { path: 'map', component: MapComponent },
  { path: 'selectcar', component: SelectcarComponent },
  { path: 'vehicle/:id', component: VehicleComponent },
  { path: 'tax', component: ViewTaxComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
