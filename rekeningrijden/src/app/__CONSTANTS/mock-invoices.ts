import { Invoice } from '../__models/invoice';

export const INVOICES: Invoice[] = [
// InvoiceId, carId, Date, Amount
  {id: 1, carId: 12, date: new Date('2022-09-18 18:02'), amount: 2.50},
  {id: 2, carId: 12, date: new Date('2022-10-29 11:04'), amount: 3.50},
  {id: 3, carId: 12, date: new Date('2022-10-30 09:42'), amount: 4.50},
];
