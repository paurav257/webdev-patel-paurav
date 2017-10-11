import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: String;
  websiteId: String;
  websites = [{}];
  website = {};
  websiteName: String;
  websiteDesc: String;

  constructor(private websiteService: WebsiteService,
              private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.websites = this.websiteService.findWebsitesByUser(this.userId);
      this.website = this.websiteService.findWebsiteById(this.websiteId);
      this.websiteName = this.website['name'];
      this.websiteDesc = this.website['description'];
    });
  }

  updateWebsite() {
    this.website['name'] = this.websiteName;
    this.website['description'] = this.websiteDesc;
    this.website = this.websiteService.updateWebsite(this.websiteId, this.website);
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId);
  }
}
