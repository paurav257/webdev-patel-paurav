import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') newWebsiteForm: NgForm;

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
    });
  }

  createWebsite() {
    this.website['name'] = this.newWebsiteForm.value.websiteName;
    this.website['description'] = this.newWebsiteForm.value.websiteDesc;
    this.websiteService.createWebsite(this.userId, this.website)
      .subscribe((website) => {
        this.website = website;
      });
  }
}
