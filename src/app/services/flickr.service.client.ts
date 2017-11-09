import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

// injecting service into module
@Injectable()

export class FlickrService {

  key = '3507a461442dde271eb32ef37ce52c77';
  secret = '4b7273c67d9fb58c';
  urlBase = 'https://api.flickr.com/services/rest/?method=' +
    'flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private _http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }
}
