import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

// injecting service into module
@Injectable()

export class PageService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  createPage(websiteId, page) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.post(url, page)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findPagesByWebsiteId(websiteId) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findPageById(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updatePage(pageId, page) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.put(url, page)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deletePage(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
