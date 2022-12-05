import {Component, Input, OnInit} from '@angular/core';
import {Baseprice} from "../baseprice";
import {BasepriceService} from "../baseprice.service";

@Component({
  selector: 'app-update-baseprice',
  templateUrl: './update-baseprice.component.html',
  styleUrls: ['./update-baseprice.component.css']
})
export class UpdateBasepriceComponent implements OnInit {

  @Input() public baseprice: Baseprice = {kilometerTax: 0, engineType: ""};

  constructor(private service: BasepriceService) { }

  ngOnInit(): void {
  }

  updateBasePrice() {
    this.service.putBaseprice(this.baseprice);
  }

  deleteBasePrice() {
    this.service.deleteBasePrice(this.baseprice.engineType)
  }
}
