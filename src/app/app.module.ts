import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WidgetChooseComponent } from './components/widget/widget-choose/widget-choose.component';
import { WidgetHeadingComponent } from './components/widget/widget-edit/widget-heading/widget-heading.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { UserService } from './services/user.service.client';
import { PageService } from './services/page.service.client';
import { WebsiteService } from './services/website.service.client';
import { WidgetService } from './services/widget.service.client';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { SortableDirective } from './directives/sortable.directive';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    PageEditComponent,
    PageListComponent,
    PageNewComponent,
    WebsiteNewComponent,
    WebsiteListComponent,
    WebsiteEditComponent,
    WidgetChooseComponent,
    WidgetHeadingComponent,
    WidgetImageComponent,
    WidgetListComponent,
    WidgetYoutubeComponent,
    WidgetEditComponent,
    SortableDirective,
    WidgetHtmlComponent,
    FlickrImageSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [ TestService, WebsiteService, WidgetService, PageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
