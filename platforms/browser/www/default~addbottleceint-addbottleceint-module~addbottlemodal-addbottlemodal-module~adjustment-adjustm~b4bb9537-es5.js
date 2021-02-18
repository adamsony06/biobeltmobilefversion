(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~addbottleceint-addbottleceint-module~addbottlemodal-addbottlemodal-module~adjustment-adjustm~b4bb9537"],{

/***/ "./src/app/api/ApiResponse.ts":
/*!************************************!*\
  !*** ./src/app/api/ApiResponse.ts ***!
  \************************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
var Code;
(function (Code) {
    // General
    Code["WRONG_PARAMS"] = "WRONG_PARAMS";
    Code["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    Code["UNAUTHORIZED"] = "UNAUTHORIZED";
    // Token
    Code["TOKEN_WRONG_IDENTIFIERS"] = "TOKEN_WRONG_IDENTIFIERS";
    Code["TOKEN_LOGGED_IN"] = "TOKEN_LOGGED_IN";
    // Operator
    Code["OPERATOR_RECOVERED"] = "OPERATOR_RECOVERED";
    Code["OPERATOR_CREATED"] = "OPERATOR_CREATED";
    Code["OPERATOR_DOESNT_EXSIST"] = "OPERATOR_DOESNT_EXSIST";
    Code["OPERATOR_ALREADY_EXSIST"] = "OPERATOR_ALREADY_EXSIST";
    Code["OPERATOR_EDITED"] = "OPERATOR_EDITED";
    Code["OPERATOR_DELETED"] = "OPERATOR_DELETED";
    // Designer
    Code["DESIGNER_RECOVERED"] = "DESIGNER_RECOVERED";
    Code["DESIGNER_DOESNT_EXSIST"] = "DESIGNER_DOESNT_EXSIST";
    Code["DESIGNER_ALREADY_EXSIST"] = "DESIGNER_ALREADY_EXSIST";
    Code["DESIGNER_CREATED"] = "DESIGNER_CREATED";
    Code["DESIGNER_EDITED"] = "DESIGNER_EDITED";
    Code["DESIGNER_DELETED"] = "DESIGNER_DELETED";
    // Site
    Code["SITE_RECOVERED"] = "SITE_RECOVERED";
    Code["SITE_CREATED"] = "SITE_CREATED";
    Code["SITE_DOESNT_EXSIST"] = "SITE_DOESNT_EXSIST";
    Code["SITE_ALREADY_EXSIST"] = "SITE_ALREADY_EXSIST";
    Code["SITE_EDITED"] = "SITE_EDITED";
    Code["SITE_DELETED"] = "SITE_DELETED";
    Code["SITE_USED"] = "SITE_USED";
    // Stock
    Code["STOCK_RECOVERED"] = "STOCK_RECOVERED";
    Code["STOCK_CREATED"] = "STOCK_CREATED";
    Code["STOCK_DOESNT_EXSIST"] = "STOCK_DOESNT_EXSIST";
    Code["STOCK_ALREADY_EXSIST"] = "STOCK_ALREADY_EXSIST";
    Code["STOCK_EDITED"] = "STOCK_EDITED";
    Code["STOCK_DELETED"] = "STOCK_DELETED";
    Code["STOCK_USED"] = "STOCK_USED";
    // BottleType
    Code["BOTTLE_TYPE_RECOVERED"] = "BOTTLE_TYPE_RECOVERED";
    Code["BOTTLE_TYPE_CREATED"] = "BOTTLE_TYPE_CREATED";
    Code["BOTTLE_TYPE_DOESNT_EXSIST"] = "BOTTLE_TYPE_DOESNT_EXSIST";
    Code["BOTTLE_TYPE_ALREADY_EXSIST"] = "BOTTLE_TYPE_ALREADY_EXSIST";
    Code["BOTTLE_TYPE_DELETED"] = "BOTTLE_TYPE_DELETED";
    Code["BOTTLE_TYPE_USED"] = "BOTTLE_TYPE_USED";
    // Bottle
    Code["BOTTLE_RECOVERED"] = "BOTTLE_RECOVERED";
    Code["BOTTLE_CREATED"] = "BOTTLE_CREATED";
    Code["BOTTLE_DOESNT_EXSIST"] = "BOTTLE_DOESNT_EXSIST";
    Code["BOTTLE_ALREADY_EXSIST"] = "BOTTLE_ALREADY_EXSIST";
    Code["BOTTLE_DELETED"] = "BOTTLE_DELETED";
    // Project
    Code["PROJECT_RECOVERED"] = "PROJECT_RECOVERED";
    Code["PROJECT_DOESNT_EXSIST"] = "PROJECT_DOESNT_EXSIST";
    Code["PROJECT_ALREADY_EXSIST"] = "PROJECT_ALREADY_EXSIST";
    Code["PROJECT_CREATED"] = "PROJECT_CREATED";
    Code["PROJECT_EDITED"] = "PROJECT_EDITED";
    Code["PROJECT_DELETED"] = "PROJECT_DELETED";
    // Version
    Code["VERSION_RECOVERED"] = "VERSION_RECOVERED";
    Code["VERSION_DOESNT_EXSIST"] = "VERSION_DOESNT_EXSIST";
    Code["VERSION_ALREADY_EXSIST"] = "VERSION_ALREADY_EXSIST";
    Code["VERSION_CREATED"] = "VERSION_CREATED";
    Code["VERSION_EDITED"] = "VERSION_EDITED";
    Code["VERSION_SYNCHRONIZED"] = "VERSION_SYNCHRONIZED";
    Code["VERSION_DELETED"] = "VERSION_DELETED";
    // Tasks
    Code["TASK_RECOVERED"] = "TASK_RECOVERED";
    Code["TASK_ALREADY_RUNNING"] = "TASK_ALREADY_RUNNING";
    // UPCV3
    Code["UPCV3_RECOVERED"] = "UPCV3_RECOVERED";
    Code["UPCV3_DOESNT_EXSIST"] = "UPCV3_DOESNT_EXSIST";
    Code["UPCV3_EDITED"] = "UPCV3_EDITED";
    Code["INTERVENTIONV3_RECOVERED"] = "INTERVENTIONV3_RECOVERED";
    Code["INTERVENTIONV3_DOESNT_EXSIST"] = "INTERVENTIONV3_DOESNT_EXSIST";
    Code["INTERVENTIONV3_CREATED"] = "INTERVENTIONV3_CREATED";
    Code["INTERVENTIONV3_DELETED"] = "INTERVENTIONV3_DELETED";
    Code["INTERVENTIONV3_USED"] = "INTERVENTIONV3_USED";
    Code["OBSERVATIONV3_RECOVERED"] = "OBSERVATIONV3_RECOVERED";
    Code["EVENT_RECOVERED"] = "EVENT_RECOVERED";
    Code["STATS_RECOVERED"] = "STATS_RECOVERED";
    Code["UPCV3_CREATED"] = "UPCV3_CREATED";
    Code["UPCV3_DELETED"] = "UPCV3_DELETED";
    // Firmware
    Code["FIRMWARE_RECOVERED"] = "FIRMWARE_RECOVERED";
    Code["FIRMWARE_UPLOADED"] = "FIRMWARE_UPLOADED";
    Code["FIRMWARE_DELETED"] = "FIRMWARE_DELETED";
    Code["FIRMWARE_FLASH_STARTED"] = "FIRMWARE_FLASH_STARTED";
    // Poll / Init / Restore
    Code["POLL_STARTED"] = "POLL_STARTED";
    Code["INIT_STARTED"] = "INIT_STARTED";
    Code["RESTORE_STARTED"] = "RESTORE_STARTED";
    // Default UPCV3 Params
    Code["DEFAULT_UPCV3_PARAMS_RECOVERED"] = "DEFAULT_UPCV3_PARAMS_RECOVERED";
    Code["DEFAULT_UPCV3_PARAMS_EDITED"] = "DEFAULT_UPCV3_PARAMS_EDITED";
    // Modbus
    Code["MODBUS_CONNECTION_ERROR"] = "MODBUS_CONNECTION_ERROR";
    Code["MODBUS_WRITE_ERROR"] = "MODBUS_WRITE_ERROR";
    Code["MODBUS_READ_ERROR"] = "MODBUS_READ_ERROR";
    // UPCV2
    Code["UPCV2_RECOVERED"] = "UPCV2_RECOVERED";
    Code["UPCV2_DOESNT_EXSIST"] = "UPCV2_DOESNT_EXSIST";
    Code["UPCV2_EDITED"] = "UPCV2_EDITED";
    Code["INTERVENTIONV2_RECOVERED"] = "INTERVENTIONV2_RECOVERED";
    Code["INTERVENTIONV2_DOESNT_EXSIST"] = "INTERVENTIONV2_DOESNT_EXSIST";
    Code["INTERVENTIONV2_CREATED"] = "INTERVENTIONV2_CREATED";
    Code["INTERVENTIONV2_EDITED"] = "INTERVENTIONV2_EDITED";
    Code["INTERVENTIONV2_DELETED"] = "INTERVENTIONV2_DELETED";
    Code["INTERVENTIONV2_USED"] = "INTERVENTIONV2_USED";
    Code["OBSERVATIONV2_RECOVERED"] = "OBSERVATIONV2_RECOVERED";
})(Code || (Code = {}));


/***/ }),

/***/ "./src/app/api/upcv3service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/api/upcv3service.service.ts ***!
  \*********************************************/
/*! exports provided: Upcv3serviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upcv3serviceService", function() { return Upcv3serviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_upcv3_upcv3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/upcv3/upcv3 */ "./src/app/model/upcv3/upcv3.ts");
/* harmony import */ var _ApiResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApiResponse */ "./src/app/api/ApiResponse.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _model_operator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/operator */ "./src/app/model/operator.ts");
/* harmony import */ var _model_site__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/site */ "./src/app/model/site.ts");
/* harmony import */ var _model_bottle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/bottle */ "./src/app/model/bottle.ts");
/* harmony import */ var _model_stock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/stock */ "./src/app/model/stock.ts");











var Upcv3serviceService = /** @class */ (function () {
    function Upcv3serviceService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiUrl = 'http://dev-api.biobelt.com/';
    }
    Upcv3serviceService.prototype.getUPC3 = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'upcv3/all', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UPCV3_RECOVERED:
                    var upcv3 = [];
                    var i = 0;
                    res.result.forEach(function (jsonUPCV3) { if (_model_upcv3_upcv3__WEBPACK_IMPORTED_MODULE_4__["UPCV3"].loadFromJSON(jsonUPCV3).upcStatusString === 'DIS') {
                        upcv3.push(_model_upcv3_upcv3__WEBPACK_IMPORTED_MODULE_4__["UPCV3"].loadFromJSON(jsonUPCV3));
                    } });
                    res.result = upcv3;
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
                    break;
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.getAllStock = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + "stock/allStocks", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].STOCK_RECOVERED:
                    var st = [];
                    res.result.forEach(function (item) {
                        st.push(_model_stock__WEBPACK_IMPORTED_MODULE_10__["Stock"].loadFromJSON(item));
                    });
                    res.result = st;
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Opération non autorisée !");
                    break;
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.apiUrl + 'user/login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].TOKEN_LOGGED_IN:
                    _this.storage.set('token', res.result.toString());
                    _this.storage.set('refreshToken', res.refreshToken.toString());
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].TOKEN_WRONG_IDENTIFIERS:
                    alert('Identifiants invalides !');
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].WRONG_PARAMS:
                    alert("Fatal Error !");
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.getOperators = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'operator/all', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].OPERATOR_RECOVERED:
                    var operators = [];
                    res.result.forEach(function (jsonOperator) { return operators.push(_model_operator__WEBPACK_IMPORTED_MODULE_7__["Operator"].loadFromJSON(jsonOperator)); });
                    res.result = operators;
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Opération non autorisée !");
                    break;
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.editTrap = function (id, nbpieges, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + 'upcv3/' + id + '/editTrapNumber?nbpieges=' + nbpieges, {}, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    Upcv3serviceService.prototype.getAllBottles = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'bottleType/all', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    Upcv3serviceService.prototype.getAllBottle = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + "bottle/getAllBottles", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    Upcv3serviceService.prototype.getBottleFromRack = function (token, rack) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + "bottle/getRack/" + rack, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.code === _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_RECOVERED) {
                var bottle = [];
                res.result.forEach(function (item) {
                    bottle.push(_model_bottle__WEBPACK_IMPORTED_MODULE_9__["Bottle"].loadFromJSON(item));
                });
                res.result = bottle;
            }
            else {
                alert("Vous ne pouvez pas utiliser l'application mobile !");
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.getBottlesByStockId = function (id, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + "stock/" + id + "/bottles?all=true&pageSize=1000", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.code === _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_RECOVERED) {
                var bottle = [];
                res.result.forEach(function (item) {
                    bottle.push(_model_bottle__WEBPACK_IMPORTED_MODULE_9__["Bottle"].loadFromJSON(item));
                });
                res.result = bottle;
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.getSites = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'site/all', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].SITE_RECOVERED:
                    var sites = [];
                    res.result.forEach(function (json) { return sites.push(_model_site__WEBPACK_IMPORTED_MODULE_8__["Site"].loadFromJSON(json)); });
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].SITE_DOESNT_EXSIST:
                    alert("Le Site n'existe pas");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à accèder à ce service");
                    break;
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.addToStockMob = function (form, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + "bottle/addToStockMob", form, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_CREATED:
                    alert("Bouteilles ajoutés au stock !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_ALREADY_EXSIST:
                    alert("Bouteilles déjà enregistrés sur le stock !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].INTERNAL_ERROR:
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].WRONG_PARAMS:
                    alert("Erreur Mauvais Paramètres !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_TYPE_DOESNT_EXSIST:
                    alert("La bouteille scanner n'existe pas dans la base de données");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].STOCK_DOESNT_EXSIST:
                    alert("Le stock n'existe pas !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.removeFromCeint = function (form, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + "bottle/removeFromCeintMobile", form, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_DELETED:
                    alert("Bouteilles Enlevées de la ceinture !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].INTERNAL_ERROR:
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].WRONG_PARAMS:
                    alert('Erreur Mauvais Paramètres !');
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_TYPE_DOESNT_EXSIST:
                    alert("La bouteille n'existe pas dans la base de données");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].STOCK_DOESNT_EXSIST:
                    alert('Le stock est inexistant !');
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
                    break;
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.addBottleBelt = function (form, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + 'bottle/addBottleBeltMobile', form, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_CREATED:
                    alert('Bouteilles ajoutés à la ceinture !');
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].INTERNAL_ERROR:
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].WRONG_PARAMS:
                    alert('Erreur Mauvais Paramètres !');
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_TYPE_DOESNT_EXSIST:
                    alert("La bouteille n'existe pas dans la base de données");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].STOCK_DOESNT_EXSIST:
                    alert('Le stock est inexistant !');
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
                    break;
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.addToStock = function (form, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + 'bottle/addBottlesToBelt', form, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_CREATED:
                    alert('Bouteilles ajoutés au stocks !');
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].INTERNAL_ERROR:
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].WRONG_PARAMS:
                    alert('Erreur Mauvais Paramètres !');
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_TYPE_DOESNT_EXSIST:
                    alert("La bouteille n'existe pas dans la base de données");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].STOCK_DOESNT_EXSIST:
                    alert('Le stock est inexistant !');
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
                    break;
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.returnFourn = function (form, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + "bottle/returnFourn", form, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_DELETED:
                    alert("Bouteilles Enlevés du Stock !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'appli mobile !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_DOESNT_EXSIST:
                    alert("La bouteille n'existe pas dans la base de données !");
                    break;
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.removeRack = function (rack, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + "bottle/removeRack/" + rack, {}, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_DELETED:
                    alert("Rack Enlevé du Stock !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'appli mobile !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_DOESNT_EXSIST:
                    alert("Le Rack n'existe pas !");
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].WRONG_PARAMS:
                    alert("Mauvais Paramètres !");
                    break;
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.downloadCustomPicture = function (id, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('accept', '*').set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'project/' + id + '/download', { headers: headers, responseType: 'arraybuffer' });
    };
    Upcv3serviceService.prototype.getProject = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'project/all', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].PROJECT_RECOVERED:
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].PROJECT_DOESNT_EXSIST:
                    alert("Projet Inexistant !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'appli mobile !");
                    break;
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.getVersion = function (id, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.get(this.apiUrl + 'project/' + id + '/versions', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].VERSION_RECOVERED:
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].VERSION_DOESNT_EXSIST:
                    alert("La ceinture n'existe pas !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application !");
                    break;
            }
            return res;
        }));
    };
    Upcv3serviceService.prototype.addToDeStock = function (json, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('authorization', 'Bearer ' + token);
        return this.http.post(this.apiUrl + "bottle/addToStock", json, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            switch (res.code) {
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_CREATED:
                    alert("Bouteilles ajoutés au stock !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_ALREADY_EXSIST:
                    alert("Bouteilles déjà enregistrés sur le stock !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].INTERNAL_ERROR:
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].WRONG_PARAMS:
                    alert("Erreur Mauvais Paramètres !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].BOTTLE_TYPE_DOESNT_EXSIST:
                    alert("La bouteille scanner n'existe pas dans la base de données");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].STOCK_DOESNT_EXSIST:
                    alert("Le stock n'existe pas !");
                    break;
                case _ApiResponse__WEBPACK_IMPORTED_MODULE_5__["Code"].UNAUTHORIZED:
                    alert("Vous n'êtes pas autorisé à utiliser l'application mobile !");
            }
            return res;
        }));
    };
    Upcv3serviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
    ]; };
    Upcv3serviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], Upcv3serviceService);
    return Upcv3serviceService;
}());



/***/ }),

/***/ "./src/app/model/bottle.ts":
/*!*********************************!*\
  !*** ./src/app/model/bottle.ts ***!
  \*********************************/
/*! exports provided: Bottle, BottleEvent, Status, State, Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bottle", function() { return Bottle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottleEvent", function() { return BottleEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var _bottleType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottleType */ "./src/app/model/bottleType.ts");
/* harmony import */ var _upcv3_LocalDateTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upcv3/LocalDateTime */ "./src/app/model/upcv3/LocalDateTime.ts");


var Bottle = /** @class */ (function () {
    function Bottle() {
        this.id = '';
        this.barcode = '';
        this.status = Status.ENTREPOSE;
        this.state = State.FULL;
        this.bottleType = null;
        this.bottleEvents = [];
        this.lastStatus = Status.ENTREPOSE;
        this.rack = "";
    }
    Object.defineProperty(Bottle.prototype, "statusString", {
        get: function () {
            switch (this.status) {
                case Status.ENTREPOSE: return 'Entreposée';
                case Status.B1: return 'Sur B1';
                case Status.B2: return 'Sur B2';
                case Status.REVOKED: return 'Retirée';
                case Status.UNDEFINED: return 'Indéfini';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bottle.prototype, "bottleString", {
        get: function () {
            return this.bottleType.designationString + ' (' + this.barcode + ')';
        },
        enumerable: true,
        configurable: true
    });
    Bottle.loadFromJSON = function (json) {
        var bottle = Object.assign(new Bottle, json);
        if (json.bottleType)
            bottle.bottleType = _bottleType__WEBPACK_IMPORTED_MODULE_0__["BottleType"].loadFromJSON(json.bottleType);
        if (json.bottleEvents) {
            bottle.bottleEvents = [];
            json.bottleEvents.forEach(function (jsonBottleEvent) {
                return bottle.bottleEvents.push(BottleEvent.loadFromJSON(jsonBottleEvent));
            });
        }
        return bottle;
    };
    return Bottle;
}());

var BottleEvent = /** @class */ (function () {
    function BottleEvent() {
        this.id = '';
        this.code = Code.ENTREPOSAGE;
        this.date = new _upcv3_LocalDateTime__WEBPACK_IMPORTED_MODULE_1__["LocalDateTime"]();
        this.parameter = '';
        this.destinationId = '';
        this.destinationType = '';
        this.state = '';
        this.intervention_time = new _upcv3_LocalDateTime__WEBPACK_IMPORTED_MODULE_1__["LocalDateTime"]();
        this.operator = '';
    }
    Object.defineProperty(BottleEvent.prototype, "codeString", {
        get: function () {
            switch (this.code) {
                case Code.ENTREPOSAGE:
                    if (this.parameter === "0840ffbf-82ee-4f23-a3b9-96b1f99cefdd" || this.parameter === '1e2b0d98-44a8-4fe8-a412-299f0991919d' || this.parameter === "8eea82b3-e17c-4a62-8e4a-389a8f15e9a2" || this.parameter === "ff1c41aa-f9f7-478b-8b41-8616313f6d88") {
                        return 'Ajout au stock';
                    }
                    else {
                        return 'Ajout à la ceinture';
                    }
                case Code.CONNEXION_A_B1: return 'Ajout à B1';
                case Code.CONNEXION_A_B2: return 'Ajout à B2';
                case Code.RECEPTION: return 'Reception au stock';
                case Code.RENVOIE: return 'Suppression du stock';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BottleEvent.prototype, "parameterString", {
        get: function () {
            if (this.parameter)
                return this.parameter;
            else
                return '-';
        },
        enumerable: true,
        configurable: true
    });
    BottleEvent.loadFromJSON = function (json) {
        var bottleEvent = Object.assign(new BottleEvent, json);
        if (json.date)
            bottleEvent.date = _upcv3_LocalDateTime__WEBPACK_IMPORTED_MODULE_1__["LocalDateTime"].loadFromJSON(json.date);
        return bottleEvent;
    };
    return BottleEvent;
}());

var Status;
(function (Status) {
    Status["ENTREPOSE"] = "ENTREPOSE";
    Status["B1"] = "B1";
    Status["B2"] = "B2";
    Status["REVOKED"] = "REVOKED";
    Status["UNDEFINED"] = "UNDEFINED";
})(Status || (Status = {}));
var State;
(function (State) {
    State["FULL"] = "FULL";
    State["IN_USE"] = "IN_USE";
    State["EMPTY"] = "EMPTY";
})(State || (State = {}));
var Code;
(function (Code) {
    Code["ENTREPOSAGE"] = "ENTREPOSAGE";
    Code["CONNEXION_A_B1"] = "CONNEXION_A_B1";
    Code["CONNEXION_A_B2"] = "CONNEXION_A_B2";
    Code["RECEPTION"] = "RECEPTION";
    Code["RENVOIE"] = "RENVOIE";
})(Code || (Code = {}));


/***/ }),

/***/ "./src/app/model/bottleType.ts":
/*!*************************************!*\
  !*** ./src/app/model/bottleType.ts ***!
  \*************************************/
/*! exports provided: BottleType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottleType", function() { return BottleType; });
var BottleType = /** @class */ (function () {
    function BottleType() {
        this.id = '';
        this.designation = 0;
        this.brand = '';
        this.isRembo = false;
    }
    Object.defineProperty(BottleType.prototype, "designationString", {
        get: function () {
            return this.designation + ' kg' + (this.isRembo ? ' (Rembo) - ' : ' - ') + this.brand;
        },
        enumerable: true,
        configurable: true
    });
    BottleType.loadFromJSON = function (json) {
        return Object.assign(new BottleType, json);
    };
    return BottleType;
}());



/***/ }),

/***/ "./src/app/model/operator.ts":
/*!***********************************!*\
  !*** ./src/app/model/operator.ts ***!
  \***********************************/
/*! exports provided: Operator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operator", function() { return Operator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/model/user.ts");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site */ "./src/app/model/site.ts");



var Operator = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Operator, _super);
    function Operator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastName = '';
        _this.firstName = '';
        _this.phone = '';
        _this.sites = [];
        return _this;
    }
    Operator.loadFromJSON = function (json) {
        var operator = Object.assign(new Operator, json);
        if (json.sites) {
            operator.sites = [];
            json.sites.forEach(function (jsonSite) { operator.sites.push(_site__WEBPACK_IMPORTED_MODULE_2__["Site"].loadFromJSON(jsonSite)); });
        }
        return operator;
    };
    return Operator;
}(_user__WEBPACK_IMPORTED_MODULE_1__["User"]));



/***/ }),

/***/ "./src/app/model/site.ts":
/*!*******************************!*\
  !*** ./src/app/model/site.ts ***!
  \*******************************/
/*! exports provided: Site, State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Site", function() { return Site; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock */ "./src/app/model/stock.ts");
/* harmony import */ var _upcv3_upcv3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upcv3/upcv3 */ "./src/app/model/upcv3/upcv3.ts");


var Site = /** @class */ (function () {
    function Site() {
        this.id = '';
        this.clientNumber = '';
        this.name = '';
        this.infos = '';
        this.address = '';
        this.lat = 0;
        this.lng = 0;
        this.stockClient = '';
        this.upcv3 = [];
    }
    Object.defineProperty(Site.prototype, "state", {
        get: function () {
            var state = State.RESERVE_1;
            // If all belts hibernating
            var hibernating = true;
            this.upcv3.forEach(function (upcv3) { if (!upcv3.hibernated)
                hibernating = false; });
            // If a belt is in B2
            var b2 = false;
            this.upcv3.forEach(function (upcv3) { if (!upcv3.hibernated && (upcv3.reservesParameters.co2Res1Status == 0 || upcv3.reservesParameters.co2Res2Status == 0))
                b2 = true; });
            // If a belt is in B3 OR DISABLE OR EMPTY
            var disable = false;
            this.upcv3.forEach(function (upcv3) { if (!upcv3.hibernated && (upcv3.reservesParameters.co2Res1Status == 0 && upcv3.reservesParameters.co2Res2Status == 0))
                disable = true; });
            if (hibernating)
                state = State.HIBERNATING;
            if (b2)
                state = State.RESERVE_2;
            if (disable)
                state = State.DISABLE;
            return state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Site.prototype, "communicationState", {
        get: function () {
            var state = true;
            // UPC-V3
            this.upcv3.forEach(function (upcv3) {
                if (!upcv3.hibernated && upcv3.lastPollResult != 0)
                    state = false;
            });
            return state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Site.prototype, "hasBelts", {
        get: function () {
            return this.upcv3.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Site.loadFromJSON = function (json) {
        var site = Object.assign(new Site, json);
        if (json.stock)
            site.stock = _stock__WEBPACK_IMPORTED_MODULE_0__["Stock"].loadFromJSON(json.stock);
        if (json.upcv3) {
            site.upcv3 = [];
            json.upcv3.forEach(function (jsonUpcv3) { site.upcv3.push(_upcv3_upcv3__WEBPACK_IMPORTED_MODULE_1__["UPCV3"].loadFromJSON(jsonUpcv3)); });
        }
        return site;
    };
    return Site;
}());

var State;
(function (State) {
    State[State["HIBERNATING"] = 0] = "HIBERNATING";
    State[State["RESERVE_1"] = 1] = "RESERVE_1";
    State[State["RESERVE_2"] = 2] = "RESERVE_2";
    State[State["DISABLE"] = 3] = "DISABLE";
})(State || (State = {}));


/***/ }),

/***/ "./src/app/model/stock.ts":
/*!********************************!*\
  !*** ./src/app/model/stock.ts ***!
  \********************************/
/*! exports provided: Stock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stock", function() { return Stock; });
/* harmony import */ var _bottleType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottleType */ "./src/app/model/bottleType.ts");

var Stock = /** @class */ (function () {
    function Stock() {
        this.id = '';
        this.name = '';
        this.bottleTypes = [];
        this.bottleTypeStringCeint = "";
        this.fullBottlesNumber = 0;
        this.emptyBottlesNumber = 0;
        this.selected = false;
    }
    Object.defineProperty(Stock.prototype, "bottleTypesString", {
        get: function () {
            var names = [];
            this.bottleTypes.forEach(function (bottleType) { return names.push(bottleType.designationString); });
            return names.join(' | ');
        },
        enumerable: true,
        configurable: true
    });
    Stock.loadFromJSON = function (json) {
        var stock = Object.assign(new Stock, json);
        if (json.bottleTypes) {
            stock.bottleTypes = [];
            json.bottleTypes.forEach(function (jsonBottleType) { stock.bottleTypes.push(_bottleType__WEBPACK_IMPORTED_MODULE_0__["BottleType"].loadFromJSON(jsonBottleType)); });
        }
        return stock;
    };
    return Stock;
}());



/***/ }),

/***/ "./src/app/model/upcv3/LocalDateTime.ts":
/*!**********************************************!*\
  !*** ./src/app/model/upcv3/LocalDateTime.ts ***!
  \**********************************************/
/*! exports provided: LocalDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDateTime", function() { return LocalDateTime; });
var LocalDateTime = /** @class */ (function () {
    function LocalDateTime() {
        this.year = 1970;
        this.dayOfYear = 1;
        this.month = 'JANUARY';
        this.monthValue = 1;
        this.dayOfMonth = 1;
        this.dayOfWeek = 'MONDAY';
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.nano = 0;
    }
    Object.defineProperty(LocalDateTime.prototype, "daysFromNow", {
        get: function () {
            return Math.round((new Date().getTime() - new Date(this.year, this.monthValue - 1, this.dayOfMonth, this.hour, this.minute, this.second).getTime()) / (1000 * 60 * 60 * 24));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalDateTime.prototype, "hoursFromNow", {
        get: function () {
            return Math.round((new Date().getTime() - new Date(this.year, this.monthValue - 1, this.dayOfMonth, this.hour, this.minute, this.second).getTime()) / (1000 * 60 * 60));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalDateTime.prototype, "minutesFromNow", {
        get: function () {
            return Math.round((new Date().getTime() - new Date(this.year, this.monthValue - 1, this.dayOfMonth, this.hour, this.minute, this.second).getTime()) / (1000 * 60));
        },
        enumerable: true,
        configurable: true
    });
    LocalDateTime.loadFromJSON = function (json) {
        return Object.assign(new LocalDateTime, json);
    };
    Object.defineProperty(LocalDateTime.prototype, "date", {
        get: function () {
            return new Date(this.year, this.monthValue - 1, this.dayOfMonth);
        },
        enumerable: true,
        configurable: true
    });
    LocalDateTime.prototype.isBefore = function (date) {
        return new Date(this.year, this.monthValue - 1, this.dayOfMonth) <= new Date(date.year, date.monthValue - 1, date.dayOfMonth);
    };
    LocalDateTime.prototype.isAfter = function (date) {
        return new Date(this.year, this.monthValue - 1, this.dayOfMonth) >= new Date(date.year, date.monthValue - 1, date.dayOfMonth);
    };
    LocalDateTime.prototype.isEqual = function (date) {
        return new Date(this.year, this.monthValue - 1, this.dayOfMonth) == new Date(date.year, date.monthValue - 1, date.dayOfMonth);
    };
    LocalDateTime.prototype.toLocaleString = function () {
        return new Date(this.year, this.monthValue - 1, this.dayOfMonth, this.hour, this.minute, this.second).toLocaleString();
    };
    LocalDateTime.prototype.toLocaleDateString = function () {
        return new Date(this.year, this.monthValue - 1, this.dayOfMonth).toLocaleDateString();
    };
    LocalDateTime.getLastDayOfMonth = function (year, month) {
        return new Date(year, month, 0).getDate();
    };
    return LocalDateTime;
}());



/***/ }),

/***/ "./src/app/model/upcv3/alarmsParameters.ts":
/*!*************************************************!*\
  !*** ./src/app/model/upcv3/alarmsParameters.ts ***!
  \*************************************************/
/*! exports provided: AlarmsParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmsParameters", function() { return AlarmsParameters; });
var AlarmsParameters = /** @class */ (function () {
    function AlarmsParameters() {
        this.alrResLowEn = false;
        this.alrResEmptyEn = false;
        this.alrPresInpEn = false;
        this.alrPresOutEn = false;
        this.alrFlowAvgEn = false;
        this.alrPowBackEn = false;
        this.alrPowDownEn = false;
        this.alrEmptyPress = 0;
        this.alrEmptyVol = 0;
        this.alrPresInpTol = 0;
        this.alrPresOutTol = 0;
        this.alrFlowSetTol = 0;
        this.alrResLowLevel = 0;
        this.alrResEmptyFlow = 0;
        this.alrResEmptyTest = 3600;
        this.alrSmsNum1 = "";
        this.alrSmsNum2 = "";
        this.alrSmsNum3 = "";
        this.alrSmsNum4 = "";
        this.alrSmsNum5 = "";
        this.alrPressInpSet1_1 = 0;
        this.alrPressInpSet1_2 = 0;
        this.alrPressInpSet1_3 = 0;
        this.alrPressInpSet1_4 = 0;
        this.alrPressInpSet1_5 = 0;
        this.alrPressInpSet1_6 = 0;
        this.alrPressInpSet1_7 = 0;
        this.alrPressInpSet1_8 = 0;
        this.alrPressInpSet1_9 = 0;
        this.alrPressInpSet1_10 = 0;
        this.alrPressInpSet2_1 = 0;
        this.alrPressInpSet2_2 = 0;
        this.alrPressInpSet2_3 = 0;
        this.alrPressInpSet2_4 = 0;
        this.alrPressInpSet2_5 = 0;
        this.alrPressInpSet2_6 = 0;
        this.alrPressInpSet2_7 = 0;
        this.alrPressInpSet2_8 = 0;
        this.alrPressInpSet2_9 = 0;
        this.alrPressInpSet2_10 = 0;
        this.alrPressOutSet_1 = 0;
        this.alrPressOutSet_2 = 0;
        this.alrPressOutSet_3 = 0;
        this.alrPressOutSet_4 = 0;
        this.alrPressOutSet_5 = 0;
        this.alrPressOutSet_6 = 0;
        this.alrPressOutSet_7 = 0;
        this.alrPressOutSet_8 = 0;
        this.alrPressOutSet_9 = 0;
        this.alrPressOutSet_10 = 0;
        this.alrPressSetTemp = 0;
    }
    AlarmsParameters.loadFromJSON = function (json) {
        return Object.assign(new AlarmsParameters, json);
    };
    return AlarmsParameters;
}());



/***/ }),

/***/ "./src/app/model/upcv3/communicationParameters.ts":
/*!********************************************************!*\
  !*** ./src/app/model/upcv3/communicationParameters.ts ***!
  \********************************************************/
/*! exports provided: CommunicationParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationParameters", function() { return CommunicationParameters; });
var CommunicationParameters = /** @class */ (function () {
    function CommunicationParameters() {
        this.comWiFiName = "";
        this.comWiFiPass = "";
        this.comWiFiIpAdr = "";
        this.comGsmName = "";
        this.comGsmPass = "";
        this.comGsmIpAdr = "0.0.0.0";
        this.comGsmMode = 0;
        this.comGsmLevel = 0;
        this.comWebSrvUrl = "";
        this.comMdmApnId = "";
        this.comMdmApnId2 = "orange.m2m";
        this.comMdmApnUser = "orange";
        this.comMdmApnPass = "orange";
        this.comWifiApCh = 11;
    }
    Object.defineProperty(CommunicationParameters.prototype, "comGsmModeString", {
        get: function () {
            switch (this.comGsmMode) {
                case 0: return 'Non enregistré';
                case 1: return '2G GPRS';
                case 2: return '2G EDGE';
                case 3: return '3G WCDMA';
                case 4: return '3G HSDPA';
                case 5: return '3G HSUPA';
                case 6: return '3G HSDPA/HSUPA';
                case 7: return '4G';
            }
        },
        enumerable: true,
        configurable: true
    });
    CommunicationParameters.loadFromJSON = function (json) {
        return Object.assign(new CommunicationParameters, json);
    };
    return CommunicationParameters;
}());



/***/ }),

/***/ "./src/app/model/upcv3/defaultUPCV3Params.ts":
/*!***************************************************!*\
  !*** ./src/app/model/upcv3/defaultUPCV3Params.ts ***!
  \***************************************************/
/*! exports provided: DefaultUPCV3Params */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultUPCV3Params", function() { return DefaultUPCV3Params; });
var DefaultUPCV3Params = /** @class */ (function () {
    function DefaultUPCV3Params() {
    }
    DefaultUPCV3Params.loadFromJSON = function (json) {
        return Object.assign(new DefaultUPCV3Params, json);
    };
    return DefaultUPCV3Params;
}());



/***/ }),

/***/ "./src/app/model/upcv3/diffCo2.ts":
/*!****************************************!*\
  !*** ./src/app/model/upcv3/diffCo2.ts ***!
  \****************************************/
/*! exports provided: DiffCo2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffCo2", function() { return DiffCo2; });
var DiffCo2 = /** @class */ (function () {
    function DiffCo2() {
        this.delay = 0;
        this.duration = 0;
        this.intensity = 0;
    }
    DiffCo2.loadFromJSON = function (json) {
        return Object.assign(new DiffCo2, json);
    };
    return DiffCo2;
}());



/***/ }),

/***/ "./src/app/model/upcv3/diffCo2Program.ts":
/*!***********************************************!*\
  !*** ./src/app/model/upcv3/diffCo2Program.ts ***!
  \***********************************************/
/*! exports provided: DiffCo2Program, DaysCode, intensities, daysCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffCo2Program", function() { return DiffCo2Program; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysCode", function() { return DaysCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intensities", function() { return intensities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysCodes", function() { return daysCodes; });
var DiffCo2Program = /** @class */ (function () {
    function DiffCo2Program() {
        this.daysCode = 7;
        this.start = "00:00:00";
        this.end = "00:00:00";
        this.intensity = 0;
    }
    DiffCo2Program.loadFromJSON = function (json) {
        return Object.assign(new DiffCo2Program, json);
    };
    return DiffCo2Program;
}());

var DaysCode;
(function (DaysCode) {
    DaysCode[DaysCode["Sunday"] = 0] = "Sunday";
    DaysCode[DaysCode["Monday"] = 1] = "Monday";
    DaysCode[DaysCode["Tuesday"] = 2] = "Tuesday";
    DaysCode[DaysCode["Wednesday"] = 3] = "Wednesday";
    DaysCode[DaysCode["Thursday"] = 4] = "Thursday";
    DaysCode[DaysCode["Friday"] = 5] = "Friday";
    DaysCode[DaysCode["Saturday"] = 6] = "Saturday";
    DaysCode[DaysCode["All week"] = 7] = "All week";
    DaysCode[DaysCode["Weekend"] = 8] = "Weekend";
    DaysCode[DaysCode["Midweek"] = 9] = "Midweek";
})(DaysCode || (DaysCode = {}));
var intensities = [
    { name: 'Désactivée', value: 0 },
    { name: '1', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 },
    { name: '10', value: 10 }
];
var daysCodes = [
    { name: 'Tous les jours', value: DaysCode['All week'] },
    { name: 'Semaine', value: DaysCode['Midweek'] },
    { name: 'Weekend', value: DaysCode['Weekend'] },
    { name: 'Lundi', value: DaysCode['Monday'] },
    { name: 'Mardi', value: DaysCode['Tuesday'] },
    { name: 'Mercredi', value: DaysCode['Wednesday'] },
    { name: 'Jeudi', value: DaysCode['Thursday'] },
    { name: 'Vendredi', value: DaysCode['Friday'] },
    { name: 'Samedi', value: DaysCode['Saturday'] },
    { name: 'Dimanche', value: DaysCode['Sunday'] }
];


/***/ }),

/***/ "./src/app/model/upcv3/diffusionParameters.ts":
/*!****************************************************!*\
  !*** ./src/app/model/upcv3/diffusionParameters.ts ***!
  \****************************************************/
/*! exports provided: DiffusionParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffusionParameters", function() { return DiffusionParameters; });
/* harmony import */ var _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diffCo2Program */ "./src/app/model/upcv3/diffCo2Program.ts");
/* harmony import */ var _diffCo2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diffCo2 */ "./src/app/model/upcv3/diffCo2.ts");


var DiffusionParameters = /** @class */ (function () {
    function DiffusionParameters() {
        this.diffHourSunrise = 0;
        this.diffHourSunset = 0;
        this.diffCo2Program1 = new _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"]();
        this.diffCo2Program2 = new _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"]();
        this.diffCo2Program3 = new _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"]();
        this.diffCo2Program4 = new _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"]();
        this.diffCo2Program5 = new _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"]();
        this.diffCo2Program6 = new _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"]();
        this.diffCo2Program7 = new _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"]();
        this.diffCo2Program8 = new _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"]();
        this.diffCo2Program9 = new _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"]();
        this.diffCo2Program10 = new _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"]();
        this.diffCo2Sunrise = new _diffCo2__WEBPACK_IMPORTED_MODULE_1__["DiffCo2"]();
        this.diffCo2Sunset = new _diffCo2__WEBPACK_IMPORTED_MODULE_1__["DiffCo2"]();
        this.diffCo2Instant = new _diffCo2__WEBPACK_IMPORTED_MODULE_1__["DiffCo2"]();
        this.co2PresInpMeas1 = 0;
        this.co2PresInpMeas2 = 0;
        this.co2PresOutMeas = 0;
        this.co2FlowMeas = 0;
        this.co2PresInpAvg = 0;
        this.co2PressInpOffs = 0;
        this.co2PresOutAvg = 0;
        this.co2PressOutOffs = 0;
        this.co2PressOutComp = 0;
        this.co2FlowAvg = 0;
        this.co2FlowOffs = 0;
        this.upcCo2DiffLvl = 0;
        this.upcDiffLvlAdj = 0;
        this.co2TempAvg = 0;
    }
    DiffusionParameters.loadFromJSON = function (json) {
        var diffusionParameters = Object.assign(new DiffusionParameters, json);
        if (json.diffCo2Program1)
            diffusionParameters.diffCo2Program1 = _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"].loadFromJSON(json.diffCo2Program1);
        if (json.diffCo2Program2)
            diffusionParameters.diffCo2Program2 = _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"].loadFromJSON(json.diffCo2Program2);
        if (json.diffCo2Program3)
            diffusionParameters.diffCo2Program3 = _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"].loadFromJSON(json.diffCo2Program3);
        if (json.diffCo2Program4)
            diffusionParameters.diffCo2Program4 = _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"].loadFromJSON(json.diffCo2Program4);
        if (json.diffCo2Program5)
            diffusionParameters.diffCo2Program5 = _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"].loadFromJSON(json.diffCo2Program5);
        if (json.diffCo2Program6)
            diffusionParameters.diffCo2Program6 = _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"].loadFromJSON(json.diffCo2Program6);
        if (json.diffCo2Program7)
            diffusionParameters.diffCo2Program7 = _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"].loadFromJSON(json.diffCo2Program7);
        if (json.diffCo2Program8)
            diffusionParameters.diffCo2Program8 = _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"].loadFromJSON(json.diffCo2Program8);
        if (json.diffCo2Program9)
            diffusionParameters.diffCo2Program9 = _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"].loadFromJSON(json.diffCo2Program9);
        if (json.diffCo2Program10)
            diffusionParameters.diffCo2Program10 = _diffCo2Program__WEBPACK_IMPORTED_MODULE_0__["DiffCo2Program"].loadFromJSON(json.diffCo2Program10);
        if (json.diffCo2Sunrise)
            diffusionParameters.diffCo2Sunrise = _diffCo2__WEBPACK_IMPORTED_MODULE_1__["DiffCo2"].loadFromJSON(json.diffCo2Sunrise);
        if (json.diffCo2Sunset)
            diffusionParameters.diffCo2Sunset = _diffCo2__WEBPACK_IMPORTED_MODULE_1__["DiffCo2"].loadFromJSON(json.diffCo2Sunset);
        if (json.diffCo2Instant)
            diffusionParameters.diffCo2Instant = _diffCo2__WEBPACK_IMPORTED_MODULE_1__["DiffCo2"].loadFromJSON(json.diffCo2Instant);
        return diffusionParameters;
    };
    return DiffusionParameters;
}());



/***/ }),

/***/ "./src/app/model/upcv3/generalParameters.ts":
/*!**************************************************!*\
  !*** ./src/app/model/upcv3/generalParameters.ts ***!
  \**************************************************/
/*! exports provided: GeneralParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralParameters", function() { return GeneralParameters; });
var GeneralParameters = /** @class */ (function () {
    function GeneralParameters() {
        this.upcMcuUid = "";
        this.upcFwVer = 0;
        this.upcMode = 0;
        this.upcStatus = 0;
        this.upcClock = 0;
        this.upcTimeZone = 0;
        this.upcLanguage = 0;
        this.upcTrapNum = 0;
        this.co2FlowRefTrap = 0;
        this.refFlowRateGperhour = 0;
        this.co2FlowRefNom = 0;
        this.co2FlowRefAdj = 0;
        this.co2PresOutRef1 = 0;
        this.co2PresOutRef2 = 0;
        this.co2PresOutRef3 = 0;
        this.co2PresOutRef4 = 0;
        this.co2PresOutRef5 = 0;
        this.co2PresOutRef6 = 0;
        this.co2PresOutRef7 = 0;
        this.co2PresOutRef8 = 0;
        this.co2PresOutRef9 = 0;
        this.co2PresOutRef10 = 0;
        this.co2PressOutTemp = 0;
        this.upcBattChrg = 0;
        this.upcBattTemp = 0;
        this.upcCo2PidInteg = 0;
        this.upcCo2PidDiff = 0;
        this.upcCo2PidProp = 300;
    }
    GeneralParameters.loadFromJSON = function (json) {
        return Object.assign(new GeneralParameters, json);
    };
    return GeneralParameters;
}());



/***/ }),

/***/ "./src/app/model/upcv3/reservesParameters.ts":
/*!***************************************************!*\
  !*** ./src/app/model/upcv3/reservesParameters.ts ***!
  \***************************************************/
/*! exports provided: ReservesParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservesParameters", function() { return ReservesParameters; });
/* harmony import */ var _LocalDateTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalDateTime */ "./src/app/model/upcv3/LocalDateTime.ts");

var ReservesParameters = /** @class */ (function () {
    function ReservesParameters() {
        this.co2ResActive = 0;
        this.co2ResActAdj = 0;
        this.co2ResActPrev = new _LocalDateTime__WEBPACK_IMPORTED_MODULE_0__["LocalDateTime"]();
        this.co2ResInactPrev = new _LocalDateTime__WEBPACK_IMPORTED_MODULE_0__["LocalDateTime"]();
        this.co2ResType = 0;
        this.co2Res1Status = 0;
        this.co2Res1FillVol = 0;
        this.co2Res1FillTime = new _LocalDateTime__WEBPACK_IMPORTED_MODULE_0__["LocalDateTime"]();
        this.co2Res1ActVol = 0;
        this.co2Res1ActDur = 0;
        this.co2Res1StartVol = 0;
        this.co2Res1AuxVol = 0;
        this.co2Res2Status = 0;
        this.co2Res2FillVol = 0;
        this.co2Res2FillTime = new _LocalDateTime__WEBPACK_IMPORTED_MODULE_0__["LocalDateTime"]();
        this.co2Res2ActVol = 0;
        this.co2Res2ActDur = 0;
        this.co2Res2StartVol = 0;
        this.co2Res2AuxVol = 0;
        this.co2ResLow = 0;
    }
    ReservesParameters.loadFromJSON = function (json) {
        var reservesParameters = Object.assign(new ReservesParameters, json);
        if (json.co2ResActPrev)
            reservesParameters.co2ResActPrev = _LocalDateTime__WEBPACK_IMPORTED_MODULE_0__["LocalDateTime"].loadFromJSON(json.co2ResActPrev);
        if (json.co2ResInactPrev)
            reservesParameters.co2ResInactPrev = _LocalDateTime__WEBPACK_IMPORTED_MODULE_0__["LocalDateTime"].loadFromJSON(json.co2ResInactPrev);
        if (json.co2Res1FillTime)
            reservesParameters.co2Res1FillTime = _LocalDateTime__WEBPACK_IMPORTED_MODULE_0__["LocalDateTime"].loadFromJSON(json.co2Res1FillTime);
        if (json.co2Res2FillTime)
            reservesParameters.co2Res2FillTime = _LocalDateTime__WEBPACK_IMPORTED_MODULE_0__["LocalDateTime"].loadFromJSON(json.co2Res2FillTime);
        return reservesParameters;
    };
    return ReservesParameters;
}());



/***/ }),

/***/ "./src/app/model/upcv3/upcv3.ts":
/*!**************************************!*\
  !*** ./src/app/model/upcv3/upcv3.ts ***!
  \**************************************/
/*! exports provided: UPCV3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPCV3", function() { return UPCV3; });
/* harmony import */ var _generalParameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalParameters */ "./src/app/model/upcv3/generalParameters.ts");
/* harmony import */ var _communicationParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communicationParameters */ "./src/app/model/upcv3/communicationParameters.ts");
/* harmony import */ var _diffusionParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diffusionParameters */ "./src/app/model/upcv3/diffusionParameters.ts");
/* harmony import */ var _reservesParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservesParameters */ "./src/app/model/upcv3/reservesParameters.ts");
/* harmony import */ var _alarmsParameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alarmsParameters */ "./src/app/model/upcv3/alarmsParameters.ts");
/* harmony import */ var _LocalDateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LocalDateTime */ "./src/app/model/upcv3/LocalDateTime.ts");
/* harmony import */ var _defaultUPCV3Params__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultUPCV3Params */ "./src/app/model/upcv3/defaultUPCV3Params.ts");
/* harmony import */ var _diffCo2Program__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./diffCo2Program */ "./src/app/model/upcv3/diffCo2Program.ts");








var UPCV3 = /** @class */ (function () {
    function UPCV3(defaultParams) {
        if (defaultParams === void 0) { defaultParams = null; }
        this.id = 0;
        this.upcNameId = '';
        this.lat = 0;
        this.lng = 0;
        this.upcError = 0;
        this.hibernated = false;
        this.generalParameters = new _generalParameters__WEBPACK_IMPORTED_MODULE_0__["GeneralParameters"]();
        this.communicationParameters = new _communicationParameters__WEBPACK_IMPORTED_MODULE_1__["CommunicationParameters"]();
        this.diffusionParameters = new _diffusionParameters__WEBPACK_IMPORTED_MODULE_2__["DiffusionParameters"]();
        this.reservesParameters = new _reservesParameters__WEBPACK_IMPORTED_MODULE_3__["ReservesParameters"]();
        this.alarmsParameters = new _alarmsParameters__WEBPACK_IMPORTED_MODULE_4__["AlarmsParameters"]();
        this.upcLastPollDatetime = new _LocalDateTime__WEBPACK_IMPORTED_MODULE_5__["LocalDateTime"]();
        this.lastPollResult = 0;
        this.upcPollEnable = false;
        this.upcPollTasks = 0;
        this.upcLastSyncDatetime = new _LocalDateTime__WEBPACK_IMPORTED_MODULE_5__["LocalDateTime"]();
        this.logLastVisit = new _LocalDateTime__WEBPACK_IMPORTED_MODULE_5__["LocalDateTime"]();
        this.belt = '';
        if (defaultParams) {
            this.generalParameters.co2FlowRefTrap = defaultParams.co2FlowRefTrap;
            this.generalParameters.refFlowRateGperhour = defaultParams.refFlowRateGperhour;
            this.diffusionParameters.diffCo2Program1.daysCode = _diffCo2Program__WEBPACK_IMPORTED_MODULE_7__["DaysCode"][defaultParams.daysCode1];
            this.diffusionParameters.diffCo2Program1.start = defaultParams.startTime1;
            this.diffusionParameters.diffCo2Program1.end = defaultParams.endTime1;
            this.diffusionParameters.diffCo2Program1.intensity = defaultParams.intensity1;
            this.diffusionParameters.diffCo2Program2.daysCode = _diffCo2Program__WEBPACK_IMPORTED_MODULE_7__["DaysCode"][defaultParams.daysCode2];
            this.diffusionParameters.diffCo2Program2.start = defaultParams.startTime2;
            this.diffusionParameters.diffCo2Program2.end = defaultParams.endTime2;
            this.diffusionParameters.diffCo2Program2.intensity = defaultParams.intensity2;
            this.diffusionParameters.diffCo2Sunrise.delay = defaultParams.sunriseDelay;
            this.diffusionParameters.diffCo2Sunrise.duration = defaultParams.sunriseDuration;
            this.diffusionParameters.diffCo2Sunrise.intensity = defaultParams.sunriseIntensity;
            this.diffusionParameters.diffCo2Sunset.delay = defaultParams.sunsetDelay;
            this.diffusionParameters.diffCo2Sunset.duration = defaultParams.sunsetDuration;
            this.diffusionParameters.diffCo2Sunset.intensity = defaultParams.sunsetIntensity;
            this.alarmsParameters.alrResLowEn = defaultParams.alrResLowEn;
            this.alarmsParameters.alrResEmptyEn = defaultParams.alrResEmptyEn;
            this.alarmsParameters.alrPresInpEn = defaultParams.alrPresInpEn;
            this.alarmsParameters.alrPresOutEn = defaultParams.alrPresOutEn;
            this.alarmsParameters.alrFlowAvgEn = defaultParams.alrFlowAvgEn;
            this.alarmsParameters.alrPowBackEn = defaultParams.alrPowBackEn;
            this.alarmsParameters.alrPowDownEn = defaultParams.alrPowDownEn;
            this.alarmsParameters.alrEmptyPress = defaultParams.alrEmptyPress;
            this.alarmsParameters.alrEmptyVol = defaultParams.alrEmptyVol;
            this.alarmsParameters.alrPresInpTol = defaultParams.alrPresInpTol;
            this.alarmsParameters.alrPresOutTol = defaultParams.alrPresOutTol;
            this.alarmsParameters.alrFlowSetTol = defaultParams.alrFlowSetTol;
            this.alarmsParameters.alrResLowLevel = defaultParams.alrResLowLevel;
            this.alarmsParameters.alrResEmptyFlow = defaultParams.alrResEmptyFlow;
            this.alarmsParameters.alrSmsNum1 = defaultParams.alrSmsNum0;
            this.communicationParameters.comWiFiName = defaultParams.comWiFiName;
            this.communicationParameters.comWiFiPass = defaultParams.comWiFiPass;
            this.generalParameters.upcLanguage = defaultParams.upcLanguage;
            this.communicationParameters.comGsmName = defaultParams.comGsmName;
            this.communicationParameters.comGsmPass = defaultParams.comGsmPass;
            this.communicationParameters.comWebSrvUrl = defaultParams.comWebSrvUrl;
        }
    }
    UPCV3.prototype.co2LettersToKg = function (letters) {
        return letters * 0.001974;
    };
    Object.defineProperty(UPCV3.prototype, "upcStatusString", {
        get: function () {
            switch (this.generalParameters.upcStatus) {
                case 0: return 'DIS';
                case 1: return 'ENA';
                case 2: return 'ADJ';
                case 3: return 'CHK';
                case 4: return 'CAL';
                case 100: return 'EMPTY';
                default: return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UPCV3.prototype, "co2ResActiveString", {
        get: function () {
            if (this.generalParameters.upcMode == 0)
                return '/';
            switch (this.reservesParameters.co2ResActive) {
                case 1:
                    var co2ResActive = 'B' + this.reservesParameters.co2ResActive;
                    if (this.reservesParameters.co2ResType == 1)
                        co2ResActive += 'P';
                    if (this.reservesParameters.co2ResType == 2)
                        co2ResActive += 'S';
                    return co2ResActive;
                case 2:
                    var co2ResActive = 'B' + this.reservesParameters.co2ResActive;
                    if (this.reservesParameters.co2ResType == 1)
                        co2ResActive += 'S';
                    if (this.reservesParameters.co2ResType == 2)
                        co2ResActive += 'P';
                    return co2ResActive;
                default:
                    return '-';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UPCV3.prototype, "upcLastPollDatetimeString", {
        get: function () {
            if (this.upcLastPollDatetime) {
                // Day
                if (this.upcLastPollDatetime.daysFromNow > 0) {
                    if (this.upcLastPollDatetime.daysFromNow > 1)
                        return this.upcLastPollDatetime.daysFromNow + ' jours';
                    else
                        return this.upcLastPollDatetime.daysFromNow + ' jour';
                }
                // Hour
                if (this.upcLastPollDatetime.hoursFromNow > 0) {
                    if (this.upcLastPollDatetime.hoursFromNow > 1)
                        return this.upcLastPollDatetime.hoursFromNow + ' heures';
                    else
                        return this.upcLastPollDatetime.hoursFromNow + ' heure';
                }
                // Minute
                if (this.upcLastPollDatetime.minutesFromNow > 0) {
                    if (this.upcLastPollDatetime.minutesFromNow > 1)
                        return this.upcLastPollDatetime.minutesFromNow + ' minutes';
                    else
                        return this.upcLastPollDatetime.minutesFromNow + ' minute';
                }
            }
            else
                return '-';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UPCV3.prototype, "upcNameIdIndex", {
        get: function () {
            // 0: hibernating   1: OK   2: Alert    3: Comm error   4: Empty
            if (!this.hibernated) {
                if (this.reservesParameters.co2Res1Status == 0 && this.reservesParameters.co2Res2Status == 0)
                    return 4;
                else if (this.upcPollEnable && this.lastPollResult != 0)
                    return 3;
                else if (this.reservesParameters.co2Res1Status == 0 || this.reservesParameters.co2Res2Status == 0)
                    return 2;
                else
                    return 1;
            }
            else
                return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UPCV3.prototype, "upcNameIdClass", {
        get: function () {
            if (!this.hibernated && ((this.reservesParameters.co2Res1Status == 0 && this.reservesParameters.co2Res2Status == 0) || (this.upcPollEnable && this.lastPollResult != 0)))
                return 'text-danger';
            else if (!this.hibernated && (this.reservesParameters.co2Res1Status == 0 || this.reservesParameters.co2Res2Status == 0))
                return 'text-warning';
            else if (this.hibernated)
                return 'text-primary';
            else
                return 'text-success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UPCV3.prototype, "upcStatusClass", {
        get: function () {
            if (!this.hibernated && (this.generalParameters.upcStatus == 0 || this.generalParameters.upcStatus == 2 || this.generalParameters.upcStatus > 7))
                return 'text-danger font-weight-bold';
            else if (!this.hibernated && this.generalParameters.upcStatus == 3)
                return 'text-warning font-weight-bold';
            else
                return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UPCV3.prototype, "co2Res1ActVolClass", {
        get: function () {
            if (!this.hibernated && this.reservesParameters.co2Res1Status == 0)
                return 'text-danger font-weight-bold';
            else if (!this.hibernated && this.reservesParameters.co2Res1Status == 1)
                return 'text-warning font-weight-bold';
            else
                return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UPCV3.prototype, "co2Res2ActVolClass", {
        get: function () {
            if (!this.hibernated && this.reservesParameters.co2Res2Status == 0)
                return 'text-danger font-weight-bold';
            else if (!this.hibernated && this.reservesParameters.co2Res2Status == 1)
                return 'text-warning font-weight-bold';
            else
                return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UPCV3.prototype, "upcLastPollDatetimeClass", {
        get: function () {
            if (!this.hibernated && this.lastPollResult != 0)
                return 'text-danger font-weight-bold';
            else
                return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UPCV3.prototype, "upcPollEnableClass", {
        get: function () {
            if (!this.hibernated && !this.upcPollEnable)
                return 'text-danger font-weight-bold';
            else
                return '';
        },
        enumerable: true,
        configurable: true
    });
    UPCV3.loadFromJSON = function (json) {
        var upcv3 = Object.assign(new UPCV3, json);
        if (json.generalParameters)
            upcv3.generalParameters = _generalParameters__WEBPACK_IMPORTED_MODULE_0__["GeneralParameters"].loadFromJSON(json.generalParameters);
        if (json.communicationParameters)
            upcv3.communicationParameters = _communicationParameters__WEBPACK_IMPORTED_MODULE_1__["CommunicationParameters"].loadFromJSON(json.communicationParameters);
        if (json.diffusionParameters)
            upcv3.diffusionParameters = _diffusionParameters__WEBPACK_IMPORTED_MODULE_2__["DiffusionParameters"].loadFromJSON(json.diffusionParameters);
        if (json.reservesParameters)
            upcv3.reservesParameters = _reservesParameters__WEBPACK_IMPORTED_MODULE_3__["ReservesParameters"].loadFromJSON(json.reservesParameters);
        if (json.alarmsParameters)
            upcv3.alarmsParameters = _alarmsParameters__WEBPACK_IMPORTED_MODULE_4__["AlarmsParameters"].loadFromJSON(json.alarmsParameters);
        if (json.upcLastPollDatetime)
            upcv3.upcLastPollDatetime = _LocalDateTime__WEBPACK_IMPORTED_MODULE_5__["LocalDateTime"].loadFromJSON(json.upcLastPollDatetime);
        if (json.logLastVisit)
            upcv3.logLastVisit = _LocalDateTime__WEBPACK_IMPORTED_MODULE_5__["LocalDateTime"].loadFromJSON(json.logLastVisit);
        if (json.upcLastSyncDatetime)
            upcv3.upcLastSyncDatetime = _LocalDateTime__WEBPACK_IMPORTED_MODULE_5__["LocalDateTime"].loadFromJSON(json.upcLastSyncDatetime);
        return upcv3;
    };
    UPCV3.ctorParameters = function () { return [
        { type: _defaultUPCV3Params__WEBPACK_IMPORTED_MODULE_6__["DefaultUPCV3Params"] }
    ]; };
    return UPCV3;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.id = '';
        this.username = '';
        this.password = '';
    }
    return User;
}());



/***/ })

}]);
//# sourceMappingURL=default~addbottleceint-addbottleceint-module~addbottlemodal-addbottlemodal-module~adjustment-adjustm~b4bb9537-es5.js.map