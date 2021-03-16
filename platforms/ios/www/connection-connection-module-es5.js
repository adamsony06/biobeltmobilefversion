(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connection-connection-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/connection/connection.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/connection/connection.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Etat de la connexion au réseau</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">Etat Instantané</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"10\">Mode</ion-col>\n          <ion-col size=\"2\">{{mode}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\">Niv.</ion-col>\n          <ion-col size=\"8\"><ion-range color=\"danger\" [value]=\"level\" max=\"100\"></ion-range></ion-col>\n          <ion-col size=\"2\" *ngIf=\"level < 500\">{{level}}</ion-col>\n          <ion-col size=\"2\" *ngIf=\"level >= 500\">Non Connecté</ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"ber\">\n          <ion-col size=\"10\">BER</ion-col>\n          <ion-col size=\"2\">{{ber}}</ion-col>\n        </ion-row>\n        \n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"ber\">\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">Statistiques dernière 24 h</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">Mode</ion-col>\n          <ion-col size=\"2\">-</ion-col>\n          <ion-col size=\"2\">2G</ion-col>\n          <ion-col size=\"2\">3G</ion-col>\n          <ion-col size=\"2\">4G</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\">Durée</ion-col>\n          <ion-col size=\"2\">{{dureTab[3]}}</ion-col>\n          <ion-col size=\"2\">{{dureTab[0]}}</ion-col>\n          <ion-col size=\"2\">{{dureTab[1]}}</ion-col>\n          <ion-col size=\"2\">{{dureTab[2]}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\">Niveau</ion-col>\n          <ion-col size=\"2\">-</ion-col>\n          <ion-col size=\"2\" *ngFor=\"let l of levelTab\">{{l}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\">BER</ion-col>\n          <ion-col size=\"2\">-</ion-col>\n          <ion-col size=\"2\" *ngFor=\"let b of bertab\"><ion-label>{{b == 0 ? '-' : b}}</ion-label></ion-col>\n\n        </ion-row>\n        \n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/connection/connection-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/connection/connection-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ConnectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPageRoutingModule", function() { return ConnectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection.page */ "./src/app/connection/connection.page.ts");




var routes = [
    {
        path: '',
        component: _connection_page__WEBPACK_IMPORTED_MODULE_3__["ConnectionPage"]
    }
];
var ConnectionPageRoutingModule = /** @class */ (function () {
    function ConnectionPageRoutingModule() {
    }
    ConnectionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ConnectionPageRoutingModule);
    return ConnectionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/connection/connection.module.ts":
/*!*************************************************!*\
  !*** ./src/app/connection/connection.module.ts ***!
  \*************************************************/
/*! exports provided: ConnectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPageModule", function() { return ConnectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _connection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connection-routing.module */ "./src/app/connection/connection-routing.module.ts");
/* harmony import */ var _connection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connection.page */ "./src/app/connection/connection.page.ts");







var ConnectionPageModule = /** @class */ (function () {
    function ConnectionPageModule() {
    }
    ConnectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _connection_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnectionPageRoutingModule"]
            ],
            declarations: [_connection_page__WEBPACK_IMPORTED_MODULE_6__["ConnectionPage"]]
        })
    ], ConnectionPageModule);
    return ConnectionPageModule;
}());



/***/ }),

/***/ "./src/app/connection/connection.page.scss":
/*!*************************************************!*\
  !*** ./src/app/connection/connection.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3Rpb24vY29ubmVjdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/connection/connection.page.ts":
/*!***********************************************!*\
  !*** ./src/app/connection/connection.page.ts ***!
  \***********************************************/
/*! exports provided: ConnectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPage", function() { return ConnectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");






var ConnectionPage = /** @class */ (function () {
    function ConnectionPage(platform, global, loadingCTRL, hotspot, ngZone, cd) {
        this.platform = platform;
        this.global = global;
        this.loadingCTRL = loadingCTRL;
        this.hotspot = hotspot;
        this.ngZone = ngZone;
        this.cd = cd;
        this.mode = "";
        this.level = 0;
        this.ber = 0;
        this.bertab = [];
        this.fw = 0;
        this.levelTab = [];
        this.dureTab = [];
    }
    ConnectionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
                        this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_4__["UPCModbus"](function (state) {
                            _this.ngZone.run(function () {
                                // Force refresh UI
                                //this.readDiffusionParameters();
                            });
                        });
                        return [4 /*yield*/, this.upc.client.connect()];
                    case 2:
                        _a.sent();
                        this.readConnectionParams();
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ConnectionPage.prototype.readConnectionParams = function () {
        var _this = this;
        //40414 40415 
        //41225 41239
        var intervalconnect = setInterval(function () {
            //this.upc.client.readHoldingRegisters(41225,20).then(res=>{
            /*this.bertab.push(this.upc.client.registerToFloat([res[0],res[1]]));
            this.bertab.push(this.upc.client.registerToFloat([res[2],res[3]]));
            this.bertab.push(this.upc.client.registerToFloat([res[4],res[5]]));
            this.bertab.push(this.upc.client.registerToFloat([res[6],res[7]]));*/
            //this.upc.client.getIntFromHoldingRegister(40168,1).then(res=>{
            _this.upc.client.readHoldingRegisters(41219, 50).then(function (res) {
                _this.levelTab.push(_this.upc.client.registerToFloat([res[0], res[1]]));
                _this.levelTab.push(_this.upc.client.registerToFloat([res[2], res[3]]));
                _this.levelTab.push(_this.upc.client.registerToFloat([res[4], res[5]]));
                _this.bertab.push(_this.upc.client.registerToFloat([res[6], res[7]]));
                _this.bertab.push(_this.upc.client.registerToFloat([res[8], res[9]]));
                _this.bertab.push(_this.upc.client.registerToFloat([res[10], res[11]]));
                _this.bertab.push(_this.upc.client.registerToFloat([res[12], res[13]]));
                //this.dureTab.push(this.upc.client.registerToFloat([res[14],res[15]]));
                _this.dureTab.push(_this.upc.client.registerToFloat([res[16], res[17]]));
                _this.dureTab.push(_this.upc.client.registerToFloat([res[18], res[19]]));
                _this.dureTab.push(_this.upc.client.registerToFloat([res[20], res[21]]));
            });
            //})
            _this.upc.client.readHoldingRegisters(40414, 10).then(function (res) {
                var connect = _this.upc.client.registerToUint32([res[0]]);
                switch (connect) {
                    case 0:
                        _this.mode = 'Non enregistré';
                        _this.ber = 0;
                    case 1:
                        _this.mode = '2G GPRS';
                        _this.ber = _this.bertab[0];
                    case 2:
                        _this.mode = '2G EDGE';
                        _this.ber = _this.bertab[1];
                    case 3:
                        _this.mode = '3G WCDMA';
                        _this.ber = _this.bertab[2];
                    case 4:
                        _this.mode = '3G HSDPA';
                        _this.ber = _this.bertab[2];
                    case 5:
                        _this.mode = '3G HSUPA';
                        _this.ber = _this.bertab[2];
                    case 6:
                        _this.mode = '3G HSDPA/HSUPA';
                        _this.ber = _this.bertab[2];
                    case 7:
                        _this.mode = '4G';
                        _this.ber = _this.bertab[3];
                }
                _this.level = _this.upc.client.registerToUint32([res[1]]);
                if (_this.level > 500) {
                    _this.level = 0;
                }
                _this.cd.detectChanges();
            }).catch(function (err) {
                alert("Veuillez vous connecter à BBAM");
                _this.global.ssid = "ADMIN";
                _this.global.isBBAM = false;
                clearInterval(intervalconnect);
            });
            //})
        }, 500);
    };
    ConnectionPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_3__["Hotspot"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    ConnectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-connection',
            template: __webpack_require__(/*! raw-loader!./connection.page.html */ "./node_modules/raw-loader/index.js!./src/app/connection/connection.page.html"),
            styles: [__webpack_require__(/*! ./connection.page.scss */ "./src/app/connection/connection.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_3__["Hotspot"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ConnectionPage);
    return ConnectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=connection-connection-module-es5.js.map