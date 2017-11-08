import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service.client'
import {Router} from '@angular/router';
import {SharedService} from '../../../server/services/shared.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: String;
  password: String;
  register() {
    console.log("In reg");
    this.userService.register(this.username, this.password)
      .subscribe((user) => {

        this.sharedService.user = user;
        console.log( this.sharedService.user);
        this.router.navigate(['/profile']);
      });
  }

  constructor(private sharedService: SharedService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

}
