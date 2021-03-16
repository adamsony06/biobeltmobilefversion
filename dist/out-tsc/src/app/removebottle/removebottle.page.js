import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../api/global.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Code } from '../api/ApiResponse';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { Storage } from '@ionic/storage';
let RemovebottlePage = class RemovebottlePage {
    constructor(upc3service, storage, global, barcode) {
        this.upc3service = upc3service;
        this.storage = storage;
        this.global = global;
        this.barcode = barcode;
        this.isNotScanned = true;
        this.bottle = {
            name: '',
            designation: [],
            brand: [],
            barcodes: [],
            bottleType: [],
            stock: '',
            date: new Date().toISOString().substring(0, 10)
        };
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.storage.get('token').then(val => this.token = val);
            yield this.upc3service.getAllBottles(this.token).subscribe(res => {
                this.listBottles = res.result;
                alert(JSON.stringify(this.listBottles));
            });
            yield this.upc3service.getSites(this.token).subscribe(res => {
                switch (res.code) {
                    case Code.SITE_RECOVERED:
                        res.result.forEach(json => {
                            if (json.name === this.global.upc3.upcNameId) {
                                this.sites = json;
                                this.bottle.name = json.name;
                                if (json.stock !== null) {
                                    this.bottle.stock = json.stock.id;
                                    //alert(json.stock.id);
                                }
                            }
                        });
                        break;
                    case Code.UNAUTHORIZED:
                        alert("Erreur, vous n'êtes pas autorisé à utiliser l'application mobile !");
                        break;
                }
            });
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
        this.upc3service.addToDeStock(this.bottle, this.token).subscribe(res => {
            if (res.code === Code.BOTTLE_CREATED) {
                alert('Bouteille ajouté au stock !');
            }
            else {
                alert('Erreur lors du rajout de la bouteille au stock !');
            }
        });
    }
};
RemovebottlePage = tslib_1.__decorate([
    Component({
        selector: 'app-removebottle',
        templateUrl: './removebottle.page.html',
        styleUrls: ['./removebottle.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Upcv3serviceService,
        Storage,
        GlobalService,
        BarcodeScanner])
], RemovebottlePage);
export { RemovebottlePage };
//# sourceMappingURL=removebottle.page.js.map