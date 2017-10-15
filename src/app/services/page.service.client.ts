import {Injectable} from '@angular/core';
import 'rxjs/Rx';

// injecting service into module
@Injectable()

export class PageService {

  constructor() {
  }

  pages = [
    {'_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem'},
    {'_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem'}
  ];

  createPage(webiteId, page) {
    page['_id'] = Math.floor(Math.random() * 1000) + '';
    page['websiteId'] = webiteId;
    this.pages.push(page);
    return page;
  }

  findPagesByWebsiteId(websiteId) {
    return this.pages.filter(function (page) {
      return page['websiteId'] === websiteId;
    });
  }

  findPageById(pageId) {
    return this.pages.find(function (page) {
      return page['_id'] === pageId;
    });
  }

  updatePage(pageId, page) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]['_id'] === pageId) {
        this.pages[x]['name'] = page.name;
        this.pages[x]['description'] = page.description;
        return this.pages[x];
      }
    }
  }

  deletePage(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]['_id'] === pageId) {
        delete this.pages[x];
      }
    }
  }
}
