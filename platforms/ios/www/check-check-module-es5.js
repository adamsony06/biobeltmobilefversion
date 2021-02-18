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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check.page */ "./src/app/check/check.page.ts");




var routes = [
    {
        path: '',
        component: _check_page__WEBPACK_IMPORTED_MODULE_3__["CheckPage"]
    }
];
var CheckPageRoutingModule = /** @class */ (function () {
    function CheckPageRoutingModule() {
    }
    CheckPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CheckPageRoutingModule);
    return CheckPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _check_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-routing.module */ "./src/app/check/check-routing.module.ts");
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check.page */ "./src/app/check/check.page.ts");







var CheckPageModule = /** @class */ (function () {
    function CheckPageModule() {
    }
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
    return CheckPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");







var CheckPage = /** @class */ (function () {
    function CheckPage(platform, loadingCTRL, global, ngZone, network, hotspot, cd) {
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
    CheckPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.platform.is("ios")) {
                WifiWizard2.iOSConnectNetwork("BBAM", "BioBeltService").then(function (item) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var loadingCTRL;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loadingCTRL.create({
                                    message: "Connection à l'UPC en cours...",
                                    duration: 10000
                                })];
                            case 1:
                                loadingCTRL = _a.sent();
                                loadingCTRL.present();
                                this.global.isBBAM = true;
                                this.platform.ready().then(function (readySource) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var _this = this;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        if (readySource == 'cordova') {
                                            this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_3__["UPCModbus"](function (state) {
                                                _this.ngZone.run(function () {
                                                    // Force refresh UI
                                                    //this.readDiffusionParameters();
                                                });
                                            });
                                            this.network.onConnect().subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var _this = this;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!(this.network.type === this.network.Connection.WIFI)) return [3 /*break*/, 2];
                                                            return [4 /*yield*/, this.upc.client.connect()];
                                                        case 1:
                                                            _a.sent();
                                                            setTimeout(function () {
                                                                _this.ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                    var i, j, k, l;
                                                                    var _this = this;
                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                        //Read parameters for check 40271 40291
                                                                        for (i = 40271; i < 40291; i += 2) {
                                                                            this.upc.client.getFloatFromHoldingRegister(i).then(function (res) {
                                                                                _this.co2PresOutRef.push(res);
                                                                            });
                                                                        }
                                                                        this.cd.detectChanges();
                                                                        // 40229 - 40249
                                                                        for (j = 40229; j < 40249; j += 2) {
                                                                            this.upc.client.getFloatFromHoldingRegister(j).then(function (res) {
                                                                                _this.co2PresInp1.push(res / 1000);
                                                                            });
                                                                        }
                                                                        this.cd.detectChanges();
                                                                        for (k = 40249; k < 40269; k += 2) {
                                                                            this.upc.client.getFloatFromHoldingRegister(k).then(function (res) {
                                                                                _this.cos2PresInp2.push(res / 1000);
                                                                            });
                                                                        }
                                                                        this.cd.detectChanges();
                                                                        for (l = 40356; l < 40376; l += 2) {
                                                                            this.upc.client.getFloatFromHoldingRegister(l).then(function (res) {
                                                                                _this.co2PresOutSet.push(res / 1000);
                                                                            });
                                                                        }
                                                                        this.cd.detectChanges();
                                                                        return [2 /*return*/];
                                                                    });
                                                                }); });
                                                            }, 5000);
                                                            _a.label = 2;
                                                        case 2: return [2 /*return*/];
                                                    }
                                                });
                                            }); });
                                        }
                                        return [2 /*return*/];
                                    });
                                }); });
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            else if (_this.platform.is("android")) {
                _this.hotspot.connectToWifi("BBAM", "BioBeltService").then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var loading;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loadingCTRL.create({
                                    message: "Connection à l'UPC en cours...",
                                    duration: 10000
                                })];
                            case 1:
                                loading = _a.sent();
                                loading.present();
                                this.global.isBBAM = true;
                                this.platform.ready().then(function (readySource) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var _this = this;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (readySource == 'cordova') {
                                                    this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_3__["UPCModbus"](function (state) {
                                                        _this.ngZone.run(function () {
                                                            // Force refresh UI
                                                            //this.readDiffusionParameters();
                                                        });
                                                    });
                                                }
                                                return [4 /*yield*/, this.upc.client.connect()];
                                            case 1:
                                                _a.sent();
                                                setTimeout(function () {
                                                    //Read parameters for check 40271 40291
                                                    for (var i = 40271; i < 40291; i += 2) {
                                                        _this.upc.client.getFloatFromHoldingRegister(i).then(function (res) {
                                                            _this.co2PresOutRef.push(res);
                                                        });
                                                    }
                                                    _this.cd.detectChanges();
                                                    // 40229 - 40249
                                                    for (var j = 40229; j < 40249; j += 2) {
                                                        _this.upc.client.getFloatFromHoldingRegister(j).then(function (res) {
                                                            _this.co2PresInp1.push(res / 1000);
                                                        });
                                                    }
                                                    _this.cd.detectChanges();
                                                    for (var k = 40249; k < 40269; k += 2) {
                                                        _this.upc.client.getFloatFromHoldingRegister(k).then(function (res) {
                                                            _this.cos2PresInp2.push(res / 1000);
                                                        });
                                                    }
                                                    _this.cd.detectChanges();
                                                    for (var l = 40356; l < 40376; l += 2) {
                                                        _this.upc.client.getFloatFromHoldingRegister(l).then(function (res) {
                                                            _this.co2PresOutSet.push(res / 1000);
                                                        });
                                                    }
                                                    _this.cd.detectChanges();
                                                }, 5000);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        });
    };
    CheckPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
        { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__["Hotspot"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
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
    return CheckPage;
}());



/***/ })

}]);
//# sourceMappingURL=check-check-module-es5.js.map