(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["check-check-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/check/check.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/check/check.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>check</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"col-12\">\n    <div class=\"card bg-light mb-2\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Table des pressions</h5>\n        <table class=\"table table-borderless table-sm text-center mb-0\">\n          <thead>\n            <tr>\n              <th>Intensité</th>\n              <th>Entrée B1 [bar]</th>\n              <th>Entrée B2 [bar]</th>\n              <th>Sortie [bar]</th>\n              <th>Sortie réf. [bar]</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let c of co2PresOutRef;let i = index;\">\n\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/check/check-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/check/check-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CheckPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPageRoutingModule", function() { return CheckPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check.page */ "./src/app/check/check.page.ts");




const routes = [
    {
        path: '',
        component: _check_page__WEBPACK_IMPORTED_MODULE_3__["CheckPage"]
    }
];
let CheckPageRoutingModule = class CheckPageRoutingModule {
};
CheckPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckPageRoutingModule);



/***/ }),

/***/ "./src/app/check/check.module.ts":
/*!***************************************!*\
  !*** ./src/app/check/check.module.ts ***!
  \***************************************/
/*! exports provided: CheckPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPageModule", function() { return CheckPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _check_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-routing.module */ "./src/app/check/check-routing.module.ts");
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check.page */ "./src/app/check/check.page.ts");







let CheckPageModule = class CheckPageModule {
};
CheckPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _check_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckPageRoutingModule"]
        ],
        declarations: [_check_page__WEBPACK_IMPORTED_MODULE_6__["CheckPage"]]
    })
], CheckPageModule);



/***/ }),

/***/ "./src/app/check/check.page.scss":
/*!***************************************!*\
  !*** ./src/app/check/check.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrL2NoZWNrLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/check/check.page.ts":
/*!*************************************!*\
  !*** ./src/app/check/check.page.ts ***!
  \*************************************/
/*! exports provided: CheckPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPage", function() { return CheckPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");







let CheckPage = class CheckPage {
    constructor(platform, loadingCTRL, global, ngZone, network, hotspot, cd) {
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.global = global;
        this.ngZone = ngZone;
        this.network = network;
        this.hotspot = hotspot;
        this.cd = cd;
        this.co2PresOutRef = [];
        this.co2PresInp1 = [];
        this.cos2PresInp2 = [];
        this.co2PresOutSet = [];
    }
    ngOnInit() {
        this.platform.ready().then(() => {
            if (this.platform.is("ios")) {
                WifiWizard2.iOSConnectNetwork("BBAM", "BioBeltService").then((item) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    var loadingCTRL = yield this.loadingCTRL.create({
                        message: "Connection à l'UPC en cours...",
                        duration: 10000
                    });
                    loadingCTRL.present();
                    this.global.isBBAM = true;
                    this.platform.ready().then((readySource) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        if (readySource == 'cordova') {
                            this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_3__["UPCModbus"](state => {
                                this.ngZone.run(() => {
                                    // Force refresh UI
                                    //this.readDiffusionParameters();
                                });
                            });
                            this.network.onConnect().subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                if (this.network.type === this.network.Connection.WIFI) {
                                    yield this.upc.client.connect();
                                    setTimeout(() => {
                                        this.ngZone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                            //Read parameters for check 40271 40291
                                            for (var i = 40271; i < 40291; i += 2) {
                                                this.upc.client.getFloatFromHoldingRegister(i).then(res => {
                                                    this.co2PresOutRef.push(res);
                                                });
                                            }
                                            this.cd.detectChanges();
                                            // 40229 - 40249
                                            for (var j = 40229; j < 40249; j += 2) {
                                                this.upc.client.getFloatFromHoldingRegister(j).then(res => {
                                                    this.co2PresInp1.push(res / 1000);
                                                });
                                            }
                                            this.cd.detectChanges();
                                            for (var k = 40249; k < 40269; k += 2) {
                                                this.upc.client.getFloatFromHoldingRegister(k).then(res => {
                                                    this.cos2PresInp2.push(res / 1000);
                                                });
                                            }
                                            this.cd.detectChanges();
                                            for (var l = 40356; l < 40376; l += 2) {
                                                this.upc.client.getFloatFromHoldingRegister(l).then(res => {
                                                    this.co2PresOutSet.push(res / 1000);
                                                });
                                            }
                                            this.cd.detectChanges();
                                        }));
                                    }, 5000);
                                }
                            }));
                        }
                    }));
                }));
            }
            else if (this.platform.is("android")) {
                this.hotspot.connectToWifi("BBAM", "BioBeltService").then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    var loading = yield this.loadingCTRL.create({
                        message: "Connection à l'UPC en cours...",
                        duration: 10000
                    });
                    loading.present();
                    this.global.isBBAM = true;
                    this.platform.ready().then((readySource) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        if (readySource == 'cordova') {
                            this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_3__["UPCModbus"](state => {
                                this.ngZone.run(() => {
                                    // Force refresh UI
                                    //this.readDiffusionParameters();
                                });
                            });
                        }
                        yield this.upc.client.connect();
                        setTimeout(() => {
                            //Read parameters for check 40271 40291
                            for (var i = 40271; i < 40291; i += 2) {
                                this.upc.client.getFloatFromHoldingRegister(i).then(res => {
                                    this.co2PresOutRef.push(res);
                                });
                            }
                            this.cd.detectChanges();
                            // 40229 - 40249
                            for (var j = 40229; j < 40249; j += 2) {
                                this.upc.client.getFloatFromHoldingRegister(j).then(res => {
                                    this.co2PresInp1.push(res / 1000);
                                });
                            }
                            this.cd.detectChanges();
                            for (var k = 40249; k < 40269; k += 2) {
                                this.upc.client.getFloatFromHoldingRegister(k).then(res => {
                                    this.cos2PresInp2.push(res / 1000);
                                });
                            }
                            this.cd.detectChanges();
                            for (var l = 40356; l < 40376; l += 2) {
                                this.upc.client.getFloatFromHoldingRegister(l).then(res => {
                                    this.co2PresOutSet.push(res / 1000);
                                });
                            }
                            this.cd.detectChanges();
                        }, 5000);
                    }));
                }));
            }
        });
    }
};
CheckPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
    { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__["Hotspot"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CheckPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-check',
        template: __webpack_require__(/*! raw-loader!./check.page.html */ "./node_modules/raw-loader/index.js!./src/app/check/check.page.html"),
        styles: [__webpack_require__(/*! ./check.page.scss */ "./src/app/check/check.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
        _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__["Hotspot"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], CheckPage);



/***/ })

}]);
//# sourceMappingURL=check-check-module-es2015.js.map