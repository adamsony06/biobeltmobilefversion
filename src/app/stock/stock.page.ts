import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { State } from '../model/site';
import { ModalController } from '@ionic/angular';
import { AddbottlemodalPage } from '../addbottlemodal/addbottlemodal.page';
import { RackcontentPage } from '../rackcontent/rackcontent.page';
import { GlobalService } from '../api/global.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  stock;
  token;
  addStock = false;
  remStock = false;
  retStock = false;
  name = {name : "",id : 0};
  header = [];
  
  constructor(private storage : Storage,private barcode : BarcodeScanner,private upcv3Service : Upcv3serviceService,private modalService : ModalController,private global : GlobalService, private alertController : AlertController) { }

  ngOnInit() {
    if(localStorage.getItem("adds") == "0"){
        this.addStock = true;
    }// 30 € livraison LS MCB 2,5 € 120 unité MCB triphasé 6 A MCCB
    else if (localStorage.getItem("adds") == "1"){
      this.remStock = true;
    } else if (localStorage.getItem("adds") == "2") {
      this.retStock = true;
    }
    this.storage.get("token").then(val=>{
      this.token = val;
      this.storage.get("stockid").then(val=>{
        this.name = JSON.parse(val);
        this.upcv3Service.getBottlesByStockId(this.name.id,this.token).subscribe(res=>{
          this.stock = res.result;
          this.stock.sort((a,b)=>{
            if (a.rack < b.rack) return -1;
            if (a.rack > b.rack) return 1;
            return 0;
          })
          this.stock.forEach(item=>{
            if(!this.header.includes(item.rack)){
              this.header.push(item.rack);
            }
          })
        })
    })
    })
    
  }
  remRack() {
    this.barcode.scan().then(async res=>{
      if(res.text != ''){
        var text = res.text;
        this.upcv3Service.getBottleFromRack(this.token,res.text).subscribe(async res=>{
          if(res.result.length> 0){
            var modal = await this.modalService.create({
              component : RackcontentPage,
              componentProps : {
                rack : text
              }
            })
            modal.present();
          } else {
            alert("Aucune bouteille est associée à ce Rack !");
          }
        })
        
        /*this.upcv3Service.removeRack(res.text,this.token).subscribe(res=>{

        })*/
      }
      
    })
  }
  addRack() {
    this.barcode.scan().then(async res=>{
      if(res.text != ""){
        var text = res.text;
        this.upcv3Service.getBottleFromRack(this.token,res.text).subscribe(async res=>{
            if(res.result.length == 0){
              this.presentAlertRack(text);
            }else {
              localStorage.setItem("rack",text);
              const modal = await this.modalService.create({
                component : AddbottlemodalPage,
                componentProps : {
                  barcode : "",
                  stockRet : this.name,
                  mode : 1
                }
              })
              modal.present();
            }
        })
        
      }
    })
  }
  async presentAlertRack(text) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nouveau Rack',
      subHeader: '',
      message: 'Vous avez ajouter un nouveau rack ?',
      buttons: [{text : 'Annuler', handler : ()=>{}},{text:'Confirmer',
                  handler : async ()=>{
                    localStorage.setItem("rack",text);
              const modal = await this.modalService.create({
                component : AddbottlemodalPage,
                componentProps : {
                  barcode : "",
                  stockRet : this.name,
                  mode : 1
                }
              })
              modal.present();
                  }
    }],
      
    });

    await alert.present();
  }

  retRack() {
    this.barcode.scan().then(async res=>{
      if(res.text != ""){
        localStorage.setItem("rack",res.text);
        var modal = await this.modalService.create({
          component : AddbottlemodalPage,
          componentProps : {
            barcode : "",
            stockRet : this.name,
            mode : 2
          }
        })
        modal.present();
      }
    })
  }
  async delBottle() {
    this.barcode.scan().then(async code=>{
      if(code.text != ''){
          
          var modal = await this.modalService.create({
              component : AddbottlemodalPage,
              componentProps : {
                barcode : code.text,
                stockRet : this.name,
                mode : 0
              }
          })
          
          return await modal.present();
          
          
      }
    })
  }
  async addBottle() {
    
      this.barcode.scan().then(async code=>{
        if(code.text != ''){
            localStorage.setItem("rack",null);
            var modal = await this.modalService.create({
                component : AddbottlemodalPage,
                componentProps : {
                  barcode : code.text,
                  stockRet : this.name,
                  mode : 1
                }
            })
            
            return await modal.present();
            
            
        }
      })
  }
  async retBottles() {
    this.barcode.scan().then(async code=>{
      if(code.text != ''){
        localStorage.setItem("rack",null);
        var modal = await this.modalService.create({
          component : AddbottlemodalPage,
          componentProps : {
            barcode : code.text,
            stockRet : this.name,
            mode : 2
          }
        })
        modal.present();
      }
    })
  }

}
