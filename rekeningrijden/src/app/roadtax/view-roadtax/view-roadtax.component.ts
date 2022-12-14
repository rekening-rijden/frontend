import { Component, OnInit } from '@angular/core';
import {RoadtaxService} from "../roadtax.service";
import {Roadtax} from "../roadtax";

@Component({
  selector: 'app-view-roadtax',
  templateUrl: './view-roadtax.component.html',
  styleUrls: ['./view-roadtax.component.css']
})
export class ViewRoadtaxComponent implements OnInit {

  public roadtaxes: Array<Roadtax> = [];

  constructor(private service: RoadtaxService) { }

  ngOnInit(): void {
    this.service.readAllRoadtax().subscribe(
      response => {
        console.log(response)
        this.roadtaxes = response as Roadtax[];
      }
    )
  }

  updateData() {
    console.log("event")
    this.service.readAllRoadtax().subscribe(
      response => {
        this.roadtaxes = response as Roadtax[];
      }
    )
  }
}
