(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commentaires-commentaires-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/commentaires/commentaires.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/commentaires/commentaires.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>commentaires</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>  \r\n    <ion-row style=\"display: flex; justify-content: center;\">\r\n      <ion-col size=\"8\" text-center style=\"padding-top: 5%;\">\r\n        <h4>Commentaires</h4>\r\n      </ion-col>\r\n    </ion-row> \r\n    <ion-row style=\"padding-top:70%; justify-content: center;\">\r\n      <h6>Page en cours de développement</h6>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\r\n</ion-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/commentaires/commentaires-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/commentaires/commentaires-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CommentairesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentairesPageRoutingModule", function() { return CommentairesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _commentaires_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentaires.page */ "./src/app/commentaires/commentaires.page.ts");




const routes = [
    {
        path: '',
        component: _commentaires_page__WEBPACK_IMPORTED_MODULE_3__["CommentairesPage"]
    }
];
let CommentairesPageRoutingModule = class CommentairesPageRoutingModule {
};
CommentairesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CommentairesPageRoutingModule);



/***/ }),

/***/ "./src/app/commentaires/commentaires.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/commentaires/commentaires.module.ts ***!
  \*****************************************************/
/*! exports provided: CommentairesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentairesPageModule", function() { return CommentairesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _commentaires_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commentaires-routing.module */ "./src/app/commentaires/commentaires-routing.module.ts");
/* harmony import */ var _commentaires_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commentaires.page */ "./src/app/commentaires/commentaires.page.ts");







let CommentairesPageModule = class CommentairesPageModule {
};
CommentairesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _commentaires_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommentairesPageRoutingModule"]
        ],
        declarations: [_commentaires_page__WEBPACK_IMPORTED_MODULE_6__["CommentairesPage"]]
    })
], CommentairesPageModule);



/***/ }),

/***/ "./src/app/commentaires/commentaires.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/commentaires/commentaires.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRhaXJlcy9jb21tZW50YWlyZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/commentaires/commentaires.page.ts":
/*!***************************************************!*\
  !*** ./src/app/commentaires/commentaires.page.ts ***!
  \***************************************************/
/*! exports provided: CommentairesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentairesPage", function() { return CommentairesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");





let CommentairesPage = class CommentairesPage {
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
CommentairesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
];
CommentairesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-commentaires',
        template: __webpack_require__(/*! raw-loader!./commentaires.page.html */ "./node_modules/raw-loader/index.js!./src/app/commentaires/commentaires.page.html"),
        styles: [__webpack_require__(/*! ./commentaires.page.scss */ "./src/app/commentaires/commentaires.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
], CommentairesPage);



/***/ })

}]);
//# sourceMappingURL=commentaires-commentaires-module-es2015.js.map