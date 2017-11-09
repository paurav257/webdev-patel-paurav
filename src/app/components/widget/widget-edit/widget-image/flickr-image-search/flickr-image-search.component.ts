import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../../services/widget.service.client';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  searchText: string;
  photos = [];

  constructor(private widgetService: WidgetService,
              private flickrService: FlickrService,
              private activatedRoutes: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          console.log(data);
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          console.log(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    const widget = {
      pageId: this.pageId,
      url: url
    };
    this.widgetService.createWidget(this.pageId, widget)
      .subscribe((data) => {
        if (data) {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }
}
