import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {
  options = new RequestOptions();
  logout() {
    this.options.withCredentials = true;
    const url = 'http://localhost:3100/api/logout';
    return this.http.post(url, {}, this.options)
      .map((status) => {
        return status;
      });
  }
  loggedIn() {
    this.options.withCredentials = true;
    const url = 'http://localhost:3100/api/loggedIn';
    return this.http.post(url, {}, this.options)
      .map((user) => {
        return user.json();
      });
  }
  register(username, password) {
    this.options.withCredentials = true;
    const url = 'http://localhost:3100/api/register';
    const credentials = {
      username: username,
      password: password
    };
    return this.http.post(url, credentials, this.options)
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
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }
  constructor(private http: Http) {}
}
