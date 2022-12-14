import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Roadtax} from "../roadtax";
import {RoadtaxService} from "../roadtax.service";

@Component({
  selector: 'app-update-roadtax',
  templateUrl: './update-roadtax.component.html',
  styleUrls: ['./update-roadtax.component.css']
})
export class UpdateRoadtaxComponent implements OnInit {

  @Input() public roadtax: Roadtax = {surTax: 0, roadType: ""};
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor(private service: RoadtaxService) { }

  ngOnInit(): void {
  }

  updateRoadtax() {
    this.service.putRoadtax(this.roadtax).subscribe(
      () => this.update.emit()
    );
  }

  deleteRoadtax() {
    if(window.confirm("Are you sure you want to delete roadtax for roadtype " + this.roadtax.roadType + "?")){
      this.service.deleteRoadtax(this.roadtax.roadType).subscribe(
        () => this.delete.emit()
      );
    }
  }
}
