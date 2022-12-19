import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {Invoice} from "../__models/invoice";
import {InvoiceService} from "../__services/invoice.service";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  @Input() invoiceId: number = 0;

  invoice: Invoice | undefined;
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.getInvoiceById(this.invoiceId);
  }

  getInvoiceById(invoiceId: number) {
   this.invoiceService.getInvoiceById(invoiceId).subscribe(
      data => {
        this.invoice = data;
        console.log("Invoice: " + invoiceId);
        console.log(this.invoice);
      }
   );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.getInvoiceById(this.invoiceId);
  }
}
