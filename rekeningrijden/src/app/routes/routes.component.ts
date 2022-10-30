import { Component, OnInit } from '@angular/core';
import {Route} from "../route";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})


export class RoutesComponent implements OnInit {

  routes: Route[] = [
    {
      id: 1,
      startTime: Date.now(),
      endTime: Date.now(),
      coordinates: [
        {
          id: 1,
          lat: 51.52299593476419,
          lng: -0.19152421653348986
        },
        {
          id: 2,
          lat: 51.52827380184955,
          lng: -0.07782908841120996
        }
      ]
    },
    {
      id: 2,
      startTime: Date.now(),
      endTime: Date.now(),
      coordinates: [
        {
          id: 1,
          lat: 51.52299593476419,
          lng: -0.19152421653348986
        },
        {
          id: 2,
          lat: 51.52827380184955,
          lng: -0.07782908841120996
        }
      ]
    }]

  constructor() { }

  ngOnInit(): void {
  }

}
