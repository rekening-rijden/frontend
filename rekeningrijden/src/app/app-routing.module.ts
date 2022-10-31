import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesComponent} from "./routes/routes.component";
import {MapComponent} from "./map/map.component";

const routes: Routes = [
  //route for routes component
  { path: 'routes', component: RoutesComponent },
  //route for map component
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
