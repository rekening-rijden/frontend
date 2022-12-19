import {InvoiceStatus} from "./invoiceStatus";

export interface Invoice {
  id: number;
  carId: number;
  date: Date;
  totalPrice: number;
  paymentLink: string;
  status?: InvoiceStatus;
}
