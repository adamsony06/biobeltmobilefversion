(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["controldiff-controldiff-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/controldiff/controldiff.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/controldiff/controldiff.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Contrôle Mini/Maxi</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row style=\"text-align: center;\">\n      <ion-col size=\"12\"><ion-button shape=\"round\" size=\"large\" [color]=\"colordif\" (click)=\"startstop();\">{{textdiff}}</ion-button></ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">Mesures</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label color=\"dark\">{{\"Intensité : \"+ intensity}}</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label color=\"dark\">{{\"Température : \"+temp.toFixed(2)+\" °C\"}}</ion-label>\n        </ion-col>\n        </ion-row>\n        <!--<ion-row>\n          <ion-col size=\"6\"></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight :bolder\"> Réf</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\" style=\"font-weight :bolder\">Mesure</ion-label></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"><ion-label color=\"dark\">Débit (nl/min):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{fluxref.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{flux.toFixed(3)}}</ion-label></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"><ion-label color=\"dark\">PE (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{inputref.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{input.toFixed(3)}}</ion-label></ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"><ion-label color=\"dark\">PS (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{output.toFixed(3)}}</ion-label></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\"><ion-label color=\"dark\">PS comp (Bars):</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{outputref.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{outputcomp.toFixed(3)}}</ion-label></ion-col>\n        </ion-row>-->\n      </ion-grid>\n    </ion-card-content>\n  </ion-card> \n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\"></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB1I1}\"><ion-label color=\"dark\">B1</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB2I1}\"><ion-label color=\"dark\">B2</ion-label></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">ref</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB1I1}\"><ion-label color=\"dark\">mes</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB2I1}\"><ion-label color=\"dark\">mes</ion-label></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"3\">PE (bar)</ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{inputref.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB1I1,'bgsuccess':backgroundPEB1Int1,'bgdanger':!backgroundPEB1Int1}\"><ion-label color=\"dark\">{{PEB1Int1.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB2I1,'bgsuccess':backgroundPEB2Int1,'bgdanger':!backgroundPEB2Int1}\"><ion-label color=\"dark\">{{PEB2Int1.toFixed(3)}}</ion-label></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"3\">PSc (bar)</ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{outputref.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB1I1,'bgsuccess':backgroundPSB1Int1,'bgdanger':!backgroundPSB1Int1,'bgwarning':bgpswarningB1Int1}\"><ion-label color=\"dark\">{{PSB1Int1.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB2I1,'bgsuccess':backgroundPSB2Int1,'bgdanger':!backgroundPSB2Int1,'bgwarning':bgpswarningB2Int1}\"><ion-label color=\"dark\">{{PSB2Int1.toFixed(3)}}</ion-label></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"3\">Deb (l/mn)</ion-col>\n          <ion-col size=\"3\"><ion-label color=\"dark\">{{fluxref.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB1I1,'bgsuccess':backgroundDebB1Int1,'bgdanger':!backgroundDebB1Int1, 'bgwarning':bgdebwarningB1Int1}\"><ion-label color=\"dark\">{{DebB1Int1.toFixed(3)}}</ion-label></ion-col>\n          <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB2I1,'bgsuccess':backgroundDebB2Int1,'bgdanger':!backgroundDebB2Int1, 'bgwarning':bgdebwarningB2Int1}\"><ion-label color=\"dark\">{{DebB2Int1.toFixed(3)}}</ion-label></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card> \n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"6\"></ion-col>\n        <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB1I10}\"><ion-label color=\"dark\">B1</ion-label></ion-col>\n        <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB2I10}\"><ion-label color=\"dark\">B2</ion-label></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\"></ion-col>\n        <ion-col size=\"3\"><ion-label color=\"dark\">ref</ion-label></ion-col>\n        <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB1I10}\"><ion-label color=\"dark\">mes</ion-label></ion-col>\n        <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB2I10}\"><ion-label color=\"dark\">mes</ion-label></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">PE (bar)</ion-col>\n        <ion-col size=\"3\"><ion-label color=\"dark\">{{inputref.toFixed(3)}}</ion-label></ion-col>\n        <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB1I10,'bgsuccess':backgroundPEB1Int10,'bgdanger':!backgroundPEB1Int10}\"><ion-label color=\"dark\">{{PEB1Int10.toFixed(3)}}</ion-label></ion-col>\n        <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB2I10,'bgsuccess':backgroundPEB2Int10,'bgdanger':!backgroundPEB2Int10}\"><ion-label color=\"dark\">{{PEB2Int10.toFixed(3)}}</ion-label></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">PSc (bar)</ion-col>\n        <ion-col size=\"3\"><ion-label color=\"dark\">{{outputref10.toFixed(3)}}</ion-label></ion-col>\n        <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB1I10,'bgsuccess':backgroundPSB1Int10,'bgdanger':!backgroundPSB1Int10,'bgwarning':bgpswarningB1Int10}\"><ion-label color=\"dark\">{{PSB1Int10.toFixed(3)}}</ion-label></ion-col>\n        <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB2I10,'bgsuccess':backgroundPSB2Int10,'bgdanger':!backgroundPSB2Int10,'bgwarning':bgpswarningB2Int10}\"><ion-label color=\"dark\">{{PSB2Int10.toFixed(3)}}</ion-label></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">Deb (l/mn)</ion-col>\n        <ion-col size=\"3\"><ion-label color=\"dark\">{{fluxref10.toFixed(3)}}</ion-label></ion-col>\n        <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB1I10,'bgsuccess':backgroundDebB1Int10,'bgdanger':!backgroundDebB1Int10, 'bgwarning':bgdebwarningB1Int10}\"><ion-label color=\"dark\">{{DebB1Int10.toFixed(3)}}</ion-label></ion-col>\n        <ion-col size=\"3\" [ngClass]=\"{'highlight' : highlightB2I10,'bgsuccess':backgroundDebB2Int10,'bgdanger':!backgroundDebB2Int10, 'bgwarning':bgdebwarningB2Int10}\"><ion-label color=\"dark\">{{DebB2Int10.toFixed(3)}}</ion-label></ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/controldiff/controldiff-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/controldiff/controldiff-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ControldiffPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControldiffPageRoutingModule", function() { return ControldiffPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _controldiff_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controldiff.page */ "./src/app/controldiff/controldiff.page.ts");




var routes = [
    {
        path: '',
        component: _controldiff_page__WEBPACK_IMPORTED_MODULE_3__["ControldiffPage"]
    }
];
var ControldiffPageRoutingModule = /** @class */ (function () {
    function ControldiffPageRoutingModule() {
    }
    ControldiffPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ControldiffPageRoutingModule);
    return ControldiffPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/controldiff/controldiff.module.ts":
/*!***************************************************!*\
  !*** ./src/app/controldiff/controldiff.module.ts ***!
  \***************************************************/
/*! exports provided: ControldiffPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControldiffPageModule", function() { return ControldiffPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _controldiff_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controldiff-routing.module */ "./src/app/controldiff/controldiff-routing.module.ts");
/* harmony import */ var _controldiff_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controldiff.page */ "./src/app/controldiff/controldiff.page.ts");







var ControldiffPageModule = /** @class */ (function () {
    function ControldiffPageModule() {
    }
    ControldiffPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _controldiff_routing_module__WEBPACK_IMPORTED_MODULE_5__["ControldiffPageRoutingModule"]
            ],
            declarations: [_controldiff_page__WEBPACK_IMPORTED_MODULE_6__["ControldiffPage"]]
        })
    ], ControldiffPageModule);
    return ControldiffPageModule;
}());



/***/ }),

/***/ "./src/app/controldiff/controldiff.page.scss":
/*!***************************************************!*\
  !*** ./src/app/controldiff/controldiff.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgdanger {\n  background-color: red;\n}\n\n.bgsuccess {\n  background-color: green;\n}\n\n.bgwarning {\n  background-color: yellow;\n}\n\n.highlight {\n  background-color: #FFFF00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJtYW5kL0Rlc2t0b3AvYmlvYmVsdG1vYmlsZS9zcmMvYXBwL2NvbnRyb2xkaWZmL2NvbnRyb2xkaWZmLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29udHJvbGRpZmYvY29udHJvbGRpZmYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx3QkFBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xkaWZmL2NvbnRyb2xkaWZmLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ2RhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uYmdzdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5iZ3dhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cbi5oaWdobGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGMDA7XG59IiwiLmJnZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uYmdzdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5iZ3dhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/controldiff/controldiff.page.ts":
/*!*************************************************!*\
  !*** ./src/app/controldiff/controldiff.page.ts ***!
  \*************************************************/
/*! exports provided: ControldiffPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControldiffPage", function() { return ControldiffPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/ngx/index.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/upcv3/upcmodbus */ "./src/app/model/upcv3/upcmodbus.ts");







var ControldiffPage = /** @class */ (function () {
    // Un seul message de succès Ecriture UPC, Ecriture Database 
    // Quantité CO2
    function ControldiffPage(platform, loadingCTRL, ngZone, network, hotspot, cd, global) {
        this.platform = platform;
        this.loadingCTRL = loadingCTRL;
        this.ngZone = ngZone;
        this.network = network;
        this.hotspot = hotspot;
        this.cd = cd;
        this.global = global;
        this.colordif = "primary";
        this.textdiff = "Start";
        this.intensity = 0;
        this.temp = 0;
        this.fluxref = 0;
        this.fluxref10 = 0;
        this.fluxmax = 0;
        this.flux = 0;
        this.backgroundDebB1Int1 = false;
        this.backgroundDebB1Int10 = false;
        this.backgroundDebB2Int1 = false;
        this.backgroundDebB2Int10 = false;
        this.bgdebwarningB1Int1 = false;
        this.bgdebwarningB1Int10 = false;
        this.bgdebwarningB2Int1 = false;
        this.bgdebwarningB2Int10 = false;
        this.backgroundPEB1Int1 = false;
        this.backgroundPEB1Int10 = false;
        this.backgroundPEB2Int1 = false;
        this.backgroundPEB2Int10 = false;
        this.inputref = 0;
        this.outputref10 = 0;
        this.input = 0;
        this.output = 0;
        this.outputref = 0;
        this.backgroundPSB1Int1 = false;
        this.backgroundPSB1Int10 = false;
        this.backgroundPSB2Int1 = false;
        this.backgroundPSB2Int10 = false;
        this.bgpswarningB1Int1 = false;
        this.bgpswarningB1Int10 = false;
        this.bgpswarningB2Int1 = false;
        this.bgpswarningB2Int10 = false;
        this.outputcomp = 0;
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
        this.highlightB1I1 = false;
        this.highlightB1I10 = false;
        this.highlightB2I1 = false;
        this.highlightB2I10 = false;
    }
    ControldiffPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.upc3s = JSON.parse(localStorage.getItem("upc3"));
                this.upc3s.forEach(function (item) {
                    //if(item.upcNameId == "Test4G1"){
                    _this.inputref = 2 + 0.8 * (item.generalParameters.upcTrapNum - 10) / 90;
                    //this.fluxref = 0.2;
                    //this.fluxref10 = 2;
                    _this.outputref = item.generalParameters.co2PresOutRef1 / 1000;
                    _this.outputref10 = item.generalParameters.co2PresOutRef10 / 1000;
                    //}
                });
                /*if(this.platform.is('ios')){
                  this.platform.ready().then(async ()=>{
                    if(localStorage.getItem("BBAM") != "true"){
                      WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async res=>{
                        var loading = await this.loadingCTRL.create({
                          message : "Connection à l'UPC en cours...",
                          duration : 10000
                        })
                        loading.present();
                        this.global.isBBAM = true;
                        this.global.ssid = "BBAM";
                        localStorage.setItem("BBAM",""+true);
                        this.platform.ready().then(async readySource => {
                            if(readySource == "cordova"){
                              this.upc = new UPCModbus(state => {
                                this.ngZone.run(() => {
                                  // Force refresh UI
                                  
                                    
                                    //this.readDiffusionParameters();
                                  
                                });
                              });
                              await this.upc.client.connect();
                              this.readParams(loading);
                            }
                        })
                        
                      })
                    } else {
                      this.upc = new UPCModbus(state => {
                        this.ngZone.run(() => {
                          // Force refresh UI
                          
                            
                            //this.readDiffusionParameters();
                          
                        });
                      });
                      //await this.upc.client.connect();
                      setTimeout(async ()=>{
                        //this.ngZone.run(async ()=>{
                        await this.upc.client.getFloatFromHoldingRegister(40018).then(async res =>{
                          this.global.isBBAM = true;
                          this.global.ssid = "BBAM";
                          this.fluxmax = res;
                          this.fluxref = this.fluxmax/10;
                          this.fluxref10 = this.fluxmax;
                          await this.upc.client.setIntInHoldingRegister(40065,1,1).then(async res=>{
                            this.intensity = 1;
                            await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                              this.temp = res;
                              
                            })
                           /*this.global.interval = setInterval(async ()=>{
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
             
                               this.global.ssid = "BBAM";
                               this.global.isBBAM = true;
               
                               this.cd.detectChanges();
                               //loading.dismiss();
                             }).catch(err=>{
                               this.ngOnInit();
                             })
                           },2000)*/
                /*}).catch(async err=>{
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
                   //loading.dismiss();
                 }).catch(err=>{
                   
                 })
                })
              })*/
                /*await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                  this.inputref = 2+0.8*(res-10)/90;
                  this.fluxref = 0.017*res;
                  this.fluxref10 = 0.17*res;
                  this.cd.detectChanges();
        })*/
                /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                  this.input = res;
                  this.cd.detectChanges();
                }).catch(err=>{
                  
                })*/
                /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                  this.temp = res;
                })*/
                /*await this.upc.client.setFloatInHoldingRegister(40018,1).then(res=>{
                  this.fluxmax = 1;
                  this.cd.detectChanges();
                })
                await this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
                    this.intensity = 1;
                    this.cd.detectChanges();
                })*/
                /*await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                  this.outputcomp = res;
                  this.cd.detectChanges();
                })*/
                /*this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                  this.global.ssid = res;
                })*/
                /*await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                  //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
                  var upc = "Test4G1";
                  this.upc3s.forEach(item=>{
                    if(item.upcNameId == upc){
                      this.outputref = item.generalParameters.co2PresOutRef1/1000;
                      this.outputref10 = item.generalParameters.co2PresOutRef10/1000;
                    }
                  })
                  this.cd.detectChanges();
                })*/
                /*await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                  this.output = res;
                  this.cd.detectChanges();
                })*/
                /*await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                  this.flux = res;
                  this.cd.detectChanges();
                })*/
                //})
                /*},2000)
              }
              
            })
            
          }*/ //else if(this.platform.is("android")){
                //this.hotspot.connectToWifi("BBAM","BioBeltService").then(async()=>{
                /*var loading = await this.loadingCTRL.create({
                  message : "Connection à l'UPC en cours...",
                  duration : 10000
                })
                loading.present();*/
                this.global.isBBAM = true;
                this.global.ssid = "BBAM";
                this.platform.ready().then(function (readySource) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(readySource == 'cordova')) return [3 /*break*/, 2];
                                this.upc = new _model_upcv3_upcmodbus__WEBPACK_IMPORTED_MODULE_6__["UPCModbus"](function (state) {
                                    _this.ngZone.run(function () {
                                        // Force refresh UI
                                        //this.readDiffusionParameters();
                                    });
                                });
                                return [4 /*yield*/, this.upc.client.connect()];
                            case 1:
                                _a.sent();
                                //this.readParams(loading);
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
                                                                this.fluxmax = res;
                                                                this.fluxref = this.fluxmax / 10;
                                                                this.fluxref10 = this.fluxmax;
                                                                return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40065, 1, 1).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                        var _this = this;
                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                            switch (_a.label) {
                                                                                case 0:
                                                                                    this.intensity = 1;
                                                                                    return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40451).then(function (res) {
                                                                                            _this.temp = res;
                                                                                            //loading.dismiss();
                                                                                        })
                                                                                        /*this.global.interval = setInterval(async ()=>{
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
                                                                             
                                                                                            this.global.ssid = "BBAM";
                                                                             
                                                                                            this.cd.detectChanges();
                                                                                            loading.dismiss();
                                                                                          }).catch(err=>{
                                                                                            this.ngOnInit();
                                                                                          })
                                                                                        },2000) */
                                                                                    ];
                                                                                case 1:
                                                                                    _a.sent();
                                                                                    return [2 /*return*/];
                                                                            }
                                                                        });
                                                                    }); })]; /*.catch(async err=>{
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
                                                                 }).catch(err=>{
                                                                   
                                                                 })
                                                                })*/
                                                            case 1:
                                                                _a.sent(); /*.catch(async err=>{
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
                                                                 }).catch(err=>{
                                                                   
                                                                 })
                                                                })*/
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); }).catch(function (err) {
                                                    alert("Veuillez vous connecter à BBAM !");
                                                    _this.global.ssid = "ADMIN";
                                                    _this.global.isBBAM = false;
                                                })
                                                /*await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                                                  this.inputref = 2+0.8*(res-10)/90;
                                                  this.fluxref = 0.017*res;
                                                  this.fluxref10 = 0.17*res;
                                                  this.cd.detectChanges();
                                        })*/
                                                /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                                                  this.input = res;
                                                  this.cd.detectChanges();
                                                }).catch(err=>{
                                                  
                                                })*/
                                                /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                                                  this.temp = res;
                                                })*/
                                                /*await this.upc.client.setFloatInHoldingRegister(40018,1).then(res=>{
                                                  this.fluxmax = 1;
                                                  this.cd.detectChanges();
                                                })
                                                await this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
                                                    this.intensity = 1;
                                                    this.cd.detectChanges();
                                                })*/
                                                /*await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                                                  this.outputcomp = res;
                                                  this.cd.detectChanges();
                                                })*/
                                                /*this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                                                  this.global.ssid = res;
                                                })*/
                                                /*await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                                                  //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
                                                  var upc = "Test4G1";
                                                  this.upc3s.forEach(item=>{
                                                    if(item.upcNameId == upc){
                                                      this.outputref = item.generalParameters.co2PresOutRef1/1000;
                                                      this.outputref10 = item.generalParameters.co2PresOutRef10/1000;
                                                    }
                                                  })
                                                  this.cd.detectChanges();
                                                })*/
                                                /*await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                                                  this.output = res;
                                                  this.cd.detectChanges();
                                                })*/
                                                /*await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                                                  this.flux = res;
                                                  this.cd.detectChanges();
                                                })*/
                                                //})
                                            ];
                                            case 1:
                                                //this.ngZone.run(async ()=>{
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, 1000);
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    }; //+-2%
    ControldiffPage.prototype.startstop = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.textdiff == "Start")) return [3 /*break*/, 2];
                        this.textdiff = "Stop";
                        this.colordif = "danger";
                        clearInterval(this.global.interval);
                        return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40011, 1, 2).then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.testMinB1().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var _this = this;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.testMinB2().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                var _this = this;
                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0: return [4 /*yield*/, this.testMaxB1().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                var _this = this;
                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                    switch (_a.label) {
                                                                                        case 0: return [4 /*yield*/, this.testMaxB2().then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                                                    this.onDisableDiff();
                                                                                                    alert("Test Min/Max terminé !");
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
                                            }); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }).catch(function (err) {
                                alert("Veuillez vous connecter à BBAM !");
                                _this.global.ssid = "ADMIN";
                                _this.global.isBBAM = false;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.onDisableDiff();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ControldiffPage.prototype.readParams = function (loading) {
        var _this = this;
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
                                        this.fluxmax = res;
                                        this.fluxref = this.fluxmax / 10;
                                        this.fluxref10 = this.fluxmax;
                                        return [4 /*yield*/, this.upc.client.setIntInHoldingRegister(40065, 1, 1).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var _this = this;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            this.intensity = 1;
                                                            return [4 /*yield*/, this.upc.client.getFloatFromHoldingRegister(40451).then(function (res) {
                                                                    _this.temp = res;
                                                                    loading.dismiss();
                                                                })
                                                                /*this.global.interval = setInterval(async ()=>{
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
                                                     
                                                                    this.global.ssid = "BBAM";
                                                     
                                                                    this.cd.detectChanges();
                                                                    loading.dismiss();
                                                                  }).catch(err=>{
                                                                    this.ngOnInit();
                                                                  })
                                                                },2000) */
                                                            ];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })]; /*.catch(async err=>{
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
                                         }).catch(err=>{
                                           
                                         })
                                        })*/
                                    case 1:
                                        _a.sent(); /*.catch(async err=>{
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
                                         }).catch(err=>{
                                           
                                         })
                                        })*/
                                        return [2 /*return*/];
                                }
                            });
                        }); })
                        /*await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                          this.inputref = 2+0.8*(res-10)/90;
                          this.fluxref = 0.017*res;
                          this.fluxref10 = 0.17*res;
                          this.cd.detectChanges();
                })*/
                        /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                          this.input = res;
                          this.cd.detectChanges();
                        }).catch(err=>{
                          
                        })*/
                        /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                          this.temp = res;
                        })*/
                        /*await this.upc.client.setFloatInHoldingRegister(40018,1).then(res=>{
                          this.fluxmax = 1;
                          this.cd.detectChanges();
                        })
                        await this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
                            this.intensity = 1;
                            this.cd.detectChanges();
                        })*/
                        /*await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                          this.outputcomp = res;
                          this.cd.detectChanges();
                        })*/
                        /*this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                          this.global.ssid = res;
                        })*/
                        /*await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                          //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
                          var upc = "Test4G1";
                          this.upc3s.forEach(item=>{
                            if(item.upcNameId == upc){
                              this.outputref = item.generalParameters.co2PresOutRef1/1000;
                              this.outputref10 = item.generalParameters.co2PresOutRef10/1000;
                            }
                          })
                          this.cd.detectChanges();
                        })*/
                        /*await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                          this.output = res;
                          this.cd.detectChanges();
                        })*/
                        /*await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                          this.flux = res;
                          this.cd.detectChanges();
                        })*/
                        //})
                    ];
                    case 1:
                        //this.ngZone.run(async ()=>{
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, 5000);
    };
    ControldiffPage.prototype.testMinB1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            /*var loading = await this.loadingCTRL.create({
                              message : "Calcul des Pressions pour B1 à l'intensité 1 en cours ...",
                              
                            });
                            loading.present();*/
                            this.highlightB1I1 = true;
                            //this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                            this.upc.client.setIntInHoldingRegister(40065, 1, 1).then(function (res) {
                                _this.intensity = 1;
                                _this.upc.client.setIntInHoldingRegister(40150, 1, 1).then(function (res) {
                                    _this.upc.client.setIntInHoldingRegister(40011, 1, 2).then(function (res) {
                                        var DebB1 = 0;
                                        var cpt = 0;
                                        _this.intervalva = setInterval(function () {
                                            _this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                                _this.PEB1Int1 = res;
                                                if (Math.abs(_this.PEB1Int1 - _this.inputref) / _this.inputref < 0.1) {
                                                    _this.backgroundPEB1Int1 = true;
                                                }
                                                else {
                                                    _this.backgroundPEB1Int1 = false;
                                                }
                                                _this.cd.detectChanges();
                                            }).catch(function (err) {
                                                alert("Veuillez vous connecter à BBAM !");
                                                _this.global.ssid = "ADMIN";
                                                _this.global.isBBAM = false;
                                                clearInterval(_this.intervalva);
                                                //clearInterval(this.int);
                                                _this.highlightB1I1 = false;
                                                //resolve();
                                            });
                                            _this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                                _this.PSB1Int1 = res;
                                                if (Math.abs((_this.PSB1Int1 - _this.outputref) / _this.outputref) * 100 < 5) {
                                                    _this.backgroundPSB1Int1 = true;
                                                    _this.bgpswarningB1Int1 = false;
                                                }
                                                else if (Math.abs((_this.PSB1Int1 - _this.outputref) / _this.outputref) * 100 < 10) {
                                                    _this.bgpswarningB1Int1 = true;
                                                }
                                                else {
                                                    _this.backgroundPSB1Int1 = false;
                                                    _this.bgpswarningB1Int1 = false;
                                                }
                                                _this.cd.detectChanges();
                                            });
                                            _this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                                if (cpt == 0) {
                                                    DebB1 = res;
                                                }
                                                _this.DebB1Int1 = res;
                                                if (Math.abs(((_this.DebB1Int1 - _this.fluxref) / _this.fluxref) * 100) < 5) {
                                                    _this.backgroundDebB1Int1 = true;
                                                    _this.bgdebwarningB1Int1 = false;
                                                }
                                                else if (Math.abs(((_this.DebB1Int1 - _this.fluxref) / _this.fluxref) * 100) < 10) {
                                                    _this.bgdebwarningB1Int1 = true;
                                                }
                                                else {
                                                    _this.backgroundDebB1Int1 = false;
                                                    _this.bgdebwarningB1Int1 = false;
                                                }
                                                cpt++;
                                                _this.cd.detectChanges();
                                            });
                                            /*if(cpt >= 10){
                                              clearInterval(intervalva);
                                              
                                              loading.dismiss();
                                              resolve();
                                              
                                            }*/
                                            if (cpt >= 20) {
                                                //alert(Math.abs(DebB1 -this.DebB1Int1));
                                                if (Math.abs(DebB1 - _this.DebB1Int1) < 0.02) {
                                                    clearInterval(_this.intervalva);
                                                    //clearInterval(this.int);
                                                    _this.highlightB1I1 = false;
                                                    resolve();
                                                }
                                                DebB1 = _this.DebB1Int1;
                                                _this.cd.detectChanges();
                                                cpt = 0;
                                            }
                                            /*this.int = setInterval(()=>{
                                              
                                            },10000)*/
                                        }, 500);
                                    });
                                }).catch(function (err) {
                                    alert("Erreur lors de l'écriture ModBus !");
                                    _this.highlightB1I1 = false;
                                });
                            }).catch(function (err) {
                                alert("Erreur lors de l'écriture ModBus !");
                                _this.highlightB1I1 = false;
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    ControldiffPage.prototype.testMinB2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            /*var loading = await this.loadingCTRL.create({
                              message : "Calcul des Pressions pour B2 à l'intensité 1 en cours...",
                          })
                          loading.present();*/
                            this.highlightB2I1 = true;
                            //this.upc.client.setFloatInHoldingRegister(40018,2).then(res=>{
                            this.upc.client.setIntInHoldingRegister(40065, 1, 1).then(function (res) {
                                _this.intensity = 1;
                                _this.upc.client.setIntInHoldingRegister(40150, 1, 2).then(function (res) {
                                    var cpt = 0;
                                    var debB2 = 0;
                                    _this.intervalB2I1 = setInterval(function () {
                                        _this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                            _this.PEB2Int1 = res;
                                            if (Math.abs(_this.PEB2Int1 - _this.inputref) / _this.inputref < 0.1) {
                                                _this.backgroundPEB2Int1 = true;
                                            }
                                            else {
                                                _this.backgroundPEB2Int1 = false;
                                            }
                                            _this.cd.detectChanges();
                                        }).catch(function (err) {
                                            alert("Veuillez vous connecter à BBAM !");
                                            _this.global.ssid = "ADMIN";
                                            _this.global.isBBAM = false;
                                            clearInterval(_this.intervalB2I1);
                                            //clearInterval(this.int);
                                            _this.highlightB2I1 = false;
                                            //resolve();
                                        });
                                        _this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                            _this.PSB2Int1 = res;
                                            if (Math.abs((_this.PSB2Int1 - _this.outputref) / _this.outputref) * 100 < 5) {
                                                _this.backgroundPSB2Int1 = true;
                                                _this.bgpswarningB2Int1 = false;
                                            }
                                            else if (Math.abs((_this.PSB2Int1 - _this.outputref) / _this.outputref) * 100 < 10) {
                                                _this.bgpswarningB2Int1 = true;
                                            }
                                            else {
                                                _this.backgroundPSB2Int1 = false;
                                                _this.bgpswarningB2Int1 = false;
                                            }
                                            _this.cd.detectChanges();
                                        });
                                        _this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                            if (cpt == 0) {
                                                debB2 = res;
                                            }
                                            cpt++;
                                            _this.DebB2Int1 = res;
                                            if (Math.abs(((_this.DebB2Int1 - _this.fluxref) / _this.fluxref) * 100) < 5) {
                                                _this.backgroundDebB2Int1 = true;
                                                _this.bgdebwarningB2Int1 = false;
                                            }
                                            else if (Math.abs(((_this.DebB2Int1 - _this.fluxref) / _this.fluxref) * 100) < 10) {
                                                _this.bgdebwarningB2Int1 = true;
                                            }
                                            else {
                                                _this.backgroundDebB2Int1 = false;
                                                _this.bgdebwarningB2Int1 = false;
                                            }
                                            _this.cd.detectChanges();
                                        });
                                        if (cpt >= 20) {
                                            if (Math.abs(debB2 - _this.DebB2Int1) < 0.02) {
                                                clearInterval(_this.intervalB2I1);
                                                //clearInterval(this.int);
                                                _this.highlightB2I1 = false;
                                                resolve();
                                            }
                                            debB2 = _this.DebB2Int1;
                                            _this.cd.detectChanges();
                                            cpt = 0;
                                        }
                                    }, 500);
                                });
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    ControldiffPage.prototype.doRefresh = function (event) {
        this.ngOnInit();
        event.target.complete();
    };
    /*ionViewWillLeave() {
  
      
      clearInterval(this.interval);
      clearInterval(this.intervalB1I10);
      clearInterval(this.intervalB2I1);
      clearInterval(this.intervalva);
      clearInterval(this.intervalB2I10);
    }
  
    ngOnDestroy(): void {
  
      
      clearInterval(this.interval);
      clearInterval(this.intervalB1I10);
      clearInterval(this.intervalB2I1);
      clearInterval(this.intervalva);
      clearInterval(this.intervalB2I10);
    }*/
    ControldiffPage.prototype.testMaxB1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            /*var loading = await this.loadingCTRL.create({
                              message : "Calcul des Pressions pour B1 à l'intensité 10 en cours ...",
                              
                            });
                            loading.present();*/
                            this.highlightB1I10 = true;
                            //this.upc.client.setFloatInHoldingRegister(40018,2).then(res=>{
                            this.upc.client.setIntInHoldingRegister(40065, 1, 10).then(function (res) {
                                _this.intensity = 10;
                                _this.upc.client.setIntInHoldingRegister(40150, 1, 1).then(function (res) {
                                    var cpt = 0;
                                    var debB1 = 0;
                                    _this.intervalB1I10 = setInterval(function () {
                                        _this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                            _this.PEB1Int10 = res;
                                            if (Math.abs(_this.PEB1Int10 - _this.inputref) / _this.inputref < 0.1) {
                                                _this.backgroundPEB1Int10 = true;
                                            }
                                            else {
                                                _this.backgroundPEB1Int10 = false;
                                            }
                                            _this.cd.detectChanges();
                                        }).catch(function (err) {
                                            alert("Veuillez vous connecter à BBAM !");
                                            _this.global.ssid = "ADMIN";
                                            _this.global.isBBAM = false;
                                            clearInterval(_this.intervalB1I10);
                                            //clearInterval(this.int);
                                            _this.highlightB1I10 = false;
                                            //resolve();
                                        });
                                        _this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                            _this.PSB1Int10 = res;
                                            if (Math.abs((_this.PSB1Int10 - _this.outputref10) / _this.outputref10) * 100 < 5) {
                                                _this.backgroundPSB1Int10 = true;
                                                _this.bgpswarningB1Int10 = false;
                                            }
                                            else if (Math.abs((_this.PSB1Int10 - _this.outputref10) / _this.outputref10) * 100 < 10) {
                                                _this.bgpswarningB1Int10 = true;
                                            }
                                            else {
                                                _this.backgroundPSB1Int10 = false;
                                                _this.bgpswarningB1Int10 = false;
                                            }
                                            _this.cd.detectChanges();
                                        });
                                        _this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                            if (cpt == 0) {
                                                debB1 = res;
                                            }
                                            cpt++;
                                            _this.DebB1Int10 = res;
                                            if (Math.abs(((_this.DebB1Int10 - _this.fluxref10) / _this.fluxref10) * 100) < 5) {
                                                _this.backgroundDebB1Int10 = true;
                                                _this.bgdebwarningB1Int10 = false;
                                            }
                                            else if (Math.abs(((_this.DebB1Int10 - _this.fluxref10) / _this.fluxref10) * 100) < 10) {
                                                _this.bgdebwarningB1Int10 = true;
                                            }
                                            else {
                                                _this.backgroundDebB1Int10 = false;
                                                _this.bgdebwarningB1Int10 = false;
                                            }
                                            _this.cd.detectChanges();
                                        });
                                        if (cpt >= 20) {
                                            if (Math.abs(debB1 - _this.DebB1Int10) < 0.02) {
                                                clearInterval(_this.intervalB1I10);
                                                //clearInterval(this.int);
                                                _this.highlightB1I10 = false;
                                                resolve();
                                            }
                                            debB1 = _this.DebB1Int10;
                                            _this.cd.detectChanges();
                                            cpt = 0;
                                        }
                                    }, 500);
                                });
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    ControldiffPage.prototype.testMaxB2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            /* var loading = await this.loadingCTRL.create({
                               message : "Calcul des Pressions pour B2 à l'intensité 10 en cours ...",
                               
                             });
                             
                             loading.present();*/
                            this.highlightB2I10 = true;
                            //this.upc.client.setFloatInHoldingRegister(40018,2).then(res=>{
                            this.upc.client.setIntInHoldingRegister(40065, 1, 10).then(function (res) {
                                _this.intensity = 10;
                                _this.upc.client.setIntInHoldingRegister(40150, 1, 2).then(function (res) {
                                    var cpt = 0;
                                    var debB2 = 0;
                                    _this.intervalB2I10 = setInterval(function () {
                                        _this.upc.client.getFloatFromHoldingRegister(40435).then(function (res) {
                                            _this.PEB2Int10 = res;
                                            if (Math.abs(_this.PEB2Int10 - _this.inputref) / _this.inputref < 0.1) {
                                                _this.backgroundPEB2Int10 = true;
                                            }
                                            else {
                                                _this.backgroundPEB2Int10 = false;
                                            }
                                            _this.cd.detectChanges();
                                        }).catch(function (err) {
                                            alert("Veuillez vous connecter à BBAM !");
                                            _this.global.ssid = "ADMIN";
                                            _this.global.isBBAM = false;
                                            clearInterval(_this.intervalB2I10);
                                            clearInterval(_this.int);
                                            _this.highlightB2I10 = false;
                                            //resolve();
                                        });
                                        _this.upc.client.getFloatFromHoldingRegister(40437).then(function (res) {
                                            _this.PSB2Int10 = res;
                                            if (Math.abs((_this.PSB2Int10 - _this.outputref10) / _this.outputref10) * 100 < 5) {
                                                _this.backgroundPSB2Int10 = true;
                                                _this.bgpswarningB2Int10 = false;
                                            }
                                            else if (Math.abs((_this.PSB2Int10 - _this.outputref10) / _this.outputref10) * 100 < 10) {
                                                _this.bgpswarningB2Int10 = true;
                                            }
                                            else {
                                                _this.backgroundPSB2Int10 = false;
                                                _this.bgpswarningB2Int10 = false;
                                            }
                                            _this.cd.detectChanges();
                                        });
                                        _this.upc.client.getFloatFromHoldingRegister(40439).then(function (res) {
                                            if (cpt == 0) {
                                                debB2 = res;
                                            }
                                            cpt++;
                                            _this.DebB2Int10 = res;
                                            if (Math.abs(((_this.DebB2Int10 - _this.fluxref10) / _this.fluxref10) * 100) < 5) {
                                                _this.backgroundDebB2Int10 = true;
                                                _this.bgdebwarningB2Int10 = false;
                                            }
                                            else if (Math.abs(((_this.DebB2Int10 - _this.fluxref10) / _this.fluxref10) * 100) < 10) {
                                                _this.bgdebwarningB2Int10 = true;
                                            }
                                            else {
                                                _this.backgroundDebB2Int10 = false;
                                                _this.bgdebwarningB2Int10 = false;
                                            }
                                            _this.cd.detectChanges();
                                        });
                                        if (cpt >= 20) {
                                            if (Math.abs(debB2 - _this.DebB2Int10) < 0.02) {
                                                clearInterval(_this.intervalB2I10);
                                                clearInterval(_this.int);
                                                _this.highlightB2I10 = false;
                                                resolve();
                                            }
                                            debB2 = _this.DebB2Int10;
                                            _this.cd.detectChanges();
                                            cpt = 0;
                                        }
                                    }, 500);
                                });
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    ControldiffPage.prototype.onChangeDiff = function () {
        var _this = this;
        this.upc.client.setIntInHoldingRegister(40011, 1, 2).then(function (res) {
            _this.textdiff = "Stop";
            _this.colordif = "danger";
        });
    };
    ControldiffPage.prototype.onDisableDiff = function () {
        var _this = this;
        this.upc.client.setIntInHoldingRegister(40011, 1, 0).then(function (res) {
            _this.textdiff = "Start";
            _this.colordif = "primary";
            _this.highlightB1I10 = false;
            _this.highlightB2I1 = false;
            _this.highlightB2I10 = false;
            _this.highlightB1I1 = false;
            clearInterval(_this.intervalB1I10);
            clearInterval(_this.intervalB2I1);
            clearInterval(_this.intervalva);
            clearInterval(_this.intervalB2I10);
            _this.cd.detectChanges();
        });
    };
    ControldiffPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"] },
        { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_4__["Hotspot"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }
    ]; };
    ControldiffPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-controldiff',
            template: __webpack_require__(/*! raw-loader!./controldiff.page.html */ "./node_modules/raw-loader/index.js!./src/app/controldiff/controldiff.page.html"),
            styles: [__webpack_require__(/*! ./controldiff.page.scss */ "./src/app/controldiff/controldiff.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"], _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_4__["Hotspot"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _api_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]])
    ], ControldiffPage);
    return ControldiffPage;
}());



/***/ })

}]);
//# sourceMappingURL=controldiff-controldiff-module-es5.js.map