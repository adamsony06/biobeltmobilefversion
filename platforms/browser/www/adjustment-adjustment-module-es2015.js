(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adjustment-adjustment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/adjustment/adjustment.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adjustment/adjustment.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Réglage Des Détendeurs</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \r\n     </ion-buttons>\r\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h3 style=\"text-align: center;\">Réglages des détendeurs </h3>\r\n    <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n  <ion-grid style=\"padding-top: 5%;\">\r\n    <ion-row style=\"text-align: center;\">\r\n      <ion-col size=\"12\"><ion-button shape=\"round\" size=\"large\" [color]=\"colordif\" (click)=\"startstop();\">{{textdiff}}</ion-button></ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"text-align: center;\">\r\n      <ion-col size=\"6\"><ion-button shape=\"round\" size=\"large\" [color]=\"colorB1\" (click)=\"changeResAct(1)\">B1<ion-icon *ngIf=\"successB1\" name=\"checkmark\"></ion-icon></ion-button></ion-col>\r\n      <ion-col size=\"6\"><ion-button shape=\"round\" size=\"large\" [color]=\"colorB2\" (click)=\"changeResAct(2)\">B2<ion-icon *ngIf=\"successB2\" name=\"checkmark\"></ion-icon></ion-button></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n  \r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title style=\"text-align: center;\">Mesures</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"6\" [ngClass]=\"{'bgred' : redBackground}\">\r\n            <ion-label *ngIf=\"!redBackground\" color=\"dark\">{{\"Intensité : \"+ intensityFlux}}</ion-label>\r\n            <ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\" [ngClass]=\"{'bgred' : redBackground}\">\r\n            <ion-label *ngIf=\"!redBackground\" color=\"dark\">{{\"Température : \"+temp.toFixed(2)+\" °C\"}}</ion-label>\r\n            <ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label>\r\n\r\n        </ion-col>\r\n        </ion-row>\r\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\r\n          <ion-col size=\"6\"></ion-col>\r\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight :bolder\"> Réf</ion-label></ion-col>\r\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight :bolder\">Mesure</ion-label></ion-col>\r\n        </ion-row>\r\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\r\n          <ion-col size=\"6\"><ion-label color=\"dark\">Débit (nl/min):</ion-label></ion-col>\r\n          <ion-col size=\"3\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{fluxref.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label></ion-col>\r\n          <ion-col size=\"3\" [ngClass]=\"{'bgsuccess':backgroundDeb,'bgdanger':!backgroundDeb, 'bgwarning':bgdebwarning}\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{flux.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label></ion-col>\r\n        </ion-row>\r\n        <ion-row [ngClass]=\"{'bgsuccess':backgroundPE,'bgdanger':!backgroundPE}\" >\r\n          <ion-col size=\"6\"><ion-label color=\"dark\" style=\"font-weight : bolder;\">PE (Bars):</ion-label></ion-col>\r\n          <ion-col size=\"3\"><ion-label *ngIf=\"!redBackground\" color=\"dark\" style=\"font-weight: bolder;\">{{inputref.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\" style=\"font-weight: bolder;\">-</ion-label></ion-col>\r\n          <ion-col size=\"3\"><ion-label *ngIf=\"!redBackground\" color=\"dark\" style=\"font-weight: bolder;\" >{{input.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\" style=\"font-weight: bolder;\" >-</ion-label></ion-col>\r\n\r\n        </ion-row>\r\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\r\n          <ion-col size=\"6\"><ion-label color=\"dark\">PS (Bars):</ion-label></ion-col>\r\n          <ion-col size=\"3\"></ion-col>\r\n          <ion-col size=\"3\"><ion-label color=\"dark\" *ngIf=\"!redBackground\">{{output.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label></ion-col>\r\n        </ion-row>\r\n        <ion-row [ngClass]=\"{'bgred' : redBackground}\">\r\n          <ion-col size=\"6\"><ion-label color=\"dark\">PS comp (Bars):</ion-label></ion-col>\r\n          <ion-col size=\"3\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{outputref.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label></ion-col>\r\n          <ion-col size=\"3\" [ngClass]=\"{'bgsuccess':backgroundPS,'bgdanger':!backgroundPS,'bgwarning':bgpswarning}\"><ion-label *ngIf=\"!redBackground\" color=\"dark\">{{outputcomp.toFixed(3)}}</ion-label><ion-label *ngIf=\"redBackground\" color=\"dark\">-</ion-label></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>  \r\n  \r\n  <!--<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" color=\"primary\">\r\n    <ion-fab-button>\r\n      {{PE}}\r\n    </ion-fab-button>\r\n    <ion-fab-list>\r\n      <ion-fab-button [color]=\"colorB1\" (click)=\"changeResAct(1);\">\r\n        B1\r\n      </ion-fab-button>\r\n      <ion-fab-button [color]=\"colorB2\" (click)=\"changeResAct(2);\">\r\n       B2\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n  <ion-fab vertical=\"center\" horizontal=\"start\" slot=\"fixed\" color=\"primary\">\r\n    <ion-fab-button>\r\n      Config.\r\n    </ion-fab-button>\r\n    <ion-fab-list>\r\n      <ion-fab-button (click)=\"minInt();\" [color]=\"colorMin\">\r\n        Mini.\r\n      </ion-fab-button>\r\n      <ion-fab-button (click)=\"maxInt();\" [color]=\"colorMax\">\r\n        Maxi.\r\n      </ion-fab-button>\r\n      <ion-fab-button (click)=\"testMinB1();\">\r\n        Auto.\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n  <ion-fab vertical=\"top\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-fab-button [color]=\"colordif\">\r\n      Diff.\r\n    </ion-fab-button>\r\n    <ion-fab-list>\r\n      <ion-fab-button [color]=\"colorAct\" (click)=\"onChangeDiff();\">\r\n        Act.\r\n      </ion-fab-button>\r\n      <ion-fab-button [color]=\"colorDes\" (click)=\"onDisableDiff();\"> \r\n        Des.\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n  \r\n  <div class=\"card card-body border-top-0\">\r\n    <div class=\"row\">-->\r\n   <!-- Adjustments -->\r\n   <!--<div class=\"col-md-4\">\r\n    <div class=\"card bg-light mb-2\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Ajustements</h5>\r\n        <dl class=\"row mb-0\">-->\r\n\r\n          <!-- co2ResActAdj -->\r\n          <!--<dd class=\"col-md-6 mb-0\">Réserve active</dd>\r\n          <dt class=\"col-md-6 mb-2 text-md-right\">\r\n            <select class=\"custom-select custom-select-sm\"\r\n                    \r\n                    (ngModelChange)=\"changeResAct(resActive);\"\r\n                    [(ngModel)]=\"resActive\">\r\n              <option value=\"0\">B0</option>\r\n              <option value=\"1\">B1</option>\r\n              <option value=\"2\">B2</option>\r\n            </select>\r\n          </dt>-->\r\n\r\n          <!-- upcDiffLvlAdj -->\r\n          <!--<dd class=\"col-md-6 mb-0\">Intensité du flux</dd>\r\n          <ion-grid>\r\n            <ion-row>\r\n          \r\n          <ion-col size=\"4\"><dt class=\"col-md-6 mb-2 text-md-right\">\r\n            <input  type=\"number\" class=\"form-control form-control-sm\"\r\n                    \r\n                    (ngModelChange)=\"changeInt();\"\r\n                    [(ngModel)]=\"intensity\">\r\n          </dt></ion-col>\r\n          \r\n        </ion-row>  \r\n        </ion-grid>-->\r\n\r\n          <!-- co2FlowRefAdj -->\r\n          <!--<dd class=\"col-md-6 mb-0\">Flux maximal [nl/min]</dd>\r\n          <dt class=\"col-md-6 mb-0 text-md-right\">\r\n            <input  type=\"number\" class=\"form-control form-control-sm\" step=\"0.1\"\r\n                    \r\n                    (ngModelChange)=\"changeFluxMax();\"\r\n                    [(ngModel)]=\"fluxmax\">\r\n          </dt>\r\n\r\n        </dl>\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n<!-- Flows -->\r\n<!--<div class=\"col-sm-6 col-md-4\">\r\n  <div class=\"card bg-light mb-2\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Flux</h5>\r\n      <dl class=\"row mb-0\">-->\r\n\r\n        <!-- upcCo2DiffLvl -->\r\n        <!--<dd class=\"col-lg-7 mb-0\">Intensité du flux actuel</dd>\r\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ intensityFlux }}</dt>-->\r\n\r\n        <!-- calcRefFlowRate -->\r\n        <!--<dd class=\"col-lg-7 mb-0\">Flux de référence</dd>\r\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ fluxref.toFixed(3) }} nl/min</dt>-->\r\n\r\n        <!-- co2FlowAvg -->\r\n        <!--<dd class=\"col-lg-7 mb-0\">Flux</dd>\r\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ flux.toFixed(3) }} nl/min</dt>-->\r\n\r\n        <!-- co2TempAvg -->\r\n        <!--<dd class=\"col-lg-7 mb-0\">Température du flux</dd>\r\n        <dt class=\"col-lg-5 mb-0 text-lg-right\">{{ temp.toFixed(3) }} °C</dt>\r\n\r\n      </dl>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n<!-- Pressures -->\r\n<!--<div class=\"col-sm-6 col-md-4\">\r\n  <div class=\"card bg-light mb-2\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Pressions</h5>\r\n      <dl class=\"row mb-0\">-->\r\n\r\n        <!-- co2PresInpAvg -->\r\n        <!--<dd class=\"col-lg-7 mb-0\">Pression d'entrée</dd>\r\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ input.toFixed(3) }} bar</dt>-->\r\n\r\n        <!-- co2PresOutAvg -->\r\n        <!--<dd class=\"col-lg-7 mb-0\">Pression de sortie</dd>\r\n        <dt class=\"col-lg-5 mb-2 text-lg-right\">{{ output.toFixed(3) }} bar</dt>-->\r\n\r\n        <!-- co2PressOutComp -->\r\n        <!--<dd class=\"col-lg-7 mb-0\">Pression de sortie compensée</dd>\r\n        <dt class=\"col-lg-5 mb-0 text-lg-right\">{{ outputcomp.toFixed(3) }} bar</dt>\r\n\r\n      </dl>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"col-sm-6 col-md-4\">\r\n  <div class=\"card bg-light mb-2\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Tableau de mesure</h5>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"2\"></ion-col>\r\n          <ion-col size=\"4\" style=\"font-weight :bolder;\">\r\n            B1\r\n          </ion-col>\r\n          <ion-col size=\"6\" style=\"font-weight :bolder;\">\r\n            B2\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"border-top: solid;\">\r\n          <ion-col size=\"2\" style=\"border-right: solid;font-weight: bolder;\">Min</ion-col>\r\n          <ion-col size=\"2\">PE</ion-col>\r\n          <ion-col size=\"2\">{{PEB1Int1 == 0 ? '-': ''+PEB1Int1.toFixed(2)}}</ion-col>\r\n          <ion-col size=\"2\">PE</ion-col>\r\n          <ion-col size=\"2\">{{PEB2Int1 == 0 ? '-': ''+PEB2Int1.toFixed(2)}}</ion-col>\r\n          <ion-col size=\"2\"></ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"2\"></ion-col>\r\n          <ion-col size=\"2\">Deb</ion-col>\r\n          <ion-col size=\"2\">{{DebB1Int1 == 0 ? '-':''+DebB1Int1.toFixed(2)}}</ion-col>\r\n          <ion-col size=\"2\">Deb</ion-col>\r\n          <ion-col size=\"2\">{{DebB2Int1 == 0 ? '-' : ''+DebB2Int1.toFixed(2)}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"2\"></ion-col>\r\n          <ion-col size=\"2\">PS</ion-col>\r\n          <ion-col size=\"2\">{{PSB1Int1 == 0 ? '-': ''+PSB1Int1.toFixed(2)}}</ion-col>\r\n          <ion-col size=\"2\">PS</ion-col>\r\n          <ion-col size=\"2\">{{PSB2Int1 == 0 ? '-': ''+PSB2Int1.toFixed(2)}}</ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row style=\"border-top: solid;\">\r\n          <ion-col size=\"2\" style=\"border-right: solid;font-weight: bolder;\">Maxi</ion-col>\r\n          <ion-col size=\"2\">PE</ion-col>\r\n          <ion-col size=\"2\">{{PEB1Int10 == 0 ? '-': ''+PEB1Int10.toFixed(2)}}</ion-col>\r\n          <ion-col size=\"2\">PE</ion-col>\r\n          <ion-col size=\"2\">{{PEB2Int10 == 0 ? '-': ''+PEB2Int10.toFixed(2)}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"2\"></ion-col>\r\n          <ion-col size=\"2\">Deb</ion-col>\r\n          <ion-col size=\"2\">{{DebB1Int10 == 0 ? '-':''+DebB1Int10.toFixed(2)}}</ion-col>\r\n          <ion-col size=\"2\">Deb</ion-col>\r\n          <ion-col size=\"2\">{{DebB2Int10 == 0 ? '-' : ''+DebB2Int10.toFixed(2)}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"2\"></ion-col>\r\n          <ion-col size=\"2\">PS</ion-col>\r\n          <ion-col size=\"2\">{{PSB1Int10 == 0 ? '-': ''+PSB1Int10.toFixed(2)}}</ion-col>\r\n          <ion-col size=\"2\">PS</ion-col>\r\n          <ion-col size=\"2\">{{PSB2Int10 == 0 ? '-': ''+PSB2Int10.toFixed(2)}}</ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>-->\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\r\n</ion-footer>\r\n<!--<ion-footer>\r\n  <ion-button size=\"block\" [color]=\"colordif\" (click)=\"onChangeDiff();\">{{textdiff}}</ion-button>\r\n  <ion-button size=\"block\" color=\"danger\" (click)=\"onDisableDiff()\" *ngIf=\"modediff == 2\">Désactiver Diffusion</ion-button>\r\n</ion-footer>-->\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _adjustment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjustment.page */ "./src/app/adjustment/adjustment.page.ts");




const routes = [
    {
        path: '',
        component: _adjustment_page__WEBPACK_IMPORTED_MODULE_3__["AdjustmentPage"]
    }
];
let AdjustmentPageRoutingModule = class AdjustmentPageRoutingModule {
};
AdjustmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdjustmentPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _adjustment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adjustment-routing.module */ "./src/app/adjustment/adjustment-routing.module.ts");
/* harmony import */ var _adjustment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adjustment.page */ "./src/app/adjustment/adjustment.page.ts");







let AdjustmentPageModule = class AdjustmentPageModule {
};
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



/***/ }),

/***/ "./src/app/adjustment/adjustment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/adjustment/adjustment.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgdanger {\n  background-color: red;\n}\n\n.bgsuccess {\n  background-color: green;\n}\n\n.bgwarning {\n  background-color: yellow;\n}\n\n/*.bgred {\n    background-color: red;\n  }*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJtYW5kL0Rlc2t0b3AvYmlvYmVsdG1vYmlsZS9zcmMvYXBwL2FkanVzdG1lbnQvYWRqdXN0bWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkanVzdG1lbnQvYWRqdXN0bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURDQTtFQUNJLHdCQUFBO0FDRUo7O0FEQ0E7O0lBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGp1c3RtZW50L2FkanVzdG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJnc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG4uYmd3YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLyouYmdyZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIH0qL1xyXG4iLCIuYmdkYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5iZ3N1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmJnd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLyouYmdyZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfSovIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








let AdjustmentPage = class AdjustmentPage {
    constructor(platform, loadingCTRL, ngZone, network, hotspot, cd, global, router, storage) {
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.ngZone = ngZone;
        this.network = network;
        this.hotspot = hotspot;
        this.cd = cd;
        this.global = global;
        this.router = router;
        this.storage = storage;
        this.input = 0;
        this.inputref = 0; // 2+0.8*(nbpieges-10)/90
        this.outputcomp = 0;
        this.output = 0;
        this.outputref = 0.325;
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
        this.redBackground = false;
        this.display = false;
        this.global.checkMode();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
    ionViewWillEnter() {
        /*affichage bouton suivant*/
        this.global.checkNextPage().then(res => {
            if (res == true) {
                this.display = true;
            }
        });
        this.platform.ready().then(res => {
            if (res == "cordova") {
                this.global.onConnectWiFi().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.global.upcmodbus.client.getStringFromHoldingRegister(40001, 10).then(res => {
                        localStorage.setItem("upcname", res);
                    }).catch(err => {
                        //localStorage.removeItem("isConnected");
                        this.redBackground = true;
                        localStorage.removeItem("isConnected");
                        this.colorB1 = "light";
                        this.colorB2 = "light";
                        this.colordif = "light";
                        this.cd.detectChanges();
                        //this.ngOnInit();
                    });
                    yield this.global.upcmodbus.client.getStringFromHoldingRegister(40045, 10).then(res => {
                        //localStorage.setItem("ssid",res);
                    });
                    yield this.global.upcmodbus.client.getIntFromHoldingRegister(40015, 1).then(res => {
                        this.inputref = 2 + 0.8 * (res - 10) / 90;
                    });
                    yield this.global.upcmodbus.client.getFloatFromHoldingRegister(40018).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        this.fluxref = res * 5 / 10;
                        yield this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 5).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            this.intensityFlux = 5;
                            yield this.global.upcmodbus.client.setIntInHoldingRegister(40011, 1, 0).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                this.colordif = "primary";
                                this.textdiff = "Start";
                                this.colorAct = "light";
                                this.colorDes = "primary";
                                this.modediff = 0;
                                yield this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 0).then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                    this.resActive = 0;
                                    this.colorB1 = "light";
                                    this.colorB2 = "light";
                                    this.global.interval = setInterval(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                        yield this.global.upcmodbus.client.readHoldingRegisters(40416, 100).then(res => {
                                            //40435
                                            var iFlux = [res[19], res[20]];
                                            this.input = this.global.upcmodbus.client.registerToFloat(iFlux);
                                            //40437
                                            var out = [res[21], res[22]];
                                            this.output = this.global.upcmodbus.client.registerToFloat(out);
                                            //40439
                                            var f = [res[23], res[24]];
                                            this.flux = this.global.upcmodbus.client.registerToFloat(f);
                                            //40451
                                            var tmp = [res[35], res[36]];
                                            this.temp = this.global.upcmodbus.client.registerToFloat(tmp);
                                            //40463
                                            var outcomp = [res[47], res[48]];
                                            this.outputcomp = this.global.upcmodbus.client.registerToFloat(outcomp);
                                            this.redBackground = false;
                                            this.cd.detectChanges();
                                        }).catch(err => {
                                            this.redBackground = true;
                                            this.colorB1 = "danger";
                                            this.colorB2 = "danger";
                                            this.colordif = "danger";
                                            this.cd.detectChanges();
                                        });
                                        if (this.redBackground) {
                                            clearInterval(this.global.interval);
                                            this.ngOnInit();
                                        }
                                    }), 500);
                                }));
                            }));
                        }));
                    }));
                }));
            }
        });
    }
    doRefresh(event) {
        this.ngOnInit();
        event.target.complete();
    }
    changeResAct(i) {
        if (this.resActive != null) {
            setTimeout(() => {
                this.global.upcmodbus.client.setIntInHoldingRegister(40151, 1, i).then(res => {
                    this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, i).then(res => {
                        this.resActive = i;
                        if (this.resActive == 1) {
                            this.colorB1 = "primary";
                            this.colorB2 = "light";
                            this.PE = "B1";
                        }
                        if (this.resActive == 2) {
                            this.colorB2 = "primary";
                            this.colorB1 = "light";
                            this.PE = "B2";
                        } // lire plusieurs variables modbus 
                        this.cd.detectChanges();
                    }).catch((err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        var loading = yield this.loadingCTRL.create({
                            message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                            duration: 10000
                        });
                        loading.present();
                        this.ngOnInit();
                    }));
                });
            }, 1000);
        }
    }
    changeInt() {
        if (this.intensity != null) {
            clearInterval(this.global.interval);
            setTimeout(() => {
                this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, this.intensity).then(res => {
                    if (this.intensity == 1) {
                        this.colorMin = "primary";
                        this.colorMax = "light";
                    }
                    if (this.intensity == 10) {
                        this.colorMax = "primary";
                        this.colorMin = "light";
                    }
                    this.global.interval = setInterval(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        yield this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                            this.input = res;
                        });
                        yield this.global.upcmodbus.client.getFloatFromHoldingRegister(40463).then(res => {
                            this.outputcomp = res;
                        });
                        yield this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                            this.output = res;
                        });
                        yield this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                            this.flux = res;
                            this.cd.detectChanges();
                        });
                        yield this.global.upcmodbus.client.getIntFromHoldingRegister(40416, 1).then(res => {
                            this.intensityFlux = res;
                            this.cd.detectChanges();
                        });
                        this.fluxref = this.intensityFlux * this.fluxmax / 10;
                    }), 500);
                }).catch((err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    var loading = yield this.loadingCTRL.create({
                        message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                        duration: 10000
                    });
                    loading.present();
                    this.ngOnInit();
                }));
            }, 1000);
        }
    }
    minInt() {
        this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 1).then(res => {
            this.intensity = 1;
            this.colorMin = "primary";
            this.colorMax = "light";
        }).catch((err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                duration: 10000
            });
            loading.present();
            this.ngOnInit();
        }));
    }
    maxInt() {
        this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 10).then(res => {
            this.intensity = 10;
            this.colorMax = "primary";
            this.colorMin = "light";
        }).catch((err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                duration: 10000
            });
            loading.present();
            this.ngOnInit();
        }));
    }
    testMinB2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Calcul des Pressions pour B2 à l'intensité 1 en cours...",
            });
            loading.present();
            this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 1).then(res => {
                this.intensity = 1;
                this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 2).then(res => {
                    var cpt = 0;
                    var intervalB2I1 = setInterval(() => {
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                            this.PEB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                            this.PSB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                            if (Math.abs(((this.DebB1Int1 - res) / res) * 100) < 10) {
                                cpt++;
                            }
                            this.DebB1Int1 = res;
                        });
                        if (cpt >= 10) {
                            clearInterval(intervalB2I1);
                            loading.dismiss();
                        }
                    }, 500);
                });
            });
        });
    }
    testMaxB2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Calcul des Pressions pour B2 à l'intensité 10 en cours ...",
            });
            loading.present();
            this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 10).then(res => {
                this.intensity = 10;
                this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 1).then(res => {
                    var cpt = 0;
                    var intervalB2I10 = setInterval(() => {
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                            this.PEB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                            this.PSB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                            if (Math.abs(((this.DebB1Int1 - res) / res) * 100) < 10) {
                                cpt++;
                            }
                            this.DebB1Int1 = res;
                        });
                        if (cpt >= 10) {
                            clearInterval(intervalB2I10);
                            loading.dismiss();
                        }
                    }, 500);
                });
            });
        });
    }
    testMaxB1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Calcul des Pressions pour B1 à l'intensité 10 en cours ...",
            });
            loading.present();
            this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 10).then(res => {
                this.intensity = 10;
                this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 1).then(res => {
                    var cpt = 0;
                    var intervalB1I10 = setInterval(() => {
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                            this.PEB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                            this.PSB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                            if (Math.abs(((this.DebB1Int1 - res) / res) * 100) < 10) {
                                cpt++;
                            }
                            this.DebB1Int1 = res;
                        });
                        if (cpt >= 10) {
                            clearInterval(intervalB1I10);
                            loading.dismiss();
                        }
                    }, 500);
                });
            });
        });
    }
    testMinB1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Calcul des Pressions pour B1 à l'intensité 1 en cours ...",
            });
            loading.present();
            this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 1).then(res => {
                this.intensity = 1;
                this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 1).then(res => {
                    var cpt = 0;
                    var intervalva = setInterval(() => {
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                            this.PEB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                            this.PSB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                            if (Math.abs(((this.DebB1Int1 - res) / res) * 100) < 10) {
                                cpt++;
                            }
                            this.DebB1Int1 = res;
                        });
                        if (cpt >= 10) {
                            clearInterval(intervalva);
                            loading.dismiss();
                        }
                    }, 500);
                }).catch(err => {
                    alert("Erreur lors de l'écriture ModBus !");
                    loading.dismiss();
                });
            }).catch(err => {
                alert("Erreur lors de l'écriture ModBus !");
                loading.dismiss();
            });
        });
    }
    auto() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loading = yield this.loadingCTRL.create({
                message: "Calcul des Pressions en cours...",
            });
            loading.present();
            this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 1).then(res => {
                this.intensity = 1;
                this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 1).then(res => {
                    var interval = setInterval(() => {
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                            this.PEB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                            this.PSB1Int1 = res;
                        });
                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                            if (Math.abs(this.DebB2Int1 - res) > 0.01) {
                                //alert("Seuil Atteind !"); Fichier Excel dispo par URL
                            }
                            this.DebB1Int1 = res;
                        });
                    }, 500);
                    setTimeout(() => {
                        clearInterval(interval);
                        this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 2).then(res => {
                            var interval2 = setInterval(() => {
                                this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                                    this.PEB2Int1 = res;
                                });
                                this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                                    this.PSB2Int1 = res;
                                });
                                this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                                    if (Math.abs(this.DebB2Int1 - res) > 0.1) {
                                        clearInterval(interval2);
                                    }
                                    this.DebB2Int1 = res;
                                });
                            }, 500);
                            setTimeout(() => {
                                clearInterval(interval2);
                                this.global.upcmodbus.client.setIntInHoldingRegister(40065, 1, 10).then(res => {
                                    this.intensity = 10;
                                    var interval3 = setInterval(() => {
                                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                                            this.PEB2Int10 = res;
                                        });
                                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                                            this.PSB2Int10 = res;
                                        });
                                        this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                                            this.DebB2Int10 = res;
                                        });
                                    }, 500);
                                    setTimeout(() => {
                                        clearInterval(interval3);
                                        this.global.upcmodbus.client.setIntInHoldingRegister(40150, 1, 1).then(res => {
                                            var interval4 = setInterval(() => {
                                                this.global.upcmodbus.client.getFloatFromHoldingRegister(40435).then(res => {
                                                    this.PEB1Int10 = res;
                                                });
                                                this.global.upcmodbus.client.getFloatFromHoldingRegister(40437).then(res => {
                                                    this.PSB1Int10 = res;
                                                });
                                                this.global.upcmodbus.client.getFloatFromHoldingRegister(40439).then(res => {
                                                    this.DebB1Int10 = res;
                                                });
                                            }, 500);
                                            setTimeout(() => {
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
        });
    }
    startstop() {
        if (this.colordif == "primary") {
            this.onChangeDiff();
        }
        else {
            this.onDisableDiff();
        }
    }
    onChangeDiff() {
        this.global.upcmodbus.client.setIntInHoldingRegister(40011, 1, 2).then(res => {
            this.textdiff = "Stop";
            this.colordif = "danger";
            this.colorAct = "primary";
            this.colorDes = "light";
            this.modediff = 2;
            this.cd.detectChanges();
        });
    }
    onDisableDiff() {
        this.global.upcmodbus.client.setIntInHoldingRegister(40011, 1, 0).then(res => {
            this.textdiff = "Start";
            this.colordif = "primary";
            this.colorAct = "light";
            this.colorDes = "primary";
            this.modediff = 0;
            this.cd.detectChanges();
        });
    }
    changeFluxMax() {
        if (this.fluxmax != null) {
            this.global.upcmodbus.client.setFloatInHoldingRegister(40018, this.fluxmax).then(res => {
                alert(this.fluxmax);
            }).catch((err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var loading = yield this.loadingCTRL.create({
                    message: "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
                    duration: 10000
                });
                loading.present();
                this.ngOnInit();
            }));
        }
    }
    goToNextPage() {
        this.storage.get("nexturl").then(res => {
            this.router.navigate([res]);
        });
    }
};
AdjustmentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"] },
    { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__["Hotspot"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
AdjustmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adjustment',
        template: __webpack_require__(/*! raw-loader!./adjustment.page.html */ "./node_modules/raw-loader/index.js!./src/app/adjustment/adjustment.page.html"),
        styles: [__webpack_require__(/*! ./adjustment.page.scss */ "./src/app/adjustment/adjustment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
        _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__["Hotspot"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
], AdjustmentPage);



/***/ })

}]);
//# sourceMappingURL=adjustment-adjustment-module-es2015.js.map