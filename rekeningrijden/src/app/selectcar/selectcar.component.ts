import { Component, OnInit } from '@angular/core';
import {Route} from "../__models/route";
import {Router} from "@angular/router";

export interface Car {
  id: number;
  registrationNumber: string;
}

export const cars: Car[] = [
  { id: 1, registrationNumber: 'AA19AAA' },
  { id: 20, registrationNumber: 'AA12AAA' }
];

@Component({
  selector: 'app-selectcar',
  templateUrl: './selectcar.component.html',
  styleUrls: ['./selectcar.component.scss']
})

export class SelectcarComponent implements OnInit {
  cars?: Car[]
  selectedCar?: Car;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.getCarsByUserId(localStorage.getItem('currentUser'));
  }

  getCarsByUserId(userId: string | null) {
    console.log(userId);
    if(userId == null) {
      return;
    }
    this.cars = cars;
    console.log(this.cars);
  }

  selectCar(car: Car) {
    this.selectedCar = car;
    // redirect to map component with selected car
    this.route.navigate(['/vehicle', this.selectedCar.id]);
  }
}
