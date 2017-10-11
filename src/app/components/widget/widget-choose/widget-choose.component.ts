import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-choose',
  templateUrl: './widget-choose.component.html',
  styleUrls: ['./widget-choose.component.css']
})
export class WidgetChooseComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;

  constructor(private activatedRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });
  }

}
