import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {Map} from "leaflet";
import 'leaflet-routing-machine';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    this.initMap();
    this.addRouteToMap();
  }
  // @ts-ignore
  private map;
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 51.5007, -0.1245 ],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18
    });
    tiles.addTo(this.map);
  }

  private addRouteToMap(): void {
    L.Routing.control({
      waypoints: [
        L.latLng(51.5007, -0.1245),
        L.latLng(57.6792, 11.949)
      ]
    }).addTo(this.map);
  }
}
