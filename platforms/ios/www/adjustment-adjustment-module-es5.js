(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adjustment-adjustment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/adjustment/adjustment.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adjustment/adjustment.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Réglage Des Détendeurs</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  <ion-grid>\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"12\"><ion-button shape=\"round\" size=\"large\" [color]=\"colordif\" (click)=\"startstop();\">{{textdiff}}</ion-button></ion-col>\n    </ion-row>\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"6\"><ion-button shape=\"round\" size=\"large\" [color]=\"colorB1\" (click)=\"changeResAct(1)\">B1<ion-icon *ngIf=\"successB1\" name=\"checkmark\"></ion-icon></ion-button></ion-col>\n      <ion-col size=\"6\"><ion-button shape=\"round\" size=\"large\" [color]=\"colorB2\" (click)=\"changeResAct(2)\">B2<ion-icon *ngIf=\"successB2\" name=\"checkmark\"></ion-icon></ion-button></ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  \n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">Mesures</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label color=\"dark\">{{\"Intensité : \"+ intensityFlux}}</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label color=\"dark\">{{\"Température : \"+temp.toFixed(2)+\" °C\"}}</ion-label>\n        </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight :bolder\"> Réf</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight :bolder\">Mesure</ion-label></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"><ion-label color=\"dark\">Débit (nl/min):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{fluxref.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'bgsuccess':backgroundDeb,'bgdanger':!backgroundDeb, 'bgwarning':bgdebwarning}\"><ion-label color=\"dark\">{{flux.toFixed(3)}}</ion-label></ion-col>\n        </ion-row>\n        <ion-row [ngClass]=\"{'bgsuccess':backgroundPE,'bgdanger':!backgroundPE}\" >\n          <ion-col size=\"6\"><ion-label color=\"dark\" style=\"font-weight : bolder;\">PE (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight: bolder;\">{{inputref.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight: bolder;\" >{{input.toFixed(3)}}</ion-label></ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"><ion-label color=\"dark\">PS (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{output.toFixed(3)}}</ion-label></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"><ion-label color=\"dark\">PS comp (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{outputref.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'bgsuccess':backgroundPS,'bgdanger':!backgroundPS,'bgwarning':bgpswarning}\"><ion-label color=\"dark\">{{outputcomp.toFixed(3)}}</ion-label></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>  \n  \n  <!--<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" color=\"primary\">\n    <ion-fab-button>\n      {{PE}}\n    </ion-fab-button>\n    <ion-fab-list>\n      <ion-fab-button [color]=\"colorB1\" (click)=\"changeResAct(1);\">\n        B1\n      </ion-fab-button>\n      <ion-fab-button [color]=\"colorB2\" (click)=\"changeResAct(2);\">\n       B2\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-fab vertical=\"center\" horizontal=\"start\" slot=\"fixed\" color=\"primary\">\n    <ion-fab-button>\n      Config.\n    </ion-fab-button>\n    <ion-fab-list>\n      <ion-fab-button (click)=\"minInt();\" [color]=\"colorMin\">\n        Mini.\n      </ion-fab-button>\n      <ion-fab-button (click)=\"maxInt();\" [color]=\"colorMax\">\n        Maxi.\n      </ion-fab-button>\n      <ion-fab-button (click)=\"testMinB1();\">\n        Auto.\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-fab vertical=\"top\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button [color]=\"colordif\">\n      Diff.\n    </ion-fab-button>\n    <ion-fab-list>\n      <ion-fab-button [color]=\"colorAct\" (click)=\"onChangeDiff();\">\n        Act.\n      </ion-fab-button>\n      <ion-fab-button [color]=\"colorDes\" (click)=\"onDisableDiff();\"> \n        Des.\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  \n  <div class=\"card card-body border-top-0\">\n    <div class=\"row\">-->\n   <!-- Adjustments -->\n   <!--<div class=\"col-md-4\">\n    <div class=\"card bg-light mb-2\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Ajustements</h5>\n        <dl class=\"row mb-0\">-->\n\n          <!-- co2ResActAdj -->\n          <!--<dd class=\"col-md-6 mb-0\">Réserve active</dd>\n          <dt class=\"col-md-6 mb-2 text-md-right\">\n            <select class=\"custom-select custom-select-sm\"\n                    \n                    (ngModelChange)=\"changeResAct(resActive);\"\n                    [(ngModel)]=\"resActive\">\n              <option value=\"0\">B0</option>\n              <option value=\"1\">B1</option>\n              <option value=\"2\">B2</option>\n            </select>\n          </dt>-->\n\n          <!-- upcDiffLvlAdj -->\n          <!--<dd class=\"col-md-6 mb-0\">Intensité du flux</dd>\n          <ion-grid>\n            <ion-row>\n          \n          <ion-col size=\"4\"><dt class=\"col-md-6 mb-2 text-md-right\">\n            <input  type=\"number\" class=\"form-control form-control-sm\"\n                    \n                    (ngModelChange)=\"changeInt();\"\n                    [(ngModel)]=\"intensity\">\n          </dt></ion-col>\n          \n        </ion-row>  \n        </ion-grid>-->\n\n          <!-- co2FlowRefAdj -->\n          <!--<dd class=\"col-md-6 mb-0\">Flux maximal [nl/min]</dd>\n          <dt class=\"col-md-6 mb-0 text-md-right\">\n            <input  type=\"number\" class=\"form-control form-control-sm\" step=\"0.1\"\n                    \n                    (ngModelChange)=\"changeFluxMax();\"\n                    [(ngModel)]=\"fluxmax\">\n          </dt>\n\n        </dl>\n      </div>\n    </div>\n  </div>-->\n<!-- Flows -->\n<!--<div class=\"col-sm-6 col-md-4\">\n  <div class=\"card bg-light mb-2\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Flux</h5>\n      <dl class=\"row mb-0\">-->\n\n        <!-- upcCo2DiffLvl -->\n        <!--<dd class=\"col-lg-7 mb-0\">Intensité du flux actuel</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ intensityFlux }}</dt>-->\n\n        <!-- calcRefFlowRate -->\n        <!--<dd class=\"col-lg-7 mb-0\">Flux de référence</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ fluxref.toFixed(3) }} nl/min</dt>-->\n\n        <!-- co2FlowAvg -->\n        <!--<dd class=\"col-lg-7 mb-0\">Flux</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ flux.toFixed(3) }} nl/min</dt>-->\n\n        <!-- co2TempAvg -->\n        <!--<dd class=\"col-lg-7 mb-0\">Température du flux</dd>\n        <dt class=\"col-lg-5 mb-0 text-lg-right\">{{ temp.toFixed(3) }} °C</dt>\n\n      </dl>\n    </div>\n  </div>\n</div>-->\n<!-- Pressures -->\n<!--<div class=\"col-sm-6 col-md-4\">\n  <div class=\"card bg-light mb-2\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Pressions</h5>\n      <dl class=\"row mb-0\">-->\n\n        <!-- co2PresInpAvg -->\n        <!--<dd class=\"col-lg-7 mb-0\">Pression d'entrée</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ input.toFixed(3) }} bar</dt>-->\n\n        <!-- co2PresOutAvg -->\n        <!--<dd class=\"col-lg-7 mb-0\">Pression de sortie</dd>\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ output.toFixed(3) }} bar</dt>-->\n\n        <!-- co2PressOutComp -->\n        <!--<dd class=\"col-lg-7 mb-0\">Pression de sortie compensée</dd>\n        <dt class=\"col-lg-5 mb-0 text-lg-right\">{{ outputcomp.toFixed(3) }} bar</dt>\n\n      </dl>\n    </div>\n  </div>\n</div>\n<div class=\"col-sm-6 col-md-4\">\n  <div class=\"card bg-light mb-2\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Tableau de mesure</h5>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\"></ion-col>\n          <ion-col size=\"4\" style=\"font-weight :bolder;\">\n            B1\n          </ion-col>\n          <ion-col size=\"6\" style=\"font-weight :bolder;\">\n            B2\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"border-top: solid;\">\n          <ion-col size=\"2\" style=\"border-right: solid;font-weight: bolder;\">Min</ion-col>\n          <ion-col size=\"2\">PE</ion-col>\n          <ion-col size=\"2\">{{PEB1Int1 == 0 ? '-': ''+PEB1Int1.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\">PE</ion-col>\n          <ion-col size=\"2\">{{PEB2Int1 == 0 ? '-': ''+PEB2Int1.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\"></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\"></ion-col>\n          <ion-col size=\"2\">Deb</ion-col>\n          <ion-col size=\"2\">{{DebB1Int1 == 0 ? '-':''+DebB1Int1.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\">Deb</ion-col>\n          <ion-col size=\"2\">{{DebB2Int1 == 0 ? '-' : ''+DebB2Int1.toFixed(2)}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\"></ion-col>\n          <ion-col size=\"2\">PS</ion-col>\n          <ion-col size=\"2\">{{PSB1Int1 == 0 ? '-': ''+PSB1Int1.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\">PS</ion-col>\n          <ion-col size=\"2\">{{PSB2Int1 == 0 ? '-': ''+PSB2Int1.toFixed(2)}}</ion-col>\n        </ion-row>\n        \n        <ion-row style=\"border-top: solid;\">\n          <ion-col size=\"2\" style=\"border-right: solid;font-weight: bolder;\">Maxi</ion-col>\n          <ion-col size=\"2\">PE</ion-col>\n          <ion-col size=\"2\">{{PEB1Int10 == 0 ? '-': ''+PEB1Int10.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\">PE</ion-col>\n          <ion-col size=\"2\">{{PEB2Int10 == 0 ? '-': ''+PEB2Int10.toFixed(2)}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\"></ion-col>\n          <ion-col size=\"2\">Deb</ion-col>\n          <ion-col size=\"2\">{{DebB1Int10 == 0 ? '-':''+DebB1Int10.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\">Deb</ion-col>\n          <ion-col size=\"2\">{{DebB2Int10 == 0 ? '-' : ''+DebB2Int10.toFixed(2)}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2\"></ion-col>\n          <ion-col size=\"2\">PS</ion-col>\n          <ion-col size=\"2\">{{PSB1Int10 == 0 ? '-': ''+PSB1Int10.toFixed(2)}}</ion-col>\n          <ion-col size=\"2\">PS</ion-col>\n          <ion-col size=\"2\">{{PSB2Int10 == 0 ? '-': ''+PSB2Int10.toFixed(2)}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</div>\n</div>\n</div>-->\n</ion-content>\n<!--<ion-footer>\n  <ion-button size=\"block\" [color]=\"colordif\" (click)=\"onChangeDiff();\">{{textdiff}}</ion-button>\n  <ion-button size=\"block\" color=\"danger\" (click)=\"onDisableDiff()\" *ngIf=\"modediff == 2\">Désactiver Diffusion</ion-button>\n</ion-footer>-->\n"

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

module.exports = ".bgdanger {\n  background-color: red;\n}\n\n.bgsuccess {\n  background-color: green;\n}\n\n.bgwarning {\n  background-color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJtYW5kL0Rlc2t0b3AvYmlvYmVsdG1vYmlsZS9zcmMvYXBwL2FkanVzdG1lbnQvYWRqdXN0bWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkanVzdG1lbnQvYWRqdXN0bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURDQTtFQUNJLHdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hZGp1c3RtZW50L2FkanVzdG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5iZ3N1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmJnd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufSIsIi5iZ2RhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmJnc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uYmd3YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufSJdfQ== */"

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
        this.inputref = 0; // 2+0.8*(nbpieges-10)/90
        this.outputcomp = 0;
        this.output = 0;
        this.outputref = 0;
        this.resActive = 0;
        this.intensity = 0;
        this.fluxmax = 0;
        this.intensityFlux = 0;
        this.flux = 0;
        this.temp = 0;
        this.fluxref = 0;
        this.modediff = 0;
        this.backgroundPE = false;
        this.backgroundPS = false;
        this.backgroundDeb = false;
        this.bgdebwarning = false;
        this.bgpswarning = false;
        this.successB1 = "";
        this.successB2 = "";
        this.colordif = "primary";
        this.textdiff = "Start/Stop";
        this.colorAct = "light";
        this.colorDes = "light";
        this.colorB1 = "light";
        this.colorB2 = "light";
        this.colorMin = "light";
        this.colorMax = "light";
        this.colorAuto = "light";
        this.PEB1Int1 = 0;
        this.PEB2Int1 = 0;
        this.PSB1Int1 = 0;
        this.PSB2Int1 = 0;
        this.DebB1Int1 = 0;
        this.DebB1Int10 = 0;
        this.DebB2Int1 = 0;
        this.DebB2Int10 = 0;
        this.PEB1Int10 = 0;
        this.PEB2Int10 = 0;
        this.PSB1Int10 = 0;
        this.PSB2Int10 = 0;
        this.PE = "PE";
    }
    AdjustmentPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.upc3s = JSON.parse(localStorage.getItem("upc3"));
                        this.upc3s.forEach(function (item) {
                            if (item.upcNameId == "Test4G1") {
                                _this.outputref = item.generalParameters.co2PresOutRef5 / 1000;
                                _this.inputref = 2 + 0.8 * (item.generalParameters.upcTrapNum - 10) / 90;
                                //this.fluxref = 5*(0.17*item.generalParameters.upcTrapNum)/10;
                            }
                        });
                        if (!this.platform.is("ios")) return [3 /*break*/, 1];
                        this.platform.ready().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (localStorage.getItem("BBAM") != "true") {
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
                                                    localStorage.setItem("BBAM", "" + true);
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
                                                                                case 0: 
                                                                                //this.ngZone.run(async ()=>{
                                                                                return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40018).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                        var _this = this;
                                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                            switch (_a.label) {
                                                                                                case 0:
                                                                                                    this.fluxref = res * 5 / 10;
                                                                                                    return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40065, 1, 5).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                            var _this = this;
                                                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                                switch (_a.label) {
                                                                                                                    case 0:
                                                                                                                        this.intensityFlux = 5;
                                                                                                                        return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40011, 1, 0).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                                                var _this = this;
                                                                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                                                    switch (_a.label) {
                                                                                                                                        case 0:
                                                                                                                                            this.colordif = "primary";
                                                                                                                                            this.textdiff = "Start";
                                                                                                                                            this.colorAct = "light";
                                                                                                                                            this.colorDes = "primary";
                                                                                                                                            this.modediff = 0;
                                                                                                                                            return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40150, 1, 0).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                                                                    var _this = this;
                                                                                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                                                                        this.resActive = 0;
                                                                                                                                                        this.colorB1 = "light";
                                                                                                                                                        this.colorB2 = "light";
                                                                                                                                                        this.global.isBBAM = true;
                                                                                                                                                        this.global.ssid = "BBAM";
                                                                                                                                                        this.global.interval = setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                                                                            var _this = this;
                                                                                                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                                                                                switch (_a.label) {
                                                                                                                                                                    case 0: return [4 /*yield*/, this.upc.client.readHoldingRegisters(40416, 100).then(function (res) {
                                                                                                                                                                            //40435
                                                                                                                                                                            var iFlux = [res[19], res[20]];
                                                                                                                                                                            _this.input = _this.upc.client.registerToFloat(iFlux);
                                                                                                                                                                            //40437
                                                                                                                                                                            var out = [res[21], res[22]];
                                                                                                                                                                            _this.output = _this.upc.client.registerToFloat(out);
                                                                                                                                                                            //40439
                                                                                                                                                                            var f = [res[23], res[24]];
                                                                                                                                                                            _this.flux = _this.upc.client.registerToFloat(f);
                                                                                                                                                                            //40451
                                                                                                                                                                            var tmp = [res[35], res[36]];
                                                                                                                                                                            _this.temp = _this.upc.client.registerToFloat(tmp);
                                                                                                                                                                            //40463
                                                                                                                                                                            var outcomp = [res[47], res[48]];
                                                                                                                                                                            _this.outputcomp = _this.upc.client.registerToFloat(outcomp);
                                                                                                                                                                            _this.cd.detectChanges();
                                                                                                                                                                            loading.dismiss();
                                                                                                                                                                        })];
                                                                                                                                                                    case 1:
                                                                                                                                                                        _a.sent();
                                                                                                                                                                        return [2 /*return*/];
                                                                                                                                                                }
                                                                                                                                                            });
                                                                                                                                                        }); }, 500);
                                                                                                                                                        return [2 /*return*/];
                                                                                                                                                    });
                                                                                                                                                }); })];
                                                                                                                                        case 1:
                                                                                                                                            _a.sent();
                                                                                                                                            return [2 /*return*/];
                                                                                                                                    }
                                                                                                                                });
                                                                                                                            }); })];
                                                                                                                    case 1:
                                                                                                                        _a.sent();
                                                                                                                        return [2 /*return*/];
                                                                                                                }
                                                                                                            });
                                                                                                        }); })];
                                                                                                case 1:
                                                                                                    _a.sent();
                                                                                                    return [2 /*return*/];
                                                                                            }
                                                                                        });
                                                                                    }); })
                                                                                    /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                                                                                      this.input = res;
                                                                                      this.cd.detectChanges();
                                                                                  }).catch(err=>{
                                                                                    
                                                                                  })
                                                                                  await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                                                                                    //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
                                                                                    var upc = "Test4G1";
                                                                                    this.upc3s.forEach(item=>{
                                                                                      if(item.upcNameId == upc){
                                                                                        this.outputref = item.generalParameters.co2PresOutRef5/1000;
                                                                                        
                                                                                      }
                                                                                    })
                                                                                  })
                                                                                  await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                                                                                    this.inputref = 2+0.8*(res-10)/90;
                                                                                    this.fluxref = 0.17*res;
                                                                                    this.cd.detectChanges();
                                                                                  })
                                                                                  //40271 40273 40275 40277 40279
                                                                                  
                                                                                  await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                                                                                      this.outputcomp = res;
                                                                                      this.cd.detectChanges();
                                                                                  })
                                                                                  await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                                                                                    this.output = res;
                                                                                    this.cd.detectChanges();
                                                                                  })
                                                                                  await this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                                                                                    this.global.ssid = res;
                                                                                  })
                                                                                  await this.upc.client.getIntFromHoldingRegister(40011,1).then(res=>{
                                                                                    
                                                                                    if(res == 2 || res == 4369) {
                                                                                      
                                                            
                                                                                      this.textdiff = "Stop";
                                                                                      this.colordif = "danger";
                                                                                      this.colorAct = "danger";
                                                                                      this.colorDes = "light";
                                                                                    }
                                                                                    else {
                                                                                      this.colordif = "primary"
                                                                                      this.textdiff = "Start";
                                                                                      this.colorAct = "light";
                                                                                      this.colorDes = "primary";
                                                                                    }
                                                                                    this.modediff = res;
                                                                                    this.cd.detectChanges();
                                                                                  })
                                                                                  await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                                                                                    
                                                                                    this.resActive = res;
                                                                                    if (res == 1){
                                                                                      this.colorB1 = "primary";
                                                                                      this.PE = "B1";
                                                                                    } if(res == 2) {
                                                                                      this.colorB2 = "primary";
                                                                                      this.PE = "B2"
                                                                                    }
                                                                                    this.cd.detectChanges();
                                                                                  })
                                                                                  
                                                                                  await this.upc.client.setIntInHoldingRegister(40065,1,5).then(res=>{
                                                                                    this.intensity = 5;
                                                                                  })
                                                                                  /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                                                                                    this.fluxmax = res;
                                                                                    
                                                                                    this.cd.detectChanges();
                                                                                  })*/
                                                                                    /*await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                                                                                      this.intensityFlux = res;
                                                                                      
                                                                                      this.cd.detectChanges();
                                                                                    })//
                                                                                    await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                                                                                      this.flux = res;
                                                                                      this.cd.detectChanges();
                                                                                    })
                                                                                    await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                                                                                      this.temp = res;
                                                                                      this.cd.detectChanges();
                                                                                    })
                                                                                    await this.upc.client.setFloatInHoldingRegister(40018,(this.fluxref*10)/this.intensity).then(res=>{
                                                                                      this.fluxmax = (this.fluxref*10)/this.intensity;
                                                                                    })
                                                                                    this.cd.detectChanges();
                                                                                    loading.dismiss();
                                                                                    this.interval = setInterval(async ()=>{
                                                                                      
                                                                                      await this.upc.client.connect();
                                                                                      await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                                                                                        this.input = res;
                                                                                        if(Math.abs(((this.input-this.inputref)/this.inputref))*100 <10){
                                                                                          this.backgroundPE = true;
                                                                                        } else {
                                                                                          this.backgroundPE = false;
                                                                                        }
                                                                                        this.cd.detectChanges();
                                                                                    })
                                                                                    await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                                                                                        this.outputcomp = res;
                                                                                        if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <5){
                                                                                          this.backgroundPS = true;
                                                                                          this.bgpswarning = false;
                                                                                        } else if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <10){
                                                                                          this.bgpswarning = true;
                                                                                        } else {
                                                                                          this.backgroundPS = false;
                                                                                          this.bgpswarning = false;
                                                                                        }
                                                                                        this.cd.detectChanges();
                                                                                    })
                                                                                    await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                                                                                      this.output = res;
                                                                                      this.cd.detectChanges();
                                                                                    })
                                                                                    await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                                                                                      this.flux = res;
                                                                                      if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100) <5){
                                                                                        this.backgroundDeb = true;
                                                                                        this.bgdebwarning = false;
                                                                                      } else if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100)<10) {
                                                                                        
                                                                                        this.bgdebwarning = true;
                                                                                      } else {
                                                                                        this.backgroundDeb = false;
                                                                                        this.bgdebwarning = false;
                                                                                      }
                                                                                      this.cd.detectChanges();
                                                                                    })
                                                                                    await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                                                                                      this.intensityFlux = res;
                                                                                      this.cd.detectChanges();
                                                                                    })//
                                                                                    /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                                                                                      this.fluxmax = res;
                                                                                      this.cd.detectChanges();
                                                                                    })*/
                                                                                    //this.fluxref = this.intensityFlux * this.fluxmax /10;
                                                                                    //},500)
                                                                                    //})
                                                                                ];
                                                                                case 1:
                                                                                    //this.ngZone.run(async ()=>{
                                                                                    _a.sent();
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
                                else {
                                    this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_3__["UPCModbus"](function (state) {
                                        _this.ngZone.run(function () {
                                            // Force refresh UI
                                            //this.readDiffusionParameters();
                                        });
                                    });
                                    //await this.upc.client.connect();
                                    setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0: 
                                                //this.ngZone.run(async ()=>{
                                                return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40018).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                        var _this = this;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    this.fluxref = res * 5 / 10;
                                                                    return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40065, 1, 5).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                            var _this = this;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0:
                                                                                        this.intensityFlux = 5;
                                                                                        return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40011, 1, 0).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                var _this = this;
                                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                    switch (_a.label) {
                                                                                                        case 0:
                                                                                                            this.colordif = "primary";
                                                                                                            this.textdiff = "Start";
                                                                                                            this.colorAct = "light";
                                                                                                            this.colorDes = "primary";
                                                                                                            this.modediff = 0;
                                                                                                            this.global.ssid = "BBAM";
                                                                                                            this.global.isBBAM = true;
                                                                                                            return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40150, 1, 0).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                                    var _this = this;
                                                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                                        this.resActive = 0;
                                                                                                                        this.colorB1 = "light";
                                                                                                                        this.colorB2 = "light";
                                                                                                                        this.global.interval = setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                                            var _this = this;
                                                                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                                                switch (_a.label) {
                                                                                                                                    case 0: return [4 /*yield*/, this.upc.client.readHoldingRegisters(40416, 100).then(function (res) {
                                                                                                                                            //40435
                                                                                                                                            var iFlux = [res[19], res[20]];
                                                                                                                                            _this.input = _this.upc.client.registerToFloat(iFlux);
                                                                                                                                            //40437
                                                                                                                                            var out = [res[21], res[22]];
                                                                                                                                            _this.output = _this.upc.client.registerToFloat(out);
                                                                                                                                            //40439
                                                                                                                                            var f = [res[23], res[24]];
                                                                                                                                            _this.flux = _this.upc.client.registerToFloat(f);
                                                                                                                                            //40451
                                                                                                                                            var tmp = [res[35], res[36]];
                                                                                                                                            _this.temp = _this.upc.client.registerToFloat(tmp);
                                                                                                                                            //40463
                                                                                                                                            var outcomp = [res[47], res[48]];
                                                                                                                                            _this.outputcomp = _this.upc.client.registerToFloat(outcomp);
                                                                                                                                            _this.cd.detectChanges();
                                                                                                                                            //loading.dismiss();
                                                                                                                                        })];
                                                                                                                                    case 1:
                                                                                                                                        _a.sent();
                                                                                                                                        return [2 /*return*/];
                                                                                                                                }
                                                                                                                            });
                                                                                                                        }); }, 500);
                                                                                                                        return [2 /*return*/];
                                                                                                                    });
                                                                                                                }); })];
                                                                                                        case 1:
                                                                                                            _a.sent();
                                                                                                            return [2 /*return*/];
                                                                                                    }
                                                                                                });
                                                                                            }); })];
                                                                                    case 1:
                                                                                        _a.sent();
                                                                                        return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        }); })];
                                                                case 1:
                                                                    _a.sent();
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    }); })
                                                    /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                                                      this.input = res;
                                                      this.cd.detectChanges();
                                                  }).catch(err=>{
                                                    
                                                  })
                                                  await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                                                    //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
                                                    var upc = "Test4G1";
                                                    this.upc3s.forEach(item=>{
                                                      if(item.upcNameId == upc){
                                                        this.outputref = item.generalParameters.co2PresOutRef5/1000;
                                                        
                                                      }
                                                    })
                                                  })
                                                  await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                                                    this.inputref = 2+0.8*(res-10)/90;
                                                    this.fluxref = 0.17*res;
                                                    this.cd.detectChanges();
                                                  })
                                                  //40271 40273 40275 40277 40279
                                                  
                                                  await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                                                      this.outputcomp = res;
                                                      this.cd.detectChanges();
                                                  })
                                                  await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                                                    this.output = res;
                                                    this.cd.detectChanges();
                                                  })
                                                  await this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                                                    this.global.ssid = res;
                                                  })
                                                  await this.upc.client.getIntFromHoldingRegister(40011,1).then(res=>{
                                                    
                                                    if(res == 2 || res == 4369) {
                                                      
                                  
                                                      this.textdiff = "Stop";
                                                      this.colordif = "danger";
                                                      this.colorAct = "danger";
                                                      this.colorDes = "light";
                                                    }
                                                    else {
                                                      this.colordif = "primary"
                                                      this.textdiff = "Start";
                                                      this.colorAct = "light";
                                                      this.colorDes = "primary";
                                                    }
                                                    this.modediff = res;
                                                    this.cd.detectChanges();
                                                  })
                                                  await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                                                    
                                                    this.resActive = res;
                                                    if (res == 1){
                                                      this.colorB1 = "primary";
                                                      this.PE = "B1";
                                                    } if(res == 2) {
                                                      this.colorB2 = "primary";
                                                      this.PE = "B2"
                                                    }
                                                    this.cd.detectChanges();
                                                  })
                                                  
                                                  await this.upc.client.setIntInHoldingRegister(40065,1,5).then(res=>{
                                                    this.intensity = 5;
                                                  })
                                                  /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                                                    this.fluxmax = res;
                                                    
                                                    this.cd.detectChanges();
                                                  })*/
                                                    /*await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                                                      this.intensityFlux = res;
                                                      
                                                      this.cd.detectChanges();
                                                    })//
                                                    await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                                                      this.flux = res;
                                                      this.cd.detectChanges();
                                                    })
                                                    await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                                                      this.temp = res;
                                                      this.cd.detectChanges();
                                                    })
                                                    await this.upc.client.setFloatInHoldingRegister(40018,(this.fluxref*10)/this.intensity).then(res=>{
                                                      this.fluxmax = (this.fluxref*10)/this.intensity;
                                                    })
                                                    this.cd.detectChanges();
                                                    loading.dismiss();
                                                    this.interval = setInterval(async ()=>{
                                                      
                                                      await this.upc.client.connect();
                                                      await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                                                        this.input = res;
                                                        if(Math.abs(((this.input-this.inputref)/this.inputref))*100 <10){
                                                          this.backgroundPE = true;
                                                        } else {
                                                          this.backgroundPE = false;
                                                        }
                                                        this.cd.detectChanges();
                                                    })
                                                    await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                                                        this.outputcomp = res;
                                                        if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <5){
                                                          this.backgroundPS = true;
                                                          this.bgpswarning = false;
                                                        } else if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <10){
                                                          this.bgpswarning = true;
                                                        } else {
                                                          this.backgroundPS = false;
                                                          this.bgpswarning = false;
                                                        }
                                                        this.cd.detectChanges();
                                                    })
                                                    await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                                                      this.output = res;
                                                      this.cd.detectChanges();
                                                    })
                                                    await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                                                      this.flux = res;
                                                      if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100) <5){
                                                        this.backgroundDeb = true;
                                                        this.bgdebwarning = false;
                                                      } else if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100)<10) {
                                                        
                                                        this.bgdebwarning = true;
                                                      } else {
                                                        this.backgroundDeb = false;
                                                        this.bgdebwarning = false;
                                                      }
                                                      this.cd.detectChanges();
                                                    })
                                                    await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                                                      this.intensityFlux = res;
                                                      this.cd.detectChanges();
                                                    })//
                                                    /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                                                      this.fluxmax = res;
                                                      this.cd.detectChanges();
                                                    })*/
                                                    //this.fluxref = this.intensityFlux * this.fluxmax /10;
                                                    //},500)
                                                    //})
                                                ];
                                                case 1:
                                                    //this.ngZone.run(async ()=>{
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }, 1000);
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [3 /*break*/, 4];
                    case 1:
                        if (!this.platform.is("android")) return [3 /*break*/, 4];
                        if (!(localStorage.getItem("BBAM") != "true")) return [3 /*break*/, 2];
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
                                                                    case 0: return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40018).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                            var _this = this;
                                                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0:
                                                                                        this.fluxref = res * 5 / 10;
                                                                                        return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40065, 1, 5).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                var _this = this;
                                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                    switch (_a.label) {
                                                                                                        case 0:
                                                                                                            this.intensityFlux = 5;
                                                                                                            return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40011, 1, 0).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                                    var _this = this;
                                                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                                        switch (_a.label) {
                                                                                                                            case 0:
                                                                                                                                this.colordif = "primary";
                                                                                                                                this.textdiff = "Start";
                                                                                                                                this.colorAct = "light";
                                                                                                                                this.colorDes = "primary";
                                                                                                                                this.modediff = 0;
                                                                                                                                return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40150, 1, 0).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                                                        var _this = this;
                                                                                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                                                            this.resActive = 0;
                                                                                                                                            this.colorB1 = "light";
                                                                                                                                            this.colorB2 = "light";
                                                                                                                                            this.global.interval = setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                                                                var _this = this;
                                                                                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                                                                    switch (_a.label) {
                                                                                                                                                        case 0: return [4 /*yield*/, this.upc.client.readHoldingRegisters(40416, 100).then(function (res) {
                                                                                                                                                                //40435
                                                                                                                                                                var iFlux = [res[19], res[20]];
                                                                                                                                                                _this.input = _this.upc.client.registerToFloat(iFlux);
                                                                                                                                                                //40437
                                                                                                                                                                var out = [res[21], res[22]];
                                                                                                                                                                _this.output = _this.upc.client.registerToFloat(out);
                                                                                                                                                                //40439
                                                                                                                                                                var f = [res[23], res[24]];
                                                                                                                                                                _this.flux = _this.upc.client.registerToFloat(f);
                                                                                                                                                                //40451
                                                                                                                                                                var tmp = [res[35], res[36]];
                                                                                                                                                                _this.temp = _this.upc.client.registerToFloat(tmp);
                                                                                                                                                                //40463
                                                                                                                                                                var outcomp = [res[47], res[48]];
                                                                                                                                                                _this.outputcomp = _this.upc.client.registerToFloat(outcomp);
                                                                                                                                                                _this.cd.detectChanges();
                                                                                                                                                                loading.dismiss();
                                                                                                                                                            })];
                                                                                                                                                        case 1:
                                                                                                                                                            _a.sent();
                                                                                                                                                            return [2 /*return*/];
                                                                                                                                                    }
                                                                                                                                                });
                                                                                                                                            }); }, 500);
                                                                                                                                            return [2 /*return*/];
                                                                                                                                        });
                                                                                                                                    }); })];
                                                                                                                            case 1:
                                                                                                                                _a.sent();
                                                                                                                                return [2 /*return*/];
                                                                                                                        }
                                                                                                                    });
                                                                                                                }); })];
                                                                                                        case 1:
                                                                                                            _a.sent();
                                                                                                            return [2 /*return*/];
                                                                                                    }
                                                                                                });
                                                                                            }); })];
                                                                                    case 1:
                                                                                        _a.sent();
                                                                                        return [2 /*return*/];
                                                                                }
                                                                            });
                                                                        }); })
                                                                        /*await this.upc.client.setIntInHoldingRegister(40416,1,5).then(async()=>{
                                                                          this.intensityFlux = 5;
                                                                          await this.upc.client.setIntInHoldingRegister(40011,1,61166).then(async()=>{
                                                                            this.colordif = "primary"
                                                                            this.textdiff = "Start";
                                                                            this.colorAct = "light";
                                                                            this.colorDes = "primary";
                                                                            this.modediff = 0;
                                                                            await this.upc.client.setIntInHoldingRegister(40150,1,0).then(async ()=>{
                                                                              this.resActive = 0;
                                                                              this.colorB1 = "light";
                                                                              this.colorB2 = "light";
                                                                              this.interval = setInterval(async ()=>{
                                                                                await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                                                                              
                                                                                
                                                                                  //40435
                                                                                  var iFlux = [res[19],res[20]]
                                                                                  this.input = this.upc.client.registerToFloat(iFlux);
                                                        
                                                                                  //40437
                                                                                  var out = [res[21],res[22]]
                                                                                  this.output = this.upc.client.registerToFloat(out);
                                                        
                                                                                  //40439
                                                                                  var f = [res[23],res[24]];
                                                                                  this.flux = this.upc.client.registerToFloat(f);
                                                        
                                                                                  //40451
                                                                                  var tmp = [res[35],res[36]];
                                                                                  this.temp = this.upc.client.registerToFloat(tmp);
                                                        
                                                                                  //40463
                                                                                  var outcomp = [res[47],res[48]];
                                                                                  this.outputcomp = this.upc.client.registerToFloat(outcomp);
                                                        
                                                                                  this.cd.detectChanges();
                                                                                  loading.dismiss();
                                                        
                                                                                })
                                                                              },500)
                                                                              
                                                                            })
                                                                          })
                                                                        })*/
                                                                        /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                                                                            this.input = res;
                                                                        })
                                                                        await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                                                                          //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
                                                                          var upc = "Test4G1";
                                                                          this.upc3s.forEach(item=>{
                                                                            if(item.upcNameId == upc){
                                                                              this.outputref = item.generalParameters.co2PresOutRef5/1000;
                                                                              
                                                                            }
                                                                          })
                                                                        })
                                                                        await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                                                                            this.outputcomp = res;
                                                                        })
                                                                        await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                                                                          this.inputref = 2+0.8*(res-10)/90;
                                                                          
                                                                          this.fluxref = 0.17*res;
                                                                        })
                                                                        
                                                                        
                                                                        await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                                                                          this.output = res;
                                                                        })
                                                                        await this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                                                                          this.global.ssid = res;
                                                                        })
                                                                        await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                                                                          this.resActive = res;
                                                                          if (res == 1){
                                                                            this.colorB1 = "primary";
                                                                            this.colorB2 = "light";
                                                                            this.PE = "B1";
                                                                          } if(res == 2) {
                                                                            this.colorB2 = "primary";
                                                                            this.colorB1 = "light";
                                                                            this.PE = "B2";
                                                                          }
                                                                        })//0xc8ad64bbeb56470496bf2336e92c9caa
                                                                        await this.upc.client.setIntInHoldingRegister(40065,1,5).then(res=>{
                                                                          this.intensity = 5;
                                                                        })
                                                                        await this.upc.client.setFloatInHoldingRegister(40018,(this.fluxref*10)/this.intensity).then(res=>{
                                                                          this.fluxmax = (this.fluxref*10)/this.intensity;
                                                                        })
                                                                        await this.upc.client.getIntFromHoldingRegister(40011,1).then(res=>{
                                                                          //alert(res);
                                                                          if(res == 2 || res == 4369) {
                                                                            
                                                  
                                                                            this.textdiff = "Stop";
                                                                            this.colordif = "danger";
                                                                            this.colorAct = "danger";
                                                                            this.colorDes = "light";
                                                                          }
                                                                          else {
                                                                            this.colordif = "primary"
                                                                            this.textdiff = "Start";
                                                                            this.colorAct = "light";
                                                                            this.colorDes = "primary";
                                                                          }
                                                                          this.modediff = res;
                                                                          this.cd.detectChanges();
                                                                        })
                                                                        await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                                                                          this.intensityFlux = res;
                                                                        })//
                                                                        await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                                                                          this.flux = res;
                                                                        })
                                                                        await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                                                                          this.temp = res;
                                                                        })
                                                                        
                                                                        loading.dismiss();
                                                                        this.interval = setInterval(async ()=>{
                                                                          await this.upc.client.connect();
                                                                          await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                                                                            this.input = res;
                                                                            if(Math.abs(((this.input-this.inputref)/this.inputref))*100 <10){
                                                                              this.backgroundPE = true;
                                                                            } else {
                                                                              this.backgroundPE = false;
                                                                            }
                                                                        })
                                                                        await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                                                                            this.outputcomp = res;
                                                                            if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <5){
                                                                              this.backgroundPS = true;
                                                                              this.bgpswarning = false;
                                                                            } else if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <10){
                                                                              this.bgpswarning = true;
                                                                            } else {
                                                                              this.backgroundPS = false;
                                                                              this.bgpswarning = false;
                                                                            }
                                                                        })
                                                                        await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                                                                          this.output = res;
                                                                          
                                                                        })
                                                                        await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                                                                          this.flux = res;
                                                                          if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100) <5){
                                                                            this.backgroundDeb = true;
                                                                            this.bgdebwarning = false;
                                                                          } else if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100)<10) {
                                                                            
                                                                            this.bgdebwarning = true;
                                                                          } else {
                                                                            this.backgroundDeb = false;
                                                                            this.bgdebwarning = false;
                                                                          }
                                                                          this.cd.detectChanges();
                                                                        })
                                                                        await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                                                                          this.intensityFlux = res;
                                                                          this.cd.detectChanges();
                                                                        })//
                                                                        */
                                                                        /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                                                                          this.fluxmax = res;
                                                                          this.cd.detectChanges();
                                                                        })*/
                                                                        //this.fluxref = this.intensityFlux * this.fluxmax /10;
                                                                        /*if(this.backgroundDeb && this.backgroundPE && this.backgroundPS){
                                                                          if(this.resActive == 1) {
                                                                              this.successB1 = "checkmark-outline";
                                                                          } else if(this.resActive == 2){
                                                                              this.successB2 = "checkmark-outline";
                                                                          }
                                                                        }
                                                                        },500)*/
                                                                    ];
                                                                    case 1:
                                                                        _a.sent();
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
                        return [3 /*break*/, 4];
                    case 2:
                        this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_3__["UPCModbus"](function (state) {
                            _this.ngZone.run(function () {
                                // Force refresh UI
                                //this.readDiffusionParameters();
                            });
                        });
                        return [4 /*yield*/, this.upc.client.connect()];
                    case 3:
                        _a.sent();
                        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40018).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var _this = this;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        this.fluxref = res * 5 / 10;
                                                        return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40065, 1, 5).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                var _this = this;
                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0:
                                                                            this.intensityFlux = 5;
                                                                            return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40011, 1, 0).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                    var _this = this;
                                                                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                        switch (_a.label) {
                                                                                            case 0:
                                                                                                this.colordif = "primary";
                                                                                                this.textdiff = "Start";
                                                                                                this.colorAct = "light";
                                                                                                this.colorDes = "primary";
                                                                                                this.modediff = 0;
                                                                                                return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40150, 1, 0).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                        var _this = this;
                                                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                            this.resActive = 0;
                                                                                                            this.colorB1 = "light";
                                                                                                            this.colorB2 = "light";
                                                                                                            this.global.interval = setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                                var _this = this;
                                                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                                    switch (_a.label) {
                                                                                                                        case 0: return [4 /*yield*/, this.upc.client.readHoldingRegisters(40416, 100).then(function (res) {
                                                                                                                                //40435
                                                                                                                                var iFlux = [res[19], res[20]];
                                                                                                                                _this.input = _this.upc.client.registerToFloat(iFlux);
                                                                                                                                //40437
                                                                                                                                var out = [res[21], res[22]];
                                                                                                                                _this.output = _this.upc.client.registerToFloat(out);
                                                                                                                                //40439
                                                                                                                                var f = [res[23], res[24]];
                                                                                                                                _this.flux = _this.upc.client.registerToFloat(f);
                                                                                                                                //40451
                                                                                                                                var tmp = [res[35], res[36]];
                                                                                                                                _this.temp = _this.upc.client.registerToFloat(tmp);
                                                                                                                                //40463
                                                                                                                                var outcomp = [res[47], res[48]];
                                                                                                                                _this.outputcomp = _this.upc.client.registerToFloat(outcomp);
                                                                                                                                _this.cd.detectChanges();
                                                                                                                                //loading.dismiss();
                                                                                                                            })];
                                                                                                                        case 1:
                                                                                                                            _a.sent();
                                                                                                                            return [2 /*return*/];
                                                                                                                    }
                                                                                                                });
                                                                                                            }); }, 500);
                                                                                                            return [2 /*return*/];
                                                                                                        });
                                                                                                    }); })];
                                                                                            case 1:
                                                                                                _a.sent();
                                                                                                return [2 /*return*/];
                                                                                        }
                                                                                    });
                                                                                }); })];
                                                                        case 1:
                                                                            _a.sent();
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); })];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); })
                                        /*await this.upc.client.setIntInHoldingRegister(40416,1,5).then(async()=>{
                                          this.intensityFlux = 5;
                                          await this.upc.client.setIntInHoldingRegister(40011,1,61166).then(async()=>{
                                            this.colordif = "primary"
                                            this.textdiff = "Start";
                                            this.colorAct = "light";
                                            this.colorDes = "primary";
                                            this.modediff = 0;
                                            await this.upc.client.setIntInHoldingRegister(40150,1,0).then(async ()=>{
                                              this.resActive = 0;
                                              this.colorB1 = "light";
                                              this.colorB2 = "light";
                                              this.interval = setInterval(async ()=>{
                                                await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                                              
                                                
                                                  //40435
                                                  var iFlux = [res[19],res[20]]
                                                  this.input = this.upc.client.registerToFloat(iFlux);
                          
                                                  //40437
                                                  var out = [res[21],res[22]]
                                                  this.output = this.upc.client.registerToFloat(out);
                          
                                                  //40439
                                                  var f = [res[23],res[24]];
                                                  this.flux = this.upc.client.registerToFloat(f);
                          
                                                  //40451
                                                  var tmp = [res[35],res[36]];
                                                  this.temp = this.upc.client.registerToFloat(tmp);
                          
                                                  //40463
                                                  var outcomp = [res[47],res[48]];
                                                  this.outputcomp = this.upc.client.registerToFloat(outcomp);
                          
                                                  this.cd.detectChanges();
                                                  loading.dismiss();
                          
                                                })
                                              },500)
                                              
                                            })
                                          })
                                        })*/
                                        /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                                            this.input = res;
                                        })
                                        await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                                          //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
                                          var upc = "Test4G1";
                                          this.upc3s.forEach(item=>{
                                            if(item.upcNameId == upc){
                                              this.outputref = item.generalParameters.co2PresOutRef5/1000;
                                              
                                            }
                                          })
                                        })
                                        await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                                            this.outputcomp = res;
                                        })
                                        await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                                          this.inputref = 2+0.8*(res-10)/90;
                                          
                                          this.fluxref = 0.17*res;
                                        })
                                        
                                        
                                        await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                                          this.output = res;
                                        })
                                        await this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                                          this.global.ssid = res;
                                        })
                                        await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                                          this.resActive = res;
                                          if (res == 1){
                                            this.colorB1 = "primary";
                                            this.colorB2 = "light";
                                            this.PE = "B1";
                                          } if(res == 2) {
                                            this.colorB2 = "primary";
                                            this.colorB1 = "light";
                                            this.PE = "B2";
                                          }
                                        })//0xc8ad64bbeb56470496bf2336e92c9caa
                                        await this.upc.client.setIntInHoldingRegister(40065,1,5).then(res=>{
                                          this.intensity = 5;
                                        })
                                        await this.upc.client.setFloatInHoldingRegister(40018,(this.fluxref*10)/this.intensity).then(res=>{
                                          this.fluxmax = (this.fluxref*10)/this.intensity;
                                        })
                                        await this.upc.client.getIntFromHoldingRegister(40011,1).then(res=>{
                                          //alert(res);
                                          if(res == 2 || res == 4369) {
                                            
                        
                                            this.textdiff = "Stop";
                                            this.colordif = "danger";
                                            this.colorAct = "danger";
                                            this.colorDes = "light";
                                          }
                                          else {
                                            this.colordif = "primary"
                                            this.textdiff = "Start";
                                            this.colorAct = "light";
                                            this.colorDes = "primary";
                                          }
                                          this.modediff = res;
                                          this.cd.detectChanges();
                                        })
                                        await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                                          this.intensityFlux = res;
                                        })//
                                        await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                                          this.flux = res;
                                        })
                                        await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                                          this.temp = res;
                                        })
                                        
                                        loading.dismiss();
                                        this.interval = setInterval(async ()=>{
                                          await this.upc.client.connect();
                                          await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                                            this.input = res;
                                            if(Math.abs(((this.input-this.inputref)/this.inputref))*100 <10){
                                              this.backgroundPE = true;
                                            } else {
                                              this.backgroundPE = false;
                                            }
                                        })
                                        await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                                            this.outputcomp = res;
                                            if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <5){
                                              this.backgroundPS = true;
                                              this.bgpswarning = false;
                                            } else if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <10){
                                              this.bgpswarning = true;
                                            } else {
                                              this.backgroundPS = false;
                                              this.bgpswarning = false;
                                            }
                                        })
                                        await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                                          this.output = res;
                                          
                                        })
                                        await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                                          this.flux = res;
                                          if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100) <5){
                                            this.backgroundDeb = true;
                                            this.bgdebwarning = false;
                                          } else if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100)<10) {
                                            
                                            this.bgdebwarning = true;
                                          } else {
                                            this.backgroundDeb = false;
                                            this.bgdebwarning = false;
                                          }
                                          this.cd.detectChanges();
                                        })
                                        await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                                          this.intensityFlux = res;
                                          this.cd.detectChanges();
                                        })//
                                        */
                                        /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                                          this.fluxmax = res;
                                          this.cd.detectChanges();
                                        })*/
                                        //this.fluxref = this.intensityFlux * this.fluxmax /10;
                                        /*if(this.backgroundDeb && this.backgroundPE && this.backgroundPS){
                                          if(this.resActive == 1) {
                                              this.successB1 = "checkmark-outline";
                                          } else if(this.resActive == 2){
                                              this.successB2 = "checkmark-outline";
                                          }
                                        }
                                        },500)*/
                                    ];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 5000);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AdjustmentPage.prototype.doRefresh = function (event) {
        this.ngOnInit();
        event.target.complete();
    };
    /*ionViewWillLeave() {
  
      alert("Destroyed !");
      clearInterval(this.interval);
    }
  
    ngOnDestroy(): void {
  
      alert("Destroyed !");
      clearInterval(this.interval);
    }*/
    AdjustmentPage.prototype.changeResAct = function (i) {
        var _this = this;
        if (this.resActive != null) {
            setTimeout(function () {
                _this.upc.client.setIntInHoldingRegister(40151, 1, i).then(function (res) {
                    _this.upc.client.setIntInHoldingRegister(40150, 1, i).then(function (res) {
                        _this.resActive = i;
                        if (_this.resActive == 1) {
                            _this.colorB1 = "primary";
                            _this.colorB2 = "light";
                            _this.PE = "B1";
                        }
                        if (_this.resActive == 2) {
                            _this.colorB2 = "primary";
                            _this.colorB1 = "light";
                            _this.PE = "B2";
                        } // lire plusieurs variables modbus 
                        /*this.interval = setInterval(async ()=>{
                          await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                            this.input = res;
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                            this.outputcomp = res;
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                          this.output = res;
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                          this.flux = res;
                          this.cd.detectChanges();
                        })
                        await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                          this.intensityFlux = res;
                          this.cd.detectChanges();
                        })
                        this.fluxref = this.intensityFlux * this.fluxmax /10;
                        },500)*/
                        _this.cd.detectChanges();
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
                });
            }, 1000);
        }
    };
    AdjustmentPage.prototype.changeInt = function () {
        var _this = this;
        if (this.intensity != null) {
            clearInterval(this.global.interval);
            setTimeout(function () {
                _this.upc.client.setIntInHoldingRegister(40065, 1, _this.intensity).then(function (res) {
                    if (_this.intensity == 1) {
                        _this.colorMin = "primary";
                        _this.colorMax = "light";
                    }
                    if (_this.intensity == 10) {
                        _this.colorMax = "primary";
                        _this.colorMin = "light";
                    }
                    _this.global.interval = setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
                                        })
                                        /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                                          this.fluxmax = res;
                                          this.cd.detectChanges();
                                        })*/
                                    ]; //
                                case 5:
                                    _a.sent(); //
                                    /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                                      this.fluxmax = res;
                                      this.cd.detectChanges();
                                    })*/
                                    this.fluxref = this.intensityFlux * this.fluxmax / 10;
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 500);
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
            }, 1000);
        }
    };
    AdjustmentPage.prototype.minInt = function () {
        var _this = this;
        this.upc.client.setIntInHoldingRegister(40065, 1, 1).then(function (res) {
            _this.intensity = 1;
            _this.colorMin = "primary";
            _this.colorMax = "light";
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
            _this.colorMax = "primary";
            _this.colorMin = "light";
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
    AdjustmentPage.prototype.testMinB2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCTRL.create({
                            message: "Calcul des Pressions pour B2 à l'intensité 1 en cours...",
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.upc.client.setIntInHoldingRegister(40065, 1, 1).then(function (res) {
                            _this.intensity = 1;
                            _this.upc.client.setIntInHoldingRegister(40150, 1, 2).then(function (res) {
                                var cpt = 0;
                                var intervalB2I1 = setInterval(function () {
                                    _this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                        _this.PEB1Int1 = res;
                                    });
                                    _this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                        _this.PSB1Int1 = res;
                                    });
                                    _this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                        if (Math.abs(((_this.DebB1Int1 - res) / res) * 100) < 10) {
                                            cpt++;
                                        }
                                        _this.DebB1Int1 = res;
                                    });
                                    if (cpt >= 10) {
                                        clearInterval(intervalB2I1);
                                        loading.dismiss();
                                    }
                                }, 500);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdjustmentPage.prototype.testMaxB2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCTRL.create({
                            message: "Calcul des Pressions pour B2 à l'intensité 10 en cours ...",
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.upc.client.setIntInHoldingRegister(40065, 1, 10).then(function (res) {
                            _this.intensity = 10;
                            _this.upc.client.setIntInHoldingRegister(40150, 1, 1).then(function (res) {
                                var cpt = 0;
                                var intervalB2I10 = setInterval(function () {
                                    _this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                        _this.PEB1Int1 = res;
                                    });
                                    _this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                        _this.PSB1Int1 = res;
                                    });
                                    _this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                        if (Math.abs(((_this.DebB1Int1 - res) / res) * 100) < 10) {
                                            cpt++;
                                        }
                                        _this.DebB1Int1 = res;
                                    });
                                    if (cpt >= 10) {
                                        clearInterval(intervalB2I10);
                                        loading.dismiss();
                                    }
                                }, 500);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdjustmentPage.prototype.testMaxB1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCTRL.create({
                            message: "Calcul des Pressions pour B1 à l'intensité 10 en cours ...",
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.upc.client.setIntInHoldingRegister(40065, 1, 10).then(function (res) {
                            _this.intensity = 10;
                            _this.upc.client.setIntInHoldingRegister(40150, 1, 1).then(function (res) {
                                var cpt = 0;
                                var intervalB1I10 = setInterval(function () {
                                    _this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                        _this.PEB1Int1 = res;
                                    });
                                    _this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                        _this.PSB1Int1 = res;
                                    });
                                    _this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                        if (Math.abs(((_this.DebB1Int1 - res) / res) * 100) < 10) {
                                            cpt++;
                                        }
                                        _this.DebB1Int1 = res;
                                    });
                                    if (cpt >= 10) {
                                        clearInterval(intervalB1I10);
                                        loading.dismiss();
                                    }
                                }, 500);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdjustmentPage.prototype.testMinB1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCTRL.create({
                            message: "Calcul des Pressions pour B1 à l'intensité 1 en cours ...",
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.upc.client.setIntInHoldingRegister(40065, 1, 1).then(function (res) {
                            _this.intensity = 1;
                            _this.upc.client.setIntInHoldingRegister(40150, 1, 1).then(function (res) {
                                var cpt = 0;
                                var intervalva = setInterval(function () {
                                    _this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                        _this.PEB1Int1 = res;
                                    });
                                    _this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                        _this.PSB1Int1 = res;
                                    });
                                    _this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                        if (Math.abs(((_this.DebB1Int1 - res) / res) * 100) < 10) {
                                            cpt++;
                                        }
                                        _this.DebB1Int1 = res;
                                    });
                                    if (cpt >= 10) {
                                        clearInterval(intervalva);
                                        loading.dismiss();
                                    }
                                }, 500);
                            }).catch(function (err) {
                                alert("Erreur lors de l'écriture ModBus !");
                                loading.dismiss();
                            });
                        }).catch(function (err) {
                            alert("Erreur lors de l'écriture ModBus !");
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdjustmentPage.prototype.auto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCTRL.create({
                            message: "Calcul des Pressions en cours...",
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.upc.client.setIntInHoldingRegister(40065, 1, 1).then(function (res) {
                            _this.intensity = 1;
                            _this.upc.client.setIntInHoldingRegister(40150, 1, 1).then(function (res) {
                                var interval = setInterval(function () {
                                    _this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                        _this.PEB1Int1 = res;
                                    });
                                    _this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                        _this.PSB1Int1 = res;
                                    });
                                    _this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                        if (Math.abs(_this.DebB2Int1 - res) > 0.01) {
                                            //alert("Seuil Atteind !"); Fichier Excel dispo par URL
                                        }
                                        _this.DebB1Int1 = res;
                                    });
                                }, 500);
                                setTimeout(function () {
                                    clearInterval(interval);
                                    _this.upc.client.setIntInHoldingRegister(40150, 1, 2).then(function (res) {
                                        var interval2 = setInterval(function () {
                                            _this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                                _this.PEB2Int1 = res;
                                            });
                                            _this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                                _this.PSB2Int1 = res;
                                            });
                                            _this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                                if (Math.abs(_this.DebB2Int1 - res) > 0.1) {
                                                    clearInterval(interval2);
                                                }
                                                _this.DebB2Int1 = res;
                                            });
                                        }, 500);
                                        setTimeout(function () {
                                            clearInterval(interval2);
                                            _this.upc.client.setIntInHoldingRegister(40065, 1, 10).then(function (res) {
                                                _this.intensity = 10;
                                                var interval3 = setInterval(function () {
                                                    _this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                                        _this.PEB2Int10 = res;
                                                    });
                                                    _this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                                        _this.PSB2Int10 = res;
                                                    });
                                                    _this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                                        _this.DebB2Int10 = res;
                                                    });
                                                }, 500);
                                                setTimeout(function () {
                                                    clearInterval(interval3);
                                                    _this.upc.client.setIntInHoldingRegister(40150, 1, 1).then(function (res) {
                                                        var interval4 = setInterval(function () {
                                                            _this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                                                _this.PEB1Int10 = res;
                                                            });
                                                            _this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                                                _this.PSB1Int10 = res;
                                                            });
                                                            _this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                                                _this.DebB1Int10 = res;
                                                            });
                                                        }, 500);
                                                        setTimeout(function () {
                                                            clearInterval(interval4);
                                                            alert("Test Auto Réalisé !");
                                                            loading.dismiss();
                                                        }, 40000);
                                                    });
                                                }, 30000);
                                            });
                                        }, 20000);
                                    });
                                }, 10000);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdjustmentPage.prototype.startstop = function () {
        if (this.colordif == "primary") {
            this.onChangeDiff();
        }
        else {
            this.onDisableDiff();
        }
    };
    AdjustmentPage.prototype.onChangeDiff = function () {
        var _this = this;
        this.upc.client.setIntInHoldingRegister(40011, 1, 2).then(function (res) {
            _this.textdiff = "Stop";
            _this.colordif = "danger";
            _this.colorAct = "primary";
            _this.colorDes = "light";
            _this.modediff = 2;
            _this.cd.detectChanges();
        });
    };
    AdjustmentPage.prototype.onDisableDiff = function () {
        var _this = this;
        this.upc.client.setIntInHoldingRegister(40011, 1, 0).then(function (res) {
            _this.textdiff = "Start";
            _this.colordif = "primary";
            _this.colorAct = "light";
            _this.colorDes = "primary";
            _this.modediff = 0;
            _this.cd.detectChanges();
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