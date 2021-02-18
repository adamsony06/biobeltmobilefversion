(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choosestock-choosestock-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/choosestock/choosestock.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/choosestock/choosestock.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-title>Choisir un stock</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let s of stock\" (click)=\"goToStock(s);\">\n        {{s.name}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

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

/***/ "./src/app/choosestock/choosestock-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/choosestock/choosestock-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChoosestockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosestockPageRoutingModule", function() { return ChoosestockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _choosestock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choosestock.page */ "./src/app/choosestock/choosestock.page.ts");




var routes = [
    {
        path: '',
        component: _choosestock_page__WEBPACK_IMPORTED_MODULE_3__["ChoosestockPage"]
    }
];
var ChoosestockPageRoutingModule = /** @class */ (function () {
    function ChoosestockPageRoutingModule() {
    }
    ChoosestockPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChoosestockPageRoutingModule);
    return ChoosestockPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/choosestock/choosestock.module.ts":
/*!***************************************************!*\
  !*** ./src/app/choosestock/choosestock.module.ts ***!
  \***************************************************/
/*! exports provided: ChoosestockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosestockPageModule", function() { return ChoosestockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _choosestock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choosestock-routing.module */ "./src/app/choosestock/choosestock-routing.module.ts");
/* harmony import */ var _choosestock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choosestock.page */ "./src/app/choosestock/choosestock.page.ts");







var ChoosestockPageModule = /** @class */ (function () {
    function ChoosestockPageModule() {
    }
    ChoosestockPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _choosestock_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChoosestockPageRoutingModule"]
            ],
            declarations: [_choosestock_page__WEBPACK_IMPORTED_MODULE_6__["ChoosestockPage"]]
        })
    ], ChoosestockPageModule);
    return ChoosestockPageModule;
}());



/***/ }),

/***/ "./src/app/choosestock/choosestock.page.scss":
/*!***************************************************!*\
  !*** ./src/app/choosestock/choosestock.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nob29zZXN0b2NrL2Nob29zZXN0b2NrLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/choosestock/choosestock.page.ts":
/*!*************************************************!*\
  !*** ./src/app/choosestock/choosestock.page.ts ***!
  \*************************************************/
/*! exports provided: ChoosestockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosestockPage", function() { return ChoosestockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");







var ChoosestockPage = /** @class */ (function () {
    function ChoosestockPage(upc3Service, storage, geolocation, router, global) {
        this.upc3Service = upc3Service;
        this.storage = storage;
        this.geolocation = geolocation;
        this.router = router;
        this.global = global;
        this.stock = [];
        this.lonlat = [{ lat: 43.6667, lon: 7.15 }, { lat: 42.0396, lon: 9.01289 }, { lat: 43.6107, lon: 3.8767 }];
    }
    ChoosestockPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("token").then(function (val) {
            _this.upc3Service.getAllStock(val).subscribe(function (res) {
                var stock = res.result;
                _this.geolocation.getCurrentPosition().then(function (pos) {
                    _this.lonlat.forEach(function (item, index) {
                        if (_this.getDistanceFromLatLonInKm(pos.coords.latitude, pos.coords.longitude, item.lat, item.lon) < 20) {
                            _this.stock.push(stock[index]);
                        }
                    });
                });
            });
        });
    };
    ChoosestockPage.prototype.goToStock = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set("stockid", JSON.stringify(id))];
                    case 1:
                        _a.sent();
                        this.router.navigate(['stock']);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChoosestockPage.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    ChoosestockPage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    ChoosestockPage.ctorParameters = function () { return [
        { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] }
    ]; };
    ChoosestockPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choosestock',
            template: __webpack_require__(/*! raw-loader!./choosestock.page.html */ "./node_modules/raw-loader/index.js!./src/app/choosestock/choosestock.page.html"),
            styles: [__webpack_require__(/*! ./choosestock.page.scss */ "./src/app/choosestock/choosestock.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]])
    ], ChoosestockPage);
    return ChoosestockPage;
}());



/***/ })

}]);
//# sourceMappingURL=choosestock-choosestock-module-es5.js.map