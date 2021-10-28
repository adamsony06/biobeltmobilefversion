(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interventionceinture2-interventionceinture2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/interventionceinture2/interventionceinture2.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/interventionceinture2/interventionceinture2.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <!--<ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>  -->\r\n    <!--<ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>    \r\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \r\n     </ion-buttons>\r\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \r\n     </ion-buttons>-->\r\n     <ion-title>Intervention sur une ceinture</ion-title>\r\n     <!--<ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \r\n     </ion-buttons>\r\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \r\n     </ion-buttons>-->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>    \r\n  <ion-grid>  \r\n    <ion-row style=\"display: flex; justify-content: center;\">\r\n      <ion-col size=\"8\" text-center style=\"padding-top: 5%;\">\r\n        <h4>Intervention sur une ceinture</h4>\r\n      </ion-col>\r\n    </ion-row>  \r\n    \r\n    \r\n  </ion-grid>\r\n \r\n</ion-content>\r\n<ion-footer>  \r\n  \r\n    <h5 style=\"font-style: italic; color: #2E7117;\">Continuer</h5>\r\n \r\n\r\n</ion-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/interventionceinture2/interventionceinture2-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/interventionceinture2/interventionceinture2-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: Interventionceinture2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interventionceinture2PageRoutingModule", function() { return Interventionceinture2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _interventionceinture2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interventionceinture2.page */ "./src/app/interventionceinture2/interventionceinture2.page.ts");




const routes = [
    {
        path: '',
        component: _interventionceinture2_page__WEBPACK_IMPORTED_MODULE_3__["Interventionceinture2Page"]
    }
];
let Interventionceinture2PageRoutingModule = class Interventionceinture2PageRoutingModule {
};
Interventionceinture2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Interventionceinture2PageRoutingModule);



/***/ }),

/***/ "./src/app/interventionceinture2/interventionceinture2.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/interventionceinture2/interventionceinture2.module.ts ***!
  \***********************************************************************/
/*! exports provided: Interventionceinture2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interventionceinture2PageModule", function() { return Interventionceinture2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _interventionceinture2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interventionceinture2-routing.module */ "./src/app/interventionceinture2/interventionceinture2-routing.module.ts");
/* harmony import */ var _interventionceinture2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interventionceinture2.page */ "./src/app/interventionceinture2/interventionceinture2.page.ts");







let Interventionceinture2PageModule = class Interventionceinture2PageModule {
};
Interventionceinture2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _interventionceinture2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Interventionceinture2PageRoutingModule"]
        ],
        declarations: [_interventionceinture2_page__WEBPACK_IMPORTED_MODULE_6__["Interventionceinture2Page"]]
    })
], Interventionceinture2PageModule);



/***/ }),

/***/ "./src/app/interventionceinture2/interventionceinture2.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/interventionceinture2/interventionceinture2.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset {\n  padding-left: 2%;\n  padding-right: 2%;\n  border: 1px #2E7117 solid;\n  border-radius: 1em;\n}\n\nlegend {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: larger;\n  color: #2E7117;\n  font-style: italic;\n  padding-left: 1%;\n  padding-right: 2%;\n}\n\nion-select {\n  margin-top: -4%;\n}\n\nul {\n  list-style: none;\n  padding-left: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJtYW5kL0Rlc2t0b3AvYmlvYmVsdG1vYmlsZS9zcmMvYXBwL2ludGVydmVudGlvbmNlaW50dXJlMi9pbnRlcnZlbnRpb25jZWludHVyZTIucGFnZS5zY3NzIiwic3JjL2FwcC9pbnRlcnZlbnRpb25jZWludHVyZTIvaW50ZXJ2ZW50aW9uY2VpbnR1cmUyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDRTtFQUNFLGVBQUE7QUNFSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ludGVydmVudGlvbmNlaW50dXJlMi9pbnRlcnZlbnRpb25jZWludHVyZTIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlOyBcclxuICAgIGJvcmRlcjogMXB4ICMyRTcxMTcgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgfVxyXG4gIGxlZ2VuZCB7ICBcclxuICAgIHdpZHRoOmZpdC1jb250ZW50OyBcclxuICAgIGZvbnQtc2l6ZTpsYXJnZXI7XHJcbiAgICBjb2xvcjogIzJFNzExNztcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlbGVjdHtcclxuICAgIG1hcmdpbi10b3A6IC00JTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0JTtcclxuICB9XHJcbiIsImZpZWxkc2V0IHtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG4gIGJvcmRlcjogMXB4ICMyRTcxMTcgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cblxubGVnZW5kIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgY29sb3I6ICMyRTcxMTc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBtYXJnaW4tdG9wOiAtNCU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiA0JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/interventionceinture2/interventionceinture2.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/interventionceinture2/interventionceinture2.page.ts ***!
  \*********************************************************************/
/*! exports provided: Interventionceinture2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interventionceinture2Page", function() { return Interventionceinture2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/wifi-wizard-2/ngx */ "./node_modules/@ionic-native/wifi-wizard-2/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");









let Interventionceinture2Page = class Interventionceinture2Page {
    constructor(upcv3service, storage, router, global, wifiWizard2, platform, hotspot) {
        this.upcv3service = upcv3service;
        this.storage = storage;
        this.router = router;
        this.global = global;
        this.wifiWizard2 = wifiWizard2;
        this.platform = platform;
        this.hotspot = hotspot;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* await this.platform.ready().then(()=>{this.wifiWizard2.connect("BBAM", true, "BioBeltService", "WPA").then((res)=>{alert(JSON.stringify(res))}).catch(error => {alert(JSON.stringify(error))});
            }).catch(error => {alert(JSON.stringify(error))}) */
        });
    }
};
Interventionceinture2Page.ctorParameters = () => [
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _ionic_native_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_6__["WifiWizard2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_8__["Hotspot"] }
];
Interventionceinture2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-interventionceinture2',
        template: __webpack_require__(/*! raw-loader!./interventionceinture2.page.html */ "./node_modules/raw-loader/index.js!./src/app/interventionceinture2/interventionceinture2.page.html"),
        styles: [__webpack_require__(/*! ./interventionceinture2.page.scss */ "./src/app/interventionceinture2/interventionceinture2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
        _ionic_native_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_6__["WifiWizard2"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_8__["Hotspot"]])
], Interventionceinture2Page);



/***/ })

}]);
//# sourceMappingURL=interventionceinture2-interventionceinture2-module-es2015.js.map