(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adjustment-adjustment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/adjustment/adjustment.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adjustment/adjustment.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Réglage Pression/Débit</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"card card-body border-top-0\">\n    <div class=\"row\">\n   <!-- Adjustments -->\n   <div class=\"col-md-4\">\n    <div class=\"card bg-light mb-2\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Ajustements</h5>\n        <dl class=\"row mb-0\">\n\n          <!-- co2ResActAdj -->\n          <dd class=\"col-md-6 mb-0\">Réserve active</dd>\n          <dt class=\"col-md-6 mb-2 text-md-right\">\n            <select class=\"custom-select custom-select-sm\"\n                    \n                    (ngModelChange)=\"changeResAct();\"\n                    [(ngModel)]=\"resActive\">\n              <option value=\"0\">B0</option>\n              <option value=\"1\">B1</option>\n              <option value=\"2\">B2</option>\n            </select>\n          </dt>\n\n          <!-- upcDiffLvlAdj -->\n          <dd class=\"col-md-6 mb-0\">Intensité du flux</dd>\n          <ion-grid>\n            <ion-row>\n          <ion-col size=\"4\"><div class=\"col-md-2\"><ion-button (click)=\"minInt();\" shape=\"round\" size=\"small\">Min</ion-button></div></ion-col>\n          <ion-col size=\"4\"><dt class=\"col-md-6 mb-2 text-md-right\">\n            <input  type=\"number\" class=\"form-control form-control-sm\"\n                    \n                    (ngModelChange)=\"changeInt();\"\n                    [(ngModel)]=\"intensity\">\n          </dt></ion-col>\n          <ion-col size=\"4\"><div class=\"col-md-2\"><ion-button (click)=\"maxInt();\" shape=\"round\" size=\"small\">Max</ion-button></div></ion-col>\n        </ion-row>  \n        </ion-grid>\n\n          <!-- co2FlowRefAdj -->\n          <dd class=\"col-md-6 mb-0\">Flux maximal [nl/min]</dd>\n          <dt class=\"col-md-6 mb-0 text-md-right\">\n            <input  type=\"number\" class=\"form-control form-control-sm\" step=\"0.1\"\n                    \n                    (ngModelChange)=\"changeFluxMax();\"\n                    [(ngModel)]=\"fluxmax\">\n          </dt>\n\n        </dl>\n      </div>\n    </div>\n  </div>\n<!-- Flows -->\n<div class=\"col-sm-6 col-md-4\">\n  <div class=\"card bg-light mb-2\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Flux</h5>\n      <dl class=\"row mb-0\">\n\n        <!-- upcCo2DiffLvl -->\n        <dd class=\"col-lg-7 mb-0\">Intensité du flux actuel</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ intensityFlux }}</dt>\n\n        <!-- calcRefFlowRate -->\n        <dd class=\"col-lg-7 mb-0\">Flux de référence</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ fluxref.toFixed(3) }} nl/min</dt>\n\n        <!-- co2FlowAvg -->\n        <dd class=\"col-lg-7 mb-0\">Flux</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ flux.toFixed(3) }} nl/min</dt>\n\n        <!-- co2TempAvg -->\n        <dd class=\"col-lg-7 mb-0\">Température du flux</dd>\n        <dt class=\"col-lg-5 mb-0 text-lg-right\">{{ temp.toFixed(3) }} °C</dt>\n\n      </dl>\n    </div>\n  </div>\n</div>\n<!-- Pressures -->\n<div class=\"col-sm-6 col-md-4\">\n  <div class=\"card bg-light mb-2\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Pressions</h5>\n      <dl class=\"row mb-0\">\n\n        <!-- co2PresInpAvg -->\n        <dd class=\"col-lg-7 mb-0\">Pression d'entrée</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ input.toFixed(3) }} bar</dt>\n\n        <!-- co2PresOutAvg -->\n        <dd class=\"col-lg-7 mb-0\">Pression de sortie</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ output.toFixed(3) }} bar</dt>\n\n        <!-- co2PressOutComp -->\n        <dd class=\"col-lg-7 mb-0\">Pression de sortie compensée</dd>\n        <dt class=\"col-lg-5 mb-0 text-lg-right\">{{ outputcomp.toFixed(3) }} bar</dt>\n\n      </dl>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-button size=\"block\" [color]=\"colordif\" (click)=\"onChangeDiff();\">{{textdiff}}</ion-button>\n  <ion-button size=\"block\" color=\"danger\" (click)=\"onDisableDiff()\" *ngIf=\"modediff == 2\">Désactiver Diffusion</ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/adjustment/adjustment-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/adjustment/adjustment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AdjustmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustmentPageRoutingModule", function() { return AdjustmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adjustment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjustment.page */ "./src/app/adjustment/adjustment.page.ts");




var routes = [
    {
        path: '',
        component: _adjustment_page__WEBPACK_IMPORTED_MODULE_3__["AdjustmentPage"]
    }
];
var AdjustmentPageRoutingModule = /** @class */ (function () {
    function AdjustmentPageRoutingModule() {
    }
    AdjustmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AdjustmentPageRoutingModule);
    return AdjustmentPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/adjustment/adjustment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/adjustment/adjustment.module.ts ***!
  \*************************************************/
/*! exports provided: AdjustmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustmentPageModule", function() { return AdjustmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _adjustment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adjustment-routing.module */ "./src/app/adjustment/adjustment-routing.module.ts");
/* harmony import */ var _adjustment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adjustment.page */ "./src/app/adjustment/adjustment.page.ts");







var AdjustmentPageModule = /** @class */ (function () {
    function AdjustmentPageModule() {
    }
    AdjustmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _adjustment_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdjustmentPageRoutingModule"]
            ],
            declarations: [_adjustment_page__WEBPACK_IMPORTED_MODULE_6__["AdjustmentPage"]]
        })
    ], AdjustmentPageModule);
    return AdjustmentPageModule;
}());



/***/ }),

/***/ "./src/app/adjustment/adjustment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/adjustment/adjustment.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkanVzdG1lbnQvYWRqdXN0bWVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/adjustment/adjustment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/adjustment/adjustment.page.ts ***!
  \***********************************************/
/*! exports provided: AdjustmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustmentPage", function() { return AdjustmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");







var AdjustmentPage = /** @class */ (function () {
    function AdjustmentPage(platform, loadingCTRL, ngZone, network, hotspot, cd, global) {
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.ngZone = ngZone;
        this.network = network;
        this.hotspot = hotspot;
        this.cd = cd;
        this.global = global;
        this.input = 0;
        this.outputcomp = 0;
        this.output = 0;
        this.resActive = 0;
        this.intensity = 0;
        this.fluxmax = 0;
        this.intensityFlux = 0;
        this.flux = 0;
        this.temp = 0;
        this.fluxref = 0;
        this.modediff = 0;
        this.colordif = "primary";
        this.textdiff = "diffusion";
    }
    AdjustmentPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.platform.is("ios")) {
            this.platform.ready().then(function (res) {
                WifiWizard2.iOSConnectNetwork("BBAM", "BioBeltService").then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
                                                            setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                var _this = this;
                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                    this.ngZone.run(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                        var _this = this;
                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                            switch (_a.label) {
                                                                                case 0: return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                                                                        _this.input = res;
                                                                                        _this.cd.detectChanges();
                                                                                    }).catch(function (err) {
                                                                                    })];
                                                                                case 1:
                                                                                    _a.sent();
                                                                                    return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40463).then(function (res) {
                                                                                            _this.outputcomp = res;
                                                                                            _this.cd.detectChanges();
                                                                                        })];
                                                                                case 2:
                                                                                    _a.sent();
                                                                                    return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                                                                            _this.output = res;
                                                                                            _this.cd.detectChanges();
                                                                                        })];
                                                                                case 3:
                                                                                    _a.sent();
                                                                                    return [4 /*yield*/, this.upc.client.getStringFromHoldingRegister(40045, 10).then(function (res) {
                                                                                            _this.global.ssid = res;
                                                                                        })];
                                                                                case 4:
                                                                                    _a.sent();
                                                                                    return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40011, 1).then(function (res) {
                                                                                            if (res != 2) {
                                                                                                _this.colordif = "danger";
                                                                                                _this.textdiff = "Activez le Mode Adjust";
                                                                                            }
                                                                                            else {
                                                                                                _this.textdiff = "Adjustement";
                                                                                            }
                                                                                            _this.modediff = res;
                                                                                            _this.cd.detectChanges();
                                                                                        })];
                                                                                case 5:
                                                                                    _a.sent();
                                                                                    return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40150, 1).then(function (res) {
                                                                                            _this.resActive = res;
                                                                                            _this.cd.detectChanges();
                                                                                        })];
                                                                                case 6:
                                                                                    _a.sent();
                                                                                    return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40065, 1).then(function (res) {
                                                                                            _this.intensity = res;
                                                                                            _this.cd.detectChanges();
                                                                                        })];
                                                                                case 7:
                                                                                    _a.sent();
                                                                                    return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40018).then(function (res) {
                                                                                            _this.fluxmax = res;
                                                                                            _this.cd.detectChanges();
                                                                                        })];
                                                                                case 8:
                                                                                    _a.sent();
                                                                                    return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40416, 1).then(function (res) {
                                                                                            _this.intensityFlux = res;
                                                                                            _this.cd.detectChanges();
                                                                                        })]; //
                                                                                case 9:
                                                                                    _a.sent(); //
                                                                                    return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                                                                            _this.flux = res;
                                                                                            _this.cd.detectChanges();
                                                                                        })];
                                                                                case 10:
                                                                                    _a.sent();
                                                                                    return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40451).then(function (res) {
                                                                                            _this.temp = res;
                                                                                            _this.cd.detectChanges();
                                                                                        })];
                                                                                case 11:
                                                                                    _a.sent();
                                                                                    this.fluxref = this.intensityFlux * this.fluxmax / 10;
                                                                                    this.cd.detectChanges();
                                                                                    loading.dismiss();
                                                                                    setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                        var _this = this;
                                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                            switch (_a.label) {
                                                                                                case 0: return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                                                                                        _this.input = res;
                                                                                                        _this.cd.detectChanges();
                                                                                                    })];
                                                                                                case 1:
                                                                                                    _a.sent();
                                                                                                    return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40463).then(function (res) {
                                                                                                            _this.outputcomp = res;
                                                                                                            _this.cd.detectChanges();
                                                                                                        })];
                                                                                                case 2:
                                                                                                    _a.sent();
                                                                                                    return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                                                                                            _this.output = res;
                                                                                                            _this.cd.detectChanges();
                                                                                                        })];
                                                                                                case 3:
                                                                                                    _a.sent();
                                                                                                    return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                                                                                            _this.flux = res;
                                                                                                            _this.cd.detectChanges();
                                                                                                        })];
                                                                                                case 4:
                                                                                                    _a.sent();
                                                                                                    return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40416, 1).then(function (res) {
                                                                                                            _this.intensityFlux = res;
                                                                                                            _this.cd.detectChanges();
                                                                                                        })]; //
                                                                                                case 5:
                                                                                                    _a.sent(); //
                                                                                                    return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40018).then(function (res) {
                                                                                                            _this.fluxmax = res;
                                                                                                            _this.cd.detectChanges();
                                                                                                        })];
                                                                                                case 6:
                                                                                                    _a.sent();
                                                                                                    this.fluxref = this.intensityFlux * this.fluxmax / 10;
                                                                                                    return [2 /*return*/];
                                                                                            }
                                                                                        });
                                                                                    }); }, 500);
                                                                                    return [2 /*return*/];
                                                                            }
                                                                        });
                                                                    }); });
                                                                    return [2 /*return*/];
                                                                });
                                                            }); }, 5000);
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
            });
        }
        else if (this.platform.is("android")) {
            this.hotspot.connectToWifi("BBAM", "BioBeltService").then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
                                            if (!(readySource == 'cordova')) return [3 /*break*/, 2];
                                            this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_3__["UPCModbus"](function (state) {
                                                _this.ngZone.run(function () {
                                                    // Force refresh UI
                                                    //this.readDiffusionParameters();
                                                });
                                            });
                                            return [4 /*yield*/, this.upc.client.connect()];
                                        case 1:
                                            _a.sent();
                                            setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var _this = this;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                                                _this.input = res;
                                                            })];
                                                        case 1:
                                                            _a.sent();
                                                            return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40463).then(function (res) {
                                                                    _this.outputcomp = res;
                                                                })];
                                                        case 2:
                                                            _a.sent();
                                                            return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                                                    _this.output = res;
                                                                })];
                                                        case 3:
                                                            _a.sent();
                                                            return [4 /*yield*/, this.upc.client.getStringFromHoldingRegister(40045, 10).then(function (res) {
                                                                    _this.global.ssid = res;
                                                                })];
                                                        case 4:
                                                            _a.sent();
                                                            return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40150, 1).then(function (res) {
                                                                    _this.resActive = res;
                                                                })];
                                                        case 5:
                                                            _a.sent();
                                                            return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40065, 1).then(function (res) {
                                                                    _this.intensity = res;
                                                                })];
                                                        case 6:
                                                            _a.sent();
                                                            return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40018).then(function (res) {
                                                                    _this.fluxmax = res;
                                                                })];
                                                        case 7:
                                                            _a.sent();
                                                            return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40011, 1).then(function (res) {
                                                                    if (res != 2) {
                                                                        _this.colordif = "danger";
                                                                        _this.textdiff = "Activez le Mode Adjust";
                                                                    }
                                                                    else {
                                                                        _this.textdiff = "Adjustement";
                                                                    }
                                                                    _this.modediff = res;
                                                                    _this.cd.detectChanges();
                                                                })];
                                                        case 8:
                                                            _a.sent();
                                                            return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40416, 1).then(function (res) {
                                                                    _this.intensityFlux = res;
                                                                })]; //
                                                        case 9:
                                                            _a.sent(); //
                                                            return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                                                    _this.flux = res;
                                                                })];
                                                        case 10:
                                                            _a.sent();
                                                            return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40451).then(function (res) {
                                                                    _this.temp = res;
                                                                })];
                                                        case 11:
                                                            _a.sent();
                                                            this.fluxref = this.intensityFlux * this.fluxmax / 10;
                                                            loading.dismiss();
                                                            setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                var _this = this;
                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0: return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                                                                _this.input = res;
                                                                            })];
                                                                        case 1:
                                                                            _a.sent();
                                                                            return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40463).then(function (res) {
                                                                                    _this.outputcomp = res;
                                                                                })];
                                                                        case 2:
                                                                            _a.sent();
                                                                            return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                                                                    _this.output = res;
                                                                                })];
                                                                        case 3:
                                                                            _a.sent();
                                                                            return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                                                                    _this.flux = res;
                                                                                    _this.cd.detectChanges();
                                                                                })];
                                                                        case 4:
                                                                            _a.sent();
                                                                            return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40416, 1).then(function (res) {
                                                                                    _this.intensityFlux = res;
                                                                                    _this.cd.detectChanges();
                                                                                })]; //
                                                                        case 5:
                                                                            _a.sent(); //
                                                                            return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40018).then(function (res) {
                                                                                    _this.fluxmax = res;
                                                                                    _this.cd.detectChanges();
                                                                                })];
                                                                        case 6:
                                                                            _a.sent();
                                                                            this.fluxref = this.intensityFlux * this.fluxmax / 10;
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); }, 500);
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }, 5000);
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    AdjustmentPage.prototype.changeResAct = function () {
        var _this = this;
        if (this.resActive != null) {
            this.upc.client.setIntInHoldingRegister(40150, 1, this.resActive).then(function (res) {
                alert(_this.resActive);
            }).catch(function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var loading;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadingCTRL.create({
                                message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                                duration: 10000
                            })];
                        case 1:
                            loading = _a.sent();
                            loading.present();
                            this.ngOnInit();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    AdjustmentPage.prototype.changeInt = function () {
        var _this = this;
        if (this.intensity != null) {
            this.upc.client.setIntInHoldingRegister(40065, 1, this.intensity).then(function (res) {
                alert(_this.intensity);
            }).catch(function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var loading;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadingCTRL.create({
                                message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                                duration: 10000
                            })];
                        case 1:
                            loading = _a.sent();
                            loading.present();
                            this.ngOnInit();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    AdjustmentPage.prototype.minInt = function () {
        var _this = this;
        this.upc.client.setIntInHoldingRegister(40065, 1, 1).then(function (res) {
            _this.intensity = 1;
        }).catch(function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCTRL.create({
                            message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                            duration: 10000
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.ngOnInit();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AdjustmentPage.prototype.maxInt = function () {
        var _this = this;
        this.upc.client.setIntInHoldingRegister(40065, 1, 10).then(function (res) {
            _this.intensity = 10;
        }).catch(function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCTRL.create({
                            message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                            duration: 10000
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.ngOnInit();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AdjustmentPage.prototype.onChangeDiff = function () {
        var _this = this;
        this.upc.client.setIntInHoldingRegister(40011, 1, 2).then(function (res) {
            _this.textdiff = "Adjustement";
            _this.colordif = "primary";
            _this.modediff = 2;
        });
    };
    AdjustmentPage.prototype.onDisableDiff = function () {
        var _this = this;
        this.upc.client.setIntInHoldingRegister(40011, 1, 0).then(function (res) {
            _this.textdiff = "Activez le Mode Adjust";
            _this.colordif = "danger";
            _this.modediff = 0;
        });
    };
    AdjustmentPage.prototype.changeFluxMax = function () {
        var _this = this;
        if (this.fluxmax != null) {
            this.upc.client.setFloatInHoldingRegister(40018, this.fluxmax).then(function (res) {
                alert(_this.fluxmax);
            }).catch(function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var loading;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadingCTRL.create({
                                message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                                duration: 10000
                            })];
                        case 1:
                            loading = _a.sent();
                            loading.present();
                            this.ngOnInit();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    AdjustmentPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
        { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__["Hotspot"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] }
    ]; };
    AdjustmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adjustment',
            template: __webpack_require__(/*! raw-loader!./adjustment.page.html */ "./node_modules/raw-loader/index.js!./src/app/adjustment/adjustment.page.html"),
            styles: [__webpack_require__(/*! ./adjustment.page.scss */ "./src/app/adjustment/adjustment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"], _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__["Hotspot"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]])
    ], AdjustmentPage);
    return AdjustmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=adjustment-adjustment-module-es5.js.map