import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Invoice} from "../__models/invoice";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoiceUrl = 'api/invoices';
  constructor(private http: HttpClient) { }

  getInvoicesByCarId(carId: number): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.invoiceUrl + "/" + carId)
      .pipe(
        catchError(this.handleError<Invoice[]>('getInvoices', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
