/**
 * Created by sesha on 7/26/17.
 */

import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {WidgetChooseComponent} from './components/widget/widget-choose/widget-choose.component';
import {WidgetHeadingComponent} from './components/widget/widget-edit/widget-heading/widget-heading.component';
import {WidgetImageComponent} from './components/widget/widget-edit/widget-image/widget-image.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetYoutubeComponent} from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {WidgetHtmlComponent} from './components/widget/widget-edit/widget-html/widget-html.component';
import {FlickrImageSearchComponent} from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {WidgetTextComponent} from './components/widget/widget-edit/widget-text/widget-text.component';
import {AuthGuard} from './services/auth-guard.service';


const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'test', component: TestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:uid', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/website', component: WebsiteListComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/website/new', component: WebsiteNewComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid', component: WebsiteEditComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid/page', component: PageListComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid/page/new', component: PageNewComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooseComponent, canActivate: [AuthGuard]},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthGuard]},
  {
    path: 'user/:uid/website/:wid/page/:pid/widget/new/heading',
    component: WidgetHeadingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube',
    component: WidgetYoutubeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:uid/website/:wid/page/:pid/widget/new/image',
    component: WidgetImageComponent,
    canActivate: [AuthGuard]
  },
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: WidgetHtmlComponent, canActivate: [AuthGuard]},
  {
    path: 'user/:uid/website/:wid/page/:pid/widget/new/image/search',
    component: FlickrImageSearchComponent,
    canActivate: [AuthGuard]
  },
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/text', component: WidgetTextComponent, canActivate: [AuthGuard]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
