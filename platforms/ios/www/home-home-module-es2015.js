(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n     <ion-title>Accueil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>  \n  <ion-grid>    \n    <ion-row>\n        <ion-col size=\"12\" text-center style=\"padding-top: 5%;\"><h3>Accueil</h3></ion-col>\n        <ion-col size=\"12\">\n          <fieldset>\n            <legend>Type d'opération</legend> \n          \n           <ion-select  [(ngModel)]=\"operationType\">\n              <ion-select-option class=\"home-wrapper\" *ngFor=\"let operationTypeOption of operationTypeOptions\" [value]=\"operationTypeOption\">\n                {{operationTypeOption}}\n              </ion-select-option>\n            </ion-select>\n          </fieldset>\n        </ion-col>\n      \n      \n       \n      \n    </ion-row>\n    \n  </ion-grid>\n \n</ion-content>\n<ion-footer>\n  \n  <ion-button color=\"primary\" size=\"block\" (click)=\"goTo(operationType);\">Suivant</ion-button>\n\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nfieldset {\n  padding-left: 2%;\n  padding-right: 2%;\n  border: 1px #2E7117 solid;\n  border-radius: 1em;\n}\n\nlegend {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: larger;\n  color: #2E7117;\n  font-style: italic;\n  padding-left: 1%;\n  padding-right: 2%;\n}\n\nion-select {\n  margin-top: -4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJtYW5kL0Rlc2t0b3AvYmlvYmVsdG1vYmlsZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuZmllbGRzZXQge1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTsgXG4gIGJvcmRlcjogMXB4ICMyRTcxMTcgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cbmxlZ2VuZCB7ICBcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7IFxuICBmb250LXNpemU6bGFyZ2VyO1xuICBjb2xvcjogIzJFNzExNztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbn1cblxuaW9uLXNlbGVjdHtcbiAgbWFyZ2luLXRvcDogLTQlO1xufVxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5maWVsZHNldCB7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xuICBib3JkZXI6IDFweCAjMkU3MTE3IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbmxlZ2VuZCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGNvbG9yOiAjMkU3MTE3O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmctbGVmdDogMSU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgbWFyZ2luLXRvcDogLTQlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _api_ApiResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/ApiResponse */ "./src/app/api/ApiResponse.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");







let HomePage = class HomePage {
    constructor(ucp3service, storage, router, global) {
        this.ucp3service = ucp3service;
        this.storage = storage;
        this.router = router;
        this.global = global;
        this.operationTypeOptions = ["Mouvement de bouteilles dans l'entrepôt", "Intervention sur une ceinture"];
        this.operationType = "Mouvement de bouteilles dans l'entrepôt";
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storage.get('token').then(val => { this.token = val; });
            yield this.ucp3service.getUPC3(this.token).subscribe(res => {
                switch (res.code) {
                    case _api_ApiResponse__WEBPACK_IMPORTED_MODULE_3__["Code"].UPCV3_RECOVERED:
                        this.upcv3 = res.result;
                        break;
                    case _api_ApiResponse__WEBPACK_IMPORTED_MODULE_3__["Code"].UNAUTHORIZED:
                        alert("Erreur, vous n'êtes pas autorisé à utiliser l'application mobile !");
                        break;
                }
            });
            yield this.ucp3service.getOperators(this.token).subscribe(res => {
                switch (res.code) {
                    case _api_ApiResponse__WEBPACK_IMPORTED_MODULE_3__["Code"].OPERATOR_RECOVERED:
                        this.operators = res.result;
                        break;
                    case _api_ApiResponse__WEBPACK_IMPORTED_MODULE_3__["Code"].UNAUTHORIZED:
                        this.operators = [];
                        break;
                }
            });
        });
    }
    goToPieges() {
        this.global.upc3 = this.upcv3[this.value];
        this.global.op = this.op;
        this.router.navigate(['instalpieges']);
    }
    goTo(operationType) {
        switch (this.operationType) {
            case this.operationTypeOptions[0]:
                this.router.navigate(["optionbottle"]);
                break;
            case this.operationTypeOptions[1]:
                this.router.navigate(['interventionceinture']);
                break;
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map