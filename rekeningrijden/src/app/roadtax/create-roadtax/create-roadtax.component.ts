import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Roadtax} from "../roadtax";
import {RoadtaxService} from "../roadtax.service";

@Component({
  selector: 'app-create-roadtax',
  templateUrl: './create-roadtax.component.html',
  styleUrls: ['./create-roadtax.component.css']
})
export class CreateRoadtaxComponent implements OnInit {

  public roadtax: Roadtax = {surTax: 0, roadType: ""};
  @Output() create: EventEmitter<any> = new EventEmitter();

  constructor(private service: RoadtaxService) { }

  ngOnInit(): void {
  }

  createRoadTax(){
    if(this.roadtax.roadType != ''){
      this.service.postRoadtax(this.roadtax).subscribe(
        () => this.create.emit()
      );
      // reset form
      this.roadtax = {surTax: 0, roadType: ""};
    }
  }

}
