import {Component, Input, OnInit} from '@angular/core';
import {Baseprice} from "../baseprice";
import {BasepriceService} from "../baseprice.service";

@Component({
  selector: 'app-update-baseprice',
  templateUrl: './update-baseprice.component.html',
  styleUrls: ['./update-baseprice.component.css']
})
export class UpdateBasepriceComponent implements OnInit {

  @Input() public baseprice: Baseprice = {surTax: 0, engineType: ""};

  constructor(private service: BasepriceService) { }

  ngOnInit(): void {
  }

  updateBasePrice() {
    this.service.putBaseprice(this.baseprice).subscribe(
      result => {

      }
    );
  }

  deleteBasePrice() {
    if(window.confirm("Are you sure you want to delete baseprice for enginetype " + this.baseprice.engineType + "?")){
      this.service.deleteBasePrice(this.baseprice.engineType).subscribe(
        result => {
          console.log("deleted")
        }
      );
    }
  }
}
