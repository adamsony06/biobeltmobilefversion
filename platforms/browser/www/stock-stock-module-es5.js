(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/stock/stock.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stock/stock.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{name.name}}</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\"></ion-icon>ADMIN</ion-button> \r\n     </ion-buttons>\r\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\r\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \r\n     </ion-buttons>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n      <div *ngFor=\"let s of stock; let i = index;\">\r\n      \r\n\r\n      <div *ngIf=\"stock[i+1] != null\">\r\n\r\n      \r\n      <ion-item-divider sticky=\"true\" *ngIf=\"s.rack != stock[i+1].rack\">\r\n        <ion-label *ngIf=\"s.rack == '' || s.rack == null\">Bouteilles Non associés au rack</ion-label>\r\n        <ion-label *ngIf=\"s.rack != '' || s.rack != null\">{{s.rack}}</ion-label>\r\n      </ion-item-divider> \r\n      </div>\r\n    <ion-item> \r\n      <ion-label>{{s.bottleString}}</ion-label>\r\n      <ion-badge color=\"success\" *ngIf=\"s.state === 'FULL'\">Plein</ion-badge>\r\n      <ion-badge color=\"secondary\" *ngIf=\"s.state === 'IN_USE'\">Entamée</ion-badge>\r\n      <ion-badge color=\"danger\" *ngIf=\"s.state === 'EMPTY'\">Vide</ion-badge>\r\n    </ion-item>\r\n  </div>\r\n    \r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button *ngIf=\"addStock\" expand=\"block\" (click)=\"addBottle();\">\r\n    Réception de Bouteilles\r\n  </ion-button>\r\n  <ion-button *ngIf=\"retStock\" expand=\"block\" (click)=\"retBottles();\">\r\n    Retour au dépôt\r\n  </ion-button>\r\n  <ion-button *ngIf=\"remStock\" color=\"danger\" expand=\"block\" (click)=\"delBottle();\">\r\n    Enlever une Bouteille\r\n</ion-button>\r\n<ion-button *ngIf=\"addStock\" expand=\"block\" (click)=\"addRack();\">\r\n    Ajouter/Sélectionner un Rack\r\n</ion-button>\r\n<ion-button *ngIf=\"retStock\" expand=\"block\" (click)=\"retRack();\">\r\n  Sélectionner un Rack\r\n</ion-button>\r\n\r\n</ion-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/stock/stock-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/stock/stock-routing.module.ts ***!
  \***********************************************/
/*! exports provided: StockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageRoutingModule", function() { return StockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.page */ "./src/app/stock/stock.page.ts");




var routes = [
    {
        path: '',
        component: _stock_page__WEBPACK_IMPORTED_MODULE_3__["StockPage"]
    }
];
var StockPageRoutingModule = /** @class */ (function () {
    function StockPageRoutingModule() {
    }
    StockPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StockPageRoutingModule);
    return StockPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/stock/stock.module.ts":
/*!***************************************!*\
  !*** ./src/app/stock/stock.module.ts ***!
  \***************************************/
/*! exports provided: StockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageModule", function() { return StockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock-routing.module */ "./src/app/stock/stock-routing.module.ts");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock.page */ "./src/app/stock/stock.page.ts");
/* harmony import */ var _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../addbottlemodal/addbottlemodal.page */ "./src/app/addbottlemodal/addbottlemodal.page.ts");








var StockPageModule = /** @class */ (function () {
    function StockPageModule() {
    }
    StockPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _stock_routing_module__WEBPACK_IMPORTED_MODULE_5__["StockPageRoutingModule"],
            ],
            entryComponents: [_addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_7__["AddbottlemodalPage"],],
            declarations: [_stock_page__WEBPACK_IMPORTED_MODULE_6__["StockPage"], _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_7__["AddbottlemodalPage"],]
        })
    ], StockPageModule);
    return StockPageModule;
}());



/***/ }),

/***/ "./src/app/stock/stock.page.scss":
/*!***************************************!*\
  !*** ./src/app/stock/stock.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL3N0b2NrLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/stock/stock.page.ts":
/*!*************************************!*\
  !*** ./src/app/stock/stock.page.ts ***!
  \*************************************/
/*! exports provided: StockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPage", function() { return StockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../addbottlemodal/addbottlemodal.page */ "./src/app/addbottlemodal/addbottlemodal.page.ts");
/* harmony import */ var _rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rackcontent/rackcontent.page */ "./src/app/rackcontent/rackcontent.page.ts");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");










var StockPage = /** @class */ (function () {
    function StockPage(storage, barcode, upcv3Service, modalService, global, alertController) {
        this.storage = storage;
        this.barcode = barcode;
        this.upcv3Service = upcv3Service;
        this.modalService = modalService;
        this.global = global;
        this.alertController = alertController;
        this.addStock = false;
        this.remStock = false;
        this.retStock = false;
        this.name = { name: "", id: 0 };
        this.header = [];
    }
    StockPage.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("adds") == "0") {
            this.addStock = true;
        } // 30 € livraison LS MCB 2,5 € 120 unité MCB triphasé 6 A MCCB
        else if (localStorage.getItem("adds") == "1") {
            this.remStock = true;
        }
        else if (localStorage.getItem("adds") == "2") {
            this.retStock = true;
        }
        this.storage.get("token").then(function (val) {
            _this.token = val;
            _this.storage.get("stockid").then(function (val) {
                _this.name = JSON.parse(val);
                _this.upcv3Service.getBottlesByStockId(_this.name.id, _this.token).subscribe(function (res) {
                    _this.stock = res.result;
                    _this.stock.sort(function (a, b) {
                        if (a.rack < b.rack)
                            return -1;
                        if (a.rack > b.rack)
                            return 1;
                        return 0;
                    });
                    _this.stock.forEach(function (item) {
                        if (!_this.header.includes(item.rack)) {
                            _this.header.push(item.rack);
                        }
                    });
                });
            });
        });
    };
    StockPage.prototype.remRack = function () {
        var _this = this;
        this.barcode.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var text;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res.text != '') {
                    text = res.text;
                    this.upcv3Service.getBottleFromRack(this.token, res.text).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var modal;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(res.result.length > 0)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.modalService.create({
                                            component: _rackcontent_rackcontent_page__WEBPACK_IMPORTED_MODULE_7__["RackcontentPage"],
                                            componentProps: {
                                                rack: text
                                            }
                                        })];
                                case 1:
                                    modal = _a.sent();
                                    modal.present();
                                    return [3 /*break*/, 3];
                                case 2:
                                    alert("Aucune bouteille est associée à ce Rack !");
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        }); });
    };
    StockPage.prototype.addRack = function () {
        var _this = this;
        this.barcode.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var text;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (res.text != "") {
                    text = res.text;
                    this.upcv3Service.getBottleFromRack(this.token, res.text).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var modal;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(res.result.length == 0)) return [3 /*break*/, 1];
                                    this.presentAlertRack(text);
                                    return [3 /*break*/, 3];
                                case 1:
                                    localStorage.setItem("rack", text);
                                    return [4 /*yield*/, this.modalService.create({
                                            component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                                            componentProps: {
                                                barcode: "",
                                                stockRet: this.name,
                                                mode: 1
                                            }
                                        })];
                                case 2:
                                    modal = _a.sent();
                                    modal.present();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        }); });
    };
    StockPage.prototype.presentAlertRack = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Nouveau Rack',
                            subHeader: '',
                            message: 'Vous avez ajouter un nouveau rack ?',
                            buttons: [{ text: 'Annuler', handler: function () { } }, { text: 'Confirmer',
                                    handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var modal;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    localStorage.setItem("rack", text);
                                                    return [4 /*yield*/, this.modalService.create({
                                                            component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                                                            componentProps: {
                                                                barcode: "",
                                                                stockRet: this.name,
                                                                mode: 1
                                                            }
                                                        })];
                                                case 1:
                                                    modal = _a.sent();
                                                    modal.present();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StockPage.prototype.retRack = function () {
        var _this = this;
        this.barcode.scan().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(res.text != "")) return [3 /*break*/, 2];
                        localStorage.setItem("rack", res.text);
                        return [4 /*yield*/, this.modalService.create({
                                component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                                componentProps: {
                                    barcode: "",
                                    stockRet: this.name,
                                    mode: 2
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    StockPage.prototype.delBottle = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.barcode.scan().then(function (code) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var modal;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(code.text != '')) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.modalService.create({
                                        component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                                        componentProps: {
                                            barcode: code.text,
                                            stockRet: this.name,
                                            mode: 0
                                        }
                                    })];
                            case 1:
                                modal = _a.sent();
                                return [4 /*yield*/, modal.present()];
                            case 2: return [2 /*return*/, _a.sent()];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    StockPage.prototype.addBottle = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.barcode.scan().then(function (code) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var modal;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(code.text != '')) return [3 /*break*/, 3];
                                localStorage.setItem("rack", null);
                                return [4 /*yield*/, this.modalService.create({
                                        component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                                        componentProps: {
                                            barcode: code.text,
                                            stockRet: this.name,
                                            mode: 1
                                        }
                                    })];
                            case 1:
                                modal = _a.sent();
                                return [4 /*yield*/, modal.present()];
                            case 2: return [2 /*return*/, _a.sent()];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    StockPage.prototype.retBottles = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.barcode.scan().then(function (code) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var modal;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(code.text != '')) return [3 /*break*/, 2];
                                localStorage.setItem("rack", null);
                                return [4 /*yield*/, this.modalService.create({
                                        component: _addbottlemodal_addbottlemodal_page__WEBPACK_IMPORTED_MODULE_6__["AddbottlemodalPage"],
                                        componentProps: {
                                            barcode: code.text,
                                            stockRet: this.name,
                                            mode: 2
                                        }
                                    })];
                            case 1:
                                modal = _a.sent();
                                modal.present();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    StockPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] },
        { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _api_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
    ]; };
    StockPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock',
            template: __webpack_require__(/*! raw-loader!./stock.page.html */ "./node_modules/raw-loader/index.js!./src/app/stock/stock.page.html"),
            styles: [__webpack_require__(/*! ./stock.page.scss */ "./src/app/stock/stock.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_4__["Upcv3serviceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _api_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], StockPage);
    return StockPage;
}());



/***/ })

}]);
//# sourceMappingURL=stock-stock-module-es5.js.map