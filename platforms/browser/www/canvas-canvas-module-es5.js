(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["canvas-canvas-module"],{

/***/ "./src/app/api/global.service.ts":
/*!***************************************!*\
  !*** ./src/app/api/global.service.ts ***!
  \***************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upcv3service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upcv3service.service */ "./src/app/api/upcv3service.service.ts");




var GlobalService = /** @class */ (function () {
    function GlobalService(platform, loadingCTRL, upcv3Service) {
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.upcv3Service = upcv3Service;
        this.B1 = [];
        this.B2 = [];
        this.designationB1 = [];
        this.designationB2 = [];
        this.ssid = "";
        this.isBBAM = false;
    }
    GlobalService.prototype.onSynchroB1B2 = function (token) {
        var _this = this;
        if (localStorage.getItem("bottleB1")) {
            var jsonB1 = JSON.parse(localStorage.getItem("bottleB1"));
            alert(JSON.stringify(jsonB1));
            jsonB1.endate = new Date().toISOString().substr(0, 16);
            if (this.platform.is("ios")) {
                WifiWizard2.iOSDisconnectNetwork("BBAM").then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var loading;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loadingCTRL.create({
                                    message: "Synchronisation avec le Serveur en cours...",
                                    duration: 10000
                                })];
                            case 1:
                                loading = _a.sent();
                                loading.present();
                                this.upcv3Service.addBottleBelt(jsonB1, token).subscribe(function (res) {
                                    loading.dismiss();
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            else {
                WifiWizard2.disconnect("BBAM").then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var loading;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loadingCTRL.create({
                                    message: "Synchronisation avec le Serveur en cours...",
                                    duration: 10000
                                })];
                            case 1:
                                loading = _a.sent();
                                loading.present();
                                this.upcv3Service.addBottleBelt(jsonB1, token).subscribe(function (res) {
                                    loading.dismiss();
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        }
        if (localStorage.getItem("bottleB2")) {
            var jsonB2 = JSON.parse(localStorage.getItem("bottleB2"));
            jsonB2.endate = new Date().toISOString().substr(0, 16);
            if (this.platform.is("ios")) {
                WifiWizard2.iOSDisconnectNetwork(("BBAM")).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var loading;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loadingCTRL.create({
                                    message: "Synchronisation avec le Serveur en cours...",
                                    duration: 10000
                                })];
                            case 1:
                                loading = _a.sent();
                                loading.present();
                                this.upcv3Service.addBottleBelt(jsonB2, token).subscribe(function (res) {
                                    loading.dismiss();
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            else {
                WifiWizard2.disconnect("BBAM").then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var loading;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loadingCTRL.create({
                                    message: "Synchronisation avec le Serveur en cours...",
                                    duration: 10000
                                })];
                            case 1:
                                loading = _a.sent();
                                loading.present();
                                this.upcv3Service.addBottleBelt(jsonB2, token).subscribe(function (res) {
                                    loading.dismiss();
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        }
    };
    GlobalService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _upcv3service_service__WEBPACK_IMPORTED_MODULE_3__["Upcv3serviceService"] }
    ]; };
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _upcv3service_service__WEBPACK_IMPORTED_MODULE_3__["Upcv3serviceService"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/canvas/canvas-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/canvas/canvas-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CanvasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPageRoutingModule", function() { return CanvasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _canvas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas.page */ "./src/app/canvas/canvas.page.ts");




var routes = [
    {
        path: '',
        component: _canvas_page__WEBPACK_IMPORTED_MODULE_3__["CADCanvasComponent"]
    }
];
var CanvasPageRoutingModule = /** @class */ (function () {
    function CanvasPageRoutingModule() {
    }
    CanvasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CanvasPageRoutingModule);
    return CanvasPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/canvas/canvas.module.ts":
/*!*****************************************!*\
  !*** ./src/app/canvas/canvas.module.ts ***!
  \*****************************************/
/*! exports provided: CanvasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPageModule", function() { return CanvasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _canvas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas-routing.module */ "./src/app/canvas/canvas-routing.module.ts");






var CanvasPageModule = /** @class */ (function () {
    function CanvasPageModule() {
    }
    CanvasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _canvas_routing_module__WEBPACK_IMPORTED_MODULE_5__["CanvasPageRoutingModule"]
            ],
            declarations: []
        })
    ], CanvasPageModule);
    return CanvasPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=canvas-canvas-module-es5.js.map