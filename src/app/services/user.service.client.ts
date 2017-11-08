import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {SharedService} from '../../../server/services/shared.service.client';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Injectable()
export class UserService {

  constructor(private http: Http, private router: Router, private sharedService: SharedService){}
  logout() {
    const url = 'http://localhost:3100/api/logout';
    return this.http.post(url, {})
      .map((status) => {
        return status;
      });
  }


  options = new RequestOptions();
  loggedIn() {
    const url = 'http://localhost:3100/api/loggedIn';
    this.options.withCredentials = true;
    console.log("tryin to loggedIn");
    return this.http.post(url, '', this.options)
      // .map((user) => {
      //   console.log(user);
      //   return user.json();
      // });
      .map(
        (res: Response) => {
          const user = res.json();
          if (user != '0') {
            console.log(user);
            this.sharedService.user = user; // setting user as global variable using shared service
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }
  register(username, password) {
    console.log("USERN in client service" + username + " " + password);
    const url = 'http://localhost:3100/api/register';
    const credentials = {
      username: username,
      password: password
    };
    return this.http.post(url, credentials)
      .map((response: Response) => {
        return response.json();
      });
  }
  login(username, password) {
    this.options.withCredentials = true;
    const url = 'http://localhost:3100/api/login';
    const credentials = {
      username: username,
      password: password
    };
    return this.http.post(url, credentials, this.options) // this.options)
      .map((response: Response) => {
        return response.json();
      });
  }
}
