import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  login() {
    this.router.navigate(['/profile', this.username]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
