import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  textHtml: String;
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
      this.textHtml = '<p> Home Page</p>';
      this.widgetId = params['wgid'];
      if (this.widgetId) {
        this.widgetService.findWidgetById(this.widgetId)
          .subscribe((widget) => {
            this.widget = widget;
            this.widgetEdit = true;
            this.textHtml = this.widget['text'];
          });
      }
    });
  }

  createWidget() {
    this.widget['type'] = 'HTML';
    this.widget['text'] = this.textHtml;
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }

  updateWidget() {
    this.widget['type'] = 'HTML';
    this.widget['text'] = this.textHtml;
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
