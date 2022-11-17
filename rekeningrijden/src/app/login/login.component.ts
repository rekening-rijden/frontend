import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  selectedUser: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    localStorage.setItem('currentUser', JSON.stringify(this.selectedUser));
    window.location.href = '/map';
  }
}
