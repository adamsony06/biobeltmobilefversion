(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modifnbpieges-modifnbpieges-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modifnbpieges/modifnbpieges.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modifnbpieges/modifnbpieges.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>modifnbpieges</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>  \r\n    <ion-row style=\"display: flex; justify-content: center;\">\r\n      <ion-col size=\"8\" text-center style=\"padding-top: 5%;\">\r\n        <h4>Modification du nombre de pièges</h4>\r\n      </ion-col>\r\n    </ion-row> \r\n    <ion-row style=\"padding-top:70%; justify-content: center;\">\r\n      <h6>Page en cours de développement</h6>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/modifnbpieges/modifnbpieges-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modifnbpieges/modifnbpieges-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ModifnbpiegesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifnbpiegesPageRoutingModule", function() { return ModifnbpiegesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modifnbpieges_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifnbpieges.page */ "./src/app/modifnbpieges/modifnbpieges.page.ts");




const routes = [
    {
        path: '',
        component: _modifnbpieges_page__WEBPACK_IMPORTED_MODULE_3__["ModifnbpiegesPage"]
    }
];
let ModifnbpiegesPageRoutingModule = class ModifnbpiegesPageRoutingModule {
};
ModifnbpiegesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModifnbpiegesPageRoutingModule);



/***/ }),

/***/ "./src/app/modifnbpieges/modifnbpieges.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modifnbpieges/modifnbpieges.module.ts ***!
  \*******************************************************/
/*! exports provided: ModifnbpiegesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifnbpiegesPageModule", function() { return ModifnbpiegesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modifnbpieges_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifnbpieges-routing.module */ "./src/app/modifnbpieges/modifnbpieges-routing.module.ts");
/* harmony import */ var _modifnbpieges_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifnbpieges.page */ "./src/app/modifnbpieges/modifnbpieges.page.ts");







let ModifnbpiegesPageModule = class ModifnbpiegesPageModule {
};
ModifnbpiegesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modifnbpieges_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModifnbpiegesPageRoutingModule"]
        ],
        declarations: [_modifnbpieges_page__WEBPACK_IMPORTED_MODULE_6__["ModifnbpiegesPage"]]
    })
], ModifnbpiegesPageModule);



/***/ }),

/***/ "./src/app/modifnbpieges/modifnbpieges.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/modifnbpieges/modifnbpieges.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmbmJwaWVnZXMvbW9kaWZuYnBpZWdlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modifnbpieges/modifnbpieges.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/modifnbpieges/modifnbpieges.page.ts ***!
  \*****************************************************/
/*! exports provided: ModifnbpiegesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifnbpiegesPage", function() { return ModifnbpiegesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");





let ModifnbpiegesPage = class ModifnbpiegesPage {
    constructor(storage, router, global) {
        this.storage = storage;
        this.router = router;
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
ModifnbpiegesPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
ModifnbpiegesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modifnbpieges',
        template: __webpack_require__(/*! raw-loader!./modifnbpieges.page.html */ "./node_modules/raw-loader/index.js!./src/app/modifnbpieges/modifnbpieges.page.html"),
        styles: [__webpack_require__(/*! ./modifnbpieges.page.scss */ "./src/app/modifnbpieges/modifnbpieges.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
], ModifnbpiegesPage);



/***/ })

}]);
//# sourceMappingURL=modifnbpieges-modifnbpieges-module-es2015.js.map