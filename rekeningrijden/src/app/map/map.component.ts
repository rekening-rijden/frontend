import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import {Route} from "../models/route";
import {RouteService} from "../services/route.service";
import {RowClickedEvent} from "ag-grid-community";
import {Observable} from "rxjs";
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import {AgGridAngular} from "ag-grid-angular";
import {HttpClient} from "@angular/common/http";
import {Coordinates} from "../models/coordinates";

const CURRENT_USER /*currentVehicle*/ = 1 //JSON.parse(localStorage.getItem('currentUser'));

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  public routingcontrol = L.Routing.control({
    fitSelectedRoutes: true,
    draggableWaypoints: false,
    routeWhileDragging: false,
    createMarker: function() { return null; },
    // @ts-ignore
    lineOptions : {
      styles: [{color: 'purple', opacity: 1, weight: 5}],
      addWaypoints: false
    },
  })

  public columnDefs: ColDef[] = [
    { field: 'startTime'},
    { field: 'endTime'},
    { field: 'Total distance' }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private routeService: RouteService, private http: HttpClient) { }

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.getRoutes();
  }

  ngAfterViewInit(): void {
    this.initMap();
    // @ts-ignore
    this["routingcontrol"].getContainer().style.display = 'none';
  }

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
    // this.removeRoutesFromMap();
    // let coordinates = this.getCoordinatesFromRouteId(e.data.id);
    this.addRouteToMap(e.data.coordinates);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  // @ts-ignore
  private map;

  initMap(): void {
    this.map = L.map('map', {
      center: [ 51.5007, -0.1245 ],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18
    });
    tiles.addTo(this.map);

    this.routingcontrol.addTo(this.map);
  }

  getRoutes(): void {
    this.rowData$ = this.routeService.getRoutes();
  }

  public waypoints_= [];
  addRouteToMap(coordinates: Coordinates[]): void {
    this.waypoints_ = [];
    console.log("Coordinates: ", coordinates);

    for (let i = 0; i < coordinates.length; i++) {
      // @ts-ignore
      this.waypoints_.push(L.latLng(coordinates[i].lat, coordinates[i].lng));
    }
    console.log("Waypoints: ", this.waypoints_);
    this.routingcontrol.getPlan().setWaypoints(this.waypoints_);
  }
  //
  // private getCoordinatesFromRouteId(id: string): Coordinates[] {
  //   return this.routeService.getCoordinatesFromRouteId(id).subscribe();
  // }
}
