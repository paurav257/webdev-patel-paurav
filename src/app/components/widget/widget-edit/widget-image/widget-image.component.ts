import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

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
              private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      if (this.widgetId) {
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        this.widgetEdit = true;
        this.nameImage = this.widget['name'];
        this.textImage = this.widget['text'];
        this.urlImage = this.widget['url'];
        this.widthImage = this.widget['width'];
        this.uploadImage = this.widget['upload'];
      }
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'IMAGE';
    this.widget['text'] = this.textImage;
    this.widget['url'] = this.urlImage;
    this.widget['width'] = this.widthImage;
    this.widget['upload'] = this.uploadImage;
    this.widget['name'] = this.nameImage;
    this.widgetService.createWidget(this.pageId, this.widget);
  }

  updateWidget() {
    this.widget['widgetType'] = 'IMAGE';
    this.widget['text'] = this.textImage;
    this.widget['url'] = this.urlImage;
    this.widget['width'] = this.widthImage;
    this.widget['upload'] = this.uploadImage;
    this.widget['name'] = this.nameImage;
    this.widgetService.updateWidget(this.widgetId, this.widget);
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
  }

}
