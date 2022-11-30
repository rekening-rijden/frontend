import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RouteService} from "../__services/route.service";
import {HttpClient} from "@angular/common/http";
import {InvoiceService} from "../__services/invoice.service";
import {Invoice} from "../__models/invoice";
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute, Route} from "@angular/router";
import {CellClickedEvent, ColDef, GridReadyEvent} from "ag-grid-community";
import {AgGridAngular} from "ag-grid-angular";
import {INVOICES} from "../__CONSTANTS/mock-invoices";
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit, OnDestroy {
  private carId: number = 0;
  private sub: any;
  selectedIndex: number = 0;
  selectedInvoiceId: number = 0;
  invoices: Invoice[] = [];
  @ViewChild(MapComponent) mapComponent!: MapComponent
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  constructor(private invoiceService: InvoiceService,
              private http: HttpClient,
              private route: ActivatedRoute,
              private routeService: RouteService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.carId = +params['id']; // (+) converts string 'id' to a number
    })
    if(this.carId != 0 && this.carId != undefined) {
      this.getInvoicesByCarId(this.carId);
    }
  }

  onTabChange(event: any) {
    this.selectedIndex = event;
    console.log("index: " + this.selectedIndex);
    console.log("event: " + event);
  }

  getInvoicesByCarId(carId: number) {
    this.invoices = INVOICES.filter(invoice => invoice.carId == carId);
    if(this.invoices.length > 0) {
      this.selectedInvoiceId = this.invoices[0].id;
    }
    // this.invoiceService.getInvoicesByCarId(carId).subscribe(
    //   data => {
    //     this.invoices = data;
    //     console.log(this.invoices);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

  getRoutesByCarId(carId: number) {
    this.rowData$ = this.routeService.getRoutes();
    console.log("Routes: " + this.rowData$);
  }

  invoiceOnSelect(invoiceId: number) {
    this.selectedInvoiceId = invoiceId;
    console.log("selected invoice: " + this.selectedInvoiceId);
  }



  // ROUTE

  public columnDefs: ColDef[] = [
    { field: 'startTime'},
    { field: 'endTime'},
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  onGridReady(params: GridReadyEvent) {
    this.getRoutesByCarId(this.carId);

  }

  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
    this.mapComponent.addRouteToMap(e.data.coordinates);
    // this.removeRoutesFromMap();
    // let coordinates = this.getCoordinatesFromRouteId(e.data.id);
    //this.addRouteToMap(e.data.coordinates);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
