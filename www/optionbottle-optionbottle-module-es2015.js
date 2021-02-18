(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["optionbottle-optionbottle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/optionbottle/optionbottle.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/optionbottle/optionbottle.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Bouteilles</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item (click)=\"onChooseStock(0);\">\n    <ion-icon name=\"albums\" color=\"primary\"></ion-icon>\n    <ion-label>Ajouter Stock</ion-label>\n    <!--<ion-icon [name]=\"name\" color=\"primary\" slot=\"end\"></ion-icon>-->\n  </ion-item>\n  <ion-item (click)=\"onChooseStock(1);\">\n    <ion-icon name=\"remove\" color=\"primary\"></ion-icon>\n    <ion-label>Retirer du Stock</ion-label>\n  </ion-item>\n  <!--<div *ngIf=\"isStock\">\n    <ion-item *ngFor=\"let s of stock;\" (click)=\"gotoBottlesStock(s)\">\n      <ion-label slot=\"end\">{{s.name}}</ion-label>\n    </ion-item>\n  </div>-->\n\n  \n  \n  <ion-item (click)=\"onAddBottleCeint();\">\n    \n      <ion-icon name=\"compass\" color=\"primary\" ></ion-icon>\n    \n    <ion-label>Ajouter/Retirer Ceinture</ion-label>\n  </ion-item>\n  <ion-item (click)=\"onChooseStock(2);\">\n    <ion-icon name=\"exit\" color=\"primary\"></ion-icon>\n    Retour au dépôt\n  </ion-item>\n  <ion-item (click)=\"remRack();\">\n    <ion-icon name=\"train\" color=\"primary\"></ion-icon>\n    Retour au fournisseur\n  </ion-item>\n  \n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/optionbottle/optionbottle-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/optionbottle/optionbottle-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OptionbottlePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionbottlePageRoutingModule", function() { return OptionbottlePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _optionbottle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./optionbottle.page */ "./src/app/optionbottle/optionbottle.page.ts");




const routes = [
    {
        path: '',
        component: _optionbottle_page__WEBPACK_IMPORTED_MODULE_3__["OptionbottlePage"]
    }
];
let OptionbottlePageRoutingModule = class OptionbottlePageRoutingModule {
};
OptionbottlePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OptionbottlePageRoutingModule);



/***/ }),

/***/ "./src/app/optionbottle/optionbottle.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/optionbottle/optionbottle.module.ts ***!
  \*****************************************************/
/*! exports provided: OptionbottlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionbottlePageModule", function() { return OptionbottlePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _optionbottle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./optionbottle-routing.module */ "./src/app/optionbottle/optionbottle-routing.module.ts");
/* harmony import */ var _optionbottle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./optionbottle.page */ "./src/app/optionbottle/optionbottle.page.ts");
/* harmony import */ var _rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rackcontent/rackcontent.page */ "./src/app/rackcontent/rackcontent.page.ts");








let OptionbottlePageModule = class OptionbottlePageModule {
};
OptionbottlePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _optionbottle_routing_module__WEBPACK_IMPORTED_MODULE_5__["OptionbottlePageRoutingModule"],
        ],
        declarations: [_optionbottle_page__WEBPACK_IMPORTED_MODULE_6__["OptionbottlePage"], _rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__["RackcontentPage"]],
        entryComponents: [_rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__["RackcontentPage"]]
    })
], OptionbottlePageModule);



/***/ }),

/***/ "./src/app/optionbottle/optionbottle.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/optionbottle/optionbottle.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbmJvdHRsZS9vcHRpb25ib3R0bGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/optionbottle/optionbottle.page.ts":
/*!***************************************************!*\
  !*** ./src/app/optionbottle/optionbottle.page.ts ***!
  \***************************************************/
/*! exports provided: OptionbottlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionbottlePage", function() { return OptionbottlePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rackcontent/rackcontent.page */ "./src/app/rackcontent/rackcontent.page.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");









let OptionbottlePage = class OptionbottlePage {
    constructor(upc3Service, storage, router, platform, modal, global, scan) {
        this.upc3Service = upc3Service;
        this.storage = storage;
        this.router = router;
        this.platform = platform;
        this.modal = modal;
        this.global = global;
        this.scan = scan;
        this.name = "arrow-dropright";
        this.isStock = false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.get("token").then(val => {
                this.token = val;
                /*this.upc3Service.getAllBottle(val).subscribe(res=>{
                  
                   if(res.code === Code.BOTTLE_RECOVERED) {
                     var stock = [];
                     var belt = [];
                     res.result.forEach(item=>{
                       if(item.localisationId === "0840ffbf-82ee-4f23-a3b9-96b1f99cefdd" || item.localisationId === '1e2b0d98-44a8-4fe8-a412-299f0991919d' || item.localisationId === "8eea82b3-e17c-4a62-8e4a-389a8f15e9a2" || item.localisationId === "ff1c41aa-f9f7-478b-8b41-8616313f6d88") {
                          stock.push(item);
                       }
                       else {
                         belt.push(item);
                       }
                     })
                     this.storage.set("stock",JSON.stringify(stock));
                     this.storage.set("beltbottle",JSON.stringify(belt));
                   }
                })*/
            });
            this.platform.ready().then(res => {
                if (this.platform.is('ios')) {
                    WifiWizard2.iOSDisconnectNetwork("BBAM").then((res) => {
                        this.storage.get("token").then(val => {
                            this.token = val;
                            /*this.upc3Service.getAllBottle(val).subscribe(res=>{
                              
                               if(res.code === Code.BOTTLE_RECOVERED) {
                                 var stock = [];
                                 var belt = [];
                                 res.result.forEach(item=>{
                                   if(item.localisationId === "0840ffbf-82ee-4f23-a3b9-96b1f99cefdd" || item.localisationId === '1e2b0d98-44a8-4fe8-a412-299f0991919d' || item.localisationId === "8eea82b3-e17c-4a62-8e4a-389a8f15e9a2" || item.localisationId === "ff1c41aa-f9f7-478b-8b41-8616313f6d88") {
                                      stock.push(item);
                                   }
                                   else {
                                     belt.push(item);
                                   }
                                 })
                                 this.storage.set("stock",JSON.stringify(stock));
                                 this.storage.set("beltbottle",JSON.stringify(belt));
                               }
                            })*/
                        });
                    });
                }
            });
        });
    }
    onSynchro() {
        this.global.onSynchroB1B2(this.token);
    }
    onAddBottleCeint() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.router.navigate(['addbottleceint']);
        });
    }
    onChooseStock(i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            localStorage.setItem("adds", i);
            this.router.navigate(['choosestock']);
        });
    }
    remRack() {
        this.scan.scan().then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (res.text != '') {
                var text = res.text;
                this.upc3Service.getBottleFromRack(this.token, res.text).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    alert(JSON.stringify(res));
                    if (res.result.length > 0) {
                        var modal = yield this.modal.create({
                            component: _rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__["RackcontentPage"],
                            componentProps: {
                                rack: text
                            }
                        });
                        modal.present();
                    }
                    else {
                        alert("Aucune bouteille est associée à ce Rack !");
                    }
                }), err => {
                    alert(JSON.stringify(err));
                });
                /*this.upcv3Service.removeRack(res.text,this.token).subscribe(res=>{
        
                })*/
            }
        }));
    }
    goStock() {
        if (!this.isStock) {
            this.name = "arrow-dropdown";
            this.isStock = true;
            this.upc3Service.getAllStock(localStorage.getItem("token")).subscribe(res => {
                this.stock = res.result;
            }, err => {
                alert("Erreur de Connexion");
            });
        }
        else {
            this.name = "arrow-dropright";
            this.isStock = false;
        }
        //this.router.navigate(['stock']);
    }
};
OptionbottlePage.ctorParameters = () => [
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__["BarcodeScanner"] }
];
OptionbottlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-optionbottle',
        template: __webpack_require__(/*! raw-loader!./optionbottle.page.html */ "./node_modules/raw-loader/index.js!./src/app/optionbottle/optionbottle.page.html"),
        styles: [__webpack_require__(/*! ./optionbottle.page.scss */ "./src/app/optionbottle/optionbottle.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _api_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__["BarcodeScanner"]])
], OptionbottlePage);



/***/ })

}]);
//# sourceMappingURL=optionbottle-optionbottle-module-es2015.js.map