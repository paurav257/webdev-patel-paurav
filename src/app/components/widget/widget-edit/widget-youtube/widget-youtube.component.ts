import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  nameYoutube: String;
  textYoutube: String;
  urlYoutube: String;
  widthYoutube: String;
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
        this.nameYoutube = this.widget['name'];
        this.textYoutube = this.widget['text'];
        this.urlYoutube = this.widget['url'];
        this.widthYoutube = this.widget['width'];
      }
    });
  }

  createWidget() {
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['name'] = this.nameYoutube;
    this.widget['text'] = this.textYoutube;
    this.widget['url'] = this.urlYoutube;
    this.widget['width'] = this.widthYoutube;
    this.widgetService.createWidget(this.pageId, this.widget);
  }

  updateWidget() {
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['name'] = this.nameYoutube;
    this.widget['text'] = this.textYoutube;
    this.widget['url'] = this.urlYoutube;
    this.widget['width'] = this.widthYoutube;
    this.widgetService.updateWidget(this.widgetId, this.widget);
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
  }

}
