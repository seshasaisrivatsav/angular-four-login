// import {Website} from '../models/website/website.model.client';
// import {WEBSITES} from './website.mock.client';
// import {Http} from '@angular/http';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Website} from '../models/website/website.model.client';

@Injectable()
export class WebsiteService {
  debugger;
  // websites: Website[] = WEBSITES;
  removeWebsite(website: Website) {
    return this.http.delete('http://localhost:3100/api/website/' + website._id)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  findAllWebsites() {
    return this.http.get('http://localhost:3100/api/website')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
  constructor(private http: Http) {}
}
