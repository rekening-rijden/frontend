import { Component, OnInit } from '@angular/core';
import {Baseprice} from "../baseprice";
import {BasepriceService} from "../baseprice.service";

@Component({
  selector: 'app-create-baseprice',
  templateUrl: './create-baseprice.component.html',
  styleUrls: ['./create-baseprice.component.css']
})
export class CreateBasepriceComponent implements OnInit {

  public baseprice: Baseprice = {kilometerTax: 0, engineType: ""};

  constructor(private service: BasepriceService) { }

  ngOnInit(): void {
  }

  createBasePrice(){
    this.service.postBaseprice(this.baseprice);
    // reset form
    this.baseprice = {kilometerTax: 0, engineType: ""};
  }

}
