(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cdiff-cdiff-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cdiff/cdiff.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cdiff/cdiff.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Contrôle diffusion CO2</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"12\"><ion-button shape=\"round\" size=\"large\" [color]=\"colordif\" (click)=\"startstop();\">{{textdiff}}</ion-button></ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">Paramètre</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            Débit Max\n          </ion-col>\n          <ion-col>\n            <input  type=\"number\" class=\"form-control form-control-sm\" step=\"0.1\"\n                    \n                    (ngModelChange)=\"changeFluxMax();\"\n                    [(ngModel)]=\"fluxmax\">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Intensité</ion-col>\n          <ion-col> <input  type=\"number\" class=\"form-control form-control-sm\"\n                    \n            (ngModelChange)=\"changeInt();\"\n            [(ngModel)]=\"intensity\"></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col >Bouteille active</ion-col>\n          <ion-col>\n            <select class=\"custom-select custom-select-sm\"\n                \n            (ngModelChange)=\"changeResAct($event);\"\n            [(ngModel)]=\"resActive\">\n      <option value=\"0\">B0</option>\n      <option value=\"1\">B1</option>\n      <option value=\"2\">B2</option>\n    </select>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">Mesures</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label color=\"dark\">{{\"Intensité : \"+ intensity}}</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label color=\"dark\">{{\"Température : \"+temp.toFixed(2)+\" °C\"}}</ion-label>\n        </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight :bolder\"> Réf</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight :bolder\">Mesure</ion-label></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"><ion-label color=\"dark\">Débit (nl/min):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{debiRef.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'bgsuccess':backgroundDeb,'bgdanger':!backgroundDeb, 'bgwarning':bgdebwarning}\"><ion-label color=\"dark\">{{debiMes.toFixed(3)}}</ion-label></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"><ion-label color=\"dark\">PE (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\"></ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{peMes.toFixed(3)}}</ion-label></ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"><ion-label color=\"dark\">PS (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{psMes.toFixed(3)}}</ion-label></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"><ion-label color=\"dark\">PS comp (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\"></ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{psCompMes.toFixed(3)}}</ion-label></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/cdiff/cdiff-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/cdiff/cdiff-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CdiffPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdiffPageRoutingModule", function() { return CdiffPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cdiff_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cdiff.page */ "./src/app/cdiff/cdiff.page.ts");




var routes = [
    {
        path: '',
        component: _cdiff_page__WEBPACK_IMPORTED_MODULE_3__["CdiffPage"]
    }
];
var CdiffPageRoutingModule = /** @class */ (function () {
    function CdiffPageRoutingModule() {
    }
    CdiffPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CdiffPageRoutingModule);
    return CdiffPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/cdiff/cdiff.module.ts":
/*!***************************************!*\
  !*** ./src/app/cdiff/cdiff.module.ts ***!
  \***************************************/
/*! exports provided: CdiffPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdiffPageModule", function() { return CdiffPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cdiff_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cdiff-routing.module */ "./src/app/cdiff/cdiff-routing.module.ts");
/* harmony import */ var _cdiff_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cdiff.page */ "./src/app/cdiff/cdiff.page.ts");







var CdiffPageModule = /** @class */ (function () {
    function CdiffPageModule() {
    }
    CdiffPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _cdiff_routing_module__WEBPACK_IMPORTED_MODULE_5__["CdiffPageRoutingModule"]
            ],
            declarations: [_cdiff_page__WEBPACK_IMPORTED_MODULE_6__["CdiffPage"]]
        })
    ], CdiffPageModule);
    return CdiffPageModule;
}());



/***/ }),

/***/ "./src/app/cdiff/cdiff.page.scss":
/*!***************************************!*\
  !*** ./src/app/cdiff/cdiff.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgdanger {\n  background-color: red;\n}\n\n.bgsuccess {\n  background-color: green;\n}\n\n.bgwarning {\n  background-color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJtYW5kL0Rlc2t0b3AvYmlvYmVsdG1vYmlsZS9zcmMvYXBwL2NkaWZmL2NkaWZmLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2RpZmYvY2RpZmYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx3QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY2RpZmYvY2RpZmYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5iZ3N1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmJnd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufSIsIi5iZ2RhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmJnc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uYmd3YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cdiff/cdiff.page.ts":
/*!*************************************!*\
  !*** ./src/app/cdiff/cdiff.page.ts ***!
  \*************************************/
/*! exports provided: CdiffPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdiffPage", function() { return CdiffPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");







var CdiffPage = /** @class */ (function () {
    //diffusion à l'arrêt start reload front detectchange 
    function CdiffPage(global, platform, loadingCTRL, ngZone, hotspot, network, cd) {
        this.global = global;
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.ngZone = ngZone;
        this.hotspot = hotspot;
        this.network = network;
        this.cd = cd;
        this.textdiff = "Start";
        this.colordif = "primary";
        this.fluxmax = 0;
        this.intensity = 0;
        this.resActive = 0;
        this.temp = 0;
        this.debiRef = 0;
        this.peRef = 0;
        this.psRef = 0;
        this.debiMes = 0;
        this.peMes = 0;
        this.psMes = 0;
        this.psComp = 0;
        this.psCompMes = 0;
    }
    CdiffPage.prototype.ngOnInit = function () {
        var _this = this;
        this.upc3s = JSON.parse(localStorage.getItem("upc3"));
        this.platform.ready().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.platform.is('ios')) {
                    if (localStorage.getItem("BBAM") != "true") {
                        WifiWizard2.iOSConnectNetwork("BBAM", "BioBeltService").then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
                                        localStorage.setItem("BBAM", "" + true);
                                        this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_4__["UPCModbus"](function (state) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                this.ngZone.run(function () {
                                                    // Force refresh UI
                                                    //this.readDiffusionParameters();
                                                });
                                                return [2 /*return*/];
                                            });
                                        }); });
                                        return [4 /*yield*/, this.upc.client.connect()];
                                    case 2:
                                        _a.sent();
                                        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var _this = this;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: 
                                                    //this.ngZone.run(async()=>{
                                                    return [4 /*yield*/, this.upc.client.readHoldingRegisters(40018, 100).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                            var fluxmax, ssid, i;
                                                            var _this = this;
                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        fluxmax = [res[0], res[1]];
                                                                        this.fluxmax = this.upc.client.registerToFloat(fluxmax);
                                                                        ssid = [];
                                                                        for (i = 27; i < 37; i++) {
                                                                            ssid.push(res[i]);
                                                                        }
                                                                        this.global.ssid = this.upc.client.registerToString(ssid).replace(/[^a-zA-Z0-9]/g, '');
                                                                        return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40150, 1).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                var _this = this;
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                    switch (_a.label) {
                                                                                        case 0:
                                                                                            this.resActive = res;
                                                                                            return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40065, 1).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                    var _this = this;
                                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                        this.intensity = res;
                                                                                                        this.debiRef = (this.fluxmax * this.intensity) / 10;
                                                                                                        this.global.interval = setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                            var _this = this;
                                                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                                switch (_a.label) {
                                                                                                                    case 0: return [4 /*yield*/, this.upc.client.readHoldingRegisters(40416, 100).then(function (res) {
                                                                                                                            //40416
                                                                                                                            //this.intensity = this.upc.client.registerToUint32(res[0]); 
                                                                                                                            //40435
                                                                                                                            var iFlux = [res[19], res[20]];
                                                                                                                            _this.peMes = _this.upc.client.registerToFloat(iFlux);
                                                                                                                            //40437
                                                                                                                            var out = [res[21], res[22]];
                                                                                                                            _this.psMes = _this.upc.client.registerToFloat(out);
                                                                                                                            //40439
                                                                                                                            var f = [res[23], res[24]];
                                                                                                                            _this.debiMes = _this.upc.client.registerToFloat(f);
                                                                                                                            //40451
                                                                                                                            var tmp = [res[35], res[36]];
                                                                                                                            _this.temp = _this.upc.client.registerToFloat(tmp);
                                                                                                                            //40463
                                                                                                                            var outcomp = [res[47], res[48]];
                                                                                                                            _this.psCompMes = _this.upc.client.registerToFloat(outcomp);
                                                                                                                            _this.global.ssid = "BBAM";
                                                                                                                            _this.cd.detectChanges();
                                                                                                                            loading.dismiss();
                                                                                                                        })];
                                                                                                                    case 1:
                                                                                                                        _a.sent();
                                                                                                                        return [2 /*return*/];
                                                                                                                }
                                                                                                            });
                                                                                                        }); }, 2000);
                                                                                                        return [2 /*return*/];
                                                                                                    });
                                                                                                }); })];
                                                                                        case 1:
                                                                                            _a.sent();
                                                                                            return [2 /*return*/];
                                                                                    }
                                                                                });
                                                                            }); })
                                                                            //40150
                                                                            /*this.resActive = this.upc.client.registerToUint32(res[132]);
                                                                            alert(this.resActive);*/
                                                                        ];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); })
                                                        /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                                                          this.temp = res;
                                                        })
                                                        await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                                                          this.fluxmax = res;
                                                          this.cd.detectChanges();
                                                        })
                                                        this.upc.client.getIntFromHoldingRegister(40065,1).then(res=>{
                                                          this.intensity = res;
                                                          this.cd.detectChanges();
                                                        })
                                                        this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                                                          this.global.ssid = res;
                                                        })
                                                        await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                                                                
                                                          this.resActive = res;
                                                          
                                                          this.cd.detectChanges();
                                                        })*/
                                                        //}) si connecté lecture uniquement 
                                                        //Mesure instantané mesure intensité 1 10 Activer diffusion fin B1 B2 voyant aucune diffusion 
                                                        //Mini Maxi Reactualiser les données 
                                                    ];
                                                    case 1:
                                                        //this.ngZone.run(async()=>{
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }, 5000);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    else {
                        this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_4__["UPCModbus"](function (state) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.ngZone.run(function () {
                                    // Force refresh UI
                                    //this.readDiffusionParameters();
                                });
                                return [2 /*return*/];
                            });
                        }); });
                        //await this.upc.client.connect();
                        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    //this.ngZone.run(async()=>{
                                    return [4 /*yield*/, this.upc.client.readHoldingRegisters(40018, 100).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var fluxmax, ssid, i;
                                            var _this = this;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        fluxmax = [res[0], res[1]];
                                                        this.fluxmax = this.upc.client.registerToFloat(fluxmax);
                                                        ssid = [];
                                                        for (i = 27; i < 37; i++) {
                                                            ssid.push(res[i]);
                                                        }
                                                        this.global.ssid = this.upc.client.registerToString(ssid).replace(/[^a-zA-Z0-9]/g, '');
                                                        return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40150, 1).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                var _this = this;
                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0:
                                                                            this.resActive = res;
                                                                            return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40065, 1).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                    var _this = this;
                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                        this.intensity = res;
                                                                                        this.debiRef = (this.fluxmax * this.intensity) / 10;
                                                                                        this.global.interval = setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                            var _this = this;
                                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                switch (_a.label) {
                                                                                                    case 0: return [4 /*yield*/, this.upc.client.readHoldingRegisters(40416, 100).then(function (res) {
                                                                                                            //40416
                                                                                                            //this.intensity = this.upc.client.registerToUint32(res[0]); 
                                                                                                            //40435
                                                                                                            var iFlux = [res[19], res[20]];
                                                                                                            _this.peMes = _this.upc.client.registerToFloat(iFlux);
                                                                                                            //40437
                                                                                                            var out = [res[21], res[22]];
                                                                                                            _this.psMes = _this.upc.client.registerToFloat(out);
                                                                                                            //40439
                                                                                                            var f = [res[23], res[24]];
                                                                                                            _this.debiMes = _this.upc.client.registerToFloat(f);
                                                                                                            //40451
                                                                                                            var tmp = [res[35], res[36]];
                                                                                                            _this.temp = _this.upc.client.registerToFloat(tmp);
                                                                                                            //40463
                                                                                                            var outcomp = [res[47], res[48]];
                                                                                                            _this.psCompMes = _this.upc.client.registerToFloat(outcomp);
                                                                                                            _this.global.ssid = "BBAM";
                                                                                                            _this.global.isBBAM = true;
                                                                                                            _this.cd.detectChanges();
                                                                                                            //loading.dismiss();
                                                                                                        })];
                                                                                                    case 1:
                                                                                                        _a.sent();
                                                                                                        return [2 /*return*/];
                                                                                                }
                                                                                            });
                                                                                        }); }, 2000);
                                                                                        return [2 /*return*/];
                                                                                    });
                                                                                }); })];
                                                                        case 1:
                                                                            _a.sent();
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); })
                                                            //40150
                                                            /*this.resActive = this.upc.client.registerToUint32(res[132]);
                                                            alert(this.resActive);*/
                                                        ];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); })
                                        /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                                          this.temp = res;
                                        })
                                        await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                                          this.fluxmax = res;
                                          this.cd.detectChanges();
                                        })
                                        this.upc.client.getIntFromHoldingRegister(40065,1).then(res=>{
                                          this.intensity = res;
                                          this.cd.detectChanges();
                                        })
                                        this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                                          this.global.ssid = res;
                                        })
                                        await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                                                
                                          this.resActive = res;
                                          
                                          this.cd.detectChanges();
                                        })*/
                                        //}) si connecté lecture uniquement 
                                        //Mesure instantané mesure intensité 1 10 Activer diffusion fin B1 B2 voyant aucune diffusion 
                                        //Mini Maxi Reactualiser les données 
                                    ];
                                    case 1:
                                        //this.ngZone.run(async()=>{
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 2000);
                    }
                }
                else if (this.platform.is('android')) {
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
                                    this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_4__["UPCModbus"](function (state) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            this.ngZone.run(function () {
                                                // Force refresh UI
                                                //this.readDiffusionParameters();
                                            });
                                            return [2 /*return*/];
                                        });
                                    }); });
                                    //await this.upc.client.connect();
                                    setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0: 
                                                //this.ngZone.run(async()=>{
                                                return [4 /*yield*/, this.upc.client.readHoldingRegisters(40018, 100).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                        var fluxmax, ssid, i;
                                                        var _this = this;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    fluxmax = [res[0], res[1]];
                                                                    this.fluxmax = this.upc.client.registerToFloat(fluxmax);
                                                                    ssid = [];
                                                                    for (i = 27; i < 37; i++) {
                                                                        ssid.push(res[i]);
                                                                    }
                                                                    this.global.ssid = this.upc.client.registerToString(ssid).replace(/[^a-zA-Z0-9]/g, '');
                                                                    return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40150, 1).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                            var _this = this;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0:
                                                                                        this.resActive = res;
                                                                                        return [4 /*yield*/, this.upc.client.getIntFromHoldingRegister(40065, 1).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                var _this = this;
                                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                    this.intensity = res;
                                                                                                    this.debiRef = (this.fluxmax * this.intensity) / 10;
                                                                                                    this.global.interval = setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                        var _this = this;
                                                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                            switch (_a.label) {
                                                                                                                case 0: return [4 /*yield*/, this.upc.client.readHoldingRegisters(40416, 100).then(function (res) {
                                                                                                                        //40416
                                                                                                                        //this.intensity = this.upc.client.registerToUint32(res[0]); 
                                                                                                                        //40435
                                                                                                                        var iFlux = [res[19], res[20]];
                                                                                                                        _this.peMes = _this.upc.client.registerToFloat(iFlux);
                                                                                                                        //40437
                                                                                                                        var out = [res[21], res[22]];
                                                                                                                        _this.psMes = _this.upc.client.registerToFloat(out);
                                                                                                                        //40439
                                                                                                                        var f = [res[23], res[24]];
                                                                                                                        _this.debiMes = _this.upc.client.registerToFloat(f);
                                                                                                                        //40451
                                                                                                                        var tmp = [res[35], res[36]];
                                                                                                                        _this.temp = _this.upc.client.registerToFloat(tmp);
                                                                                                                        //40463
                                                                                                                        var outcomp = [res[47], res[48]];
                                                                                                                        _this.psCompMes = _this.upc.client.registerToFloat(outcomp);
                                                                                                                        _this.global.ssid = "BBAM";
                                                                                                                        _this.cd.detectChanges();
                                                                                                                        loading.dismiss();
                                                                                                                    })];
                                                                                                                case 1:
                                                                                                                    _a.sent();
                                                                                                                    return [2 /*return*/];
                                                                                                            }
                                                                                                        });
                                                                                                    }); }, 2000);
                                                                                                    return [2 /*return*/];
                                                                                                });
                                                                                            }); })];
                                                                                    case 1:
                                                                                        _a.sent();
                                                                                        return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        }); })
                                                                        //40150
                                                                        /*this.resActive = this.upc.client.registerToUint32(res[132]);
                                                                        alert(this.resActive);*/
                                                                    ];
                                                                case 1:
                                                                    _a.sent();
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    }); })
                                                    /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                                                      this.temp = res;
                                                    })
                                                    await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                                                      this.fluxmax = res;
                                                      this.cd.detectChanges();
                                                    })
                                                    this.upc.client.getIntFromHoldingRegister(40065,1).then(res=>{
                                                      this.intensity = res;
                                                      this.cd.detectChanges();
                                                    })
                                                    this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                                                      this.global.ssid = res;
                                                    })
                                                    await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                                                            
                                                      this.resActive = res;
                                                      
                                                      this.cd.detectChanges();
                                                    })*/
                                                    //}) si connecté lecture uniquement 
                                                    //Mesure instantané mesure intensité 1 10 Activer diffusion fin B1 B2 voyant aucune diffusion 
                                                    //Mini Maxi Reactualiser les données 
                                                ];
                                                case 1:
                                                    //this.ngZone.run(async()=>{
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }, 5000);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        }); });
    };
    /*ionViewWillLeave() {
  
      
      clearInterval(this.interval);
    }
  
    ngOnDestroy(): void {
  
      
      clearInterval(this.interval);
    }*/
    CdiffPage.prototype.startstop = function () {
        if (this.colordif == "primary") {
            this.onChangeDiff();
        }
        else {
            this.onDisableDiff();
        }
    };
    CdiffPage.prototype.onChangeDiff = function () {
        var _this = this;
        this.upc.client.setIntInHoldingRegister(40011, 1, 2).then(function (res) {
            _this.textdiff = "Stop";
            _this.colordif = "danger";
            _this.cd.detectChanges();
        });
    };
    CdiffPage.prototype.onDisableDiff = function () {
        var _this = this;
        this.upc.client.setIntInHoldingRegister(40011, 1, 0).then(function (res) {
            _this.textdiff = "Start";
            _this.colordif = "primary";
            _this.cd.detectChanges();
        });
    };
    CdiffPage.prototype.changeInt = function () {
        var _this = this;
        this.upc.client.setIntInHoldingRegister(40065, 1, this.intensity).then(function (res) {
            _this.debiRef = (_this.fluxmax * _this.intensity) / 10;
        });
    };
    CdiffPage.prototype.changeFluxMax = function () {
        var _this = this;
        this.upc.client.setFloatInHoldingRegister(40018, this.fluxmax).then(function (res) {
            _this.debiRef = (_this.fluxmax * _this.intensity) / 10;
        });
    };
    CdiffPage.prototype.changeResAct = function () {
        this.resActive = this.resActive == 1 ? 2 : 1;
        this.upc.client.setIntInHoldingRegister(40150, 1, this.resActive).then(function (res) {
        });
    };
    CdiffPage.ctorParameters = function () { return [
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_5__["Hotspot"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    CdiffPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cdiff',
            template: __webpack_require__(/*! raw-loader!./cdiff.page.html */ "./node_modules/raw-loader/index.js!./src/app/cdiff/cdiff.page.html"),
            styles: [__webpack_require__(/*! ./cdiff.page.scss */ "./src/app/cdiff/cdiff.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_5__["Hotspot"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CdiffPage);
    return CdiffPage;
}());



/***/ })

}]);
//# sourceMappingURL=cdiff-cdiff-module-es5.js.map