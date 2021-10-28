(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bottles-bottles-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bottles/bottles.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bottles/bottles.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\r\n    <ion-title>Installation</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon></ion-button> \r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1 style=\"text-align: center;\">Ajouter des bouteilles</h1>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\r\n        <!--<ion-select placeholder=\"Type de bouteilles\">\r\n          <ion-select-option *ngFor=\"let bottle of listBottles\">\r\n            {{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}\r\n          </ion-select-option>\r\n        </ion-select>-->\r\n      <h1 style=\"text-align: center;\">\r\n        B1\r\n      </h1>\r\n      \r\n      </ion-col>\r\n      \r\n      <ion-col size=\"6\">\r\n        <h1 style=\"text-align: center;\">\r\n          B2\r\n        </h1>  \r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row>\r\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\r\n        <ion-list>\r\n          <ion-item (click)=\"onScanBarCodeB1();\">\r\n            <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B1\r\n          </ion-item>\r\n          <div *ngFor=\"let b1 of global.B1;let i = index;\">\r\n          <ion-item  *ngIf=\"global.B1.length > 0\">\r\n            <ion-label>{{b1.designation === 0 ? b1.marque: b1.marque+\" \"+b1.designation.toFixed()+\" kg\"}}</ion-label>\r\n            <ion-select placeholder=\"Designation (en kg)\" *ngIf=\"b1.marque === 'Air liquide'\" (ionChange)=\"setDesignationB1(i,$event);\">\r\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\r\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\r\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\r\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\r\n              \r\n            </ion-select>\r\n            \r\n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\r\n          </ion-item>\r\n        </div>\r\n        \r\n        </ion-list>\r\n        <ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\r\n          Tout Effacer\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-list>\r\n          <ion-item (click)=\"onScanBarCodeB2();\">\r\n            <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B2\r\n          </ion-item>\r\n          <div *ngFor=\"let b2 of global.B2;let i = index;\">\r\n            <ion-item  *ngIf=\"global.B2.length > 0\"> \r\n              <ion-label>{{b2.designation === 0 ? b2.marque: b2.marque+' '+b2.designation.toFixed()+' kg'}}</ion-label>\r\n              <ion-select placeholder=\"Designation (en kg)\" *ngIf=\"b2.marque === 'Air liquide'\" (ionChange)=\"setDesignationB2(i,$event);\">\r\n                <ion-select-option value=\"10\">10 kg</ion-select-option>\r\n                <ion-select-option value=\"20\">20 kg</ion-select-option>\r\n                <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\r\n                <ion-select-option value=\"34\">34 kg</ion-select-option>\r\n                \r\n              </ion-select>\r\n              \r\n              <!--<ion-badge color=\"primary\">{{'x'+b2.qty}}</ion-badge>-->\r\n            </ion-item>\r\n          </div>\r\n        </ion-list>\r\n        <ion-button color=\"danger\" (click)=\"deleteB2();\" size=\"block\">\r\n          Tout Effacer\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n  </ion-grid>\r\n  <ion-button size=\"block\" color=\"primary\" (click)=\"refill();\"> Ajouter des bouteilles</ion-button>\r\n  <ion-button size=\"block\" color=\"secondary\" (click)=\"onContinue();\">Ne pas Ajouter de bouteilles</ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/bottles/bottles-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/bottles/bottles-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BottlesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlesPageRoutingModule", function() { return BottlesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bottles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bottles.page */ "./src/app/bottles/bottles.page.ts");




const routes = [
    {
        path: '',
        component: _bottles_page__WEBPACK_IMPORTED_MODULE_3__["BottlesPage"]
    }
];
let BottlesPageRoutingModule = class BottlesPageRoutingModule {
};
BottlesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BottlesPageRoutingModule);



/***/ }),

/***/ "./src/app/bottles/bottles.module.ts":
/*!*******************************************!*\
  !*** ./src/app/bottles/bottles.module.ts ***!
  \*******************************************/
/*! exports provided: BottlesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlesPageModule", function() { return BottlesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bottles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottles-routing.module */ "./src/app/bottles/bottles-routing.module.ts");
/* harmony import */ var _bottles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottles.page */ "./src/app/bottles/bottles.page.ts");







let BottlesPageModule = class BottlesPageModule {
};
BottlesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bottles_routing_module__WEBPACK_IMPORTED_MODULE_5__["BottlesPageRoutingModule"]
        ],
        declarations: [_bottles_page__WEBPACK_IMPORTED_MODULE_6__["BottlesPage"]],
    })
], BottlesPageModule);



/***/ }),

/***/ "./src/app/bottles/bottles.page.scss":
/*!*******************************************!*\
  !*** ./src/app/bottles/bottles.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".verticalLine {\n  width: 1%;\n  height: 50px;\n  background: green;\n  margin-top: 0;\n  position: relative;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJtYW5kL0Rlc2t0b3AvYmlvYmVsdG1vYmlsZS9zcmMvYXBwL2JvdHRsZXMvYm90dGxlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2JvdHRsZXMvYm90dGxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2JvdHRsZXMvYm90dGxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWxMaW5lIHtcclxuICB3aWR0aDoxJTtcclxuICBoZWlnaHQ6NTBweDtcclxuICBiYWNrZ3JvdW5kOmdyZWVuO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn0iLCIudmVydGljYWxMaW5lIHtcbiAgd2lkdGg6IDElO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/bottles/bottles.page.ts":
/*!*****************************************!*\
  !*** ./src/app/bottles/bottles.page.ts ***!
  \*****************************************/
/*! exports provided: BottlesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottlesPage", function() { return BottlesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _api_ApiResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/ApiResponse */ "./src/app/api/ApiResponse.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");












let BottlesPage = class BottlesPage {
    constructor(upc3service, storage, global, barcode, router, platform, hospot, ngZone, network) {
        this.upc3service = upc3service;
        this.storage = storage;
        this.global = global;
        this.barcode = barcode;
        this.router = router;
        this.platform = platform;
        this.hospot = hospot;
        this.ngZone = ngZone;
        this.network = network;
        this.i = 0;
        this.y = 0;
        this.booleanB1 = false;
        this.booleanB2 = false;
        this.isNotScanned = true;
        this.addressage = 41119;
        this.addressage2 = 41169;
        this.bottle = {
            name: '',
            designation: [],
            brand: [],
            barcodes: [],
            bottleType: [],
            stock: '',
            date: new Date().toISOString().substring(0, 10)
        };
        if (this.platform.is("android")) {
            this.hospot.connectToWifi("BBAM", "BioBeltService").then(res => {
                this.platform.ready().then(readySource => {
                    if (readySource == 'cordova') {
                        this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_10__["UPCModbus"](state => {
                            this.ngZone.run(() => {
                                // Force refresh UI
                            });
                        });
                        alert("On Connection UPC");
                        this.network.onConnect().subscribe(() => {
                            if (this.network.type === this.network.Connection.WIFI) {
                                this.upc.reconnect();
                                this.upc.client.getStringFromHoldingRegister(40001, 20).then(res => {
                                    alert(JSON.stringify(res));
                                }).catch(error => {
                                    alert(JSON.stringify(error));
                                });
                            }
                        });
                    }
                });
            }).catch(error => {
                alert(JSON.stringify(error));
            });
        }
        else {
            this.platform.ready().then(readySource => {
                if (readySource == 'cordova') {
                    this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_10__["UPCModbus"](state => {
                        this.ngZone.run(() => {
                            // Force refresh UI
                        });
                    });
                    this.network.onConnect().subscribe(() => {
                        if (this.network.type === this.network.Connection.WIFI) {
                            this.upc.reconnect();
                        }
                    });
                }
            });
        }
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storage.get('token').then(val => this.token = val);
            yield this.upc3service.getAllBottles(this.token).subscribe(res => {
                this.listBottles = res.result;
                alert(JSON.stringify(this.listBottles));
            });
            yield this.upc3service.getSites(this.token).subscribe(res => {
                switch (res.code) {
                    case _api_ApiResponse__WEBPACK_IMPORTED_MODULE_6__["Code"].SITE_RECOVERED:
                        res.result.forEach(json => {
                            if (json.name === this.global.upc3.upcNameId) {
                                this.sites = json;
                                alert(JSON.stringify(json));
                                this.bottle.name = json.name;
                                if (json.stockClient !== null) {
                                    this.bottle.stock = json.stockClient;
                                    alert(json.stockClient);
                                }
                            }
                        });
                        break;
                    case _api_ApiResponse__WEBPACK_IMPORTED_MODULE_6__["Code"].UNAUTHORIZED:
                        alert("Erreur, vous n'êtes pas autorisé à utiliser l'application mobile !");
                        break;
                }
            });
        });
    }
    refill() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //alert(this.upc.client.floatToRegister(this.refillRealAdded/0.001974));
            //const loading = await this.loadingctrl.create({ message: 'Remplissage en cours' });
            //await loading.present();
            /*if (this.refillTotalAdded > 0){
              this.upc.client.setFloatInHoldingRegister(40157,this.refillRealAdded/0.001974);
              //alert("Remplissage sur B1 effectué !")
            }
            if(this.refillTotalAdded2 > 0){
              this.upc.client.setFloatInHoldingRegister(40165,this.refillRealAdded2/0.001974);
              //alert("Remplissage sur B2 effectué !");
            }*/
            alert(this.global.B1[this.i]['barcode']);
            alert(this.global.B2[this.y]['barcode']);
            //for( var i =0 ; i<this.global.B1.length;i++){
            setTimeout(() => {
                this.upc.client.connect();
            }, 500);
            setTimeout(() => {
                this.upc.client.setStringInHoldingRegister(this.addressage, this.global.B1[this.i]['barcode'].substr(0, 8)).then(res => {
                    this.booleanB1 = true;
                    this.addressage += 10;
                    this.i++;
                    alert("Ecriture sur l'upc en B1, état : " + JSON.stringify(res));
                }).catch(error => {
                    alert(JSON.stringify(error));
                });
                this.upc.client.setStringInHoldingRegister(this.addressage2, this.global.B2[this.y]['barcode'].substr(0, 8)).then(res => {
                    this.booleanB2 = true;
                    this.addressage2 += 10;
                    this.y++;
                    alert("Ecriture sur l'upc en B2, état : " + JSON.stringify(res));
                }).catch(error => {
                    alert(JSON.stringify(error));
                });
            }, 1000);
            //}
            /*for( var i =0 ; i<this.global.B2.length;i++){
              if(this.global.B2['barcode'].length === 7){
                this.global.B2['barcode'] += "   ";
              }
              this.upc.client.setStringInHoldingRegister(addressage,this.global.B2['barcode']).then(
                res=>{
                  this.booleanB2 = true;
                }
              );
              addressage += 10;
            }*/
            setInterval(() => {
                if (this.booleanB1) {
                    //loading.dismiss();
                }
            }, 500);
            //this.upc.client.setIntInHoldingRegister(40120,2,(new Date(this.start9).getHours()*3600)+(new Date(this.start9).getMinutes()*60));
            //this.router.navigate(["move-bouteille"]); 
        });
    }
    onScanBarCodeB1() {
        this.barcode.scan().then(res => {
            var marque;
            var designationMesser = 0;
            if (/^\d+$/.test(res["text"])) {
                marque = "Messer";
                designationMesser = 37.5;
            }
            else {
                marque = "Air liquide";
            }
            if (this.global.B1.length > 0) {
                this.global.B1.forEach(item => {
                    if (item['barcode'] === res['text']) {
                        this.isNotScanned = false;
                    }
                });
            }
            if (this.global.B2.length > 0) {
                this.global.B2.forEach(item => {
                    if (item['barcode'] === res["text"]) {
                        this.isNotScanned = false;
                    }
                });
            }
            if (res['text'] !== "" && this.isNotScanned) {
                if (designationMesser === 37.5) {
                    this.global.B1.push({ 'barcode': res['text'], 'marque': marque, 'designation': designationMesser });
                    this.global.designationB1.push(designationMesser);
                }
                else {
                    this.global.B1.push({ 'barcode': res['text'], 'marque': marque, 'designation': 0 });
                    this.global.designationB1.push(0);
                }
            }
            else if (!this.isNotScanned) {
                alert("La bouteille a déjà été scanner !");
            }
            this.isNotScanned = true;
        })
            .catch(err => {
            alert(JSON.stringify(err));
        });
    }
    onScanBarCodeB2() {
        this.barcode.scan().then(res => {
            var marque;
            var designationMesser = 0;
            if (/^\d+$/.test(res["text"])) {
                marque = "Messer";
                designationMesser = 37.5;
            }
            else {
                marque = "Air liquide";
            }
            if (this.global.B1.length > 0) {
                this.global.B1.forEach(item => {
                    if (item['barcode'] === res['text']) {
                        this.isNotScanned = false;
                    }
                });
            }
            if (this.global.B2.length > 0) {
                this.global.B2.forEach(item => {
                    if (item['barcode'] === res["text"]) {
                        this.isNotScanned = false;
                    }
                });
            }
            if (res['text'] !== "" && this.isNotScanned) {
                if (designationMesser === 37.5) {
                    this.global.B2.push({ 'barcode': res['text'], 'marque': marque, 'designation': designationMesser });
                    this.global.designationB2.push(designationMesser);
                }
                else {
                    this.global.B2.push({ 'barcode': res['text'], 'marque': marque, 'designation': 0 });
                    this.global.designationB2.push(0);
                }
            }
            else if (!this.isNotScanned) {
                alert("La bouteille a déjà été scanner !");
            }
            this.isNotScanned = true;
        })
            .catch(err => {
            alert(JSON.stringify(err));
        });
    }
    setDesignationB1(i, $event) {
        this.global.designationB1[i] = $event.target.value;
        //this.global.B1[i].designation = this.global.B1[i].designation;
    }
    setDesignationB2(i, $event) {
        this.global.designationB2[i] = $event.target.value;
        //this.global.B2[i].designation = this.global.B2[i].designation;
    }
    deleteB1() {
        this.global.B1 = [];
        this.global.designationB1 = [];
    }
    deleteB2() {
        this.global.B2 = [];
        this.global.designationB2 = [];
    }
    addBottleId() {
        for (var i = 0; i < Object.keys(this.global.B1).length; i++) {
            for (var j = 0; j < Object.keys(this.listBottles).length; j++) {
                if (this.listBottles[j].brand === this.global.B1[i].marque && this.listBottles[j].designation == this.global.designationB1[i]) {
                    this.bottle.bottleType.push(this.listBottles[j].id);
                    break;
                }
            }
        }
        for (var i = 0; i < Object.keys(this.global.B2).length; i++) {
            for (var j = 0; j < Object.keys(this.listBottles).length; j++) {
                if (this.listBottles[j].brand === this.global.B2[i].marque && this.listBottles[j].designation == this.global.designationB2[i]) {
                    this.bottle.bottleType.push(this.listBottles[j].id);
                    break;
                }
            }
        }
    }
    addToBelt() {
        this.global.B1.forEach(item => {
            this.bottle.brand.push(item.marque);
            this.bottle.barcodes.push(item.barcode);
        });
        this.global.designationB1.forEach(item => {
            this.bottle.designation.push(item);
        });
        this.global.B2.forEach(item => {
            this.bottle.brand.push(item.marque);
            this.bottle.barcodes.push(item.barcode);
        });
        this.global.designationB2.forEach(item => {
            this.bottle.designation.push(item);
        });
        this.addBottleId();
        this.upc3service.addToStock(this.bottle, this.token).subscribe(res => {
            if (res.code === _api_ApiResponse__WEBPACK_IMPORTED_MODULE_6__["Code"].BOTTLE_CREATED) {
                alert('Bouteille ajouté à la ceinture !');
                this.global.B1 = [];
                this.global.B2 = [];
                this.global.designationB1 = [];
                this.global.designationB2 = [];
                this.router.navigate(["removebottle"]);
            }
            else {
                alert('Erreur lors du rajout de la bouteille !');
            }
        });
    }
    onContinue() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            setTimeout(() => {
                this.upc.client.connect;
            }, 5000);
            setTimeout(() => {
                this.upc.client.getStringFromHoldingRegister(41119, 10).then(data => {
                    alert(JSON.stringify(data));
                }).catch(error => { alert(JSON.stringify(error)); });
            }, 10000);
            /*this.global.B1 = [];
                this.global.B2 = [];
                this.global.designationB1 = [];
                this.global.designationB2 = [];
                this.router.navigate(["removebottle"]);*/
        });
    }
};
BottlesPage.ctorParameters = () => [
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_9__["Hotspot"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"] }
];
BottlesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bottles',
        template: __webpack_require__(/*! raw-loader!./bottles.page.html */ "./node_modules/raw-loader/index.js!./src/app/bottles/bottles.page.html"),
        styles: [__webpack_require__(/*! ./bottles.page.scss */ "./src/app/bottles/bottles.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_9__["Hotspot"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"]])
], BottlesPage);



/***/ })

}]);
//# sourceMappingURL=bottles-bottles-module-es2015.js.map