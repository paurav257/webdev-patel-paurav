import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {advanceActivatedRoute} from "@angular/router/src/router_state";

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
      this.websiteService.findWebsitesByUser(this.userId)
        .subscribe((websites) => {
          this.websites = websites;
        });
      this.websiteService.findWebsiteById(this.websiteId)
        .subscribe((website) => {
          this.website = website;
          this.websiteName = this.website['name'];
          this.websiteDesc = this.website['description'];
        });
    });
  }

  updateWebsite() {
    this.website['name'] = this.websiteName;
    this.website['description'] = this.websiteDesc;
    this.websiteService.updateWebsite(this.websiteId, this.website)
      .subscribe((website) => {
        this.website = website;
      });
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.websiteId)
      .subscribe((data) => {
        if (data === 200) {
        }
      });
  }
}
