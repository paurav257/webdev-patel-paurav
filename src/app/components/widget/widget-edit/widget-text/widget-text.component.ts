import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widgetEdit: Boolean;
  widget = {'name': '', 'type': 'TEXT', 'text': '', 'rows': '', 'placeholder': '', 'formatted': ''};

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
          });
      }
    });
  }

  createWidget() {
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      });
  }

  updateWidget() {
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
