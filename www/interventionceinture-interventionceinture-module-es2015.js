(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interventionceinture-interventionceinture-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/interventionceinture/interventionceinture.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/interventionceinture/interventionceinture.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons> \n    <!--<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>-->\n     <ion-title>Intervention sur une ceinture</ion-title>\n     <ion-buttons slot=\"end\" *ngIf=\"!global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"globe\" color=\"light\" (click)=\"onSynchroB1B2();\"></ion-icon>ADMIN</ion-button> \n     </ion-buttons>\n     <ion-buttons slot=\"end\" *ngIf=\"global.isBBAM\">\n      <ion-button fill=\"clear\"> <ion-icon name=\"wifi\" color=\"light\"></ion-icon>{{global.ssid}}</ion-button> \n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>  \n  <ion-grid>  \n    <ion-row style=\"display: flex; justify-content: center;\">\n      <ion-col size=\"8\" text-center style=\"padding-top: 5%;\">\n        <h4>Intervention sur une ceinture</h4>\n      </ion-col>\n    </ion-row>  \n    <ion-row>        \n        <ion-col size=\"12\">\n          <fieldset>\n            <legend>Objet de l'intervention</legend> \n          \n           <ion-select  multiple=\"true\" [(ngModel)]=\"motive\">\n              <ion-select-option *ngFor=\"let motiveOption of motiveOptions\" [value]=\"motiveOption\">\n                {{motiveOption}}\n              </ion-select-option>\n            </ion-select>\n          </fieldset>\n        </ion-col>        \n        <ion-col size=\"12\">\n          <fieldset>\n            <legend>Intervenants</legend> \n          \n           <ion-select multiple=\"true\" [(ngModel)]=\"intervenantsChoisis\">\n              <ion-select-option *ngFor=\"let intervenant of intervenants\" [value]=\"intervenant\">\n                {{intervenant}}\n              </ion-select-option>\n            </ion-select>\n          </fieldset>\n        </ion-col>\n        <ion-col size=\"12\">\n          <fieldset>\n            <legend>Sélection ceinture</legend> \n          \n           <ion-select [(ngModel)]=\"ceintureChoisie\">\n              <ion-select-option *ngFor=\"let nearUPCName of nearUPCNames\" [value]=\"nearUPCName\">\n                {{nearUPCName}}\n              </ion-select-option>\n            </ion-select>\n          </fieldset>\n        </ion-col>\n      \n      \n       \n      \n    </ion-row>\n    \n  </ion-grid>\n \n</ion-content>\n<ion-footer>\n  \n  <ion-button color=\"primary\" size=\"block\" (click)=\"goTo();\">Selection ceinture</ion-button>\n\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/interventionceinture/interventionceinture-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/interventionceinture/interventionceinture-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: InterventionceinturePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterventionceinturePageRoutingModule", function() { return InterventionceinturePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _interventionceinture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interventionceinture.page */ "./src/app/interventionceinture/interventionceinture.page.ts");




const routes = [
    {
        path: '',
        component: _interventionceinture_page__WEBPACK_IMPORTED_MODULE_3__["InterventionceinturePage"]
    }
];
let InterventionceinturePageRoutingModule = class InterventionceinturePageRoutingModule {
};
InterventionceinturePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InterventionceinturePageRoutingModule);



/***/ }),

/***/ "./src/app/interventionceinture/interventionceinture.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/interventionceinture/interventionceinture.module.ts ***!
  \*********************************************************************/
/*! exports provided: InterventionceinturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterventionceinturePageModule", function() { return InterventionceinturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _interventionceinture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interventionceinture-routing.module */ "./src/app/interventionceinture/interventionceinture-routing.module.ts");
/* harmony import */ var _interventionceinture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interventionceinture.page */ "./src/app/interventionceinture/interventionceinture.page.ts");







let InterventionceinturePageModule = class InterventionceinturePageModule {
};
InterventionceinturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _interventionceinture_routing_module__WEBPACK_IMPORTED_MODULE_5__["InterventionceinturePageRoutingModule"]
        ],
        declarations: [_interventionceinture_page__WEBPACK_IMPORTED_MODULE_6__["InterventionceinturePage"]]
    })
], InterventionceinturePageModule);



/***/ }),

/***/ "./src/app/interventionceinture/interventionceinture.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/interventionceinture/interventionceinture.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset {\n  padding-left: 2%;\n  padding-right: 2%;\n  border: 1px #2E7117 solid;\n  border-radius: 1em;\n}\n\nlegend {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: larger;\n  color: #2E7117;\n  font-style: italic;\n  padding-left: 1%;\n  padding-right: 2%;\n}\n\nion-select {\n  margin-top: -4%;\n}\n\nul {\n  list-style: none;\n  padding-left: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJtYW5kL0Rlc2t0b3AvYmlvYmVsdG1vYmlsZS9zcmMvYXBwL2ludGVydmVudGlvbmNlaW50dXJlL2ludGVydmVudGlvbmNlaW50dXJlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW50ZXJ2ZW50aW9uY2VpbnR1cmUvaW50ZXJ2ZW50aW9uY2VpbnR1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvaW50ZXJ2ZW50aW9uY2VpbnR1cmUvaW50ZXJ2ZW50aW9uY2VpbnR1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTsgXG4gIGJvcmRlcjogMXB4ICMyRTcxMTcgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cbmxlZ2VuZCB7ICBcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7IFxuICBmb250LXNpemU6bGFyZ2VyO1xuICBjb2xvcjogIzJFNzExNztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xuICBwYWRkaW5nLXJpZ2h0OiAyJTtcbn1cblxuaW9uLXNlbGVjdHtcbiAgbWFyZ2luLXRvcDogLTQlO1xuICBcbn1cblxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6bm9uZTtcbiAgcGFkZGluZy1sZWZ0OiA0JTtcbn1cbiIsImZpZWxkc2V0IHtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG4gIGJvcmRlcjogMXB4ICMyRTcxMTcgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cblxubGVnZW5kIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgY29sb3I6ICMyRTcxMTc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBtYXJnaW4tdG9wOiAtNCU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiA0JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/interventionceinture/interventionceinture.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/interventionceinture/interventionceinture.page.ts ***!
  \*******************************************************************/
/*! exports provided: InterventionceinturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterventionceinturePage", function() { return InterventionceinturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/upcv3service.service */ "./src/app/api/upcv3service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/global.service */ "./src/app/api/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");







let InterventionceinturePage = class InterventionceinturePage {
    constructor(upcv3service, storage, router, global, geolocation) {
        this.upcv3service = upcv3service;
        this.storage = storage;
        this.router = router;
        this.global = global;
        this.geolocation = geolocation;
        this.motiveOptions = ["Installation", "Modification du nombre de pièges", "Remise en route", "Maintenance", "Changements de bouteilles CO2", "Changement d'UPC", "Hivernage", "Autre"];
        this.motive = ["Installation"];
        this.intervenants = [this.global.proprietaire];
        this.intervenantsChoisis = [this.global.proprietaire];
        this.nearUPC = [];
        this.nearUPCNames = [];
    }
    ;
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storage.get('token').then(val => {
                this.token = val;
                this.upcv3service.getOperators(this.token).subscribe(res => {
                    this.data = res.result;
                    //alert(JSON.stringify(this.data))
                    //alert(this.data[0]["lastName"])
                    for (var i = 0; i < this.data.length; i++) {
                        this.intervenants.push(this.data[i]["lastName"] + " " + this.data[i]["firstName"]);
                    }
                    //alert(this.intervenants)
                });
                this.upcv3service.getUPC3(this.token).subscribe(res => {
                    this.data2 = res.result;
                    this.geolocation.getCurrentPosition().then(res => {
                        var lat = res.coords.latitude;
                        var long = res.coords.longitude;
                        //alert(JSON.stringify(this.data2))
                        this.data2.forEach(element => {
                            if (this.getDistanceFromLatLonInKm(lat, long, element.lat, element.lng) < 30) {
                                this.nearUPC.push(element);
                            }
                            this.nearUPCNames.push(element.upcNameId);
                            //element.communicationParameters.
                            //alert(this.getDistanceFromLatLonInKm(lat, long, element.latitude, element.longitude))
                        });
                        console.log(JSON.stringify(this.nearUPC));
                        /*this.nearUPCNames.forEach(element => {
                          $("#upcList" ).append("<ion-select [(ngModel)]='ceintureChoisie'><ion-select-option *ngFor='let nearUPCName of nearUPCNames' [value]='nearUPCName'>{{nearUPCName}}</ion-select-option></ion-select>");
                        })*/
                    });
                });
            });
        });
    }
    selectionCeinture() {
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
    goTo() {
        this.global.objetIntervention = this.motive;
        this.global.intervenants = this.intervenantsChoisis;
        this.router.navigate(['interventionceinture2']);
    }
};
InterventionceinturePage.ctorParameters = () => [
    { type: _api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] }
];
InterventionceinturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-interventionceinture',
        template: __webpack_require__(/*! raw-loader!./interventionceinture.page.html */ "./node_modules/raw-loader/index.js!./src/app/interventionceinture/interventionceinture.page.html"),
        styles: [__webpack_require__(/*! ./interventionceinture.page.scss */ "./src/app/interventionceinture/interventionceinture.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_upcv3service_service__WEBPACK_IMPORTED_MODULE_2__["Upcv3serviceService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _api_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]])
], InterventionceinturePage);



/***/ })

}]);
//# sourceMappingURL=interventionceinture-interventionceinture-module-es2015.js.map