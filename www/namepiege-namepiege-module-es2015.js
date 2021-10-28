(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["namepiege-namepiege-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/namepiege/namepiege.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/namepiege/namepiege.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <!--<ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Paramètres UPC</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \r\n     </ion-buttons>\r\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \r\n     </ion-buttons>\r\n  </ion-toolbar>-->  \r\n  </ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" id=\"refresher\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <h3 style=\"text-align: center;\">Paramètres Généraux UPC</h3>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-row><ion-col size=\"6\">Nom de l'UPC</ion-col><ion-col size=\"6\"><ion-input [(ngModel)]=\"name\" enterkeyhint=\"enter\" placeholder=\"Nom de l'UPC...\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeName();\"></ion-input></ion-col></ion-row>\r\n      <ion-row><ion-col size=\"6\">Nombre de pièges</ion-col><ion-col size=\"6\"><ion-input [(ngModel)]=\"nbpiege\" enterkeyhint=\"enter\" placeholder=\"Nombre de pièges...\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangePieges();\"></ion-input></ion-col></ion-row>\r\n      <ion-row><ion-col size=\"6\">UUID</ion-col><ion-col size=\"6\">{{uuid}}</ion-col></ion-row>\r\n      <ion-row><ion-col size=\"6\">Fuseau Horaire (h)</ion-col><ion-col size=\"6\"><ion-input [(ngModel)]=\"fusehor\" enterkeyhint=\"enter\" type=\"number\" (ionFocus)=\"unsubscribeRefresh()\" (focusout)=\"onChangeFusHor()\"></ion-input></ion-col></ion-row>\r\n      <ion-row><ion-col size=\"6\">Horloge</ion-col><ion-col size=\"6\">{{horloge}}</ion-col></ion-row>\r\n      <ion-row><ion-col size=\"6\">Firmware</ion-col><ion-col size=\"6\">{{\"v\"+firm}}</ion-col></ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n\r\n  <div style=\"text-align: center;\">\r\n  <ion-button color=\"danger\" (click)=\"onWipe();\">\r\n    WIPE\r\n  </ion-button>\r\n  <ion-button color=\"warning\" (click)=\"onReset();\">RESET</ion-button>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/namepiege/namepiege-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/namepiege/namepiege-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NamepiegePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamepiegePageRoutingModule", function() { return NamepiegePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _namepiege_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./namepiege.page */ "./src/app/namepiege/namepiege.page.ts");




const routes = [
    {
        path: '',
        component: _namepiege_page__WEBPACK_IMPORTED_MODULE_3__["NamepiegePage"]
    }
];
let NamepiegePageRoutingModule = class NamepiegePageRoutingModule {
};
NamepiegePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NamepiegePageRoutingModule);



/***/ }),

/***/ "./src/app/namepiege/namepiege.module.ts":
/*!***********************************************!*\
  !*** ./src/app/namepiege/namepiege.module.ts ***!
  \***********************************************/
/*! exports provided: NamepiegePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamepiegePageModule", function() { return NamepiegePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _namepiege_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namepiege-routing.module */ "./src/app/namepiege/namepiege-routing.module.ts");
/* harmony import */ var _namepiege_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./namepiege.page */ "./src/app/namepiege/namepiege.page.ts");







let NamepiegePageModule = class NamepiegePageModule {
};
NamepiegePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _namepiege_routing_module__WEBPACK_IMPORTED_MODULE_5__["NamepiegePageRoutingModule"]
        ],
        declarations: [_namepiege_page__WEBPACK_IMPORTED_MODULE_6__["NamepiegePage"]]
    })
], NamepiegePageModule);



/***/ }),

/***/ "./src/app/namepiege/namepiege.page.scss":
/*!***********************************************!*\
  !*** ./src/app/namepiege/namepiege.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  border: solid 1px black;\n  text-align: center;\n  color: black;\n}\n\nion-col {\n  color: black;\n}\n\n/*.bgred {\n\tbackground-color: red;\n    color : black;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJtYW5kL0Rlc2t0b3AvYmlvYmVsdG1vYmlsZS9zcmMvYXBwL25hbWVwaWVnZS9uYW1lcGllZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9uYW1lcGllZ2UvbmFtZXBpZWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQ0E7OztFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmFtZXBpZWdlL25hbWVwaWVnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIHRleHQtYWxpZ24gOmNlbnRlcjtcclxuICAgIGNvbG9yIDogYmxhY2s7XHJcbiB9XHJcbmlvbi1jb2wge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKi5iZ3JlZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3IgOiBibGFjaztcclxufSovXHJcblxyXG4iLCJpb24taW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jb2wge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qLmJncmVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yIDogYmxhY2s7XG59Ki8iXX0= */"

/***/ }),

/***/ "./src/app/namepiege/namepiege.page.ts":
/*!*********************************************!*\
  !*** ./src/app/namepiege/namepiege.page.ts ***!
  \*********************************************/
/*! exports provided: NamepiegePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamepiegePage", function() { return NamepiegePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/upcv3/correspondancesRegistres */ "./src/app/model/upcv3/correspondancesRegistres.ts");





let NamepiegePage = class NamepiegePage {
    // Pièges sauvegardes plan
    constructor(global, platform, ngZone, cd, alertCTRL, events) {
        this.global = global;
        this.platform = platform;
        this.ngZone = ngZone;
        this.cd = cd;
        this.alertCTRL = alertCTRL;
        this.events = events;
        this.name = "";
        this.nbpiege = 0;
        this.uuid = "";
        this.firm = "";
        this.redBackground = false;
        this.length = 0;
        this.global.checkMode();
    }
    ionViewWillEnter() {
        this.global.connexionRequise = "UPC";
        this.correspondancesRegistres = new _model_upcv3_correspondancesRegistres__WEBPACK_IMPORTED_MODULE_4__["CorrespondancesRegistres"]();
        this.global.onReadStatiqueEnable().then(() => {
            this.subscribeRefresh();
        });
        //this.subscribeRefresh()
        /*this.global.upcmodbus.client.getStringFromHoldingRegister(40001,10).then(res=>{
          this.name = res;
          this.length = this.name.length;
          this.redBackground = false;
          localStorage.setItem("upcname",res);
          this.cd.detectChanges();
        }).catch(err=>{
          //localStorage.removeItem("isConnected");
          this.redBackground = true;
       
          //this.global.upcmodbus.client.disconnect();
          this.cd.detectChanges();
          //this.ngOnInit();
        })*/
        /*this.global.upcmodbus.client.getStringFromHoldingRegister(40045,10).then(res=>{
          localStorage.setItem("currentssid",res);
          this.cd.detectChanges();
        })
        this.global.upcmodbus.client.getIntFromHoldingRegister(40015,1).then(res=>{
          this.nbpiege = res;
          this.redBackground = false;
          this.cd.detectChanges();
        }).catch(err=>{
          this.redBackground = true;
         // alert(JSON.stringify(err));
          this.cd.detectChanges();
        })*/
        this.horloge = this.global.upcmodbus.general.upcClock;
        //setTimeout(()=>{
        /*this.global.interval =  setInterval(()=>{
           
           
           //WifiWizard2.getConnectedSSID().then(res=>{
             if(this.redBackground) {
               clearInterval(this.global.interval);
               this.ngOnInit();
             }
           //})
           
         },1000)*/
        //},1000)
    }
    doRefresh(event) {
        this.ionViewWillEnter();
        event.target.complete();
    }
    toZero4(d) {
        return ("0000" + (+d).toString(16)).substr(-4);
    }
    onChangeName() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change upcname");
        this.global.onWriteEnable(this.correspondancesRegistres.upcNameId, this.name);
    }
    onChangePieges() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change nbpiege");
        this.global.onWriteEnable(this.correspondancesRegistres.upcTrapNum, this.nbpiege);
    }
    /*async onWipe() {
      let alert = await this.alertCTRL.create({message : "Êtes vous sûr d'effectuer un Wipe ?",
                                               buttons : [{text : "Non"},{text : "Oui",handler : ()=>{
                                                this.global.onWriteModbusVariables().then(res=>{
                                                  var d = new Date()
                                                  this.global.logs.push(this.global.msToTime(d.getTime())+" - début écriture")
                                                  this.global.ecritureEnCours = true;
                                                  this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,61166).then(res=>{
                                                    var d = new Date()
                                                    this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture réussie")
                                                    this.subscribeRefresh()
                                                    this.global.ecritureEnCours = false;
                                                  }).catch(err=>{
                                                    var d = new Date()
                                                    this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture échouée")
                                                    this.subscribeRefresh()
                                                    this.global.ecritureEnCours = false;
                                                  })
                                                })
                                               }}]
                                        })
      alert.present();
    }
  
    async onReset() {
      let alert = await this.alertCTRL.create({message : "Êtes vous sûr d'effectuer un Reset ?",
                                               buttons : [{text : "Non"},{text : "Oui", handler : ()=>{
                                                this.global.onWriteModbusVariables().then(res=>{
                                                  var d = new Date()
                                                  this.global.logs.push(this.global.msToTime(d.getTime())+" - début écriture")
                                                  this.global.ecritureEnCours = true;
                                                  this.global.upcmodbus.client.setIntInHoldingRegister(40011,1,65535).then(res=>{
                                                    var d = new Date()
                                                    this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture réussie")
                                                    this.subscribeRefresh()
                                                    this.global.ecritureEnCours = false;
                                                  }).catch(err=>{
                                                    var d = new Date()
                                                    this.global.logs.push(this.global.msToTime(d.getTime())+" - écriture échouée")
                                                    this.subscribeRefresh()
                                                    this.global.ecritureEnCours = false;
                                                  })
                                                })
                                                  
                                                
                                               }}]
      })
      alert.present();
      
    }*/
    onChangeFusHor() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - appel on change fushor");
        this.global.onWriteEnable(this.correspondancesRegistres.upcTimeZone, this.fusehor);
    }
    unsubscribeRefresh() {
        this.events.unsubscribe("loadParameters");
    }
    subscribeRefresh() {
        var d = new Date();
        this.global.logs.push(this.global.msToTime(d.getTime()) + " - subscribe");
        this.events.subscribe("loadParameters", ($event) => {
            this.name = this.global.upcmodbus.nameId;
            this.length = this.name.length;
            this.nbpiege = this.global.upcmodbus.general.upcTrapNum;
            this.uuid = this.global.upcmodbus.general.upcMcuUid;
            this.fusehor = this.global.upcmodbus.general.upcTimeZone;
            this.firm = "" + this.global.upcmodbus.general.upcFwVer;
            this.horloge = this.global.upcmodbus.general.upcClock;
        });
    }
};
NamepiegePage.ctorParameters = () => [
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] }
];
NamepiegePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-namepiege',
        template: __webpack_require__(/*! raw-loader!./namepiege.page.html */ "./node_modules/raw-loader/index.js!./src/app/namepiege/namepiege.page.html"),
        styles: [__webpack_require__(/*! ./namepiege.page.scss */ "./src/app/namepiege/namepiege.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
], NamepiegePage);



/***/ })

}]);
//# sourceMappingURL=namepiege-namepiege-module-es2015.js.map