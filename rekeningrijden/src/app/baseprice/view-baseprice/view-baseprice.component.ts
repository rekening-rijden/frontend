import { Component, OnInit } from '@angular/core';
import {BasepriceService} from "../baseprice.service";
import {Baseprice} from "../baseprice";

@Component({
  selector: 'app-view-baseprice',
  templateUrl: './view-baseprice.component.html',
  styleUrls: ['./view-baseprice.component.css']
})
export class ViewBasepriceComponent implements OnInit {

  public baseprices: Array<Baseprice> = [];

  constructor(private service: BasepriceService) { }

  ngOnInit(): void {
    this.service.readAllBasePrices().subscribe(
      response => {
        console.log(response)
        this.baseprices = response as Baseprice[];
      }
    )
  }

  updateData() {
    console.log("event")
    this.service.readAllBasePrices().subscribe(
      response => {
        this.baseprices = response as Baseprice[];
      }
    )
  }
}
