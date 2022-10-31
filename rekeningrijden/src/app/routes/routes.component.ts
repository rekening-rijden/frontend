import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { RoutesDataSource } from './routes-datasource';
import { Route } from '../Models/route';
import { Map, Control, DomUtil, ZoomAnimEvent , Layer, MapOptions, tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Route>;
  dataSource: RoutesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'startTime', 'endTime'];

  // // Leaflet stuff
  // @Output() map$: EventEmitter<Map> = new EventEmitter;
  // @Output() zoom$: EventEmitter<number> = new EventEmitter;
  // @Input() options: MapOptions= {
  //   layers:[tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     opacity: 0.7,
  //     maxZoom: 19,
  //     detectRetina: true,
  //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   })],
  //   zoom:1,
  //   center:latLng(0,0)
  // };
  // public map: Map;
  // public zoom: number = 5;

  constructor() {
    this.dataSource = new RoutesDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  //
  // ngOnDestroy() {
  //   this.map.clearAllEventListeners;
  //   this.map.remove();
  // };
  //
  // onMapReady(map: Map) {
  //   this.map = map;
  //   this.map$.emit(map);
  //   this.zoom = map.getZoom();
  //   this.zoom$.emit(this.zoom);
  // }
  //
  // onMapZoomEnd(e: ZoomAnimEvent) {
  //   this.zoom = e.target.getZoom();
  //   this.zoom$.emit(this.zoom);
  // }
}
