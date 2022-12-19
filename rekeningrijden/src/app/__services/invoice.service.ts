import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Invoice} from "../__models/invoice";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoiceUrl = 'http://localhost:8080/billing/invoice';
  constructor(private http: HttpClient) { }

  getInvoicesByCarId(carId: number): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.invoiceUrl + "/getall/" + carId);
  }

  getInvoiceById(invoiceId: number) {
    return this.http.get<Invoice>(this.invoiceUrl + "/" + invoiceId);
  }
}
