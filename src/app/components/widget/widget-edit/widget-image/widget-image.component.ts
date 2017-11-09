import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  nameImage: String;
  textImage: String;
  urlImage: String;
  widthImage: String;
  uploadImage: String;
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widgetEdit: Boolean;
  widget = {};

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private router: Router) {
  }

  baseUrl = environment.baseUrl;

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      if (this.widgetId) {
        this.widgetService.findWidgetById(this.widgetId)
          .subscribe((widget) => {
            this.widget = widget;
            this.widgetEdit = true;
            this.nameImage = this.widget['name'];
            this.textImage = this.widget['text'];
            this.urlImage = this.widget['url'];
            this.widthImage = this.widget['width'];
            this.uploadImage = this.widget['upload'];
          });
      }
    });
  }

  createWidget() {
    this.widget['type'] = 'IMAGE';
    this.widget['text'] = this.textImage;
    this.widget['url'] = this.urlImage;
    this.widget['width'] = this.widthImage;
    this.widget['upload'] = this.uploadImage;
    this.widget['name'] = this.nameImage;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/user', this.userId, 'website',
            this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }

  updateWidget() {
    this.widget['type'] = 'IMAGE';
    this.widget['text'] = this.textImage;
    this.widget['url'] = this.urlImage;
    this.widget['width'] = this.widthImage;
    this.widget['upload'] = this.uploadImage;
    this.widget['name'] = this.nameImage;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/user', this.userId, 'website',
            this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((data) => {
        if (data === 200) {
          this.router.navigate(['/user', this.userId, 'website',
            this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }

}
