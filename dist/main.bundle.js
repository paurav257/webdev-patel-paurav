webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_choose_widget_choose_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_heading_widget_heading_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_choose_widget_choose_component__["a" /* WidgetChooseComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_heading_widget_heading_component__["a" /* WidgetHeadingComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_choose_widget_choose_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_heading_widget_heading_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/**
 * Created by sesha on 7/26/17.
 */


















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_1__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_9__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_10__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_6__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_5__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_choose_widget_choose_component__["a" /* WidgetChooseComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/heading', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_heading_widget_heading_component__["a" /* WidgetHeadingComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <ul>\n    <li><a href=\"test\">Test MongoDB</a></li>\n    <li><a href=\"../../../assets/index.html\">Assignment 2 Index Page</a></li>\n    </ul>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 hidden-xs \">\n      <!--plus sign-->\n      <div class=\"navbar-brand pull-right\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n      <!--back sign-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\"\n          class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Pages</b>\n        </a>\n      </p>\n    </div>\n    <div class=\"col-sm-8 col-xs-12\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\"\n          class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left visible-xs left-margin-fix\">\n        <a (click)=\"editPage()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\"\n          class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Edit Pages</b>\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid \">\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <div *ngFor=\"let page of pages\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['widget']\">\n            {{page.name}}\n          </a>\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', page._id]\"\n             class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </div>\n    </ul>\n  </div>\n  <div class=\"col-sm-8 col-xs-12\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"pageName\">\n          Page Name\n        </label>\n        <input [(ngModel)]=\"pageName\"\n               name=\"pageName\"\n               required\n               type=\"text\"\n               class=\"form-control mr-5\"\n               id=\"pageName\"\n               placeholder=\"pageName\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pageDesc\">\n          Page Description\n        </label>\n        <input [(ngModel)]=\"pageDesc\"\n               name=\"pageDesc\"\n               required=\"\"\n               type=\"text\"\n               class=\"form-control mr-5\"\n               id=\"pageDesc\"\n               placeholder=\"Title\">\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-danger btn-block \"\n           (click)=\"deletePage()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\">\n          Delete\n        </a>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditComponent = (function () {
    function PageEditComponent(pageService, activatedRoutes) {
        this.pageService = pageService;
        this.activatedRoutes = activatedRoutes;
        this.pages = [{}];
        this.page = {};
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.pages = _this.pageService.findPagesByWebsiteId(_this.websiteId);
            _this.page = _this.pageService.findPageById(_this.pageId);
            _this.pageName = _this.page['name'];
            _this.pageDesc = _this.page['description'];
        });
    };
    PageEditComponent.prototype.editPage = function () {
        this.page['name'] = this.pageName;
        this.page['description'] = this.pageDesc;
        this.page = this.pageService.updatePage(this.pageId, this.page);
    };
    PageEditComponent.prototype.deletePage = function () {
        this.pageService.deletePage(this.pageId);
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PageEditComponent);

var _a, _b;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--plus sign-->\n    <div class=\"navbar-brand pull-right right-margin-fix\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', 'new']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n    <!--back sign-->\n    <div class=\"navbar-brand pull-left left-margin-fix\">\n      <a [routerLink]=\"['/user', userId, 'website']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand \">\n        <b>Pages</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <div *ngFor=\"let page of pages\">\n      <li class=\"list-group-item\">\n        <a [routerLink]=\"[page._id, 'widget']\">\n          {{page.name}}\n        </a>\n        <a [routerLink]=\"[page._id]\"\n           class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </li>\n    </div>\n  </ul>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(pageService, activatedRoutes) {
        this.pageService = pageService;
        this.activatedRoutes = activatedRoutes;
        this.pages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pages = _this.pageService.findPagesByWebsiteId(_this.websiteId);
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PageListComponent);

var _a, _b;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 hidden-xs \">\n      <!--plus sign-->\n      <div class=\"navbar-brand pull-right\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n      <!--back sign-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Pages</b>\n        </a>\n      </p>\n    </div>\n    <div class=\"col-sm-8 col-xs-12\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createPage()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left visible-xs left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Pages</b>\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"row container-fluid \">\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <div *ngFor=\"let page of pages\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"[page._id, 'widget']\">\n            {{page.name}}\n          </a>\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', page._id]\"\n             class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </div>\n    </ul>\n  </div>\n  <div class=\"col-sm-8 col-xs-12\">\n    <form #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"pageName\">\n          Page Name\n        </label>\n        <input ngModel=\"\"\n               required\n               name=\"pageName\"\n               type=\"text\"\n               class=\"form-control mr-5\"\n               id=\"pageName\"\n               placeholder=\"Page Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pageDesc\">\n          Page Description\n        </label>\n        <input [(ngModel)]=\"pageDesc\"\n               name=\"pageDesc\"\n               required=\"\"\n               type=\"text\"\n               class=\"form-control mr-5\"\n               id=\"pageDesc\"\n               placeholder=\"Title\">\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(pageService, activatedRoutes) {
        this.pageService = pageService;
        this.activatedRoutes = activatedRoutes;
        this.pages = [{}];
        this.page = {};
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.pages = _this.pageService.findPagesByWebsiteId(_this.websiteId);
        });
    };
    PageNewComponent.prototype.createPage = function () {
        this.page['name'] = this.newPageForm.value.pageName;
        this.page['description'] = this.newPageForm.value.pageDesc;
        this.page = this.pageService.createPage(this.websiteId, this.page);
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "newPageForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], PageNewComponent);

var _a, _b, _c;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div *ngIf=\"errorFlag\"\n           class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n\n      <h1>Login</h1>\n      <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <input name=\"username\"\n                 ngModel=\"\"\n                 required\n                 placeholder=\"username\"\n                 type=\"text\"\n                 class=\"form-control\"\n          #username=\"ngModel\"/>\n          <span class=\"help-block\"\n                *ngIf=\"!username.valid && username.touched\">\n            Please enter username!\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <input name=\"password\"\n                 ngModel=\"\"\n                 required\n                 placeholder=\"password\"\n                 type=\"password\"\n                 class=\"form-control\"\n                 #password=\"ngModel\"/>\n          <span class=\"help-block\"\n                *ngIf=\"!password.valid && password.touched\">\n            Please enter password!\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\"\n                  class=\"btn btn-primary btn-block\"\n                  [disabled]=\"!f.valid\">\n            Login\n          </button>\n        </div>\n        <div class=\"form-group\">\n          <a class=\"btn btn-success btn-block\"\n             routerLink=\"/register\">\n            Register\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByUsername(this.username);
        if (!(user && user.password === this.password)) {
            this.errorFlag = true;
            this.errorMsg = 'Invalid username or password !';
        }
        else {
            this.router.navigate(["/user/" + user._id]);
        }
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--tick mark-->\n    <div class=\"navbar-brand pull-right right-margin-fix\">\n      <a (click)=\"editProfile()\" [routerLink]=\"['/user', userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand \">\n        <b>Profile</b>\n      </a>\n    </p>\n  </div>\n</nav>\n<div *ngIf=\"errorFlag\"\n     class=\"alert alert-danger\">\n  {{errorMsg}}\n</div>\n\n<div class=\"container-fluid\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"userName\">\n        Username\n      </label>\n      <input name=\"userName\"\n             ngModel=\"\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"userName\"\n             placeholder={{user.userName}}>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">\n        Email address\n      </label>\n      <input name=\"email\"\n             ngModel=\"\"\n             type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             placeholder={{user.email}}>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">\n        First Name\n      </label>\n      <input name=\"firstName\"\n             ngModel=\"\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"first-name\"\n             placeholder={{user.firstName}}>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">\n        Last Name\n      </label>\n      <input name=\"lastName\"\n             ngModel=\"\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"last-name\"\n             placeholder={{user.lastName}}>\n    </div>\n  </form>\n  <div class=\"form-group\">\n    <button class=\"btn btn-primary btn-block\"\n            [routerLink]=\"['website']\">\n      Websites\n    </button>\n  </div>\n  <div class=\"form-group\">\n    <a class=\"btn btn-danger btn-block \"\n       routerLink=\"/login\">\n      Logout\n    </a>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.user = this.userService.findUserById(this.userId);
        if (!this.user) {
            this.router.navigate(['/login']);
        }
    };
    ProfileComponent.prototype.editProfile = function () {
        this.user = this.userService.findUserById(this.userId);
        this.user.userName = this.profileForm.value.userName.length > 0 ?
            this.profileForm.value.userName : this.user.userName;
        this.user.email = this.profileForm.value.email.length > 0 ?
            this.profileForm.value.email : this.user.email;
        this.user.firstName = this.profileForm.value.firstName.length > 0 ?
            this.profileForm.value.firstName : this.user.firstName;
        this.user.lastName = this.profileForm.value.lastName.length > 0 ?
            this.profileForm.value.lastName : this.user.lastName;
        this.userService.updateUser(this.userId, this.user);
        this.router.navigate(["/user/" + this.userId]);
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Register</h1>\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form (ngSubmit)=\"createUser()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input name=\"userName\"\n             id=\"userName\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             #userName=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!userName.valid && userName.touched\">\n            Please enter username!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <input name=\"email\"\n             id=\"email\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"email\"\n             type=\"email\"\n             class=\"form-control\"\n             #email=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!email.valid && email.touched\">\n            Please enter email!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <input name=\"firstName\"\n             id=\"firstName\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"First Name\"\n             type=\"text\"\n             class=\"form-control\"\n             #firstName=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!firstName.valid && firstName.touched\">\n            Please enter firstName!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <input name=\"lastName\"\n             id=\"lastName\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"Last Name\"\n             type=\"text\"\n             class=\"form-control\"\n             #lastName=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!lastName.valid && lastName.touched\">\n            Please enter lastName!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <input name=\"password\"\n             id=\"password\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             #password=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!password.valid && password.touched\">\n            Please enter lastName!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <input name=\"verifyPassword\"\n             id=\"verifyPassword\"\n             ngModel=\"\"\n             required\n             placeholder=\"verify password\"\n             type=\"password\"\n             class=\"form-control\"\n             #verifyPassword=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n            Please enter lastName!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\"\n              [disabled]=\"!f.valid\">\n        Register\n      </button>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\"\n         routerLink=\"/login\">\n        Cancel\n      </a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */]('', '', '', '', '', '');
    };
    RegisterComponent.prototype.createUser = function () {
        this.user.userName = this.registrationForm.value.userName;
        this.user.password = this.registrationForm.value.password;
        this.user.firstName = this.registrationForm.value.firstName;
        this.user.lastName = this.registrationForm.value.lastName;
        this.user.email = this.registrationForm.value.email;
        this.verifyPassword = this.registrationForm.value.verifyPassword;
        if (this.user.password !== this.verifyPassword) {
            this.errorFlag = true;
            this.errorMsg = 'Passwords are not matching!';
        }
        else {
            var user = this.userService.createUser(this.user);
            if (user) {
                this.router.navigate(["/user/" + user._id]);
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Failed to create User!';
            }
        }
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registrationForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <!--plus sign-->\n      <div class=\"navbar-brand pull-right\">\n        <a [routerLink]=\"['/user', userId, 'website', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n      <!--back sign-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Websites</b>\n        </a>\n      </p>\n    </div>\n    <div class=\"col-sm-8 col-xs-12\">\n      <!--ok sign-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateWebsite()\"\n           [routerLink]=\"['/user', userId, 'website']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--back-->\n      <div class=\"navbar-brand pull-left visible-xs left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Edit Websites</b>\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid \">\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <div *ngFor=\"let website of websites\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['/user', userId, 'website', website['_id'],'page']\">\n            {{website['name']}}\n          </a>\n          <a [routerLink]=\"['/user', userId, 'website', website['_id']]\"\n             class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </div>\n    </ul>\n  </div>\n  <div class=\"col-sm-8 col-xs-12\">\n\n      <div class=\"form-group\">\n        <label for=\"websiteName\">\n          Website Name\n        </label>\n        <input [(ngModel)]=\"websiteName\"\n               name=\"websiteName\"\n               required\n               type=\"text\"\n               class=\"form-control mr-5\"\n               id=\"websiteName\"\n               placeholder=\"Name\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"websiteDesc\">\n          Website Description\n        </label>\n        <textarea [(ngModel)]=\"websiteDesc\"\n                  name=\"websiteDesc\"\n                  required\n                  rows=\"5\"\n                  class=\"form-control mr-5\"\n                  id=\"websiteDesc\"\n                  placeholder=\"Description\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-danger btn-block \"\n           (click)=\"deleteWebsite()\"\n           [routerLink]=\"['/user', userId, 'website']\">\n          Delete\n        </a>\n      </div>\n\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(websiteService, activatedRoutes) {
        this.websiteService = websiteService;
        this.activatedRoutes = activatedRoutes;
        this.websites = [{}];
        this.website = {};
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
            _this.website = _this.websiteService.findWebsiteById(_this.websiteId);
            _this.websiteName = _this.website['name'];
            _this.websiteDesc = _this.website['description'];
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        this.website['name'] = this.websiteName;
        this.website['description'] = this.websiteDesc;
        this.website = this.websiteService.updateWebsite(this.websiteId, this.website);
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        this.websiteService.deleteWebsite(this.websiteId);
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WebsiteEditComponent);

var _a, _b;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--plus sign-->\n    <div class=\"navbar-brand pull-right right-margin-fix\">\n      <a [routerLink]=\"['/user', userId, 'website','new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n    <!--back sign-->\n    <div class=\"navbar-brand pull-left left-margin-fix\">\n      <a [routerLink]=\"['/user', userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand \">\n        <b>Websites</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n    <div *ngFor=\"let website of websites\">\n      <li class=\"list-group-item\">\n        <a [routerLink]=\"['/user', userId, 'website', website._id,'page']\">\n          {{website.name}}\n        </a>\n        <a [routerLink]=\"['/user', userId, 'website', website._id]\"\n           class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </li>\n    </div>\n  </ul>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(websiteService, activatedRoutes) {
        this.websiteService = websiteService;
        this.activatedRoutes = activatedRoutes;
        this.websites = [{}];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
        });
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WebsiteListComponent);

var _a, _b;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <!--plus sign-->\n      <div class=\"navbar-brand pull-right\">\n        <a [routerLink]=\"['/user', userId, 'website', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n      <!--back sign-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Websites</b>\n        </a>\n      </p>\n    </div>\n    <div class=\"col-sm-8 col-xs-12\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWebsite()\"\n           [routerLink]=\"['/user', userId, 'website']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left visible-xs left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Websites</b>\n        </a>\n      </p>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid \">\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <div *ngFor=\"let website of websites\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['/user', userId, 'website', website._id,'page']\">\n            {{website.name}}\n          </a>\n          <a [routerLink]=\"['/user', userId, 'website', website._id]\"\n             class=\"pull-right\">\n            <span class=\"glyphicon glyphicon-cog\"></span>\n          </a>\n        </li>\n      </div>\n    </ul>\n  </div>\n  <div class=\"col-sm-8 col-xs-12\">\n    <form #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"websiteName\">\n          Name\n        </label>\n        <input ngModel=\"\"\n               name=\"websiteName\"\n               required\n               type=\"text\"\n               class=\"form-control mr-5\"\n               id=\"websiteName\"\n               placeholder=\"Website Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"websiteDesc\">\n          Description\n        </label>\n        <textarea ngModel=\"\"\n                  name=\"websiteDesc\"\n                  required\n                  rows=\"5\"\n                  class=\"form-control mr-5\"\n                  id=\"websiteDesc\"\n                  placeholder=\"websiteDesc\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(websiteService, activatedRoutes) {
        this.websiteService = websiteService;
        this.activatedRoutes = activatedRoutes;
        this.websites = [{}];
        this.website = {};
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.websites = _this.websiteService.findWebsitesByUser(_this.userId);
        });
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        this.website['name'] = this.newWebsiteForm.value.websiteName;
        this.website['description'] = this.newWebsiteForm.value.websiteDesc;
        this.website = this.websiteService.createWebsite(this.userId, this.website);
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "newWebsiteForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WebsiteNewComponent);

var _a, _b, _c;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-choose/widget-choose.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-choose/widget-choose.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--back sign-->\n    <div class=\"navbar-brand pull-left left-margin-fix\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand \">\n        <b>Choose Widget</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n\n  <ul class=\"list-group\">\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'heading']\"\n       class=\"list-group-item\">\n      Header\n    </a>\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'image']\"\n       class=\"list-group-item\">\n      Image\n    </a>\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'youtube']\"\n       class=\"list-group-item\">\n      Youtube\n    </a>\n    <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'html']\"\n       class=\"list-group-item\">\n      Html\n    </a>\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-choose/widget-choose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetChooseComponent = (function () {
    function WidgetChooseComponent(activatedRoutes) {
        this.activatedRoutes = activatedRoutes;
    }
    WidgetChooseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    return WidgetChooseComponent;
}());
WidgetChooseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-choose',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-choose/widget-choose.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], WidgetChooseComponent);

var _a;
//# sourceMappingURL=widget-choose.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget['widgetType']\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-heading></app-widget-heading>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetEditComponent);

var _a, _b;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then edit else new\"></div>\n<ng-template #edit>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #new>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"textHeader\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textHeader\"\n             name=\"textHeader\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textHeader\"\n             placeholder=\"Home Page\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"sizeHeader\">\n        Size\n      </label>\n      <input [(ngModel)]=\"sizeHeader\"\n             required\n             name=\"sizeHeader\"\n             type=\"number\"\n             class=\"form-control\"\n             id=\"sizeHeader\"\n             placeholder=\"3\">\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeadingComponent = (function () {
    function WidgetHeadingComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetHeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.textHeader = 'Home Page';
            _this.sizeHeader = '2';
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
                _this.widgetEdit = true;
                _this.textHeader = _this.widget['text'];
                _this.sizeHeader = _this.widget['size'];
            }
        });
    };
    WidgetHeadingComponent.prototype.createWidget = function () {
        this.widget['widgetType'] = 'HEADING';
        this.widget['text'] = this.textHeader;
        this.widget['size'] = this.sizeHeader;
        this.widgetService.createWidget(this.pageId, this.widget);
    };
    WidgetHeadingComponent.prototype.updateWidget = function () {
        this.widget['widgetType'] = 'HEADING';
        this.widget['text'] = this.textHeader;
        this.widget['size'] = this.sizeHeader;
        this.widgetService.updateWidget(this.widgetId, this.widget);
    };
    WidgetHeadingComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
    };
    return WidgetHeadingComponent;
}());
WidgetHeadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-heading',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-heading/widget-heading.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetHeadingComponent);

var _a, _b;
//# sourceMappingURL=widget-heading.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then edit else new\"></div>\n<ng-template #edit>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #new>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"textHtml\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textHtml\"\n             name=\"textHtml\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textHtml\"\n             placeholder=\"Home Page\">\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.textHtml = '<p> Home Page</p>';
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
                _this.widgetEdit = true;
                _this.textHtml = _this.widget['text'];
            }
        });
    };
    WidgetHtmlComponent.prototype.createWidget = function () {
        this.widget['widgetType'] = 'HTML';
        this.widget['text'] = this.textHtml;
        this.widgetService.createWidget(this.pageId, this.widget);
    };
    WidgetHtmlComponent.prototype.updateWidget = function () {
        this.widget['widgetType'] = 'HTML';
        this.widget['text'] = this.textHtml;
        this.widgetService.updateWidget(this.widgetId, this.widget);
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetHtmlComponent);

var _a, _b;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then edit else new\"></div>\n<ng-template #edit>\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--tick mark-->\n    <div class=\"navbar-brand pull-right right-margin-fix\">\n      <a (click)=\"updateWidget()\"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok-sign\"></span>\n      </a>\n    </div>\n    <!--tick mark-->\n    <div class=\"navbar-brand pull-left left-margin-fix\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand \">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n  </div>\n</nav>\n</ng-template>\n\n<ng-template #new>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"nameImage\">\n        Name\n      </label>\n      <input [(ngModel)]=\"nameImage\"\n             required\n             name=\"nameImage\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"nameImage\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"textImage\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textImage\"\n             required\n             name=\"textImage\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textImage\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"urlImage\">\n        URL\n      </label>\n      <input [(ngModel)]=\"urlImage\"\n             required\n             name=\"urlImage\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"urlImage\"\n             placeholder=\"https://www.youtube.com/watch?v=ue80QwXMRHg\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widthImage\">\n        Width\n      </label>\n      <input [(ngModel)]=\"widthImage\"\n             required\n             name=\"widthImage\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"widthImage\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"uploadImage\">\n        Upload\n      </label>\n      <input [(ngModel)]=\"uploadImage\"\n             required\n             name=\"uploadImage\"\n             type=\"file\"\n             class=\"form-control\"\n             id=\"uploadImage\"\n             value=\"100%\">\n    </div>\n\n    <div class=\"form-group\">\n      <button class=\"form-control btn btn-primary\">\n        Upload Image\n      </button>\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
                _this.widgetEdit = true;
                _this.nameImage = _this.widget['name'];
                _this.textImage = _this.widget['text'];
                _this.urlImage = _this.widget['url'];
                _this.widthImage = _this.widget['width'];
                _this.uploadImage = _this.widget['upload'];
            }
        });
    };
    WidgetImageComponent.prototype.createWidget = function () {
        this.widget['widgetType'] = 'IMAGE';
        this.widget['text'] = this.textImage;
        this.widget['url'] = this.urlImage;
        this.widget['width'] = this.widthImage;
        this.widget['upload'] = this.uploadImage;
        this.widget['name'] = this.nameImage;
        this.widgetService.createWidget(this.pageId, this.widget);
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        this.widget['widgetType'] = 'IMAGE';
        this.widget['text'] = this.textImage;
        this.widget['url'] = this.urlImage;
        this.widget['width'] = this.widthImage;
        this.widget['upload'] = this.uploadImage;
        this.widget['name'] = this.nameImage;
        this.widgetService.updateWidget(this.widgetId, this.widget);
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetImageComponent);

var _a, _b;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widgetEdit;then edit else new\"></div>\n<ng-template #edit>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"updateWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n<ng-template #new>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-right right-margin-fix\">\n        <a (click)=\"createWidget()\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok-sign\"></span>\n        </a>\n      </div>\n      <!--tick mark-->\n      <div class=\"navbar-brand pull-left left-margin-fix\">\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </div>\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand \">\n          <b>New Widget</b>\n        </a>\n      </p>\n    </div>\n  </nav>\n</ng-template>\n\n\n<div class=\"container-fluid\">\n  <form action=\"profile.html\" method=\"post\">\n    <div class=\"form-group\">\n      <label for=\"nameYoutube\">\n        Name\n      </label>\n      <input [(ngModel)]=\"nameYoutube\"\n             name=\"nameYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"nameYoutube\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"textYoutube\">\n        Text\n      </label>\n      <input [(ngModel)]=\"textYoutube\"\n             name=\"textYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"textYoutube\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"urlYoutube\">\n        URL\n      </label>\n      <input [(ngModel)]=\"urlYoutube\"\n             name=\"urlYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"urlYoutube\"\n             placeholder=\"https://www.youtube.com/watch?v=ue80QwXMRHg\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"widthYoutube\">\n        Width\n      </label>\n      <input [(ngModel)]=\"widthYoutube\"\n             name=\"widthYoutube\"\n             required\n             type=\"text\"\n             class=\"form-control\"\n             id=\"widthYoutube\"\n             placeholder=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <a (click)=\"deleteWidget()\"\n         class=\"btn btn-danger btn-block \"\n         [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">\n        Delete\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoutes) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.widget = {};
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId) {
                _this.widget = _this.widgetService.findWidgetById(_this.widgetId);
                _this.widgetEdit = true;
                _this.nameYoutube = _this.widget['name'];
                _this.textYoutube = _this.widget['text'];
                _this.urlYoutube = _this.widget['url'];
                _this.widthYoutube = _this.widget['width'];
            }
        });
    };
    WidgetYoutubeComponent.prototype.createWidget = function () {
        this.widget['widgetType'] = 'YOUTUBE';
        this.widget['name'] = this.nameYoutube;
        this.widget['text'] = this.textYoutube;
        this.widget['url'] = this.urlYoutube;
        this.widget['width'] = this.widthYoutube;
        this.widgetService.createWidget(this.pageId, this.widget);
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        this.widget['widgetType'] = 'YOUTUBE';
        this.widget['name'] = this.nameYoutube;
        this.widget['text'] = this.textYoutube;
        this.widget['url'] = this.urlYoutube;
        this.widget['width'] = this.widthYoutube;
        this.widgetService.updateWidget(this.widgetId, this.widget);
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WidgetYoutubeComponent);

var _a, _b;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep body {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--plus sign-->\n    <div class=\"navbar-brand pull-right right-margin-fix\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\n        class=\"navbar-link right-margin-fix\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n    <!--back sign-->\n    <div class=\"navbar-brand pull-left left-margin-fix\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </div>\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand \">\n        <b>Widgets</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n\n  <div *ngFor=\"let widget of widgets\">\n    <div [ngSwitch]=\"widget['widgetType']\">\n\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div [ngSwitch]=\"widget['size']\">\n              <div *ngSwitchCase=\"1\">\n                <h1>{{widget['text']}}</h1>\n              </div>\n              <div *ngSwitchCase=\"2\">\n                <h2>{{widget['text']}}</h2>\n              </div>\n              <div *ngSwitchCase=\"3\">\n                <h3>{{widget['text']}}</h3>\n              </div>\n              <div *ngSwitchCase=\"4\">\n                <h4>{{widget['text']}}</h4>\n              </div>\n            </div>\n            <div class=\"widget-settings-icons\">\n              <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <iframe [width]=\"widget['width']\"\n                    height=\"300\"\n                    [src]=\"safeUrl(widget['url'])\">\n            </iframe>\n            <div class=\"widget-settings-icons\">\n              <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"thumbnail\">\n              <img [style.width]=\"widget['width']\"\n                   [src]=\"safeUrl(widget['url'])\">\n            </a>\n            <div class=\"widget-settings-icons\">\n              <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'HTML'\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div [innerHTML]=\"widget['text']\">\n          </div>\n            <div class=\"widget-settings-icons\">\n              <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', widget['_id']]\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\n  <p class=\"navbar-brand pull-right\">\n    <a [routerLink]=\"['/user', userId]\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </p>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = (function () {
    function WidgetListComponent(widgetService, activatedRoutes, domSanitizer) {
        this.widgetService = widgetService;
        this.activatedRoutes = activatedRoutes;
        this.domSanitizer = domSanitizer;
        this.widgets = [{}];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgets = _this.widgetService.findWidgetsByPageId(_this.pageId);
        });
    };
    WidgetListComponent.prototype.safeUrl = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _c || Object])
], WidgetListComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, userName, password, firstName, lastName, email) {
        this._id = _id;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var PageService = (function () {
    function PageService() {
        this.pages = [
            { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
        ];
    }
    PageService.prototype.createPage = function (webiteId, page) {
        page['_id'] = Math.floor(Math.random() * 1000) + '';
        page['websiteId'] = webiteId;
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        return this.pages.filter(function (page) {
            return page['websiteId'] === websiteId;
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.pages.find(function (page) {
            return page['_id'] === pageId;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]['_id'] === pageId) {
                this.pages[x]['name'] = page.name;
                this.pages[x]['description'] = page.description;
                return this.pages[x];
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]['_id'] === pageId) {
                delete this.pages[x];
            }
        }
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageService);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var UserService = (function () {
    function UserService() {
        this.users = [
            new __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__["a" /* User */]('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice@gmail.com'),
            new __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__["a" /* User */]('234', 'bob', 'bob', 'Bob', 'Marley', 'bob@gmail.com'),
            new __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__["a" /* User */]('345', 'charly', 'charly', 'Charly', 'Garcia', 'charly@gmail.com'),
            new __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__["a" /* User */]('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'ja@gmail.com')
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById
        };
    }
    UserService.prototype.createUser = function (user) {
        user['_id'] = Math.floor(Math.random() * 1000) + '';
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        return this.users.find(function (user) {
            return user['_id'] === userId;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]['userName'] === username) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]['_id'] === userId) {
                this.users[x]['firstName'] = user.firstName;
                this.users[x]['lastName'] = user.lastName;
                this.users[x]['userName'] = user.userName;
                this.users[x]['email'] = user.email;
                return this.users[x];
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]['_id'] === userId) {
                delete this.users[x];
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = [
            { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
        ];
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website['_id'] = Math.floor(Math.random() * 1000) + '';
        website['developerId'] = userId;
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.websites.filter(function (website) {
            return website['developerId'] === userId;
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.websites.find(function (website) {
            return website['_id'] === websiteId;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]['_id'] === websiteId) {
                this.websites[x]['name'] = website.name;
                this.websites[x]['description'] = website.description;
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]['_id'] === websiteId) {
                delete this.websites[x];
            }
        }
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO' },
            { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            {
                '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
                'url': 'https://i.pinimg.com/originals/a2/2a/0a/a22a0a7e624943303b23cc326598c167.jpg'
            },
            { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
            { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            {
                '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
                'url': 'https://www.youtube.com/embed/vlDzYIIOYmM'
            },
            { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' }
        ];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget['_id'] = Math.floor(Math.random() * 1000) + '';
        widget['pageId'] = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this.widgets.filter(function (widget) {
            return widget['pageId'] === pageId;
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.widgets.find(function (widget) {
            return widget['_id'] === widgetId;
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]['_id'] === widgetId) {
                switch (widget['type']) {
                    case 'HEADING':
                        this.widgets[x]['size'] = widget['size'];
                        this.widgets[x]['text'] = widget['text'];
                        break;
                    case 'IMAGE':
                        this.widgets[x]['width'] = widget['width'];
                        this.widgets[x]['url'] = widget['url'];
                        break;
                    case 'YOUTUBE':
                        this.widgets[x]['width'] = widget['width'];
                        this.widgets[x]['url'] = widget['url'];
                        break;
                    case 'HTML':
                        this.widgets[x]['text'] = widget['text'];
                        break;
                }
                this.widgets[x]['_id'] = widgetId;
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]['_id'] === widgetId) {
                delete this.widgets[x];
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map