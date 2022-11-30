import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {Invoice} from "../__models/invoice";
import {INVOICES} from "../__CONSTANTS/mock-invoices";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  @Input() invoiceId: number = 0;

  invoice: Invoice | undefined;
  constructor() { }

  ngOnInit(): void {
    this.getInvoiceById(this.invoiceId);
  }

  getInvoiceById(invoiceId: number) {
    this.invoice = INVOICES.find(invoice => invoice.id == invoiceId);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.getInvoiceById(this.invoiceId);
  }
}
