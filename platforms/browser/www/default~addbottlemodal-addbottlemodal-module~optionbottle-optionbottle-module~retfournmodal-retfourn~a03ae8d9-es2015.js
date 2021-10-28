(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~addbottlemodal-addbottlemodal-module~optionbottle-optionbottle-module~retfournmodal-retfourn~a03ae8d9"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addbottlemodal/addbottlemodal.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addbottlemodal/addbottlemodal.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"onClose();\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"barcode != ''\">{{stockRet.name}}</ion-title>\r\n    <ion-title *ngIf=\"barcode == ''\">Ajout de bouteille au Rack</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \r\n     </ion-buttons>\r\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid *ngIf=\"mode == 1000\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\r\n        <!--<ion-select placeholder=\"Type de bouteilles\">\r\n          <ion-select-option *ngFor=\"let bottle of listBottles\">\r\n            {{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}\r\n          </ion-select-option>\r\n        </ion-select>-->\r\n      <h1 style=\"text-align: center;\">\r\n        B1\r\n      </h1>\r\n      \r\n      </ion-col>\r\n      \r\n      <ion-col size=\"6\">\r\n        <h1 style=\"text-align: center;\">\r\n          B2\r\n        </h1>  \r\n      </ion-col>\r\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\r\n        <ion-list>\r\n          <ion-item (click)=\"onScanBarCodeB1();\">\r\n            <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B1\r\n          </ion-item>\r\n          <div *ngFor=\"let b1 of B1String;let i = index;\">\r\n          <ion-item>\r\n            <ion-label>{{b1}}</ion-label>\r\n            <ion-select [(ngModel)]=\"B1Desig[i]\" placeholder=\"Designation (en kg)\" *ngIf=\"!B1IsMesser[i]\">\r\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\r\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\r\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\r\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\r\n            </ion-select>\r\n            \r\n            \r\n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\r\n          </ion-item>\r\n        </div>\r\n        \r\n        </ion-list>\r\n        <!--<ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\r\n          Tout Effacer\r\n        </ion-button>-->\r\n      </ion-col>\r\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\r\n        <ion-list>\r\n          <ion-item (click)=\"onScanBarCodeB2();\">\r\n            <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B2\r\n          </ion-item>\r\n          <div *ngFor=\"let b2 of B2String;let i = index;\">\r\n          <ion-item>\r\n            <ion-label>{{b2}}</ion-label>\r\n            <ion-select [(ngModel)]=\"B2Desig[i]\" placeholder=\"Designation (en kg)\" *ngIf=\"!B2IsMesser[i]\">\r\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\r\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\r\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\r\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\r\n            </ion-select>\r\n            \r\n            \r\n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\r\n          </ion-item>\r\n        </div>\r\n        \r\n        </ion-list>\r\n        <!--<ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\r\n          Tout Effacer\r\n        </ion-button>-->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-list>\r\n    <ion-item *ngIf=\"mode != 1000 && barcode != ''\">\r\n      <ion-label>{{barcode}}</ion-label>\r\n      <div *ngIf=\"designation.length > 0\">\r\n      <ion-select [(ngModel)]=\"designation[0]\" placeholder=\"Designation (en kg)\" *ngIf=\"!isMesser[0]\">\r\n        <ion-select-option value=\"10\">10 kg</ion-select-option>\r\n        <ion-select-option value=\"20\">20 kg</ion-select-option>\r\n        <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\r\n        <ion-select-option value=\"34\">34 kg</ion-select-option>\r\n      </ion-select>\r\n    </div>\r\n    </ion-item>\r\n    <div *ngIf=\"barcode != ''\">\r\n    <ion-item *ngFor=\"let b of bottleadded;let i = index;\">\r\n      <ion-label>{{b}}</ion-label>\r\n      <ion-select [(ngModel)]=\"designation[i+1]\" placeholder=\"Designation (en kg)\" *ngIf=\"!isMesser[i+1]\">\r\n        <ion-select-option value=\"10\">10 kg</ion-select-option>\r\n        <ion-select-option value=\"20\">20 kg</ion-select-option>\r\n        <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\r\n        <ion-select-option value=\"34\">34 kg</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </div>\r\n  <div *ngIf=\"barcode == ''\">\r\n    <ion-item *ngFor=\"let rb of listbottlesRack;\">\r\n      <ion-label>{{rb.bottleString}}</ion-label>\r\n      <ion-badge color=\"success\" *ngIf=\"rb.state === 'FULL'\">Plein</ion-badge>\r\n      <ion-badge color=\"secondary\" *ngIf=\"rb.state === 'IN_USE'\">Entamée</ion-badge>\r\n      <ion-badge color=\"danger\" *ngIf=\"rb.state === 'EMPTY'\">Vide</ion-badge>\r\n    </ion-item>\r\n    <ion-item *ngFor=\"let b of bottleadded;let i = index;\">\r\n      <ion-label>{{b}}</ion-label>\r\n      <ion-select [(ngModel)]=\"designation[i]\" placeholder=\"Designation (en kg)\" *ngIf=\"!isMesser[i]\">\r\n        <ion-select-option value=\"10\">10 kg</ion-select-option>\r\n        <ion-select-option value=\"20\">20 kg</ion-select-option>\r\n        <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\r\n        <ion-select-option value=\"34\">34 kg</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </div>\r\n    <ion-item (click)=\"onAddBottle();\" *ngIf=\"mode === 1 || mode === 2\">\r\n      <ion-icon name=\"add-circle\" color=\"primary\"></ion-icon>\r\n      &nbsp;&nbsp;&nbsp;&nbsp;Ajouter une bouteille\r\n    </ion-item>\r\n    <ion-item (click)=\"onAddBottle();\" *ngIf=\"mode === 0\">\r\n      <ion-icon name=\"remove-circle\" color=\"danger\"></ion-icon>\r\n      &nbsp;&nbsp;&nbsp;&nbsp;Enlever une bouteille\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button *ngIf=\"mode != 1000\" (click)=\"onSynchro();\" expand=\"block\" > Synchroniser avec le Serveur</ion-button>\r\n  <ion-button *ngIf=\"mode == 1000\" (click)=\"onSynchroCeint();\" expand=\"block\" > Synchroniser avec l'UPC</ion-button>\r\n\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/addbottlemodal/addbottlemodal.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/addbottlemodal/addbottlemodal.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".verticalLine {\n  width: 1%;\n  height: 50px;\n  background: green;\n  margin-top: 0;\n  position: relative;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJtYW5kL0Rlc2t0b3AvYmlvYmVsdG1vYmlsZS9zcmMvYXBwL2FkZGJvdHRsZW1vZGFsL2FkZGJvdHRsZW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkYm90dGxlbW9kYWwvYWRkYm90dGxlbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGRib3R0bGVtb2RhbC9hZGRib3R0bGVtb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWxMaW5lIHtcclxuICAgIHdpZHRoOjElO1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOmdyZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG5cclxuIiwiLnZlcnRpY2FsTGluZSB7XG4gIHdpZHRoOiAxJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/addbottlemodal/addbottlemodal.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/addbottlemodal/addbottlemodal.page.ts ***!
  \*******************************************************/
/*! exports provided: AddbottlemodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbottlemodalPage", function() { return AddbottlemodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _api_ApiResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/ApiResponse */ "./src/app/api/ApiResponse.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");











let AddbottlemodalPage = class AddbottlemodalPage {
    constructor(scan, modal, upcv3Service, storage, router, platform, network, ngZone, loadingCTRL, global, cd) {
        this.scan = scan;
        this.modal = modal;
        this.upcv3Service = upcv3Service;
        this.storage = storage;
        this.router = router;
        this.platform = platform;
        this.network = network;
        this.ngZone = ngZone;
        this.loadingCTRL = loadingCTRL;
        this.global = global;
        this.cd = cd;
        this.barcode = "";
        this.barcodes = [];
        this.bottleadded = [];
        this.isMesser = [];
        this.designation = [];
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
        this.rack = "";
        this.isBBAM = false;
        this.listbottlesRack = [];
    }
    ngOnInit() {
        //alert(this.barcode);
        this.getUpcStateConnexion();
        if (this.mode === 1000) {
            this.isMesser = [];
            this.stockRet = { name: "En cours..." };
            this.platform.ready().then(() => {
                if (this.platform.is('ios')) {
                    WifiWizard2.iOSConnectNetwork("BBAM", "BioBeltService").then(res => {
                        this.isBBAM = true;
                        this.platform.ready().then((readySource) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            if (readySource == 'cordova') {
                                this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_8__["UPCModbus"](state => {
                                    this.ngZone.run(() => {
                                        // Force refresh UI
                                        //this.readDiffusionParameters();
                                    });
                                });
                                yield this.upc.client.connect();
                                setTimeout(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                    yield this.upc.client.getStringFromHoldingRegister(40001, 10).then(res => {
                                        this.stockRet = {
                                            name: res
                                        };
                                        this.cd.detectChanges();
                                    });
                                }), 2000);
                                /*this.network.onConnect().subscribe(() => {
                                  
                                  if (this.network.type === this.network.Connection.WIFI) {
                                    this.upc.reconnect();
                                    this.upc.client.getStringFromHoldingRegister(40001, 10).then(res=>{
                                      this.stockRet = {
                                        name : res
                                      }
                                    })
                                    
                                    
                                  }
                                });*/
                            }
                        }));
                    }).catch(err => {
                        this.stockRet = { name: "Erreur lors de la connexion UPC" };
                        alert("La connexion a echoué veuillez vous approcher de l'UPC et réessayer !");
                    });
                }
            });
        }
        else {
            this.storage.get("token").then(val => {
                this.token = val;
                if (localStorage.getItem("rack")) {
                    this.rack = localStorage.getItem("rack");
                    this.upcv3Service.getBottleFromRack(this.token, this.rack).subscribe(res => {
                        this.listbottlesRack = res.result;
                    });
                }
                this.upcv3Service.getAllBottles(val).subscribe(res => {
                    if (res.code === _api_ApiResponse__WEBPACK_IMPORTED_MODULE_6__["Code"].BOTTLE_TYPE_RECOVERED) {
                        this.bottleType = res.result;
                    }
                });
            });
            if (/^\d+$/.test(this.barcode)) {
                this.barcodes.push(this.barcode);
                this.barcode = "Messer (" + this.barcode + ") 37.5 kg";
                this.isMesser.push(true);
                this.designation.push("37.5");
            }
            else if (/^[a-z0-9]+$/i.test(this.barcode)) {
                this.barcodes.push(this.barcode);
                this.barcode = "Air Liquide (" + this.barcode + ")";
                this.designation.push("34");
                this.isMesser.push(false);
            }
        }
    }
    doRefresh($event) {
        this.ngOnInit();
        $event.target.complete();
    }
    onAddBottle() {
        this.scan.scan().then(res => {
            var isScanned = false;
            this.barcodes.forEach(item => {
                if (item == res.text) {
                    alert("Vous avez déjà scanné cette bouteille");
                    isScanned = true;
                }
            });
            if (!isScanned) {
                if (res.text != '') {
                    if (/^\d+$/.test(res.text)) {
                        this.bottleadded.push("Messer (" + res.text + ") 37.5 kg");
                        this.barcodes.push(res.text);
                        this.isMesser.push(true);
                        this.designation.push("37.5");
                    }
                    else {
                        this.bottleadded.push("Air Liquide (" + res.text + ")");
                        this.barcodes.push(res.text);
                        this.isMesser.push(false);
                        this.designation.push("34");
                    }
                }
            }
        });
    }
    onClose() {
        this.modal.dismiss();
    }
    onSynchroB1B2() {
        this.global.onSynchroB1B2(this.token);
    }
    onSynchro() {
        if (this.mode === 1) {
            var bottleTypes = [];
            /*this.bottleType.forEach(item=>{
              for(var i = 0;i<this.designation.length;i++){
                
                if (item.designation == this.designation[i]){
                  bottleTypes.push(item.id);
                }
              }
              
            })*/
            this.designation.forEach(item => {
                for (var i = 0; i < this.bottleType.length; i++) {
                    if (item == this.bottleType[i].designation) {
                        bottleTypes.push(this.bottleType[i].id);
                    }
                }
            });
            var date = new Date();
            var bottle = {
                bottleType: bottleTypes,
                stock: this.stockRet.id,
                //date : date,
                barcodes: this.barcodes,
                rack: this.rack,
                empty: 0
            };
            this.upcv3Service.addToStockMob(bottle, this.token).subscribe(res => {
                this.modal.dismiss();
            });
        }
        else if (this.mode == 0) {
            var bottleDel = {
                barcodes: this.barcodes
            };
            this.upcv3Service.returnFourn(bottleDel, this.token).subscribe(res => {
                //alert (JSON.stringify(res));
                this.modal.dismiss();
            });
        }
        else if (this.mode == 2 || this.mode == 3) {
            //add empty bottle
            var bottleTypes = [];
            /*this.bottleType.forEach(item=>{
              for(var i = 0;i<this.designation.length;i++){
                
                if (item.designation == this.designation[i]){
                  bottleTypes.push(item.id);
                }
              }
              
            })*/
            this.designation.forEach(item => {
                for (var i = 0; i < this.bottleType.length; i++) {
                    if (item == this.bottleType[i].designation) {
                        bottleTypes.push(this.bottleType[i].id);
                    }
                }
            });
            var date = new Date();
            var bottle = {
                bottleType: bottleTypes,
                stock: this.stockRet.id,
                //date : date,
                barcodes: this.barcodes,
                rack: this.rack,
                empty: 1
            };
            this.upcv3Service.addToStockMob(bottle, this.token).subscribe(res => {
                this.modal.dismiss();
            });
        }
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
                        this.B2String.push("Messer (" + res.text + ") 37.5 kg");
                        this.B2Desig.push("37.5");
                        this.B2IsMesser.push(true);
                    }
                    else {
                        this.B2String.push("Air Liquide (" + res.text + ")");
                        this.B2Desig.push("34");
                        this.B2IsMesser.push(false);
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
                    if (/^\d+$/.test(res.text)) {
                        this.B1String.push("Messer (" + res.text + ") 37.5 kg");
                        this.B1Desig.push("37.5");
                        this.B1IsMesser.push(true);
                    }
                    else {
                        this.B1String.push("Air Liquide (" + res.text + ")");
                        this.B1Desig.push("34");
                        this.B1IsMesser.push(false);
                    }
                    this.B1.push(res.text);
                }
            }
            else {
                alert("Vous avez déjà scanner la bouteille !");
            }
        });
    }
    getUpcStateConnexion() {
        this.platform.ready().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_8__["UPCModbus"](state => {
                this.ngZone.run(() => {
                    // Force refresh UI
                    //this.readDiffusionParameters();
                });
            });
            yield this.upc.client.connect();
            setTimeout(() => {
                this.upc.client.getStringFromHoldingRegister(40045, 10).then(res => {
                    //this.global.ssid = res;
                    //this.global.isBBAM = true;
                    this.cd.detectChanges();
                });
            }, 2000);
        }));
    }
    onSynchroCeint() {
        this.upc.client.setStringInHoldingRegister(this.addressage, this.B1[this.i].substr(0, 8)).then(res => {
            //this.booleanB1 = true;
            this.addressage += 10;
            this.i++;
            alert("Ecriture sur l'upc en B1, état : " + JSON.stringify(res));
        }).catch(error => {
            alert(JSON.stringify(error));
        });
        this.upc.client.setStringInHoldingRegister(this.addressage2, this.B2[this.y].substr(0, 8)).then(res => {
            //this.booleanB2 = true;
            this.addressage2 += 10;
            this.y++;
            alert("Ecriture sur l'upc en B2, état : " + JSON.stringify(res));
        }).catch(error => {
            alert(JSON.stringify(error));
        });
    }
};
AddbottlemodalPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AddbottlemodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addbottlemodal',
        template: __webpack_require__(/*! raw-loader!./addbottlemodal.page.html */ "./node_modules/raw-loader/index.js!./src/app/addbottlemodal/addbottlemodal.page.html"),
        styles: [__webpack_require__(/*! ./addbottlemodal.page.scss */ "./src/app/addbottlemodal/addbottlemodal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _api_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], AddbottlemodalPage);



/***/ })

}]);
//# sourceMappingURL=default~addbottlemodal-addbottlemodal-module~optionbottle-optionbottle-module~retfournmodal-retfourn~a03ae8d9-es2015.js.map