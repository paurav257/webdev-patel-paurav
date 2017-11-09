import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  @ViewChild('f') newPageForm: NgForm;

  userId: String;
  websiteId: String;
  pageId: String;
  pages = [{}];
  pageName: String;
  pageDesc: String;
  page = {};

  constructor(private pageService: PageService,
              private activatedRoutes: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.pageService.findPagesByWebsiteId(this.websiteId)
        .subscribe((pages) => {
          this.pages = pages;
        });
    });
  }

  createPage() {
    this.page['name'] = this.newPageForm.value.pageName;
    this.page['description'] = this.newPageForm.value.pageDesc;
    this.pageService.createPage(this.websiteId, this.page)
      .subscribe((page) => {
        this.page = page;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
      });
  }
}
