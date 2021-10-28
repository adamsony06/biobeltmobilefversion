(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addbottleceint-addbottleceint-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addbottleceint/addbottleceint.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addbottleceint/addbottleceint.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n   \r\n    </ion-buttons>\r\n    \r\n    <ion-title>{{stockRet}}</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon>ADMIN</ion-button> \r\n     </ion-buttons>\r\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \r\n     </ion-buttons>\r\n     \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h3 style=\"text-align: center;\">Changement de bouteilles </h3>\r\n  <ion-button (click)=\"onSynchro()\">Synchroniser</ion-button>\r\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>-->\r\n  <ion-grid style=\"padding-top: 5%;\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\r\n        <!--<ion-select placeholder=\"Type de bouteilles\">\r\n          <ion-select-option *ngFor=\"let bottle of listBottles\">\r\n            {{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}\r\n          </ion-select-option>\r\n        </ion-select>-->\r\n      <h1 style=\"text-align: center;\" (click)=\"changeRes(1);\" [ngClass]=\"{'bgreen' : highlightB1, 'bgblank' : redBackground}\">\r\n        B1\r\n      </h1>\r\n      \r\n      </ion-col>\r\n      \r\n      <ion-col size=\"6\">\r\n        <h1 style=\"text-align: center;\" (click)=\"changeRes(2);\" [ngClass]=\"{'bgreen' : highlightB2, 'bgblank' : redBackground}\">\r\n          B2\r\n        </h1>  \r\n      </ion-col>\r\n      <!--<ion-col size=\"12\" style=\"border-top-right-radius: 80px 80px;border-top-left-radius: 80px 80px;\">\r\n        <div style=\"text-align: center;\">Contenant</div>\r\n      </ion-col>-->\r\n      <!--<ion-col size=\"6\">\r\n        <div id=\"one\" style=\"font-size :x-large;text-align: center;\"><div id=\"two\" style=\"display:inline-block;\"><ion-input *ngIf=\"!redBackground\" type=\"number\" enterkeyhint=\"enter\" [(ngModel)]=\"contenantB1\" (ngModelChange)=\"changeContenantB1();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label></div><span id=\"three\">kg</span></div>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <div id=\"one\" style=\"font-size :x-large;text-align: center;\"><div id=\"two\" style=\"display:inline-block;\"><ion-input *ngIf=\"!redBackground\" type=\"number\" enterkeyhint=\"enter\" [(ngModel)]=\"contenantB2\" (ngModelChange)=\"changeContenantB2();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label></div><span id=\"three\">kg</span></div>\r\n\r\n      </ion-col>-->\r\n      <ion-col size=\"12\" style=\"border-top-right-radius: 80px 80px;border-top-left-radius: 80px 80px;\">\r\n          <div style=\"text-align: center;\">Etat du Contenu</div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px;\" [ngClass]=\"{'bgred' : redBackground}\">\r\n        \r\n        <ion-select *ngIf=\"!redBackground\" [(ngModel)]=\"statusB1\" (ngModelChange)=\"changeContentStatusB1(statusB1);\">\r\n          <ion-select-option value=\"0\">VIDE</ion-select-option>\r\n          <ion-select-option value=\"1\">RESIDUEL</ion-select-option>\r\n          <ion-select-option value=\"2\">DISPONIBLE</ion-select-option>\r\n        </ion-select>\r\n        <ion-label *ngIf=\"redBackground\" style=\"text-align: center;\">-</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px;\" [ngClass]=\"{'bgred' : redBackground}\">\r\n        \r\n        <ion-select *ngIf=\"!redBackground\" [(ngModel)]=\"statusB2\" (ngModelChange)=\"changeContentStatusB2(statusB2);\">\r\n          <ion-select-option value=\"0\">VIDE</ion-select-option>\r\n          <ion-select-option value=\"1\">RESIDUEL</ion-select-option>\r\n          <ion-select-option value=\"2\">DISPONIBLE</ion-select-option>\r\n        </ion-select>\r\n        <ion-label *ngIf=\"redBackground\" style=\"text-align: center;\">-</ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" style=\"border-top-right-radius: 80px 80px;border-top-left-radius: 80px 80px;background-color:green;\">\r\n        <div style=\"text-align: center;\">Contenu Mesuré</div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"contenuegreen\" >\r\n      <div id=\"one\" style=\"font-size :x-large;text-align: center;\"><div id=\"two\" style=\"display:inline-block;\"><ion-input *ngIf=\"!redBackground\" type=\"number\" enterkeyhint=\"enter\" [(ngModel)]=\"contenuB1\" (change)=\"changeContB1();\"></ion-input><ion-label *ngIf=\"redBackground\">-</ion-label></div><span id=\"three\">kg</span></div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"contenuegreen2\">\r\n        <div id=\"one\" class=\"ion-float-right\" style=\"font-size :x-large;text-align: center;\"><ion-input  *ngIf=\"!redBackground\" id=\"two\" type=\"number\" enterkeyhint=\"enter\" [(ngModel)]=\"contenuB2\" (change)=\"changeContB2();\"></ion-input> <ion-label *ngIf=\"redBackground\">-</ion-label><span id=\"three\">kg</span></div>\r\n      </ion-col>\r\n      <ion-col size=\"12\"><ion-button (click)=\"onRemove();\" color=\"danger\" size=\"block\">\r\n        Enlever une bouteille \r\n      </ion-button></ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"removedBottleUnknown.length > 0\" class=\"ion-align-self-center\" style=\"background-color: yellow;\"><div style=\"text-align : center\">Bouteilles enlevées Inconnu</div> </ion-col>\r\n        <ion-col size=\"12\" style=\"background-color: yellow;\" *ngFor=\"let rmb of removedBottleUnknown\"><div style=\"text-align : center\">{{\"Bouteille code barre : \"+rmb}}</div></ion-col>\r\n      \r\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\r\n        <ion-list>\r\n          <ion-item>{{\"Capacité : \"+contenantB1+\" kg\"}}</ion-item>\r\n          <div *ngFor=\"let b1 of B1String;let i = index;\">\r\n          <ion-item>\r\n            <ion-label style=\"font-size: small!important;\" class=\"ion-text-wrap\" [ngClass]=\"{'added': isAddedB1[i]}\">{{b1}}</ion-label>\r\n            <div *ngIf=\"B1Desig.length > 0\" [ngClass]=\"{'added': isAddedB1[i]}\">\r\n            <ion-select *ngIf=\"false\" (ionFocus)=\"onMinusContentB1(i);\" (ionChange)=\"onChangeDesigB1(i);\" [(ngModel)]=\"B1Desig[i]\" placeholder=\"Designation (en kg)\">\r\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\r\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\r\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\r\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\r\n              <ion-select-option value=\"37.5\">37.5 (Messer)</ion-select-option>\r\n              <ion-select-option value=\"37.5L\">37.5 (Linde)</ion-select-option>\r\n\r\n            </ion-select>\r\n          </div>\r\n          \r\n            \r\n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\r\n          </ion-item>\r\n          \r\n        </div>\r\n        <div *ngFor=\"let rmb1 of removedBottleStringB1\">\r\n          <ion-item>\r\n           <div class=\"removed\"> {{rmb1}} </div>\r\n          </ion-item>\r\n        </div>\r\n        \r\n        <ion-item (click)=\"onScanBarCodeB1();\">\r\n          <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B1\r\n        </ion-item>  \r\n        \r\n        </ion-list>\r\n        <!--<ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\r\n          Tout Effacer\r\n        </ion-button>-->\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\r\n        <ion-list>\r\n          <ion-item>{{\"Capacité : \"+contenantB2+\" kg\"}}</ion-item>\r\n          <div *ngFor=\"let b2 of B2String;let i = index;\">\r\n          <ion-item>\r\n            <ion-label style=\"font-size: small!important;\" class=\"ion-text-wrap\" [ngClass]=\"{'added': isAddedB2[i]}\">{{b2}}</ion-label>\r\n            <div *ngIf=\"B2Desig.length > 0\" [ngClass]=\"{'added': isAddedB2[i]}\">\r\n\r\n            \r\n            <ion-select *ngIf=\"false\" (ionFocus)=\"onMinusContentB2(i);\" (ionChange)=\"onChangeDesigB2(i);\" [(ngModel)]=\"B2Desig[i]\" placeholder=\"Designation (en kg)\">\r\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\r\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\r\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\r\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\r\n              <ion-select-option value=\"37.5\">37.5 (Messer)</ion-select-option>\r\n              <ion-select-option value=\"37.5L\">37.5 (Linde)</ion-select-option>\r\n\r\n            </ion-select>\r\n          </div>\r\n          \r\n            \r\n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\r\n          </ion-item>\r\n          \r\n        </div>\r\n        <div *ngFor=\"let rmb2 of removedBottleStringB2\">\r\n          <ion-item>\r\n            <div class=\"removed\">{{rmb2}}</div>\r\n          </ion-item>\r\n        </div>\r\n        \r\n        <ion-item (click)=\"onScanBarCodeB2();\">\r\n          <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B2\r\n        </ion-item>\r\n        \r\n        </ion-list>\r\n        <!--<ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\r\n          Tout Effacer\r\n        </ion-button>-->\r\n      </ion-col>\r\n     \r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button *ngIf=\"display\" style='float: right' fill='clear' (click)='goToNextPage()'>Suivant<ion-icon name='arrow-forward'></ion-icon></ion-button>\r\n</ion-footer>\r\n\r\n<!--<ion-footer>\r\n  <ion-button (click)=\"onSynchroCeint();\" expand=\"block\" > Synchroniser avec le serveur </ion-button>\r\n\r\n</ion-footer>-->\r\n"

/***/ }),

/***/ "./src/app/addbottleceint/addbottleceint-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/addbottleceint/addbottleceint-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddbottleceintPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbottleceintPageRoutingModule", function() { return AddbottleceintPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addbottleceint_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addbottleceint.page */ "./src/app/addbottleceint/addbottleceint.page.ts");




var routes = [
    {
        path: '',
        component: _addbottleceint_page__WEBPACK_IMPORTED_MODULE_3__["AddbottleceintPage"]
    }
];
var AddbottleceintPageRoutingModule = /** @class */ (function () {
    function AddbottleceintPageRoutingModule() {
    }
    AddbottleceintPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddbottleceintPageRoutingModule);
    return AddbottleceintPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/addbottleceint/addbottleceint.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/addbottleceint/addbottleceint.module.ts ***!
  \*********************************************************/
/*! exports provided: AddbottleceintPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbottleceintPageModule", function() { return AddbottleceintPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addbottleceint_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addbottleceint-routing.module */ "./src/app/addbottleceint/addbottleceint-routing.module.ts");
/* harmony import */ var _addbottleceint_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addbottleceint.page */ "./src/app/addbottleceint/addbottleceint.page.ts");







var AddbottleceintPageModule = /** @class */ (function () {
    function AddbottleceintPageModule() {
    }
    AddbottleceintPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _addbottleceint_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddbottleceintPageRoutingModule"]
            ],
            declarations: [_addbottleceint_page__WEBPACK_IMPORTED_MODULE_6__["AddbottleceintPage"]]
        })
    ], AddbottleceintPageModule);
    return AddbottleceintPageModule;
}());



/***/ }),

/***/ "./src/app/addbottleceint/addbottleceint.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/addbottleceint/addbottleceint.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item.item-trns {\n  border-color: rgba(0, 0, 0, 0);\n  background-color: rgba(0, 0, 0, 0);\n  color: white;\n}\n\n.bgreen {\n  background-color: green;\n}\n\n/*.bgred {\n\tbackground-color: red;\n}*/\n\n.bgblank {\n  background-color: white;\n}\n\n.contenuegreen {\n  border-bottom-left-radius: 80px 80px;\n  background-color: green;\n}\n\n.contenuered {\n  border-bottom-left-radius: 80px 80px;\n  background-color: red;\n}\n\n.contenuegreen2 {\n  border-bottom-right-radius: 80px 80px;\n  background-color: green;\n}\n\n.contenuered2 {\n  border-bottom-right-radius: 80px 80px;\n  background-color: red;\n}\n\n#one {\n  width: 200px;\n}\n\n#two {\n  display: inline-block;\n  position: relative;\n  left: 0;\n  width: 100px;\n  height: 100px;\n}\n\n#three {\n  display: inline-block;\n  position: relative;\n  left: 0;\n  width: 100px;\n  height: 100px;\n}\n\n.removed {\n  background-color: yellow !important;\n}\n\n.added {\n  background-color: yellowgreen !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJtYW5kL0Rlc2t0b3AvYmlvYmVsdG1vYmlsZS9zcmMvYXBwL2FkZGJvdHRsZWNlaW50L2FkZGJvdHRsZWNlaW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkYm90dGxlY2VpbnQvYWRkYm90dGxlY2VpbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7QUNDRDs7QURDQTtFQUNDLHVCQUFBO0FDRUQ7O0FEQUE7O0VBQUE7O0FBR0E7RUFDQyx1QkFBQTtBQ0dEOztBRERBO0VBQ0Msb0NBQUE7RUFDQSx1QkFBQTtBQ0lEOztBREZBO0VBQ0Msb0NBQUE7RUFDQSxxQkFBQTtBQ0tEOztBREhBO0VBQ0MscUNBQUE7RUFDQSx1QkFBQTtBQ01EOztBREpBO0VBQ0MscUNBQUE7RUFDQSxxQkFBQTtBQ09EOztBRExBO0VBQ0MsWUFBQTtBQ1FEOztBREpBO0VBQ0MscUJBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQWMsYUFBQTtBQ09mOztBREpBO0VBQ0MscUJBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQWMsYUFBQTtBQ09mOztBREpBO0VBQ0MsbUNBQUE7QUNPRDs7QURIQTtFQUNDLHdDQUFBO0FDTUQiLCJmaWxlIjoic3JjL2FwcC9hZGRib3R0bGVjZWludC9hZGRib3R0bGVjZWludC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS5pdGVtLXRybnMge1xyXG5cdGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG5cdGNvbG9yOiB3aGl0ZTsgXHJcbn1cclxuLmJncmVlbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuLyouYmdyZWQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSovXHJcbi5iZ2JsYW5rIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29udGVudWVncmVlbiB7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogODBweCA4MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6Z3JlZW47XHJcbn1cclxuLmNvbnRlbnVlcmVkIHtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4MHB4IDgwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbn1cclxuLmNvbnRlbnVlZ3JlZW4yIHtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogODBweCA4MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6Z3JlZW47XHJcbn1cclxuLmNvbnRlbnVlcmVkMiB7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDgwcHggODBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxufVxyXG4jb25lIHtcclxuXHR3aWR0aDogMjAwcHg7XHJcblx0Ly9iYWNrZ3JvdW5kOiAjY2NjO1xyXG59XHJcblxyXG4jdHdvIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Ly9iYWNrZ3JvdW5kOiBibHVlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDBweDsgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuI3RocmVlIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Ly9iYWNrZ3JvdW5kOiByZWQ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ucmVtb3ZlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYWRkZWQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIi5pdGVtLml0ZW0tdHJucyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi8qLmJncmVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xufSovXG4uYmdibGFuayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudWVncmVlbiB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5jb250ZW51ZXJlZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDgwcHggODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uY29udGVudWVncmVlbjIge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogODBweCA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmNvbnRlbnVlcmVkMiB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4MHB4IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuI29uZSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuI3R3byB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbiN0aHJlZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5yZW1vdmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/addbottleceint/addbottleceint.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/addbottleceint/addbottleceint.page.ts ***!
  \*******************************************************/
/*! exports provided: AddbottleceintPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbottleceintPage", function() { return AddbottleceintPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/upcv3/correspondancesRegistres */ "./src/app/model/upcv3/correspondancesRegistres.ts");













var AddbottleceintPage = /** @class */ (function () {
    function AddbottleceintPage(platform, ngZone, network, scan, modal, loadingCTRL, cd, upcv3Service, storage, hotspot, global, alertCTRL, router, events) {
        this.platform = platform;
        this.ngZone = ngZone;
        this.network = network;
        this.scan = scan;
        this.modal = modal;
        this.loadingCTRL = loadingCTRL;
        this.cd = cd;
        this.upcv3Service = upcv3Service;
        this.storage = storage;
        this.hotspot = hotspot;
        this.global = global;
        this.alertCTRL = alertCTRL;
        this.router = router;
        this.events = events;
        this.stockRet = "En cours...";
        this.addressage = 41124;
        this.addressage2 = 41169;
        this.B1 = [];
        this.B1Ad = [];
        this.B1String = [];
        this.B1Desig = [];
        this.B1IsMesser = [];
        this.isAddedB1 = [];
        this.B2 = [];
        this.B2Ad = [];
        this.B2String = [];
        this.B2Desig = [];
        this.B2IsMesser = [];
        this.isAddedB2 = [];
        this.i = 0;
        this.y = 0;
        this.addedBottleB1 = { barcodes: [], kg: [] };
        this.addedBottleB2 = { barcodes: [], kg: [] };
        this.removedBottle = { barcodes: [] };
        this.removedBottleStringB1 = [];
        this.removedBottleStringB2 = [];
        this.removedBottleUnknown = [];
        this.isBBAM = false;
        this.contenuB1 = 0;
        this.contenuB2 = 0;
        this.highlightB1 = false;
        this.highlightB2 = false;
        this.ssid = "";
        this.redBackground = false;
        this.display = false;
        this.isLoaded = false;
        this.contenantB1 = 0;
        this.contenantB2 = 0;
        this.bottleIncB1 = [];
        this.bottleIncB2 = [];
        this.global.checkMode();
    }
    //Mise à jour puis wipe puis test 
    //Retest 
    //Wipe + Sauvegarde d'offset pour UPC
    AddbottleceintPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.global.checkNextPage().then(function (res) {
            if (res == true) {
                _this.display = true;
            }
        });
        this.addedBottleB1.date = new Date().toISOString().substr(0, 16);
        this.addedBottleB1.objet = "Remplissage";
        this.addedBottleB2.date = new Date().toISOString().substr(0, 16);
        this.addedBottleB2.objet = "Remplissage";
        this.removedBottle.date = new Date().toISOString().substr(0, 16);
        this.platform.ready().then(function () {
            _this.correspondancesRegistres = new _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_10__["CorrespondancesRegistres"]();
            _this.global.onReadStatiqueEnable().then(function () {
                _this.subscribeRefresh();
            });
        });
    };
    AddbottleceintPage.prototype.calcContenantB1 = function () {
        this.contenantB1 = 0;
        for (var i = 0; i < this.B1Desig.length; i++) {
            this.contenantB1 += parseFloat(this.B1Desig[i]);
        }
    };
    //Capacité en dessous enlèvement bouteille Capacité : x kg
    //Identifier bouteille inconnue avec non scanné 
    AddbottleceintPage.prototype.calcContenantB2 = function () {
        this.contenantB2 = 0;
        for (var i = 0; i < this.B2Desig.length; i++) {
            this.contenantB2 += parseFloat(this.B2Desig[i]);
        }
    };
    AddbottleceintPage.prototype.changeContentStatusB1 = function () {
        //alert(this.statusB1);
        var _this = this;
        this.global.upcmodbus.client.setIntInHoldingRegister(40381, 1, parseInt(this.statusB1)).then(function (res) {
            //this.statusB1 = ""+this.global.upcmodbus.reserves.co2Res1Status;
            _this.global.upcmodbus.reserves.co2Res1Status = _this.statusB1;
            //alert(this.statusB1);
        });
    };
    AddbottleceintPage.prototype.changeContentStatusB2 = function () {
        var _this = this;
        this.global.upcmodbus.client.setIntInHoldingRegister(40383, 1, parseInt(this.statusB2)).then(function (res) {
            //this.statusB2 = ""+this.global.upcmodbus.reserves.co2Res2Status;
            _this.global.upcmodbus.reserves.co2Res2Status = _this.statusB2;
        });
    };
    AddbottleceintPage.prototype.loadBottles = function () {
        this.B1 = [];
        this.B1Ad = [];
        this.B1String = [];
        this.B1Desig = [];
        this.B1IsMesser = [];
        this.isAddedB1 = [];
        this.B2 = [];
        this.B2Ad = [];
        this.B2String = [];
        this.B2Desig = [];
        this.B2IsMesser = [];
        this.isAddedB2 = [];
        this.bottleIncB1 = [];
        this.bottleIncB2 = [];
        if (localStorage.getItem("removedStringB1")) {
            this.removedBottleStringB1 = JSON.parse(localStorage.getItem("removedStringB1"));
        }
        if (localStorage.getItem("removedStringB2")) {
            this.removedBottleStringB2 = JSON.parse(localStorage.getItem("removedStringB2"));
        }
        if (localStorage.getItem("removedBottleUnknown")) {
            this.removedBottleUnknown = JSON.parse(localStorage.getItem("removedBottleUnknown"));
        }
        for (var i = 0; i < this.global.upcmodbus.reserves.bottlesB1.length; i++) {
            var text = this.global.upcmodbus.reserves.bottlesB1[i].replace(/[^\w\s]/gi, '');
            if (text.substr(0, text.length - 1).includes("Inco")) {
                this.bottleIncB1.push(i);
            }
            /*if (/^\d+$/.test(text.substr(0,text.length-1))){
              
              this.B1String.push("Messer ("+text.substr(0,text.length-1)+") 37.5 kg");
              this.B1Desig.push("37.5");
              this.B1IsMesser.push(true);
              this.B1Ad.push(text);
              this.addressage+=5;
              this.B1.push(text.substr(0,text.length-1));
              this.isAddedB1.push(false);
            } else if(/^[a-z0-9]+$/i.test(text.substr(0,text.length-1))){*/
            if (text != "") {
                var kg = "";
                if (text.charAt(text.length - 1) == "0") {
                    kg = "10 kg";
                    this.B1Desig.push("10");
                    this.B1String.push("Air liquide (" + text.substr(0, text.length - 1) + ") " + kg);
                    this.B1.push(text.substr(0, text.length - 2));
                    this.B1IsMesser.push(false);
                    this.B1Ad.push(text);
                    var count = 10 - text.length;
                    var barcode = text;
                    for (var m = 0; m < count; m++) {
                        text += '\0';
                    }
                    this.B1Ad.push(barcode);
                }
                else if (text.charAt(text.length - 1) == "1") {
                    kg = "20 kg";
                    this.B1Desig.push("20");
                    this.B1String.push("Air liquide (" + text.substr(0, text.length - 1) + ") " + kg);
                    this.B1.push(text.substr(0, text.length - 2));
                    this.B1IsMesser.push(false);
                    this.B1Ad.push(text);
                    var count = 10 - text.length;
                    var barcode = text;
                    for (var m = 0; m < count; m++) {
                        text += '\0';
                    }
                    this.B1Ad.push(barcode);
                }
                else if (text.charAt(text.length - 1) == "2") {
                    kg = "50 lb";
                    this.B1Desig.push("22.6796");
                    this.B1String.push("Air liquide (" + text.substr(0, text.length - 1) + ") " + kg);
                    this.B1.push(text.substr(0, text.length - 2));
                    this.B1IsMesser.push(false);
                    this.B1Ad.push(text);
                    var count = 10 - text.length;
                    var barcode = text;
                    for (var m = 0; m < count; m++) {
                        text += '\0';
                    }
                    this.B1Ad.push(barcode);
                }
                else if (text.charAt(text.length - 1) == "3") {
                    kg = "34 kg";
                    this.B1Desig.push("34");
                    this.B1String.push("Air liquide (" + text.substr(0, text.length - 1) + ") " + kg);
                    this.B1.push(text.substr(0, text.length - 2));
                    this.B1IsMesser.push(false);
                    this.B1Ad.push(text);
                    var count = 10 - text.length;
                    var barcode = text;
                    for (var m = 0; m < count; m++) {
                        text += '\0';
                    }
                    this.B1Ad.push(barcode);
                }
                else if (text.charAt(text.length - 1) == "5") {
                    kg = "(Rembo) 100 kg";
                    this.B1Desig.push("100");
                    this.B1String.push("Air liquide (" + text.substr(0, text.length - 1) + ") " + kg);
                    this.B1.push(text.substr(0, text.length - 2));
                    this.B1IsMesser.push(false);
                    this.B1Ad.push(text);
                    var count = 10 - text.length;
                    var barcode = text;
                    for (var m = 0; m < count; m++) {
                        text += '\0';
                    }
                    this.B1Ad.push(barcode);
                }
                else if (text.charAt(text.length - 1) == "6") {
                    kg = "(Rembo) 180 kg";
                    this.B1Desig.push("180");
                    this.B1String.push("Air liquide (" + text.substr(0, text.length - 1) + ") " + kg);
                    this.B1.push(text.substr(0, text.length - 2));
                    this.B1IsMesser.push(false);
                    this.B1Ad.push(text);
                    var count = 10 - text.length;
                    var barcode = text;
                    for (var m = 0; m < count; m++) {
                        text += '\0';
                    }
                    this.B1Ad.push(barcode);
                }
                else if (text.charAt(text.length - 1) == "7") {
                    kg = "(Rembo) 270 kg";
                    this.B1Desig.push("270");
                    this.B1String.push("Air liquide (" + text.substr(0, text.length - 1) + ") " + kg);
                    this.B1.push(text.substr(0, text.length - 2));
                    this.B1IsMesser.push(false);
                    this.B1Ad.push(text);
                    var count = 10 - text.length;
                    var barcode = text;
                    for (var m = 0; m < count; m++) {
                        text += '\0';
                    }
                    this.B1Ad.push(barcode);
                }
                else if (text.charAt(text.length - 1) == "8") {
                    kg = "37,5 kg";
                    this.B1Desig.push("37.5L");
                    this.B1String.push("Linde (" + text.substr(0, text.length - 1) + ") " + kg);
                    this.B1.push(text.substr(0, text.length - 2));
                    this.B1IsMesser.push(true);
                    var count = 10 - text.length;
                    var barcode = text;
                    for (var k = 0; k < count; k++) {
                        text += '\0';
                    }
                    this.B1Ad.push(barcode);
                }
                else if (text.charAt(text.length - 1) == "4") {
                    kg = "37,5 kg";
                    this.B1Desig.push("37.5");
                    this.B1String.push("Messer (" + text.substr(0, text.length - 1) + ") " + kg);
                    this.B1.push(text.substr(0, text.length - 2));
                    this.B1IsMesser.push(true);
                    this.B1Ad.push(text);
                    var count = 10 - text.length;
                    var barcode = text;
                    for (var l = 0; l < count; l++) {
                        text += '\0';
                    }
                    this.B1Ad.push(barcode);
                } /*else if(text.charAt(text.length-1) != "8"){
                  this.B1String.push("Air liquide ("+text.substr(0,text.length-1)+") "+kg);
                  this.B1.push(text.substr(0,text.length-2));
                  this.B1IsMesser.push(false);
                  this.B1Ad.push(text);
                  var count = 10-text.length;
                  var barcode = text;
                  for(var m=0;m<count;m++){
                    text+='\0';
                  }
                  this.B1Ad.push(barcode);
                 
                }*/
                else if (text == '' || text == undefined) {
                    this.B1Ad.push("\0\0\0\0\0\0\0\0\0\0");
                }
                this.addressage += 5;
                this.isAddedB1.push(false);
            }
            //}
            alert(this.B1Ad[i]);
            this.cd.detectChanges();
        }
        if (localStorage.getItem("isAddedB1")) {
            this.isAddedB1 = JSON.parse(localStorage.getItem("isAddedB1"));
        }
        for (var j = 0; j < this.global.upcmodbus.reserves.bottlesB2.length; j++) {
            var text = this.global.upcmodbus.reserves.bottlesB2[j].replace(/[^\w\s]/gi, '');
            if (text.substr(0, text.length - 1).includes("Inco")) {
                this.bottleIncB2.push(j);
            }
            /*if(/^\d+$/.test(text.substr(0,text.length-1))){
              this.B2String.push("Messer ("+text.substr(0,text.length-1)+") 37.5 kg");
              this.B2Desig.push("37.5");
              this.B2IsMesser.push(true);
              this.B2Ad.push(text);
              this.addressage2+=5;
              this.B2.push(text);
              this.isAddedB2.push(false);
            } else if(/^[a-z0-9]+$/i.test(text.substr(0,text.length-1))){*/
            if (text != "") {
                var kg = "";
                if (text.charAt(text.length - 1) == "0") {
                    kg = "10 kg";
                    this.B2Desig.push("10");
                }
                if (text.charAt(text.length - 1) == "1") {
                    kg = "20 kg";
                    this.B2Desig.push("20");
                }
                if (text.charAt(text.length - 1) == "2") {
                    kg = "50 lb";
                    this.B2Desig.push("22.6796");
                }
                if (text.charAt(text.length - 1) == "3") {
                    kg = "34 kg";
                    this.B2Desig.push("34");
                }
                if (text.charAt(text.length - 1) == "5") {
                    kg = "(Rembo) 100 kg";
                    this.B2Desig.push("100");
                }
                if (text.charAt(text.length - 1) == "6") {
                    kg = "(Rembo) 180 kg";
                    this.B2Desig.push("180");
                }
                if (text.charAt(text.length - 1) == "7") {
                    kg = "(Rembo) 270 kg";
                    this.B2Desig.push("270");
                }
                if (text.charAt(text.length - 1) == "8") {
                    kg = "37,5 kg";
                    this.B2Desig.push("37.5L");
                    this.B2String.push("Linde (" + text.substr(0, text.length - 1) + ") " + kg);
                    this.B2.push(text.substr(0, text.length - 2));
                    this.B2IsMesser.push(true);
                    this.B2Ad.push(text);
                }
                else if (text.charAt(text.length - 1) == "4") {
                    kg = "37,5 kg";
                    this.B2Desig.push("37.5");
                    this.B2String.push("Messer (" + text.substr(0, text.length - 1) + ") " + kg);
                    this.B2.push(text.substr(0, text.length - 2));
                    this.B2IsMesser.push(true);
                    this.B2Ad.push(text);
                }
                else if (text.charAt(text.length - 1) != "8") {
                    this.B2String.push("Air liquide (" + text.substr(0, text.length - 1) + ") " + kg);
                    this.B2IsMesser.push(false);
                    this.B2Ad.push(text);
                    this.B2.push(text.substr(0, text.length - 2));
                }
                this.addressage2 += 5;
                this.isAddedB2.push(false);
                //}
                this.cd.detectChanges();
            }
        }
        if (localStorage.getItem("isAddedB2")) {
            this.isAddedB2 = JSON.parse(localStorage.getItem("isAddedB2"));
        }
        this.isLoaded = true;
        this.calcContenantB1();
        this.calcContenantB2();
    }; //Contenue à changer en B2 changeDesigB2
    AddbottleceintPage.prototype.onRemoveWithIndexB1 = function (i, text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rmb;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.removedBottle.barcodes.push(text);
                localStorage.setItem("removed", JSON.stringify(this.removedBottle));
                if (this.B1Desig[i] == "37.5L") {
                    this.contenantB1 -= 37.5;
                }
                else {
                    this.contenantB1 -= parseFloat(this.B1Desig[i]);
                }
                if (this.contenantB1 < 0) {
                    this.contenantB1 = 0;
                }
                this.removedBottleStringB1.push(this.B1String[i].replace("Inconnue", text));
                localStorage.setItem("removedStringB1", JSON.stringify(this.removedBottleStringB1));
                this.B1Ad.splice(i, 1);
                if (this.isAddedB1[i]) {
                    if (this.B1Desig[i] == "37.5L") {
                        this.contenuB1 -= 37.5;
                    }
                    else {
                        this.contenuB1 -= parseFloat(this.B1Desig[i]);
                    }
                }
                this.isAddedB1.splice(i, 1);
                this.global.upcmodbus.reserves.bottlesB1.splice(i, 1);
                localStorage.setItem("isAddedB1", JSON.stringify(this.isAddedB1));
                for (rmb = 0; rmb < 10; rmb++) {
                    if (this.B1Ad[rmb] == undefined || this.B1Ad[rmb] == "") {
                        this.B1Ad[rmb] = "\0\0\0\0\0\0\0\0\0\0";
                    }
                }
                this.B1.splice(i, 1);
                this.B1Desig.splice(i, 1);
                this.B1String.splice(i, 1);
                this.B1IsMesser.splice(i, 1);
                return [2 /*return*/];
            });
        });
    };
    AddbottleceintPage.prototype.onRemoveWithIndexB2 = function (i, text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rmb;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.removedBottle.barcodes.push(text);
                        localStorage.setItem("removed", JSON.stringify(this.removedBottle));
                        if (this.B2Desig[i] == "37.5L") {
                            this.contenantB2 -= 37.5;
                        }
                        else {
                            this.contenantB2 -= parseFloat(this.B2Desig[i]);
                        }
                        if (this.contenantB2 < 0) {
                            this.contenantB2 = 0;
                        }
                        this.removedBottleStringB2.push(this.B2String[i].replace("Inconnue", text));
                        localStorage.setItem("removedStringB2", JSON.stringify(this.removedBottleStringB2));
                        this.B2Ad.splice(i, 1);
                        if (this.isAddedB2[i]) {
                            if (this.B2Desig[i] == "37.5L") {
                                this.contenuB2 -= 37.5;
                            }
                            else {
                                this.contenuB2 -= parseFloat(this.B2Desig[i]);
                            }
                        }
                        this.isAddedB2.splice(i, 1);
                        this.global.upcmodbus.reserves.bottlesB2.splice(i, 1);
                        localStorage.setItem("isAddedB2", JSON.stringify(this.isAddedB2));
                        this.B2.splice(i, 1);
                        this.B2String.splice(i, 1);
                        this.B2Desig.splice(i, 1);
                        this.B2IsMesser.splice(i, 1);
                        for (rmb = 0; rmb < 10; rmb++) {
                            if (this.B2Ad[rmb] == undefined || this.B2Ad[rmb] == "") {
                                this.B2Ad[rmb] = "\0\0\0\0\0\0\0\0\0\0";
                            }
                        }
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[0])];
                    case 1:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[1])];
                    case 2:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[2])];
                    case 3:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[3])];
                    case 4:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[4])];
                    case 5:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[5])];
                    case 6:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[6])];
                    case 7:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[7])];
                    case 8:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[8])];
                    case 9:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr = 41169;
                        return [2 /*return*/];
                }
            });
        });
    };
    AddbottleceintPage.prototype.onRemove = function () {
        var _this = this;
        //retrancher au contenu 
        this.scan.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var scanned, indexB1, indexB2, indexB1front, indexB2front, indexB1Ad, indexB2Ad, i, count, j, i, input, alertInc, alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(res.cancelled != true)) return [3 /*break*/, 16];
                        scanned = false;
                        indexB1 = -1;
                        indexB2 = -1;
                        indexB1front = -1;
                        indexB2front = -1;
                        indexB1Ad = -1;
                        indexB2Ad = -1;
                        this.B1.forEach(function (item, index) {
                            if (res.text.includes(item)) {
                                scanned = true;
                                indexB1 = index;
                            }
                        });
                        this.B1String.forEach(function (item, index) {
                            if (item.includes(res.text)) {
                                indexB1front = index;
                                scanned = true;
                            }
                        });
                        this.B1Ad.forEach(function (item, index) {
                            if (item.includes(res.text)) {
                                scanned = true;
                                indexB1Ad = index;
                            }
                        });
                        this.B2Ad.forEach(function (item, index) {
                            if (item.includes(res.text)) {
                                scanned = true;
                                indexB2Ad = index;
                            }
                        });
                        this.B2.forEach(function (item, index) {
                            if (res.text.includes(item)) {
                                scanned = true;
                                indexB2 = index;
                            }
                            //alert(indexB2);
                        });
                        this.B2String.forEach(function (item, index) {
                            if (item.includes(res.text)) {
                                scanned = true;
                                indexB2front = index;
                            }
                        });
                        if (!scanned) return [3 /*break*/, 12];
                        //Index à revoir car parfois ne pointe pas sur le bon point
                        //alert(indexB1);
                        this.removedBottle.barcodes.push(res.text);
                        localStorage.setItem("removed", JSON.stringify(this.removedBottle));
                        if (!(indexB1 >= 0)) return [3 /*break*/, 1];
                        if (this.B1Desig[indexB1] == "37.5L") {
                            this.contenantB1 -= 37.5;
                        }
                        else {
                            this.contenantB1 -= parseFloat(this.B1Desig[indexB1]);
                        }
                        if (this.contenantB1 < 0) {
                            this.contenantB1 = 0;
                        }
                        this.removedBottleStringB1.push(this.B1String[indexB1]);
                        localStorage.setItem("removedStringB1", JSON.stringify(this.removedBottleStringB1));
                        this.B1Ad.splice(indexB1, 1);
                        if (this.isAddedB1[indexB1] == true) {
                            if (this.B1Desig[indexB1] == "37.5L") {
                                this.contenuB1 -= 37.5;
                            }
                            else {
                                this.contenuB1 -= parseFloat(this.B1Desig[indexB1]);
                            }
                            this.global.upcmodbus.client.setFloatInHoldingRegister(40157, this.contenuB1 / 0.001974).then(function (res) {
                            });
                        }
                        this.isAddedB1.splice(indexB1, 1);
                        this.B1String.splice(indexB1, 1);
                        this.B1.splice(indexB1, 1);
                        this.B1IsMesser.splice(indexB1, 1);
                        this.addressage -= 5;
                        this.global.upcmodbus.reserves.bottlesB1.splice(indexB1, 1);
                        localStorage.setItem("isAddedB1", JSON.stringify(this.isAddedB1));
                        for (i = 0; i < 10; i++) {
                            if (this.B1Ad[i] == undefined || this.B1Ad[i] == "") {
                                this.B1Ad[i] = "\0\0\0\0\0\0\0\0\0\0";
                            }
                            else {
                                count = 10 - this.B1Ad[i].length;
                                for (j = 0; j < count; j++) {
                                    this.B1Ad[i] += "\0";
                                }
                            }
                        }
                        return [3 /*break*/, 11];
                    case 1:
                        if (!(indexB2 >= 0)) return [3 /*break*/, 11];
                        if (this.B2Desig[indexB2] == "37.5L") {
                            this.contenantB2 -= 37.5;
                        }
                        else {
                            this.contenantB2 -= parseFloat(this.B2Desig[indexB2]);
                        }
                        if (this.contenantB2 < 0) {
                            this.contenantB2 = 0;
                        }
                        this.removedBottleStringB2.push(this.B2String[indexB2]);
                        localStorage.setItem("removedStringB2", JSON.stringify(this.removedBottleStringB2));
                        this.B2Ad.splice(indexB2, 1);
                        if (this.isAddedB2[indexB2]) {
                            if (this.B2Desig[indexB2] == "37.5L") {
                                this.contenuB2 -= 37.5;
                            }
                            else {
                                this.contenuB2 -= parseFloat(this.B2Desig[indexB2]);
                            }
                            this.global.upcmodbus.client.setFloatInHoldingRegister(40165, this.contenuB2 / 0.001974).then(function (res) {
                            });
                        }
                        this.B2String.splice(indexB2, 1);
                        this.B2.splice(indexB2, 1);
                        this.B2Desig.splice(indexB2, 1);
                        this.B2IsMesser.splice(indexB2, 1);
                        this.isAddedB2.splice(indexB2, 1);
                        this.global.upcmodbus.reserves.bottlesB2.splice(indexB2, 1);
                        this.addressage2 -= 5;
                        localStorage.setItem("isAddedB2", JSON.stringify(this.isAddedB2));
                        for (i = 0; i < 10; i++) {
                            if (this.B2Ad[i] == undefined || this.B2Ad[i] == "") {
                                this.B2Ad[i] = "\0\0\0\0\0\0\0\0\0\0";
                            }
                        }
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[0])];
                    case 2:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[1])];
                    case 3:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[2])];
                    case 4:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[3])];
                    case 5:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[4])];
                    case 6:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[5])];
                    case 7:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[6])];
                    case 8:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[7])];
                    case 9:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres, this.B2Ad[8])];
                    case 10:
                        _a.sent();
                        this.correspondancesRegistres.xCo2Res2CodesBarres.adr = 41169;
                        _a.label = 11;
                    case 11: return [3 /*break*/, 16];
                    case 12:
                        input = [];
                        this.bottleIncB1.forEach(function (item) {
                            input.push({ label: _this.B1String[item] + " en B1", type: 'radio', 'name': _this.B1Desig[item], handler: function () { _this.onRemoveWithIndexB1(item, res.text); alertInc.dismiss(); } });
                        });
                        this.bottleIncB2.forEach(function (item) {
                            input.push({ label: _this.B2String[item] + " en B2", type: 'radio', 'name': _this.B2Desig[item], handler: function () { _this.onRemoveWithIndexB2(item, res.text); alertInc.dismiss(); } });
                        });
                        if (!(this.bottleIncB2.length > 0 || this.bottleIncB1.length > 0)) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.alertCTRL.create({
                                cssClass: "nothing",
                                header: "Enlèvement Bouteille",
                                message: "Il y a des bouteilles inconnues, veuillez assigner la bouteille scannée...",
                                inputs: input
                            })];
                    case 13:
                        alertInc = _a.sent();
                        alertInc.present();
                        return [3 /*break*/, 16];
                    case 14: return [4 /*yield*/, this.alertCTRL.create({
                            cssClass: 'my-custom-class',
                            header: 'Enlèvement Bouteille',
                            message: "La bouteille n'a pas été scanné par le passé, Êtes vous sur de vouloir l'enlever ?",
                            buttons: [{ text: "OUI", handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var reserve, alrt, alrtinput;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    reserve = "";
                                                    return [4 /*yield*/, this.alertCTRL.create({
                                                            cssClass: 'my-custom-class',
                                                            header: 'Enlèvement Bouteille',
                                                            message: "La bouteille était en B1 ou en B2",
                                                            buttons: [{ text: "B1", handler: function () {
                                                                        reserve = "B1";
                                                                        alrtinput.present();
                                                                        _this.removedBottle.barcodes.push(res.text);
                                                                        localStorage.setItem("removed", JSON.stringify(_this.removedBottle)); /*this.removedBottleUnknown.push(res.text+" en B1");localStorage.setItem("removedBottleUnknown",JSON.stringify(this.removedBottleUnknown));*/
                                                                    } }, {
                                                                    text: "B2", handler: function () {
                                                                        reserve = "B2";
                                                                        alrtinput.present();
                                                                        _this.removedBottle.barcodes.push(res.text);
                                                                        localStorage.setItem("removed", JSON.stringify(_this.removedBottle)); /*this.removedBottleUnknown.push(res.text+" en B2");localStorage.setItem("removedBottleUnknown",JSON.stringify(this.removedBottleUnknown));*/
                                                                    }
                                                                }]
                                                        })];
                                                case 1:
                                                    alrt = _a.sent();
                                                    alrt.present();
                                                    return [4 /*yield*/, this.alertCTRL.create({
                                                            cssClass: "my-custom-class",
                                                            header: 'Type de Bouteille',
                                                            inputs: [
                                                                {
                                                                    name: '10',
                                                                    type: 'radio',
                                                                    label: 'Air liquide 10 kg',
                                                                    handler: function () {
                                                                        if (reserve == "B1") {
                                                                            _this.contenantB1 -= 10;
                                                                            _this.removedBottleStringB1.push("Air liquide (" + res.text + ") 10 kg");
                                                                        }
                                                                        else {
                                                                            _this.contenantB2 -= 10;
                                                                            _this.removedBottleStringB2.push("Air liquide (" + res.text + ") 10 kg");
                                                                        }
                                                                        if (_this.contenantB2 < 0)
                                                                            _this.contenantB2 = 0;
                                                                        if (_this.contenantB1 < 0)
                                                                            _this.contenantB1 = 0;
                                                                        alrtinput.dismiss();
                                                                    }
                                                                },
                                                                {
                                                                    name: '20',
                                                                    type: 'radio',
                                                                    label: 'Air liquide 20 kg',
                                                                    handler: function () {
                                                                        if (reserve == "B1") {
                                                                            _this.contenantB1 -= 20;
                                                                            _this.removedBottleStringB1.push("Air liquide (" + res.text + ") 20 kg");
                                                                        }
                                                                        else {
                                                                            _this.contenantB2 -= 20;
                                                                            _this.removedBottleStringB2.push("Air liquide (" + res.text + ") 20 kg");
                                                                        }
                                                                        if (_this.contenantB2 < 0)
                                                                            _this.contenantB2 = 0;
                                                                        if (_this.contenantB1 < 0)
                                                                            _this.contenantB1 = 0;
                                                                        alrtinput.dismiss();
                                                                    }
                                                                }, {
                                                                    name: '22.6796',
                                                                    type: 'radio',
                                                                    label: 'Air liquide 50 lb',
                                                                    handler: function () {
                                                                        if (reserve == "B1") {
                                                                            _this.contenantB1 -= 22.6796;
                                                                            _this.removedBottleStringB1.push("Air liquide (" + res.text + ") 50 lb");
                                                                        }
                                                                        else {
                                                                            _this.contenantB2 -= 22.6796;
                                                                            _this.removedBottleStringB2.push("Air liquide (" + res.text + ") 50 lb");
                                                                        }
                                                                        if (_this.contenantB2 < 0)
                                                                            _this.contenantB2 = 0;
                                                                        if (_this.contenantB1 < 0)
                                                                            _this.contenantB1 = 0;
                                                                        alrtinput.dismiss();
                                                                    }
                                                                }, {
                                                                    name: '34',
                                                                    type: 'radio',
                                                                    label: 'Air liquide 34 kg',
                                                                    handler: function () {
                                                                        if (reserve == "B1") {
                                                                            _this.contenantB1 -= 34;
                                                                            _this.removedBottleStringB1.push("Air liquide (" + res.text + ") 34 kg");
                                                                        }
                                                                        else {
                                                                            _this.contenantB2 -= 34;
                                                                            _this.removedBottleStringB2.push("Air liquide (" + res.text + ") 34 kg");
                                                                        }
                                                                        if (_this.contenantB2 < 0)
                                                                            _this.contenantB2 = 0;
                                                                        if (_this.contenantB1 < 0)
                                                                            _this.contenantB1 = 0;
                                                                        alrtinput.dismiss();
                                                                    }
                                                                }, {
                                                                    name: '37.5',
                                                                    type: 'radio',
                                                                    label: 'Messer 37,5 kg',
                                                                    handler: function () {
                                                                        if (reserve == "B1") {
                                                                            _this.contenantB1 -= 37.5;
                                                                            _this.removedBottleStringB1.push("Messer (" + res.text + ") 37,5 kg");
                                                                        }
                                                                        else {
                                                                            _this.contenantB2 -= 37.5;
                                                                            _this.removedBottleStringB2.push("Messer (" + res.text + ") 37,5 kg");
                                                                        }
                                                                        if (_this.contenantB2 < 0)
                                                                            _this.contenantB2 = 0;
                                                                        if (_this.contenantB1 < 0)
                                                                            _this.contenantB1 = 0;
                                                                        alrtinput.dismiss();
                                                                    }
                                                                }, {
                                                                    name: '37',
                                                                    type: 'radio',
                                                                    label: 'Linde 37,5 kg',
                                                                    handler: function () {
                                                                        if (reserve == "B1") {
                                                                            _this.contenantB1 -= 37.5;
                                                                            _this.removedBottleStringB1.push("Linde (" + res.text + ") 37,5 kg");
                                                                        }
                                                                        else {
                                                                            _this.contenantB2 -= 37.5;
                                                                            _this.removedBottleStringB2.push("Linde (" + res.text + ") 37,5 kg");
                                                                        }
                                                                        if (_this.contenantB2 < 0)
                                                                            _this.contenantB2 = 0;
                                                                        if (_this.contenantB1 < 0)
                                                                            _this.contenantB1 = 0;
                                                                        alrtinput.dismiss();
                                                                    }
                                                                }
                                                            ]
                                                        })];
                                                case 2:
                                                    alrtinput = _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); } }, { text: "NON", handler: function () { } }]
                        })];
                    case 15:
                        alert_1 = _a.sent();
                        alert_1.present();
                        _a.label = 16;
                    case 16: return [2 /*return*/];
                }
            });
        }); }).catch(function (err) {
            alert("Veuillez activer l'autorisation photo de l'app");
        });
    };
    AddbottleceintPage.prototype.doRefresh = function ($event) {
        this.B1 = [];
        this.B1Ad = [];
        this.B1String = [];
        this.B1Desig = [];
        this.B1IsMesser = [];
        this.B2 = [];
        this.B2Ad = [];
        this.B2String = [];
        this.B2Desig = [];
        this.B2IsMesser = [];
        this.ionViewWillEnter();
        $event.target.complete();
    };
    AddbottleceintPage.prototype.onMinusContentB2 = function (i) {
        if (this.B2Desig[i] == "37.5L") {
            this.contenuB2 -= 37.5;
        }
        else {
            this.contenuB2 -= parseFloat(this.B2Desig[i]);
        }
    };
    AddbottleceintPage.prototype.reloadComponent = function () {
        alert("Reloading...");
        var currentUrl = this.router.url;
        alert("Reloading should be alright !");
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    };
    AddbottleceintPage.prototype.onChangeDesigB2 = function (i) {
        var _this = this;
        var adresse = i * 5 + 41169;
        var index;
        this.addedBottleB2.kg[i] = this.B2Desig[i];
        this.contenuB2 += this.B2Desig[i];
        // 37.5 BDesig
        if (this.B2Desig[i] == "37.5L") {
            this.contenuB2 += 37.5;
        }
        else {
            this.contenuB2 += parseFloat(this.B2Desig[i]);
        }
        if (this.B2Desig[i] == "10") {
            index = "0";
            //this.contenuB2+=10;
            this.B2String[i] = "Air liquide (" + this.B2[i] + ") " + this.B2Desig[i] + " kg";
        }
        if (this.B2Desig[i] == "20") {
            index = "1";
            //this.contenuB2+= 20;
            this.B2String[i] = "Air liquide (" + this.B2[i] + ") " + this.B2Desig[i] + " kg";
        }
        if (this.B2Desig[i] == "22.6796") {
            index = "2";
            //this.contenuB2 += 22.6796;
            this.B2String[i] = "Air liquide (" + this.B2[i] + ") 50 lb";
        }
        if (this.B2Desig[i] == "34") {
            //this.contenuB2 += 34;
            index = "3";
            this.B2String[i] = "Air liquide (" + this.B2[i] + ") " + this.B2Desig[i] + " kg";
        }
        if (this.B2Desig[i] == "37.5") {
            index = "4";
            this.B2String[i] = "Messer (" + this.B2[i] + ") " + this.B2Desig[i] + " kg";
        }
        if (this.B2Desig[i] == "37.5L") {
            index = "8";
            this.B2String[i] = "Linde (" + this.B2[i] + ") 37,5 kg";
        }
        //indexB1Ad
        this.calcContenantB2();
        this.global.upcmodbus.client.setStringInHoldingRegister(adresse, "\0\0\0\0\0\0\0\0\0\0").then(function (res) {
            _this.global.upcmodbus.client.setStringInHoldingRegister(adresse, _this.B2[i] + index).then(function (res) {
                //this.global.upcmodbus.reserves.bottlesB2.push(this.B2[i]+index);
                _this.global.upcmodbus.reserves.bottlesB2[i] = _this.B2[i];
            }).catch(function (err) {
                alert("Erreur de réécriture, veuillez vous connecter à l'UPC ou recharger la page !");
            });
        });
    }; //Archevechedemonaco IP 
    AddbottleceintPage.prototype.removeB1 = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var i;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                for (i = 41124; i <= 41164; i += 5) {
                    this.global.upcmodbus.client.setStringInHoldingRegister(i, "\0\0\0\0\0\0\0\0\0\0").then(function (res) {
                        _this.B1 = [];
                        _this.B1Ad = [];
                        _this.B1String = [];
                        _this.B1Desig = [];
                        _this.B1IsMesser = [];
                        _this.B2 = [];
                        _this.B2Ad = [];
                        _this.B2String = [];
                        _this.B2Desig = [];
                        _this.B2IsMesser = [];
                        _this.addressage = 41124;
                        _this.loadBottles();
                    });
                }
                resolve();
                return [2 /*return*/];
            });
        }); });
    };
    AddbottleceintPage.prototype.removeB2 = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var j, i;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                j = 0;
                for (i = 41169; i <= 41209; i += 5) {
                    this.global.upcmodbus.client.setStringInHoldingRegister(i, "\0\0\0\0\0\0\0\0\0\0").then(function (res) {
                        _this.B1 = [];
                        _this.B1Ad = [];
                        _this.B1String = [];
                        _this.B1Desig = [];
                        _this.B1IsMesser = [];
                        _this.B2 = [];
                        _this.B2Ad = [];
                        _this.B2String = [];
                        _this.B2Desig = [];
                        _this.B2IsMesser = [];
                        _this.addressage2 = 41170;
                        _this.loadBottles();
                    });
                }
                resolve();
                return [2 /*return*/];
            });
        }); });
    };
    AddbottleceintPage.prototype.onMinusContentB1 = function (i) {
        if (this.B1Desig[i] == "37.5L") {
            this.contenuB1 -= 37.5;
        }
        else {
            this.contenuB1 -= parseFloat(this.B1Desig[i]);
        }
    };
    AddbottleceintPage.prototype.onChangeDesigB1 = function (i) {
        var _this = this;
        var adresse = i * 5 + 41124;
        var index;
        this.addedBottleB1.kg[i] = this.B1Desig[i];
        if (this.B1Desig[i] == "37.5L") {
            this.contenuB1 += 37.5;
        }
        else {
            this.contenuB1 += parseFloat(this.B1Desig[i]);
        }
        //this.contenantB1 = this.contenuB1;
        if (this.B1Desig[i] == "10") {
            index = "0";
            this.B1String[i] = "Air liquide (" + this.B1[i] + ") " + this.B1Desig[i] + " kg";
        }
        if (this.B1Desig[i] == "20") {
            index = "1";
            this.B1String[i] = "Air liquide (" + this.B1[i] + ") " + this.B1Desig[i] + " kg";
        }
        if (this.B1Desig[i] == "22.6796") {
            index = "2";
            this.B1String[i] = "Air liquide (" + this.B1[i] + ") 50 lb";
        }
        if (this.B1Desig[i] == "34") {
            index = "3";
            this.B1String[i] = "Air liquide (" + this.B1[i] + ") " + this.B1Desig[i] + " kg";
        }
        if (this.B1Desig[i] == "37.5") {
            index = "4";
            this.B1String[i] = "Messer (" + this.B1[i] + ") " + this.B1Desig[i] + " kg";
        }
        if (this.B1Desig[i] == "37.5L") {
            index = "8";
            this.B1String[i] = "Linde (" + this.B1[i] + ") 37.5 kg";
        }
        this.calcContenantB1();
        this.global.upcmodbus.client.setStringInHoldingRegister(adresse, "\0\0\0\0\0\0\0\0\0\0").then(function (res) {
            _this.global.upcmodbus.client.setStringInHoldingRegister(adresse, _this.B1[i] + index).then(function (res) {
                //this.global.upcmodbus.reserves.bottlesB1.push(this.B1[i]+index);
                _this.global.upcmodbus.reserves.bottlesB1[i] = _this.B1[i] + index;
            }).catch(function (err) {
                alert("Erreur de réécriture, veuillez vous connecter à l'UPC ou recharger la page !");
            });
        });
    };
    AddbottleceintPage.prototype.onScanBarCodeB2 = function () {
        var _this = this;
        this.scan.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var isScanned, alrtBT_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isScanned = false;
                        this.B1.forEach(function (item) {
                            if (item == res.text) {
                                isScanned = true;
                            }
                        });
                        this.B2.forEach(function (item) {
                            if (item == res.text) {
                                isScanned = true;
                            }
                        });
                        if (!!isScanned) return [3 /*break*/, 3];
                        if (!(res.text != "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCTRL.create({
                                header: "Type de bouteille", message: "", inputs: [
                                    {
                                        name: '34',
                                        type: 'radio',
                                        label: 'Air liquide 34 kg',
                                        handler: function () {
                                            //AL 34 kg
                                            _this.writeUPC(_this.addressage2, res.text, "34", "Air liquide (" + res.text + ") 34 kg", "B2", "3");
                                            alrtBT_1.dismiss();
                                        }
                                    }, {
                                        name: '37.5',
                                        type: 'radio',
                                        label: 'Messer 37,5 kg',
                                        handler: function () {
                                            //Messer 37.5 kg
                                            _this.writeUPC(_this.addressage2, res.text, "37.5", "Messer (" + res.text + ") 37.5 kg", "B2", "4");
                                            alrtBT_1.dismiss();
                                        }
                                    },
                                    {
                                        name: '37',
                                        type: 'radio',
                                        label: 'Linde 37,5 kg',
                                        handler: function () {
                                            //37.5 kg Linde
                                            _this.writeUPC(_this.addressage2, res.text, "37.5L", "Linde (" + res.text + ") 37.5 kg", "B2", "8");
                                            alrtBT_1.dismiss();
                                        }
                                    },
                                    {
                                        name: '10',
                                        type: 'radio',
                                        label: 'Air liquide 10 kg',
                                        handler: function () {
                                            //AL 10 kg
                                            _this.writeUPC(_this.addressage2, res.text, "10", "Air liquide (" + res.text + ") 10 kg", "B2", '0');
                                            alrtBT_1.dismiss();
                                        }
                                    },
                                    {
                                        name: '20',
                                        type: 'radio',
                                        label: 'Air liquide 20 kg',
                                        handler: function () {
                                            //AL 20 kg
                                            _this.writeUPC(_this.addressage2, res.text, "20", "Air liquide (" + res.text + ") 20 kg", "B2", '1');
                                            alrtBT_1.dismiss();
                                        }
                                    }, {
                                        name: '22.6796',
                                        type: 'radio',
                                        label: 'Air liquide 50 lb',
                                        handler: function () {
                                            //AL 22.6796 kg
                                            _this.writeUPC(_this.addressage2, res.text, "22.6796", "Air liquide (" + res.text + ") 22.6796 kg", "B2", '2');
                                            alrtBT_1.dismiss();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alrtBT_1 = _a.sent();
                        alrtBT_1.present();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        alert("La bouteille est déjà en ligne !");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    AddbottleceintPage.prototype.onScanBarCodeB1 = function () {
        var _this = this;
        //Voir liste bouteilles en transit sinon afficher fenêtre ajout bouteille
        this.scan.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var isScanned, alrtBT_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isScanned = false;
                        this.B1.forEach(function (item) {
                            if (item == res.text) {
                                isScanned = true;
                            }
                        });
                        this.B2.forEach(function (item) {
                            if (item == res.text) {
                                isScanned = true;
                            }
                        });
                        if (!!isScanned) return [3 /*break*/, 3];
                        if (!(res.text != "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCTRL.create({
                                header: "Type de bouteille", message: "", inputs: [
                                    {
                                        name: '34',
                                        type: 'radio',
                                        label: 'Air liquide 34 kg',
                                        handler: function () {
                                            //AL 34 kg
                                            _this.writeUPC(_this.addressage, res.text, "34", "Air liquide (" + res.text + ") 34 kg", "B1", "3");
                                            alrtBT_2.dismiss();
                                        }
                                    }, {
                                        name: '37.5',
                                        type: 'radio',
                                        label: 'Messer 37,5 kg',
                                        handler: function () {
                                            //Messer 37.5 kg
                                            _this.writeUPC(_this.addressage, res.text, "37.5", "Messer (" + res.text + ") 37.5 kg", "B1", "4");
                                            alrtBT_2.dismiss();
                                        }
                                    }, {
                                        name: '37',
                                        type: 'radio',
                                        label: 'Linde 37,5 kg',
                                        handler: function () {
                                            //37.5 kg Linde
                                            _this.writeUPC(_this.addressage, res.text, "37.5L", "Linde (" + res.text + ") 37.5 kg", "B1", "8");
                                            alrtBT_2.dismiss();
                                        }
                                    },
                                    {
                                        name: '10',
                                        type: 'radio',
                                        label: 'Air liquide 10 kg',
                                        handler: function () {
                                            //AL 10 kg
                                            _this.writeUPC(_this.addressage, res.text, "10", "Air liquide (" + res.text + ") 10 kg", "B1", '0');
                                            alrtBT_2.dismiss();
                                        }
                                    },
                                    {
                                        name: '20',
                                        type: 'radio',
                                        label: 'Air liquide 20 kg',
                                        handler: function () {
                                            //AL 20 kg
                                            _this.writeUPC(_this.addressage, res.text, "20", "Air liquide (" + res.text + ") 20 kg", "B1", '1');
                                            alrtBT_2.dismiss();
                                        }
                                    }, {
                                        name: '22.6796',
                                        type: 'radio',
                                        label: 'Air liquide 50 lb',
                                        handler: function () {
                                            //AL 22.6796 kg
                                            _this.writeUPC(_this.addressage, res.text, "22.6796", "Air liquide (" + res.text + ") 22.6796 kg", "B1", '2');
                                            alrtBT_2.dismiss();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alrtBT_2 = _a.sent();
                        alrtBT_2.present();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        alert("La bouteille est déjà en ligne !");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    AddbottleceintPage.prototype.writeUPC = function (adresse, text, desig, barcodetxt, reserve, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var obj, count, barcode, i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (reserve == "B1") {
                    this.correspondancesRegistres.xCo2Res1CodesBarres.adr = adresse;
                    obj = this.correspondancesRegistres.xCo2Res1CodesBarres;
                }
                else if (reserve == "B2") {
                    this.correspondancesRegistres.xCo2Res2CodesBarres.adr = adresse;
                    obj = this.correspondancesRegistres.xCo2Res2CodesBarres;
                }
                count = 10 - (text + index).length;
                barcode = text + index;
                for (i = 0; i < count; i++) {
                    barcode += '\0';
                }
                /*var d = new Date();
                this.global.logs.push(this.global.msToTime(d)+" - BBBBBBBBBBBBBBBBBBBBBBBBBB : "+JSON.stringify(obj));
                  await this.global.onWriteEnable(obj,barcode)
                  var d = new Date();
                this.global.logs.push(this.global.msToTime(d)+" - CCCCCCCCCCCCCCCCCCCCCCCCCC : "+JSON.stringify(obj));*/
                if (reserve == "B1") {
                    if (desig == "37.5L") {
                        this.contenuB1 += 37.5;
                    }
                    else {
                        this.contenuB1 += parseFloat(desig);
                    }
                    this.B1String.push(barcodetxt);
                    this.B1Ad.push(barcode);
                    this.B1.push(text);
                    this.B1Desig.push(desig);
                    this.addedBottleB1.kg.push(desig);
                    this.B1IsMesser.push(true);
                    this.addedBottleB1.barcodes.push(text);
                    this.addedBottleB1.reserve = reserve;
                    localStorage.setItem("bottle" + reserve, JSON.stringify(this.addedBottleB1));
                    this.addressage += 5;
                    this.isAddedB1.push(true);
                    this.global.upcmodbus.reserves.bottlesB2.push(text);
                    localStorage.setItem("isAddedB1", JSON.stringify(this.isAddedB1));
                    this.calcContenantB1();
                }
                else if (reserve == "B2") {
                    if (desig == "37.5L") {
                        this.contenuB2 += 37.5;
                    }
                    else {
                        this.contenuB2 += parseFloat(desig);
                    }
                    this.B2String.push(barcodetxt);
                    this.B2Ad.push(barcode);
                    this.B2IsMesser.push(text);
                    this.B2Desig.push(desig);
                    this.addedBottleB2.kg.push(desig);
                    this.B2IsMesser.push(true);
                    this.addedBottleB2.barcodes.push(text);
                    this.addedBottleB2.reserve = reserve;
                    localStorage.setItem("bottle" + reserve, JSON.stringify(this.addedBottleB2));
                    this.addressage2 += 5;
                    this.isAddedB2.push(true);
                    this.global.upcmodbus.reserves.bottlesB2.push(text);
                    localStorage.setItem("isAddedB2", JSON.stringify(this.isAddedB2));
                    this.calcContenantB2();
                }
                this.cd.detectChanges();
                return [2 /*return*/];
            });
        });
    };
    AddbottleceintPage.prototype.changeRes = function (i) {
        var _this = this;
        this.global.upcmodbus.client.setIntInHoldingRegister(40151, 1, i).then(function (res) {
            if (i == 1) {
                _this.highlightB1 = true;
                _this.highlightB2 = false;
            }
            else if (i == 2) {
                _this.highlightB2 = true;
                _this.highlightB1 = false;
            }
            _this.global.upcmodbus.reserves.co2ResActive = i;
            _this.cd.detectChanges();
        });
    };
    AddbottleceintPage.prototype.onSynchroCeint = function () {
        alert(localStorage.getItem("bottleB1"));
        alert(localStorage.getItem("bottleB2"));
        /*if(this.platform.is("ios")){
         WifiWizard2.iOSDisconnectNetwork("BBAM").then(async res=>{
           var loading = await this.loadingCTRL.create({
             message : "Synchronisation avec le Serveur en cours...",
             duration : 10000
           })
           loading.present();
           await setTimeout(()=>{
             if(this.addedBottleB1.barcodes.length > 0){
               this.addedBottleB1.endate = new Date().toISOString().substr(0,16);
               this.addedBottleB1.upcNameId = "Test4G1";
             
               this.upcv3Service.addBottleBelt(this.addedBottleB1,this.token).subscribe(res=>{
                 //alert(JSON.stringify(res));
                 loading.dismiss();
               })
             }
             if(this.addedBottleB2.barcodes.length > 0) {
               this.addedBottleB2.endate = new Date().toISOString().substr(0,16);
               this.addedBottleB2.upcNameId = "Test4G1";
               this.upcv3Service.addBottleBelt(this.addedBottleB2,this.token).subscribe(res=>{
                 //alert(JSON.stringify(res));
                 loading.dismiss();
               })
             }
             if(this.removedBottle.barcodes.length > 0) {
               this.removedBottle.upcNameId = "Test4G1";
               
                 this.upcv3Service.removeFromCeint(this.removedBottle,this.token).subscribe(res=>{
                   loading.dismiss();
                   alert(JSON.stringify(res));
                 })
             }
            },5000)
           })
        }
        else{
          WifiWizard2.disconnect("BBAM").then(async res=>{
           var loading = await this.loadingCTRL.create({
             message : "Synchronisation avec le Serveur en cours...",
             duration : 10000
           })
           loading.present();
           await setTimeout(()=>{
             if(this.addedBottleB1.barcodes.length > 0){
               this.addedBottleB1.endate = new Date().toISOString().substr(0,16);
               this.addedBottleB1.upcNameId = "Test4G1";
             
               this.upcv3Service.addBottleBelt(this.addedBottleB1,this.token).subscribe(res=>{
                 //alert(JSON.stringify(res));
                 loading.dismiss();
               })
             }
             if(this.addedBottleB2.barcodes.length > 0) {
               this.addedBottleB2.endate = new Date().toISOString().substr(0,16);
               this.addedBottleB2.upcNameId = "Test4G1";
               this.upcv3Service.addBottleBelt(this.addedBottleB2,this.token).subscribe(res=>{
                 //alert(JSON.stringify(res));
                 loading.dismiss();
               })
             }
             if(this.removedBottle.barcodes.length > 0) {
               this.removedBottle.upcNameId = "Test4G1";
               
                 this.upcv3Service.removeFromCeint(this.removedBottle,this.token).subscribe(res=>{
                   loading.dismiss();
                   alert(JSON.stringify(res));
                 })
             }
            },5000)
          })
        }*/
        /*WifiWizard2.iOSConnectNetwork("freebox_NTHGTY","soleil06").then(async res=>{
          var loading = await this.loadingCTRL.create({
            message : "Synchronisation avec le Serveur en cours...",
            duration : 10000
          })
          loading.present();
          if(this.addedBottleB1.barcodes.length > 0){
            this.addedBottleB1.endate = new Date().toISOString().substr(0,16);
            this.addedBottleB1.upcNameId = "Test4G1";
          
            this.upcv3Service.addBottleBelt(this.addedBottleB1,this.token).subscribe(res=>{
              //alert(JSON.stringify(res));
              loading.dismiss();
            })
          }
          if(this.addedBottleB2.barcodes.length > 0) {
            this.addedBottleB2.endate = new Date().toISOString().substr(0,16);
            this.addedBottleB2.upcNameId = "Test4G1";
            this.upcv3Service.addBottleBelt(this.addedBottleB2,this.token).subscribe(res=>{
              //alert(JSON.stringify(res));
              loading.dismiss();
            })
          }
          if(this.removedBottle.barcodes.length > 0) {
            this.removedBottle.upcNameId = "Test4G1";
            
              this.upcv3Service.removeFromCeint(this.removedBottle,this.token).subscribe(res=>{
                alert(JSON.stringify(res));
              })
          }
    
        })*/
    };
    AddbottleceintPage.prototype.subscribeRefresh = function () {
        this.stockRet = this.global.upcmodbus.nameId;
        this.statusB1 = "" + this.global.upcmodbus.reserves.co2Res1Status;
        this.statusB2 = "" + this.global.upcmodbus.reserves.co2Res2Status;
        this.highlightB1 = this.global.upcmodbus.reserves.co2ResActive == 1;
        this.highlightB2 = this.global.upcmodbus.reserves.co2ResActive == 2;
        this.contenuB1 = this.global.upcmodbus.reserves.co2Res1ActVol;
        this.contenuB2 = this.global.upcmodbus.reserves.co2Res2ActVol;
        this.contenantB1 = this.global.upcmodbus.reserves.co2Res1StartVol;
        this.contenantB2 = this.global.upcmodbus.reserves.co2Res2StartVol;
        if (this.global.upcmodbus.reserves.bottlesB1.length > 0 || this.global.upcmodbus.reserves.bottlesB2.length > 0) {
            this.loadBottles();
        }
    };
    AddbottleceintPage.prototype.onSynchro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var d, d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d = new Date();
                        this.global.logs.push(this.global.msToTime(d) + " - ON SYNCHRO");
                        alert(this.B1Ad.join(';'));
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res1CodesBarres, this.B1Ad.join(''))];
                    case 1:
                        _a.sent();
                        d = new Date();
                        this.global.logs.push(this.global.msToTime(d) + " - SUCCESS");
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.co2Res1StartVol, this.contenantB1 / 0.001974)];
                    case 2:
                        _a.sent();
                        this.global.upcmodbus.reserves.co2Res1StartVol = this.contenantB1;
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.co2Res2StartVol, this.contenantB2 / 0.001974)];
                    case 3:
                        _a.sent();
                        this.global.upcmodbus.reserves.co2Res2StartVol = this.contenantB2;
                        if (!(this.contenuB1 > 0)) return [3 /*break*/, 8];
                        if (!(this.global.upcmodbus.general.upcStatus == 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.upcMode, 0)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: 
                    //await this.global.onWriteEnable(this.correspondancesRegistres.co2Res1ActVol,0)       
                    return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.co2Res1FillNew, this.contenuB1 / 0.001974)];
                    case 6:
                        //await this.global.onWriteEnable(this.correspondancesRegistres.co2Res1ActVol,0)       
                        _a.sent();
                        this.global.upcmodbus.reserves.co2Res1ActVol = this.contenuB1;
                        if (!(this.global.upcmodbus.general.upcStatus == 1)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.upcMode, 1)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        if (!(this.contenuB2 > 0)) return [3 /*break*/, 13];
                        if (!(this.global.upcmodbus.general.upcStatus == 1)) return [3 /*break*/, 10];
                        //await this.global.onWriteEnable(this.correspondancesRegistres.co2Res2ActVol,0)   
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.upcMode, 0)];
                    case 9:
                        //await this.global.onWriteEnable(this.correspondancesRegistres.co2Res2ActVol,0)   
                        _a.sent();
                        _a.label = 10;
                    case 10: return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.co2Res2FillNew, this.contenuB2 / 0.001974)];
                    case 11:
                        _a.sent();
                        this.global.upcmodbus.reserves.co2Res2ActVol = this.contenuB2;
                        if (!(this.global.upcmodbus.general.upcStatus == 1)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.global.onWriteEnable(this.correspondancesRegistres.upcMode, 1)];
                    case 12:
                        _a.sent();
                        _a.label = 13;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    AddbottleceintPage.prototype.goToNextPage = function () {
        var _this = this;
        clearInterval(this.global.interval);
        this.storage.get("nexturl").then(function (res) {
            _this.router.navigate([res]);
        });
    };
    AddbottleceintPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_6__["Upcv3serviceService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_7__["Hotspot"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
    ]; };
    AddbottleceintPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addbottleceint',
            template: __webpack_require__(/*! raw-loader!./addbottleceint.page.html */ "./node_modules/raw-loader/index.js!./src/app/addbottleceint/addbottleceint.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./addbottleceint.page.scss */ "./src/app/addbottleceint/addbottleceint.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_6__["Upcv3serviceService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_7__["Hotspot"], _api_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], AddbottleceintPage);
    return AddbottleceintPage;
}());



/***/ })

}]);
//# sourceMappingURL=addbottleceint-addbottleceint-module-es5.js.map