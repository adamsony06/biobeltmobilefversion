(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addbottleceint-addbottleceint-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addbottleceint/addbottleceint.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addbottleceint/addbottleceint.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n   \n    </ion-buttons>\n    \n    <ion-title>{{stockRet}}</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <!--<ion-select placeholder=\"Type de bouteilles\">\n          <ion-select-option *ngFor=\"let bottle of listBottles\">\n            {{bottle.brand+\" \"+bottle.designation.toFixed(2)+\" kg\"}}\n          </ion-select-option>\n        </ion-select>-->\n      <h1 style=\"text-align: center;\" (click)=\"changeRes(1);\" [ngClass]=\"{'bgreen' : highlightB1}\">\n        B1\n      </h1>\n      \n      </ion-col>\n      \n      <ion-col size=\"6\">\n        <h1 style=\"text-align: center;\" (click)=\"changeRes(2);\" [ngClass]=\"{'bgreen' : highlightB2}\">\n          B2\n        </h1>  \n      </ion-col>\n\n      <ion-col size=\"12\" style=\"border-top-right-radius: 80px 80px;border-top-left-radius: 80px 80px;\">\n          <div style=\"text-align: center;\">Etat du Contenu</div>\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px;\">\n        <div style=\"font-size :x-large;text-align: center;\" *ngIf=\"statusB1 == 0\">VIDE</div>\n        <div style=\"font-size :x-large;text-align: center;\" *ngIf=\"statusB1 == 1\">RESIDUEL</div>\n        <div style=\"font-size :x-large;text-align: center;\" *ngIf=\"statusB1 == 2\">DISPONIBLE</div>\n\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px;\">\n        <div style=\"font-size :x-large;text-align: center;\" *ngIf=\"statusB2 == 0\">VIDE</div>\n        <div style=\"font-size :x-large;text-align: center;\" *ngIf=\"statusB2 == 1\">RESIDUEL</div>\n        <div style=\"font-size :x-large;text-align: center;\" *ngIf=\"statusB2 == 2\">DISPONIBLE</div>\n      </ion-col>\n\n      <ion-col size=\"12\" style=\"border-top-right-radius: 80px 80px;border-top-left-radius: 80px 80px;background-color:green;\">\n        <div style=\"text-align: center;\">Contenu Mesuré</div>\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-bottom-left-radius: 80px 80px;background-color:green;\">\n      <div id=\"one\" style=\"font-size :x-large;text-align: center;\"><div id=\"two\" style=\"display:inline-block;\"><ion-input type=\"number\" [(ngModel)]=\"contenuB1\" (ngModelChange)=\"changeContB1();\"></ion-input></div><span id=\"three\">kg</span></div>\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-bottom-right-radius: 80px 80px;background-color:green;\">\n        <div id=\"one\" class=\"ion-float-right\" style=\"font-size :x-large;text-align: center;\"><ion-input id=\"two\" type=\"number\" [(ngModel)]=\"contenuB2\" (ngModelChange)=\"changeContB2();\"></ion-input><span id=\"three\">kg</span></div>\n      </ion-col>\n      <ion-col size=\"12\"><ion-button (click)=\"onRemove();\" color=\"danger\" size=\"block\">\n        Enlever une bouteille \n      </ion-button></ion-col>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <ion-list>\n          \n          <div *ngFor=\"let b1 of B1String;let i = index;\">\n          <ion-item>\n            <ion-label style=\"font-size: small!important;\" class=\"ion-text-wrap\">{{b1}}</ion-label>\n            <div *ngIf=\"B1Desig.length > 0\">\n            <ion-select *ngIf=\"!B1IsMesser[i]\" (ionChange)=\"onChangeDesigB1(i);\" [(ngModel)]=\"B1Desig[i]\" placeholder=\"Designation (en kg)\">\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\n             \n            </ion-select>\n          </div>\n          \n            \n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\n          </ion-item>\n        </div>\n        <ion-item (click)=\"onScanBarCodeB1();\">\n          <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B1\n        </ion-item>  \n        </ion-list>\n        <!--<ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\n          Tout Effacer\n        </ion-button>-->\n      </ion-col>\n      <ion-col size=\"6\" style=\"border-right: solid 3px green;\">\n        <ion-list>\n          \n          <div *ngFor=\"let b2 of B2String;let i = index;\">\n          <ion-item>\n            <ion-label style=\"font-size: small!important;\" class=\"ion-text-wrap\">{{b2}}</ion-label>\n            <div *ngIf=\"B2Desig.length > 0\">\n\n            \n            <ion-select *ngIf=\"!B2IsMesser[i]\" (ionChange)=\"onChangeDesigB2(i);\" [(ngModel)]=\"B2Desig[i]\" placeholder=\"Designation (en kg)\">\n              <ion-select-option value=\"10\">10 kg</ion-select-option>\n              <ion-select-option value=\"20\">20 kg</ion-select-option>\n              <ion-select-option value=\"22.6796\">22,68 kg</ion-select-option>\n              <ion-select-option value=\"34\">34 kg</ion-select-option>\n            </ion-select>\n          </div>\n          \n            \n            <!--<ion-badge color=\"primary\" slot=\"end\">{{'x'+b1.qty}}</ion-badge>-->\n          </ion-item>\n        </div>\n        <ion-item (click)=\"onScanBarCodeB2();\">\n          <ion-icon color=\"primary\" name=\"add-circle\"></ion-icon>  Ajouter une Bouteille à B2\n        </ion-item>\n        </ion-list>\n        <!--<ion-button color=\"danger\" (click)=\"deleteB1();\" size=\"block\">\n          Tout Effacer\n        </ion-button>-->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n\n<!--<ion-footer>\n  <ion-button (click)=\"onSynchroCeint();\" expand=\"block\" > Synchroniser avec le serveur </ion-button>\n\n</ion-footer>-->\n"

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

module.exports = ".item.item-trns {\n  border-color: rgba(0, 0, 0, 0);\n  background-color: rgba(0, 0, 0, 0);\n  color: white;\n}\n\n.bgreen {\n  background-color: green;\n}\n\n#one {\n  width: 200px;\n}\n\n#two {\n  display: inline-block;\n  position: relative;\n  left: 0;\n  width: 100px;\n  height: 100px;\n}\n\n#three {\n  display: inline-block;\n  position: relative;\n  left: 0;\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJtYW5kL0Rlc2t0b3AvYmlvYmVsdG1vYmlsZS9zcmMvYXBwL2FkZGJvdHRsZWNlaW50L2FkZGJvdHRsZWNlaW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkYm90dGxlY2VpbnQvYWRkYm90dGxlY2VpbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7QUNDRDs7QURDQTtFQUNDLHVCQUFBO0FDRUQ7O0FEQUE7RUFDQyxZQUFBO0FDR0Q7O0FEQ0E7RUFDQyxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFBYyxhQUFBO0FDRWY7O0FEQ0E7RUFDQyxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFBYyxhQUFBO0FDRWYiLCJmaWxlIjoic3JjL2FwcC9hZGRib3R0bGVjZWludC9hZGRib3R0bGVjZWludC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS5pdGVtLXRybnMge1xuXHRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG5cdGNvbG9yOiB3aGl0ZTsgXG59XG4uYmdyZWVuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4jb25lIHtcblx0d2lkdGg6IDIwMHB4O1xuXHQvL2JhY2tncm91bmQ6ICNjY2M7XG59XG5cbiN0d28ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdC8vYmFja2dyb3VuZDogYmx1ZTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwcHg7IGhlaWdodDogMTAwcHg7XG59XG5cbiN0aHJlZSB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Ly9iYWNrZ3JvdW5kOiByZWQ7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4O1xufSIsIi5pdGVtLml0ZW0tdHJucyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbiNvbmUge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbiN0d28ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4jdGhyZWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */"

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
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");










var AddbottleceintPage = /** @class */ (function () {
    function AddbottleceintPage(platform, ngZone, network, scan, modal, loadingCTRL, cd, upcv3Service, storage, hotspot, global) {
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
        this.B1Ad = [];
        this.B1String = [];
        this.B1Desig = [];
        this.B1IsMesser = [];
        this.B2 = [];
        this.B2Ad = [];
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
        this.highlightB1 = false;
        this.highlightB2 = false;
        this.ssid = "";
    }
    //Mise à jour puis wipe puis test 
    //Retest 
    //Wipe + Sauvegarde d'offset pour UPC
    AddbottleceintPage.prototype.ngOnInit = function () {
        var _this = this;
        this.addedBottleB1.date = new Date().toISOString().substr(0, 16);
        this.addedBottleB1.objet = "Remplissage";
        this.addedBottleB2.date = new Date().toISOString().substr(0, 16);
        this.addedBottleB2.objet = "Remplissage";
        this.removedBottle.date = new Date().toISOString().substr(0, 16);
        this.platform.ready().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.get("token").then(function (val) {
                    _this.token = val;
                });
                /*if(this.platform.is('ios')){
                  WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async res=>{
                    
                    var loading = await this.loadingCTRL.create({
                      message : "Connection à l'UPC en cours...",
                      duration : 10000
                    })
                    loading.present();
                   
                    this.global.isBBAM = true;
                    this.platform.ready().then(
                      async readySource => {
                        if (readySource == 'cordova') {
                          
                          this.upc = new UPCModbus(state => {
                            this.ngZone.run(() => {
                              // Force refresh UI
                              
                                
                                //this.readDiffusionParameters();
                              
                            });
                          });
                          
                          await this.upc.client.connect();
                          this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                            this.stockRet = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.cd.detectChanges();
                            loading.dismiss();
                          }).catch(err=>{
                            
                          })
                          //40157 40165
                          this.upc.client.readHoldingRegisters(40157,10).then(res=>{
                            this.contenuB1 = this.upc.client.registerToFloat([res[0],res[1]]);
                            this.contenuB2 = this.upc.client.registerToFloat([res[8],res[9]]);
                          })
                         await setTimeout(async ()=>{
                            //this.ngZone.run(()=>{
                              this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                                this.stockRet = res.replace(/[^a-zA-Z0-9]/g,'');
                                this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g,'');
                                this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                                this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g,'');
                                this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                                this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                                this.cd.detectChanges();
                                loading.dismiss();
                              }).catch(err=>{
                                
                              })
                              this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                                this.global.ssid = res;
                              })
                              this.upc.client.readHoldingRegisters(41119,100).then(res=>{
                                var b1list = [];
                                var b11reg = [res[0],res[1],res[2],res[3],res[4],res[5],res[6],res[7],res[8],res[9]];
                                b1list.push(this.upc.client.registerToString(b11reg));
        
                                var b12reg = [res[10],res[11],res[12],res[13],res[14],res[15],res[16],res[17],res[18],res[19]];
                                b1list.push(this.upc.client.registerToString(b12reg));
        
                                var b13reg = [res[20],res[21],res[22],res[23],res[24],res[25],res[26],res[27],res[28],res[29]];
                                b1list.push(this.upc.client.registerToString(b13reg));
        
                                var b14reg = [res[30],res[31],res[32],res[33],res[34],res[35],res[36],res[37],res[38],res[39]];
                                b1list.push(this.upc.client.registerToString(b14reg));
        
                                var b15reg = [res[40],res[41],res[42],res[43],res[44],res[45],res[46],res[47],res[48],res[49]];
                                b1list.push(this.upc.client.registerToString(b15reg));
                                for (var i =0;i<b1list.length;i++){
                                  if (/^\d+$/.test(b1list[i].substr(0,8))){
                                    
                                    this.B1String.push("Messer ("+b1list[i].substr(0,8)+") 37.5 kg");
                                    this.B1Desig.push("37.5");
                                    this.B1IsMesser.push(true);
                                    this.addressage+=10;
                                    this.B1.push(b1list[i].substr(0,8));
                                  } else if(/^[a-z0-9]+$/i.test(b1list[i].substr(0,7))){
                                    var kg = "";
                                    
                                    if(b1list[i].charAt(7) == "0"){
                                      kg = "10 kg";
                                      this.B1Desig.push("10");
                                    }
                                    if (b1list[i].charAt(7) == "1"){
                                      kg = "20 kg";
                                      this.B1Desig.push("20");
                                    }
                                    if (b1list[i].charAt(7) == "2"){
                                      kg = "22.6796 kg";
                                      this.B1Desig.push("22.6796");
                                    }
                                    if (b1list[i].charAt(7)=="3"){
                                      kg = "34 kg";
                                      this.B1Desig.push("34");
                                    }
                                    this.B1String.push("Air liquide ("+b1list[i].substr(0,7)+") "+kg);
                                    this.B1IsMesser.push(false);
                                    this.addressage+=10;
                                    this.B1.push(b1list[i].substr(0,7));
                                    this.cd.detectChanges();
                                  }
                                  
                                }
                                var b2list = [];
                                  var b21reg = [res[50],res[51],res[52],res[53],res[54],res[55],res[56],res[57],res[58],res[59]];
                                  b2list.push(this.upc.client.registerToString(b21reg));
        
                                  var b22reg = [res[60],res[61],res[62],res[63],res[64],res[65],res[66],res[67],res[68],res[69]];
                                  b2list.push(this.upc.client.registerToString(b22reg));
        
                                  var b23reg = [res[70],res[71],res[72],res[73],res[74],res[75],res[76],res[77],res[78],res[79]];
                                  b2list.push(this.upc.client.registerToString(b23reg));
        
                                  var b24reg = [res[80],res[81],res[82],res[83],res[84],res[85],res[86],res[87],res[88],res[89]];
                                  b2list.push(this.upc.client.registerToString(b24reg));
        
                                  var b25reg = [res[90],res[91],res[92],res[93],res[94],res[95],res[96],res[97],res[98],res[99]];
                                  b2list.push(this.upc.client.registerToString(b25reg));
        
                                  for (var j = 0;j<b2list.length;j++){
                                    if (/^\d+$/.test(b2list[j].substr(0,8))){
                                    
                                      this.B2String.push("Messer ("+b2list[j].substr(0,8)+") 37.5 kg");
                                      this.B2Desig.push("37.5");
                                      this.B2IsMesser.push(true);
                                      //this.addressage+=10;
                                      this.B2.push(b2list[j].substr(0,8));
                                    } else if(/^[a-z0-9]+$/i.test(b2list[j].substr(0,7))){
                                      var kg = "";
                                      
                                      if(b2list[j].charAt(7) == "0"){
                                        kg = "10 kg";
                                        this.B2Desig.push("10");
                                      }
                                      if (b2list[j].charAt(7) == "1"){
                                        kg = "20 kg";
                                        this.B2Desig.push("20");
                                      }
                                      if (b2list[j].charAt(7) == "2"){
                                        kg = "22.6796 kg";
                                        this.B2Desig.push("22.6796");
                                      }
                                      if (b2list[j].charAt(7)=="3"){
                                        kg = "34 kg";
                                        this.B2Desig.push("34");
                                      }
                                      this.B2String.push("Air liquide ("+b2list[j].substr(0,7)+") "+kg);
                                      this.B2IsMesser.push(false);
                                      //this.addressage+=10;
                                      this.B2.push(b2list[j].substr(0,7));
                                      this.cd.detectChanges();
                                    }
                                  }
                              })
                              
                              
                            //})
                            
                            //alert(JSON.stringify(this.upc));
                          },5000)
                            //})
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
                /*}
              }
            );
          }).catch(err=>{
            this.stockRet = "Erreur lors de la connexion UPC";
            alert("La connexion a echoué veuillez vous approcher de l'UPC et réessayer !");
          })
        }*/
                //else if(this.platform.is("android")) {
                /*var loading = await this.loadingCTRL.create({
                  message : "Connection à l'UPC en cours...",
                  duration : 10000
                })
                loading.present();*/
                //this.hotspot.isWifiOn().then(async res=>{
                /*if(res == false){
                  await this.hotspot.toggleWifi();
    
                }*/
                //await this.hotspot.connectToWifi("BBAM","BioBeltService").then(res=>{
                this.global.isBBAM = true;
                this.platform.ready().then(function (readySource) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(readySource == 'cordova')) return [3 /*break*/, 3];
                                this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_2__["UPCModbus"](function (state) {
                                    _this.ngZone.run(function () {
                                        // Force refresh UI
                                        //this.readDiffusionParameters();
                                    });
                                });
                                return [4 /*yield*/, this.upc.client.connect()];
                            case 1:
                                _a.sent();
                                this.upc.client.getStringFromHoldingRegister(40001, 10).then(function (res) {
                                    _this.stockRet = res.replace(/[^a-zA-Z0-9]/g, '');
                                    _this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g, '');
                                    _this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                    _this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g, '');
                                    _this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                    _this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                    _this.cd.detectChanges();
                                    //loading.dismiss();
                                }).catch(function (err) {
                                });
                                return [4 /*yield*/, setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            this.ngZone.run(function () {
                                                _this.upc.client.getFloatFromHoldingRegister(40157).then(function (res) {
                                                    _this.contenuB1 = Math.round((res * 0.001974) * 100) / 100;
                                                });
                                                _this.upc.client.getFloatFromHoldingRegister(40165).then(function (res) {
                                                    _this.contenuB2 = Math.round((res * 0.001974) * 100) / 100;
                                                });
                                                _this.upc.client.getIntFromHoldingRegister(40381, 1).then(function (res) {
                                                    _this.statusB1 = res;
                                                });
                                                _this.upc.client.getIntFromHoldingRegister(40150, 1).then(function (res) {
                                                    if (res == 1) {
                                                        _this.highlightB1 = true;
                                                        _this.highlightB2 = false;
                                                    }
                                                    else {
                                                        _this.highlightB1 = false;
                                                        _this.highlightB2 = true;
                                                    }
                                                });
                                                _this.upc.client.getIntFromHoldingRegister(40383, 1).then(function (res) {
                                                    _this.statusB2 = res;
                                                });
                                                _this.upc.client.getStringFromHoldingRegister(40001, 10).then(function (res) {
                                                    _this.stockRet = res.replace(/[^a-zA-Z0-9]/g, '');
                                                    _this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g, '');
                                                    _this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                                    _this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g, '');
                                                    _this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                                    _this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g, '');
                                                    _this.cd.detectChanges();
                                                    //loading.dismiss();
                                                }).catch(function (err) {
                                                });
                                                _this.upc.client.getStringFromHoldingRegister(40045, 10).then(function (res) {
                                                    _this.global.ssid = res;
                                                });
                                                for (var ad = 41119; ad <= 41159; ad += 10) {
                                                    _this.upc.client.getStringFromHoldingRegister(ad, 10).then(function (res) {
                                                        //alert(res);
                                                        if (/^\d+$/.test(res.substr(0, 8))) {
                                                            _this.B1String.push("Messer (" + res.substr(0, 8) + ") 37.5 kg");
                                                            _this.B1Desig.push("37.5");
                                                            _this.B1IsMesser.push(true);
                                                            _this.B1Ad.push(res.substr(0, 8));
                                                            _this.addressage += 10;
                                                            _this.B1.push(res.substr(0, 8));
                                                        }
                                                        else if (/^[a-z0-9]+$/i.test(res.substr(0, 7))) {
                                                            var kg = "";
                                                            if (res.charAt(7) == "0") {
                                                                kg = "10 kg";
                                                                _this.B1Desig.push("10");
                                                            }
                                                            if (res.charAt(7) == "1") {
                                                                kg = "20 kg";
                                                                _this.B1Desig.push("20");
                                                            }
                                                            if (res.charAt(7) == "2") {
                                                                kg = "50 lb";
                                                                _this.B1Desig.push("22.6796");
                                                            }
                                                            if (res.charAt(7) == "3") {
                                                                kg = "34 kg";
                                                                _this.B1Desig.push("34");
                                                            }
                                                            _this.B1String.push("Air liquide (" + res.substr(0, 7) + ") " + kg);
                                                            _this.B1.push(res.substr(0, 7));
                                                            _this.B1IsMesser.push(false);
                                                            _this.B1Ad.push(res.substr(0, 7));
                                                            _this.addressage += 10;
                                                            _this.B1.push(res.substr(0, 7));
                                                        }
                                                        else {
                                                            _this.B1Ad.push("");
                                                        }
                                                        _this.cd.detectChanges();
                                                    }).catch(function (err) {
                                                    }); //41199
                                                }
                                                for (var ad2 = 41169; ad2 <= 41208; ad2 += 10) {
                                                    _this.upc.client.getStringFromHoldingRegister(ad2, 10).then(function (res) {
                                                        if (/^\d+$/.test(res.substr(0, 8))) {
                                                            _this.B2String.push("Messer (" + res.substr(0, 8) + ") 37.5 kg");
                                                            _this.B2Desig.push("37.5");
                                                            _this.B2IsMesser.push(true);
                                                            _this.B2Ad.push(res.substr(0, 8));
                                                            _this.addressage2 += 10;
                                                            _this.B2.push(res.substr(0, 8));
                                                        }
                                                        else if (/^[a-z0-9]+$/i.test(res.substr(0, 7))) {
                                                            var kg = "";
                                                            if (res.charAt(7) == "0") {
                                                                kg = "10 kg";
                                                                _this.B2Desig.push("10");
                                                            }
                                                            if (res.charAt(7) == "1") {
                                                                kg = "20 kg";
                                                                _this.B2Desig.push("20");
                                                            }
                                                            if (res.charAt(7) == "2") {
                                                                kg = "50 lb";
                                                                _this.B2Desig.push("22.6796");
                                                            }
                                                            if (res.charAt(7) == "3") {
                                                                kg = "34 kg";
                                                                _this.B2Desig.push("34");
                                                            }
                                                            _this.B2String.push("Air liquide (" + res.substr(0, 7) + ") " + kg);
                                                            _this.B2IsMesser.push(false);
                                                            _this.B2Ad.push(res.substr(0, 7));
                                                            _this.addressage2 += 10;
                                                            _this.B2.push(res.substr(0, 7));
                                                        }
                                                        else {
                                                            _this.B2Ad.push("");
                                                        }
                                                        _this.cd.detectChanges();
                                                    }).catch(function (err) {
                                                    });
                                                }
                                            });
                                            return [2 /*return*/];
                                        });
                                    }); }, 1000)
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
                                ];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
    };
    AddbottleceintPage.prototype.onRemove = function () {
        var _this = this;
        this.scan.scan().then(function (res) {
            var scanned = false;
            var indexB1 = -1;
            var indexB2 = -1;
            var indexB1front = -1;
            var indexB2front = -1;
            var indexB1Ad = -1;
            var indexB2Ad = -1;
            _this.B1.forEach(function (item, index) {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB1 = index;
                }
            });
            _this.B1String.forEach(function (item, index) {
                if (item.includes(res.text)) {
                    indexB1front = index;
                    scanned = true;
                }
            });
            _this.B1Ad.forEach(function (item, index) {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB1Ad = index;
                }
            });
            _this.B2Ad.forEach(function (item, index) {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB2Ad = index;
                }
            });
            _this.B2.forEach(function (item, index) {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB2 = index;
                }
            });
            _this.B2String.forEach(function (item, index) {
                if (item.includes(res.text)) {
                    scanned = true;
                    indexB2front = index;
                }
            });
            if (scanned) {
                _this.removedBottle.barcodes.push(res.text);
                if (indexB1 >= 0) {
                    var addresse = indexB1Ad * 10 + 41119;
                    _this.upc.client.setStringInHoldingRegister(addresse, "\0").then(function (res) {
                        //this.B1.splice(indexB1,1);
                        _this.B1Desig.splice(indexB1front, 1);
                        _this.B1IsMesser.splice(indexB1front, 1);
                        _this.B1String.splice(indexB1front, 1);
                        _this.addressage -= 10;
                        _this.cd.detectChanges();
                    }).catch(function (err) {
                        alert(JSON.stringify(err));
                    });
                }
                if (indexB2 >= 0) {
                    var adresse = indexB2Ad * 10 + 41169;
                    _this.upc.client.setStringInHoldingRegister(adresse, "\0").then(function (res) {
                        //this.B2.splice(indexB2,1);
                        _this.B2Desig.splice(indexB2front, 1);
                        _this.B2IsMesser.splice(indexB2front, 1);
                        _this.B2String.splice(indexB2front, 1);
                        _this.addressage2 -= 10;
                        _this.cd.detectChanges();
                    }).catch(function (err) {
                        alert(JSON.stringify(err));
                    });
                }
                if (_this.B1Desig.length == 0) {
                    _this.B1Ad = [];
                }
                if (_this.B2Desig.length == 0) {
                    _this.B2Ad = [];
                }
            }
            else {
                alert("La bouteille n'est pas assigné à cette ceinture");
            }
        }).catch(function (err) {
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
        this.ngOnInit();
        $event.target.complete();
    };
    AddbottleceintPage.prototype.onChangeDesigB2 = function (i) {
        var adresse = i * 10 + 41169;
        alert(adresse);
        var index;
        this.addedBottleB2.kg[i] = this.B2Desig[i];
        this.contenuB2 = 0;
        for (var j = 0; j < this.addedBottleB2.kg; j++) {
            this.contenuB2 += parseFloat(this.addedBottleB2.kg[j]);
        }
        if (this.B2Desig[i] == "10") {
            index = "0";
            //this.contenuB2+=10;
            this.B2String[i] = "Air liquide (" + this.B2[i].substr(0, 7) + ") " + this.B2Desig[i] + " kg";
        }
        if (this.B2Desig[i] == "20") {
            index = "1";
            //this.contenuB2+= 20;
            this.B2String[i] = "Air liquide (" + this.B2[i].substr(0, 7) + ") " + this.B2Desig[i] + " kg";
        }
        if (this.B2Desig[i] == "22.6796") {
            index = "2";
            //this.contenuB2 += 22.6796;
            this.B2String[i] = "Air liquide (" + this.B2[i].substr(0, 7) + ") 50 lb";
        }
        if (this.B2Desig[i] == "34") {
            //this.contenuB2 += 34;
            index = "3";
            this.B2String[i] = "Air liquide (" + this.B2[i].substr(0, 7) + ") " + this.B2Desig[i] + " kg";
        }
        this.upc.client.setStringInHoldingRegister(adresse, this.B2[i] + index).then(function (res) {
        }).catch(function (err) {
            alert("Erreur de réécriture, veuillez réessayer");
        });
    };
    AddbottleceintPage.prototype.removeB1 = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                for (i = 41119; i <= 41159; i += 10) {
                    this.upc.client.setStringInHoldingRegister(i, "\0").then(function (res) {
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
            var i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                for (i = 41169; i <= 41208; i += 10) {
                    this.upc.client.setStringInHoldingRegister(i, "\0").then(function (res) {
                    });
                }
                resolve();
                return [2 /*return*/];
            });
        }); });
    };
    AddbottleceintPage.prototype.onChangeDesigB1 = function (i) {
        var adresse = i * 10 + 41119;
        var index;
        this.addedBottleB1.kg[i] = this.B1Desig[i];
        this.contenuB1 = 0;
        for (var j = 0; j < this.addedBottleB1.kg.length; j++) {
            this.contenuB1 += parseFloat(this.addedBottleB1.kg[j]);
        }
        if (this.B1Desig[i] == "10") {
            index = "0";
            this.B1String[i] = "Air liquide (" + this.B1[i].substr(0, 7) + ") " + this.B1Desig[i] + " kg";
        }
        if (this.B1Desig[i] == "20") {
            index = "1";
            this.B1String[i] = "Air liquide (" + this.B1[i].substr(0, 7) + ") " + this.B1Desig[i] + " kg";
        }
        if (this.B1Desig[i] == "22.6796") {
            index = "2";
            this.B1String[i] = "Air liquide (" + this.B1[i].substr(0, 7) + ") 50 lb";
        }
        if (this.B1Desig[i] == "34") {
            index = "3";
            this.B1String[i] = "Air liquide (" + this.B1[i].substr(0, 7) + ") " + this.B1Desig[i] + " kg";
        }
        if (this.B1Desig[i] == "37.5") {
            index = "";
            this.B1String[i] = "Messer (" + this.B1[i].substr(0, 7) + ") " + this.B1Desig[i] + " kg";
        }
        this.upc.client.setStringInHoldingRegister(adresse, this.B1[i] + index).then(function (res) {
        }).catch(function (err) {
            alert("Erreur de réécriture, veuillez réessayer");
        });
    };
    AddbottleceintPage.prototype.onScanBarCodeB2 = function () {
        var _this = this;
        this.scan.scan().then(function (res) {
            var isScanned = false;
            _this.B1.forEach(function (item) {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            _this.B2.forEach(function (item) {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            if (!isScanned) {
                if (_this.B1Desig.length == 0) {
                    _this.B1Ad = [];
                }
                if (_this.B2Desig.length == 0) {
                    _this.B2Ad = [];
                }
                if (res.text != "") {
                    if (/^\d+$/.test(res.text)) {
                        _this.contenuB2 += 37.5;
                        _this.upc.client.setFloatInHoldingRegister(40386, _this.contenuB2).then(function (res) {
                        }).catch(function (err) {
                            _this.contenuB2 -= 37.5;
                            alert("Veuillez rescanner la bouteille, l'enregistrement ne s'est pas bien fait !");
                        });
                        var text = res.text;
                        _this.upc.client.setStringInHoldingRegister(_this.addressage2, res.text).then(function (res) {
                            _this.B2String.push("Messer (" + text + ") 37.5 kg");
                            _this.B2Ad.push(text);
                            _this.B2Desig.push("37.5");
                            _this.addedBottleB2.kg.push("37.5");
                            _this.B2IsMesser.push(true);
                            _this.addedBottleB2.barcodes.push(text);
                            _this.addedBottleB2.reserve = "B2";
                            localStorage.setItem("bottleB2", JSON.stringify(_this.addedBottleB2));
                            _this.addressage2 += 10;
                            _this.cd.detectChanges();
                        }).catch(function (err) {
                            alert(JSON.stringify(err));
                        });
                    }
                    else {
                        _this.contenuB2 += 34;
                        var text = res.text;
                        _this.upc.client.setFloatInHoldingRegister(40386, _this.contenuB2).then(function (res) {
                        }).catch(function (err) {
                            _this.contenuB2 -= 34;
                            alert("Veuillez rescanner la bouteille, l'enregistrement ne s'est pas bien fait !");
                        });
                        _this.upc.client.setStringInHoldingRegister(_this.addressage2, text + "3").then(function (res) {
                            _this.B2String.push("Air Liquide (" + text + ") 34 kg");
                            _this.B2Ad.push(text);
                            _this.B2Desig.push("34");
                            _this.addedBottleB2.kg.push("34");
                            _this.B2IsMesser.push(false);
                            _this.addedBottleB2.barcodes.push(text);
                            _this.addedBottleB2.reserve = "B2";
                            localStorage.setItem("bottleB2", JSON.stringify(_this.addedBottleB2));
                            _this.addressage2 += 10;
                            _this.cd.detectChanges();
                        }).catch(function (err) {
                            alert(JSON.stringify(err));
                        });
                    }
                    _this.B2.push(res.text);
                }
            }
            else {
                alert("Vous avez déjà scanner la bouteille !");
            }
        });
    };
    AddbottleceintPage.prototype.onScanBarCodeB1 = function () {
        var _this = this;
        this.scan.scan().then(function (res) {
            var isScanned = false;
            _this.B1.forEach(function (item) {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            _this.B2.forEach(function (item) {
                if (item == res.text) {
                    isScanned = true;
                }
            });
            if (!isScanned) {
                if (_this.B1Desig.length == 0) {
                    _this.B1Ad = [];
                }
                if (_this.B2Desig.length == 0) {
                    _this.B2Ad = [];
                }
                if (res.text != "") {
                    //alert(res.text.substr(0,8))
                    //Synchro plan 
                    if (/^\d+$/.test(res.text)) {
                        _this.contenuB1 += 37.5;
                        /*this.upc.client.setFloatInHoldingRegister(40384,this.contenuB1).then(res=>{
            
                        }).catch(err=>{
                          this.contenuB1 -= 37.5;
                          alert("Veuillez rescanner la bouteille !");
                        })*/
                        var text = res.text;
                        _this.upc.client.setStringInHoldingRegister(_this.addressage, res.text).then(function (res) {
                            _this.B1String.push("Messer (" + text + ") 37.5 kg");
                            _this.B1Ad.push(text);
                            _this.B1Desig.push("37.5");
                            _this.addedBottleB1.kg.push("37.5");
                            _this.B1IsMesser.push(true);
                            _this.addedBottleB1.barcodes.push(text);
                            _this.B1.push(text);
                            _this.addedBottleB1.reserve = "B1";
                            localStorage.setItem("bottleB1", JSON.stringify(_this.addedBottleB1));
                            _this.addressage += 10;
                            _this.cd.detectChanges();
                        }).catch(function (err) {
                            alert(JSON.stringify(err));
                        });
                    }
                    else {
                        _this.contenuB1 += 34;
                        /*this.upc.client.setFloatInHoldingRegister(40384,this.contenuB1).then(res=>{
            
                        }).catch(err=>{
                          alert("Veuillez rescanner la bouteille !");
                        })*/
                        var text = res.text;
                        _this.upc.client.setStringInHoldingRegister(_this.addressage, res.text + "3").then(function (res) {
                            _this.B1String.push("Air Liquide (" + text + ") 34 kg");
                            _this.B1Desig.push("34");
                            _this.B1Ad.push(text);
                            _this.addedBottleB1.kg.push("34");
                            _this.B1IsMesser.push(false);
                            _this.addedBottleB1.barcodes.push(text);
                            _this.addedBottleB1.reserve = "B1";
                            _this.B1.push(text);
                            localStorage.setItem("bottleB1", JSON.stringify(_this.addedBottleB1));
                            _this.addressage += 10;
                            _this.cd.detectChanges();
                        }).catch(function (err) {
                            alert(JSON.stringify(err));
                        });
                    }
                }
            }
            else {
                alert("Vous avez déjà scanner la bouteille !");
            }
        });
    };
    AddbottleceintPage.prototype.changeContB1 = function () {
        this.upc.client.setFloatInHoldingRegister(40157, this.contenuB1 / 0.001974).then(function (res) {
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    AddbottleceintPage.prototype.changeContB2 = function () {
        this.upc.client.setFloatInHoldingRegister(40165, this.contenuB2 / 0.001974).then(function (res) {
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    AddbottleceintPage.prototype.changeRes = function (i) {
        var _this = this;
        //this.upc.client.setIntInHoldingRegister(40011,1,2).then(res=>{
        this.upc.client.setIntInHoldingRegister(40150, 1, i).then(function (res) {
            if (i == 1) {
                _this.highlightB1 = true;
                _this.highlightB2 = false;
            }
            else if (i == 2) {
                _this.highlightB2 = true;
                _this.highlightB1 = false;
            }
            _this.cd.detectChanges();
        });
        //})
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
    AddbottleceintPage.ctorParameters = function () { return [
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
    ]; };
    AddbottleceintPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addbottleceint',
            template: __webpack_require__(/*! raw-loader!./addbottleceint.page.html */ "./node_modules/raw-loader/index.js!./src/app/addbottleceint/addbottleceint.page.html"),
            styles: [__webpack_require__(/*! ./addbottleceint.page.scss */ "./src/app/addbottleceint/addbottleceint.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_7__["Upcv3serviceService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_8__["Hotspot"], _api_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"]])
    ], AddbottleceintPage);
    return AddbottleceintPage;
}());



/***/ })

}]);
//# sourceMappingURL=addbottleceint-addbottleceint-module-es5.js.map