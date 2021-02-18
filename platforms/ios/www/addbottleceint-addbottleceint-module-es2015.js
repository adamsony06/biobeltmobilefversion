(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addbottleceint-addbottleceint-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addbottleceint/addbottleceint.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addbottleceint/addbottleceint.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{stockRet}}</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <!--<ion-select placeholder=\"Type de bouteilles\">\n          <ion-select-option *ngFor=\"let bottle of listBottles\">\n            {{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}\n          </ion-select-option>\n        </ion-select>-->\n      <h1 style=\"text-align: center;\">\n        B1\n      </h1>\n      \n      </ion-col>\n      \n      <ion-col size=\"6\">\n        <h1 style=\"text-align: center;\">\n          B2\n        </h1>  \n      </ion-col>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <ion-list>\n          <ion-item (click)=\"onScanBarCodeB1();\">\n            <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B1\n          </ion-item>\n          <div *ngFor=\"let b1 of B1String;let i = index;\">\n          <ion-item>\n            <ion-label>{{b1}}</ion-label>\n            <div *ngIf=\"B1Desig.length > 0\">\n            <ion-select (ionChange)=\"onChangeDesigB1(i);\" [(ngModel)]=\"B1Desig[i]\" placeholder=\"Designation (en kg)\" *ngIf=\"!B1IsMesser[i]\">\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\n            </ion-select>\n          </div>\n            \n            \n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\n          </ion-item>\n        </div>\n        \n        </ion-list>\n        <!--<ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\n          Tout Effacer\n        </ion-button>-->\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <ion-list>\n          <ion-item (click)=\"onScanBarCodeB2();\">\n            <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B2\n          </ion-item>\n          <div *ngFor=\"let b2 of B2String;let i = index;\">\n          <ion-item>\n            <ion-label>{{b2}}</ion-label>\n            <div *ngIf=\"B2Desig.length > 0\">\n\n            \n            <ion-select (ionChange)=\"onChangeDesigB2(i);\" [(ngModel)]=\"B2Desig[i]\" placeholder=\"Designation (en kg)\" *ngIf=\"!B2IsMesser[i]\">\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\n            </ion-select>\n          </div>\n            \n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\n          </ion-item>\n        </div>\n        \n        </ion-list>\n        <!--<ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\n          Tout Effacer\n        </ion-button>-->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button (click)=\"onRemove();\" color=\"danger\" size=\"block\">\n    Enlever une bouteille \n  </ion-button>\n</ion-content>\n\n<!--<ion-footer>\n  <ion-button (click)=\"onSynchroCeint();\" expand=\"block\" > Synchroniser avec le serveur </ion-button>\n\n</ion-footer>-->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addbottleceint_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addbottleceint.page */ "./src/app/addbottleceint/addbottleceint.page.ts");




const routes = [
    {
        path: '',
        component: _addbottleceint_page__WEBPACK_IMPORTED_MODULE_3__["AddbottleceintPage"]
    }
];
let AddbottleceintPageRoutingModule = class AddbottleceintPageRoutingModule {
};
AddbottleceintPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddbottleceintPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addbottleceint_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addbottleceint-routing.module */ "./src/app/addbottleceint/addbottleceint-routing.module.ts");
/* harmony import */ var _addbottleceint_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addbottleceint.page */ "./src/app/addbottleceint/addbottleceint.page.ts");







let AddbottleceintPageModule = class AddbottleceintPageModule {
};
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



/***/ }),

/***/ "./src/app/addbottleceint/addbottleceint.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/addbottleceint/addbottleceint.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGJvdHRsZWNlaW50L2FkZGJvdHRsZWNlaW50LnBhZ2Uuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");










let AddbottleceintPage = class AddbottleceintPage {
    constructor(platform, ngZone, network, scan, modal, loadingCTRL, cd, upcv3Service, storage, hotspot, global) {
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
        this.stockRet = "En cours...";
        this.addressage = 41119;
        this.addressage2 = 41169;
        this.B1 = [];
        this.B1String = [];
        this.B1Desig = [];
        this.B1IsMesser = [];
        this.B2 = [];
        this.B2String = [];
        this.B2Desig = [];
        this.B2IsMesser = [];
        this.i = 0;
        this.y = 0;
        this.addedBottleB1 = { barcodes: [], kg: [] };
        this.addedBottleB2 = { barcodes: [], kg: [] };
        this.removedBottle = { barcodes: [] };
        this.isBBAM = false;
        this.contenuB1 = 0;
        this.contenuB2 = 0;
        this.ssid = "";
    }
    //Mise à jour puis wipe puis test 
    //Retest 
    //Wipe + Sauvegarde d'offset pour UPC
    ngOnInit() {
        this.addedBottleB1.date = new Date().toISOString().substr(0, 16);
        this.addedBottleB1.objet = "Remplissage";
        this.addedBottleB2.date = new Date().toISOString().substr(0, 16);
        this.addedBottleB2.objet = "Remplissage";
        this.removedBottle.date = new Date().toISOString().substr(0, 16);
        this.platform.ready().then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.get("token").then(val => {
                this.token = val;
            });
            if (this.platform.is('ios')) {
                WifiWizard2.iOSConnectNetwork("BBAM", "BioBeltService").then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    var loading = yield this.loadingCTRL.create({
                        message: "Connection à l'UPC en cours...",
                        duration: 10000
                    });
                    loading.present();
                    this.global.isBBAM = true;
                    this.platform.ready().then(readySource => {
                        if (readySource == 'cordova') {
                            this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_2__["UPCModbus"](state => {
                                this.ngZone.run(() => {
                                    // Force refresh UI
                                    //this.readDiffusionParameters();
                                });
                            });
                            this.network.onConnect().subscribe((async) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                if (this.network.type === this.network.Connection.WIFI) {
                                    yield this.upc.client.connect();
                                    yield setTimeout(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                        this.ngZone.run(() => {
                                            this.upc.client.getStringFromHoldingRegister(40001, 10).then(res => {
                                                this.stockRet = res.replace(/[^a-zA-Z0-9]/g, '');
                                                this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g, '');
                                                this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                                this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g, '');
                                                this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                                this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                                this.cd.detectChanges();
                                                loading.dismiss();
                                            });
                                            this.upc.client.getStringFromHoldingRegister(40045, 10).then(res => {
                                                this.global.ssid = res;
                                            });
                                            for (var ad = 41119; ad <= 41159; ad += 10) {
                                                this.upc.client.getStringFromHoldingRegister(ad, 10).then(res => {
                                                    if (/^\d+$/.test(res.substr(0, 8))) {
                                                        this.B1String.push("Messer (" + res.substr(0, 8) + ") 37.5 kg");
                                                        this.B1Desig.push("37.5");
                                                        this.B1IsMesser.push(true);
                                                        this.addressage += 10;
                                                        this.B1.push(res.substr(0, 8));
                                                    }
                                                    else if (/^[a-z0-9]+$/i.test(res.substr(0, 7))) {
                                                        var kg = "";
                                                        if (res.charAt(7) == "0") {
                                                            kg = "10 kg";
                                                            this.B1Desig.push("10");
                                                        }
                                                        if (res.charAt(7) == "1") {
                                                            kg = "20 kg";
                                                            this.B1Desig.push("20");
                                                        }
                                                        if (res.charAt(7) == "2") {
                                                            kg = "22.6796 kg";
                                                            this.B1Desig.push("22.6796");
                                                        }
                                                        if (res.charAt(7) == "3") {
                                                            kg = "34 kg";
                                                            this.B1Desig.push("34");
                                                        }
                                                        this.B1String.push("Air liquide (" + res.substr(0, 7) + ") " + kg);
                                                        this.B1IsMesser.push(false);
                                                        this.addressage += 10;
                                                        this.B1.push(res.substr(0, 7));
                                                    }
                                                    this.cd.detectChanges();
                                                });
                                            }
                                            for (var ad2 = 41169; ad2 <= 41208; ad2 += 10) {
                                                this.upc.client.getStringFromHoldingRegister(ad2, 10).then(res => {
                                                    if (/^\d+$/.test(res.substr(0, 8))) {
                                                        this.B2String.push("Messer (" + res.substr(0, 8) + ") 37.5 kg");
                                                        this.B2Desig.push("37.5");
                                                        this.B2IsMesser.push(true);
                                                        this.addressage2 += 10;
                                                        this.B2.push(res.substr(0, 8));
                                                    }
                                                    else if (/^[a-z0-9]+$/i.test(res.substr(0, 7))) {
                                                        var kg = "";
                                                        if (res.charAt(7) == "0") {
                                                            kg = "10 kg";
                                                            this.B2Desig.push("10");
                                                        }
                                                        if (res.charAt(7) == "1") {
                                                            kg = "20 kg";
                                                            this.B2Desig.push("20");
                                                        }
                                                        if (res.charAt(7) == "2") {
                                                            kg = "22.6796 kg";
                                                            this.B2Desig.push("22.6796");
                                                        }
                                                        if (res.charAt(7) == "3") {
                                                            kg = "34 kg";
                                                            this.B2Desig.push("34");
                                                        }
                                                        this.B2String.push("Air liquide (" + res.substr(0, 7) + ") " + kg);
                                                        this.B2IsMesser.push(false);
                                                        this.addressage2 += 10;
                                                        this.B2.push(res.substr(0, 7));
                                                    }
                                                    this.cd.detectChanges();
                                                });
                                            }
                                        });
                                        //alert(JSON.stringify(this.upc));
                                    }), 5000);
                                    //await this.upc.getAllVars().general.upcNameId;
                                    /*this.upc.getAllVars().then(res=>{
                                      alert(res.general.upcNameId);
                                    })
                                    this.stockRet = {
                                      name : this.upc.nameId
                                    }*/
                                }
                            }), err => {
                                loading.dismiss();
                                alert("Connection à l'UPC echoué !");
                            });
                        }
                    });
                })).catch(err => {
                    this.stockRet = "Erreur lors de la connexion UPC";
                    alert("La connexion a echoué veuillez vous approcher de l'UPC et réessayer !");
                });
            }
            else if (this.platform.is("android")) {
                var loading = yield this.loadingCTRL.create({
                    message: "Connection à l'UPC en cours...",
                    duration: 10000
                });
                loading.present();
                this.hotspot.isWifiOn().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (res == false) {
                        yield this.hotspot.toggleWifi();
                    }
                    yield this.hotspot.connectToWifi("BBAM", "BioBeltService").then(res => {
                        this.global.isBBAM = true;
                        this.platform.ready().then((readySource) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            if (readySource == 'cordova') {
                                this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_2__["UPCModbus"](state => {
                                    this.ngZone.run(() => {
                                        // Force refresh UI
                                        //this.readDiffusionParameters();
                                    });
                                });
                                yield this.upc.client.connect();
                                this.upc.client.getStringFromHoldingRegister(40001, 10).then(res => {
                                    this.stockRet = res.replace(/[^a-zA-Z0-9]/g, '');
                                    this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g, '');
                                    this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                    this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g, '');
                                    this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                    this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                    this.cd.detectChanges();
                                    loading.dismiss();
                                }).catch(err => {
                                });
                                yield setTimeout(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                    this.ngZone.run(() => {
                                        this.upc.client.getStringFromHoldingRegister(40001, 10).then(res => {
                                            this.stockRet = res.replace(/[^a-zA-Z0-9]/g, '');
                                            this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g, '');
                                            this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                            this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g, '');
                                            this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                            this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                            this.cd.detectChanges();
                                            loading.dismiss();
                                        }).catch(err => {
                                        });
                                        this.upc.client.getStringFromHoldingRegister(40045, 10).then(res => {
                                            this.global.ssid = res;
                                        });
                                        for (var ad = 41119; ad <= 41159; ad += 10) {
                                            this.upc.client.getStringFromHoldingRegister(ad, 10).then(res => {
                                                if (/^\d+$/.test(res.substr(0, 8))) {
                                                    this.B1String.push("Messer (" + res.substr(0, 8) + ") 37.5 kg");
                                                    this.B1Desig.push("37.5");
                                                    this.B1IsMesser.push(true);
                                                    this.addressage += 10;
                                                    this.B1.push(res.substr(0, 8));
                                                }
                                                else if (/^[a-z0-9]+$/i.test(res.substr(0, 7))) {
                                                    var kg = "";
                                                    if (res.charAt(7) == "0") {
                                                        kg = "10 kg";
                                                        this.B1Desig.push("10");
                                                    }
                                                    if (res.charAt(7) == "1") {
                                                        kg = "20 kg";
                                                        this.B1Desig.push("20");
                                                    }
                                                    if (res.charAt(7) == "2") {
                                                        kg = "22.6796 kg";
                                                        this.B1Desig.push("22.6796");
                                                    }
                                                    if (res.charAt(7) == "3") {
                                                        kg = "34 kg";
                                                        this.B1Desig.push("34");
                                                    }
                                                    this.B1String.push("Air liquide (" + res.substr(0, 7) + ") " + kg);
                                                    this.B1IsMesser.push(false);
                                                    this.addressage += 10;
                                                    this.B1.push(res.substr(0, 7));
                                                }
                                                this.cd.detectChanges();
                                            }).catch(err => {
                                            });
                                        }
                                        for (var ad2 = 41169; ad2 <= 41208; ad2 += 10) {
                                            this.upc.client.getStringFromHoldingRegister(ad2, 10).then(res => {
                                                if (/^\d+$/.test(res.substr(0, 8))) {
                                                    this.B2String.push("Messer (" + res.substr(0, 8) + ") 37.5 kg");
                                                    this.B2Desig.push("37.5");
                                                    this.B2IsMesser.push(true);
                                                    this.addressage2 += 10;
                                                    this.B2.push(res.substr(0, 8));
                                                }
                                                else if (/^[a-z0-9]+$/i.test(res.substr(0, 7))) {
                                                    var kg = "";
                                                    if (res.charAt(7) == "0") {
                                                        kg = "10 kg";
                                                        this.B2Desig.push("10");
                                                    }
                                                    if (res.charAt(7) == "1") {
                                                        kg = "20 kg";
                                                        this.B2Desig.push("20");
                                                    }
                                                    if (res.charAt(7) == "2") {
                                                        kg = "22.6796 kg";
                                                        this.B2Desig.push("22.6796");
                                                    }
                                                    if (res.charAt(7) == "3") {
                                                        kg = "34 kg";
                                                        this.B2Desig.push("34");
                                                    }
                                                    this.B2String.push("Air liquide (" + res.substr(0, 7) + ") " + kg);
                                                    this.B2IsMesser.push(false);
                                                    this.addressage2 += 10;
                                                    this.B2.push(res.substr(0, 7));
                                                }
                                                this.cd.detectChanges();
                                            }).catch(err => {
                                            });
                                        }
                                    });
                                    //alert(JSON.stringify(this.upc));
                                }), 5000);
                                /*this.network.onConnect().subscribe(async (async) => {
                                  
                                  if (this.network.type === this.network.Connection.WIFI) {
                                    
                                    
                                   
                                    
                                    
                                    //await this.upc.getAllVars().general.upcNameId;
                                    /*this.upc.getAllVars().then(res=>{
                                      alert(res.general.upcNameId);
                                    })
                                    this.stockRet = {
                                      name : this.upc.nameId
                                    }*/
                                /*}
                              },err=>{
                                loading.dismiss();
                                alert("Connection à l'UPC echoué !");
                              });*/
                            }
                        }));
                    });
                }));
                /*WifiWizard2.connect("BBAM",false,"BioBeltService","WPA",false).then(res=>{
                  this.isBBAM = true;
                  this.platform.ready().then(
                    readySource => {
                      if (readySource == 'cordova') {
                        
                        this.upc = new UPCModbus(state => {
                          this.ngZone.run(() => {
                            // Force refresh UI
                            
                              
                              //this.readDiffusionParameters();
                            
                          });
                        });
                        
                        this.network.onConnect().subscribe(async (async) => {
                          
                          if (this.network.type === this.network.Connection.WIFI) {
                            
                            await this.upc.client.connect();
                            
                            await setTimeout(async ()=>{
                              this.ngZone.run(()=>{
                                this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                                  this.stockRet = res;
                                  this.addedBottleB1.name = res;
                                  this.addedBottleB1.upcNameId = res;
                                  this.addedBottleB2.name = res;
                                  this.addedBottleB2.upcNameId = res;
                                  this.removedBottle.upcNameId = res;
                                  this.cd.detectChanges();
                                  loading.dismiss();
                                })
                                
                                for (var ad = 41119;ad<=41159;ad+=10){
                                  this.upc.client.getStringFromHoldingRegister(ad,10).then(res=>{
                                    
                                    if (/^\d+$/.test(res.substr(0,8))){
                                      
                                      this.B1String.push("Messer ("+res.substr(0,12)+") 37.5 kg");
                                      this.B1Desig.push("37.5");
                                      this.B1IsMesser.push(true);
                                      this.addressage+=10;
                                      this.B1.push(res.substr(0,12));
                                    } else if(/^[a-z0-9]+$/i.test(res.substr(0,7))){
                                      var kg = "";
                                      
                                      if(res.charAt(7) == "0"){
                                        kg = "10 kg";
                                        this.B1Desig.push("10");
                                      }
                                      if (res.charAt(7) == "1"){
                                        kg = "20 kg";
                                        this.B1Desig.push("20");
                                      }
                                      if (res.charAt(7) == "2"){
                                        kg = "22.6796 kg";
                                        this.B1Desig.push("22.6796");
                                      }
                                      if (res.charAt(7)=="3"){
                                        kg = "34 kg";
                                        this.B1Desig.push("34");
                                      }
                                      this.B1String.push("Air liquide ("+res.substr(0,7)+") "+kg);
                                      this.B1IsMesser.push(false);
                                      this.addressage+=10;
                                      this.B1.push(res.substr(0,7));
                                    }
                                    this.cd.detectChanges();
                                  })
                                } for(var ad2=41169;ad2<=41208;ad2+=10){
                                  this.upc.client.getStringFromHoldingRegister(ad2,10).then(res=>{
                                    
                                    if(/^\d+$/.test(res.substr(0,8))){
                                      this.B2String.push("Messer ("+res.substr(0,12)+") 37.5 kg");
                                      this.B2Desig.push("37.5");
                                      this.B2IsMesser.push(true);
                                      this.addressage2+=10;
                                      this.B2.push(res.substr(0,12));
                                    } else if(/^[a-z0-9]+$/i.test(res.substr(0,7))){
                                      var kg = "";
                                      if(res.charAt(7) == "0"){
                                        kg = "10 kg";
                                        this.B2Desig.push("10");
                                      }
                                      if (res.charAt(7) == "1"){
                                        kg = "20 kg";
                                        this.B2Desig.push("20");
                                      }
                                      if (res.charAt(7) == "2"){
                                        kg = "22.6796 kg";
                                        this.B2Desig.push("22.6796");
                                      }
                                      if (res.charAt(7)=="3"){
                                        kg = "34 kg";
                                        this.B2Desig.push("34");
                                      }
                                      this.B2String.push("Air liquide ("+res.substr(0,7)+") "+kg);
                                      this.B2IsMesser.push(false);
                                      this.addressage2+=10;
                                      this.B2.push(res.substr(0,7));
                                    }
                                    this.cd.detectChanges();
                                  })
                                }
                                
                              })
                              
                              //alert(JSON.stringify(this.upc));
                            },5000)
                           
                            
                            
                            //await this.upc.getAllVars().general.upcNameId;
                            /*this.upc.getAllVars().then(res=>{
                              alert(res.general.upcNameId);
                            })
                            this.stockRet = {
                              name : this.upc.nameId
                            }*/
                /*}
              },err=>{
                loading.dismiss();
                alert("Connection à l'UPC echoué !");
              });
            }
          }
        );
      })*/
            }
        }));
    }
    onRemove() {
        this.scan.scan().then(res => {
            var scanned = false;
            var indexB1 = -1;
            var indexB2 = -1;
            var indexB1front = -1;
            var indexB2front = -1;
            this.B1.forEach((item, index) => {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB1 = index;
                }
            });
            this.B1String.forEach((item, index) => {
                if (item.includes(res.text)) {
                    indexB1front = index;
                    scanned = true;
                }
            });
            this.B2.forEach((item, index) => {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB2 = index;
                }
            });
            this.B2String.forEach((item, index) => {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB2front = index;
                }
            });
            if (scanned) {
                this.removedBottle.barcodes.push(res.text);
                if (indexB1 >= 0) {
                    var addresse = indexB1 * 10 + 41119;
                    this.upc.client.setStringInHoldingRegister(addresse, "          ").then(res => {
                        //this.B1.splice(indexB1,1);
                        this.B1Desig.splice(indexB1front, 1);
                        this.B1IsMesser.splice(indexB1front, 1);
                        this.B1String.splice(indexB1front, 1);
                        this.addressage -= 10;
                        this.cd.detectChanges();
                    }).catch(err => {
                        alert(JSON.stringify(err));
                    });
                }
                if (indexB2 >= 0) {
                    var adresse = indexB2 * 10 + 41169;
                    this.upc.client.setStringInHoldingRegister(adresse, "          ").then(res => {
                        //this.B2.splice(indexB2,1);
                        this.B2Desig.splice(indexB2front, 1);
                        this.B2IsMesser.splice(indexB2front, 1);
                        this.B2String.splice(indexB2front, 1);
                        this.addressage2 -= 10;
                        this.cd.detectChanges();
                    }).catch(err => {
                        alert(JSON.stringify(err));
                    });
                }
            }
            else {
                alert("La bouteille n'est pas assigné à cette bouteille");
            }
        }).catch(err => {
            alert("Veuillez activer l'autorisation photo de l'app");
        });
    }
    doRefresh($event) {
        this.ngOnInit();
        $event.target.complete();
    }
    onChangeDesigB2(i) {
        var adresse = i * 10 + 41169;
        var index;
        this.addedBottleB2.kg[i] = this.B2Desig[i];
        this.contenuB2 = 0;
        for (var j = 0; j < this.addedBottleB2.kg; j++) {
            this.contenuB2 += parseFloat(this.addedBottleB2.kg[j]);
        }
        if (this.B2Desig[i] == "10") {
            index = "0";
            this.contenuB2 += 10;
        }
        if (this.B2Desig[i] == "20") {
            index = "1";
            this.contenuB2 += 20;
        }
        if (this.B2Desig[i] == "22.6796") {
            index = "2";
            this.contenuB2 += 22.6796;
        }
        if (this.B2Desig[i] == "34") {
            this.contenuB2 += 34;
            index = "3";
        }
        this.upc.client.setStringInHoldingRegister(adresse, this.B2[i] + index).then(res => {
        }).catch(err => {
            alert("Erreur de réécriture, veuillez réessayer");
        });
    }
    onChangeDesigB1(i) {
        var adresse = i * 10 + 41119;
        var index;
        this.addedBottleB1.kg[i] = this.B1Desig[i];
        this.contenuB1 = 0;
        for (var j = 0; j < this.addedBottleB1.kg.length; j++) {
            this.contenuB1 += parseFloat(this.addedBottleB1.kg[j]);
        }
        if (this.B1Desig[i] == "10") {
            index = "0";
        }
        if (this.B1Desig[i] == "20") {
            index = "1";
        }
        if (this.B1Desig[i] == "22.6796") {
            index = "2";
        }
        if (this.B1Desig[i] == "34") {
            index = "3";
        }
        this.upc.client.setStringInHoldingRegister(adresse, this.B1[i] + index).then(res => {
        }).catch(err => {
            alert("Erreur de réécriture, veuillez réessayer");
        });
    }
    onScanBarCodeB2() {
        this.scan.scan().then(res => {
            var isScanned = false;
            this.B1.forEach(item => {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            this.B2.forEach(item => {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            if (!isScanned) {
                if (res.text != "") {
                    if (/^\d+$/.test(res.text)) {
                        this.contenuB2 += 37.5;
                        this.upc.client.setFloatInHoldingRegister(40386, this.contenuB2).then(res => {
                        }).catch(err => {
                            this.contenuB2 -= 37.5;
                            alert("Veuillez rescanner la bouteille, l'enregistrement ne s'est pas bien fait !");
                        });
                        var text = res.text;
                        this.upc.client.setStringInHoldingRegister(this.addressage2, res.text).then((res) => {
                            this.B2String.push("Messer (" + text + ") 37.5 kg");
                            this.B2Desig.push("37.5");
                            this.addedBottleB2.kg.push("37.5");
                            this.B2IsMesser.push(true);
                            this.addedBottleB2.barcodes.push(text);
                            this.addedBottleB2.reserve = "B2";
                            localStorage.setItem("bottleB2", JSON.stringify(this.addedBottleB2));
                            this.addressage2 += 10;
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                    }
                    else {
                        this.contenuB2 += 34;
                        var text = res.text;
                        this.upc.client.setFloatInHoldingRegister(40386, this.contenuB2).then(res => {
                        }).catch(err => {
                            this.contenuB2 -= 34;
                            alert("Veuillez rescanner la bouteille, l'enregistrement ne s'est pas bien fait !");
                        });
                        this.upc.client.setStringInHoldingRegister(this.addressage2, text + "3").then((res) => {
                            this.B2String.push("Air Liquide (" + text + ")");
                            this.B2Desig.push("34");
                            this.addedBottleB2.kg.push("34");
                            this.B2IsMesser.push(false);
                            this.addedBottleB2.barcodes.push(text);
                            this.addedBottleB2.reserve = "B2";
                            localStorage.setItem("bottleB2", JSON.stringify(this.addedBottleB2));
                            this.addressage2 += 10;
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                    }
                    this.B2.push(res.text);
                }
            }
            else {
                alert("Vous avez déjà scanner la bouteille !");
            }
        });
    }
    onScanBarCodeB1() {
        this.scan.scan().then(res => {
            var isScanned = false;
            this.B1.forEach(item => {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            this.B2.forEach(item => {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            if (!isScanned) {
                if (res.text != "") {
                    //alert(res.text.substr(0,8))
                    //Synchro plan 
                    if (/^\d+$/.test(res.text)) {
                        this.contenuB1 += 37.5;
                        this.upc.client.setFloatInHoldingRegister(40384, this.contenuB1).then(res => {
                        }).catch(err => {
                            this.contenuB1 -= 37.5;
                            alert("Veuillez rescanner la bouteille !");
                        });
                        var text = res.text;
                        this.upc.client.setStringInHoldingRegister(this.addressage, res.text).then((res) => {
                            this.B1String.push("Messer (" + text + ") 37.5 kg");
                            this.B1Desig.push("37.5");
                            this.addedBottleB1.kg.push("37.5");
                            this.B1IsMesser.push(true);
                            this.addedBottleB1.barcodes.push(text);
                            this.B1.push(text);
                            this.addedBottleB1.reserve = "B1";
                            localStorage.setItem("bottleB1", JSON.stringify(this.addedBottleB1));
                            this.addressage += 10;
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                    }
                    else {
                        this.contenuB1 += 34;
                        this.upc.client.setFloatInHoldingRegister(40384, this.contenuB1).then(res => {
                        }).catch(err => {
                            alert("Veuillez rescanner la bouteille !");
                        });
                        var text = res.text;
                        this.upc.client.setStringInHoldingRegister(this.addressage, res.text + "3").then((res) => {
                            this.B1String.push("Air Liquide (" + text + ")");
                            this.B1Desig.push("34");
                            this.addedBottleB1.kg.push("34");
                            this.B1IsMesser.push(false);
                            this.addedBottleB1.barcodes.push(text);
                            this.addedBottleB1.reserve = "B1";
                            this.B1.push(text);
                            localStorage.setItem("bottleB1", JSON.stringify(this.addedBottleB1));
                            this.addressage += 10;
                        }).catch(err => {
                            alert(JSON.stringify(err));
                        });
                    }
                }
            }
            else {
                alert("Vous avez déjà scanner la bouteille !");
            }
        });
    }
    onSynchroCeint() {
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
    }
};
AddbottleceintPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_7__["Upcv3serviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_8__["Hotspot"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"] }
];
AddbottleceintPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addbottleceint',
        template: __webpack_require__(/*! raw-loader!./addbottleceint.page.html */ "./node_modules/raw-loader/index.js!./src/app/addbottleceint/addbottleceint.page.html"),
        styles: [__webpack_require__(/*! ./addbottleceint.page.scss */ "./src/app/addbottleceint/addbottleceint.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_7__["Upcv3serviceService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_8__["Hotspot"], _api_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"]])
], AddbottleceintPage);



/***/ })

}]);
//# sourceMappingURL=addbottleceint-addbottleceint-module-es2015.js.map