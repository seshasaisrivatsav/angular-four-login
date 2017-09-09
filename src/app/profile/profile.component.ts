import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  username: string;
  paramSubscriptions;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscriptions = this.activatedRoute.params
      .subscribe(params => {
        this.username = params['username'];
      });
  }

  ngOnDestroy() {
    this.paramSubscriptions.unsubscribe();
  }

}
