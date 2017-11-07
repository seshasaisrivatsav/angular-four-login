import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {UserService} from './user.service.server';

@Injectable()
export class AuthenticationService implements CanActivate {
  constructor(private userService: UserService) {}
  canActivate() {
    return this.userService.loggedIn();
  }
}
