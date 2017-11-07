import { Component, OnInit, OnDestroy } from '@angular/core';
import {SharedService} from '../../../server/services/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service.server';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  username: string;
  paramSubscriptions;
  user = {};
  constructor(private router: Router,
              private userService: UserService,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute) { }
  logout() {
    this.userService.logout()
      .subscribe((status) => {
        this.router.navigate(['login']);
      });
  }

  ngOnInit() {
    this.paramSubscriptions = this.activatedRoute.params
      .subscribe(params => {
        this.user = this.sharedService.user || {};
        this.username = params['username'];
      });
  }

  ngOnDestroy() {
    this.paramSubscriptions.unsubscribe();
  }

}
