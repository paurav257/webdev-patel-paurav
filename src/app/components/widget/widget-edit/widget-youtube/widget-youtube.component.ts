import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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
              private activatedRoutes: ActivatedRoute,
              private router: Router) {
  }

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
            this.nameYoutube = this.widget['name'];
            this.textYoutube = this.widget['text'];
            this.urlYoutube = this.widget['url'];
            this.widthYoutube = this.widget['width'];
          });
      }
    });
  }

  createWidget() {
    this.widget['type'] = 'YOUTUBE';
    this.widget['name'] = this.nameYoutube;
    this.widget['text'] = this.textYoutube;
    this.widget['url'] = this.urlYoutube;
    this.widget['width'] = this.widthYoutube;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
        }
      });
  }

  updateWidget() {
    this.widget['type'] = 'YOUTUBE';
    this.widget['name'] = this.nameYoutube;
    this.widget['text'] = this.textYoutube;
    this.widget['url'] = this.urlYoutube;
    this.widget['width'] = this.widthYoutube;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((data) => {
        if (data === 200) {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }

}
