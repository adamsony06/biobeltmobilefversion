(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rapportvisite-rapportvisite-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rapportvisite/rapportvisite.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rapportvisite/rapportvisite.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>rapportvisite</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n    <ion-grid>  \r\n      <ion-row style=\"display: flex; justify-content: center;\">\r\n        <ion-col size=\"8\" text-center style=\"padding-top: 5%;\">\r\n          <h4>Rapport de visite</h4>\r\n        </ion-col>\r\n      </ion-row> \r\n      <ion-row style=\"padding-top:70%; justify-content: center; font-size: large ;\">\r\n        <p>Page en cours de développement</p>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/rapportvisite/rapportvisite-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/rapportvisite/rapportvisite-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RapportvisitePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportvisitePageRoutingModule", function() { return RapportvisitePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rapportvisite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rapportvisite.page */ "./src/app/rapportvisite/rapportvisite.page.ts");




const routes = [
    {
        path: '',
        component: _rapportvisite_page__WEBPACK_IMPORTED_MODULE_3__["RapportvisitePage"]
    }
];
let RapportvisitePageRoutingModule = class RapportvisitePageRoutingModule {
};
RapportvisitePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RapportvisitePageRoutingModule);



/***/ }),

/***/ "./src/app/rapportvisite/rapportvisite.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/rapportvisite/rapportvisite.module.ts ***!
  \*******************************************************/
/*! exports provided: RapportvisitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportvisitePageModule", function() { return RapportvisitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rapportvisite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rapportvisite-routing.module */ "./src/app/rapportvisite/rapportvisite-routing.module.ts");
/* harmony import */ var _rapportvisite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rapportvisite.page */ "./src/app/rapportvisite/rapportvisite.page.ts");







let RapportvisitePageModule = class RapportvisitePageModule {
};
RapportvisitePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rapportvisite_routing_module__WEBPACK_IMPORTED_MODULE_5__["RapportvisitePageRoutingModule"]
        ],
        declarations: [_rapportvisite_page__WEBPACK_IMPORTED_MODULE_6__["RapportvisitePage"]]
    })
], RapportvisitePageModule);



/***/ }),

/***/ "./src/app/rapportvisite/rapportvisite.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/rapportvisite/rapportvisite.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhcHBvcnR2aXNpdGUvcmFwcG9ydHZpc2l0ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/rapportvisite/rapportvisite.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/rapportvisite/rapportvisite.page.ts ***!
  \*****************************************************/
/*! exports provided: RapportvisitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportvisitePage", function() { return RapportvisitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");





let RapportvisitePage = class RapportvisitePage {
    constructor(router, storage, global) {
        this.router = router;
        this.storage = storage;
        this.global = global;
        this.display = false;
        this.global.checkMode();
    }
    ngOnInit() { }
    ionViewWillEnter() {
        /*affichage bouton suivant*/
        this.global.checkNextPage().then(res => {
            if (res == true) {
                this.display = true;
            }
        });
    }
    goToNextPage() {
        this.storage.get("nexturl").then(res => {
            this.router.navigate([res]);
        });
    }
};
RapportvisitePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
];
RapportvisitePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rapportvisite',
        template: __webpack_require__(/*! raw-loader!./rapportvisite.page.html */ "./node_modules/raw-loader/index.js!./src/app/rapportvisite/rapportvisite.page.html"),
        styles: [__webpack_require__(/*! ./rapportvisite.page.scss */ "./src/app/rapportvisite/rapportvisite.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
], RapportvisitePage);



/***/ })

}]);
//# sourceMappingURL=rapportvisite-rapportvisite-module-es2015.js.map