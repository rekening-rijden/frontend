import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Baseprice} from "../baseprice";
import {BasepriceService} from "../baseprice.service";

@Component({
  selector: 'app-create-baseprice',
  templateUrl: './create-baseprice.component.html',
  styleUrls: ['./create-baseprice.component.css']
})
export class CreateBasepriceComponent implements OnInit {

  public baseprice: Baseprice = {surTax: 0, engineType: ""};
  @Output() create: EventEmitter<any> = new EventEmitter();

  constructor(private service: BasepriceService) { }

  ngOnInit(): void {
  }

  createBasePrice(){
    this.service.postBaseprice(this.baseprice).subscribe(
      () => this.create.emit()
    );
    // reset form
    this.baseprice = {surTax: 0, engineType: ""};
  }

}
