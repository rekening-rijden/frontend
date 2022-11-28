import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router} from "@angular/router";

const CURRENT_USER = 1;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    if(this.username == 'user') {
      // save username in local storage
      localStorage.setItem('currentUser', JSON.stringify(CURRENT_USER));
      this.router.navigate(['/selectcar']);
    }
    if(this.username == 'belasting') {
      this.router.navigate(['/belasting']);
    }
    if(this.username == 'interpol') {
      this.router.navigate(['/interpol']);
    }
    else {
      this.router.navigate(['/selectcar']);
    }
    console.log(this.username);
    console.log(this.password);
  }
}
