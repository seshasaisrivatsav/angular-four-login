import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service.client';
import {SharedService} from '../../../server/services/shared.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  login() {
    this.userService.login(this.username, this.password)
      .subscribe((user) => {
        this.sharedService.user = user;
        console.log(this.sharedService.user)

        this.router.navigate(['/profile']);
      });
  }

  constructor(private sharedService: SharedService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

}
