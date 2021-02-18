import { Component, OnInit } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import {Storage} from "@ionic/storage";
import { Code } from '../api/ApiResponse';
import { Router } from '@angular/router';
import { Platform, ModalController } from '@ionic/angular';
import { Stock } from '../model/stock';
import { AddbottlemodalPage } from '../addbottlemodal/addbottlemodal.page';
import { GlobalService } from '../api/global.service';
import { RackcontentPage } from '../rackcontent/rackcontent.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
declare var WifiWizard2: any;

@Component({
  selector: 'app-optionbottle',
  templateUrl: './optionbottle.page.html',
  styleUrls: ['./optionbottle.page.scss'],
})
export class OptionbottlePage implements OnInit {
  name = "arrow-dropright";
  isStock = false;
  stock : Stock[];
  token;
  

  constructor(private upc3Service : Upcv3serviceService,private storage : Storage,private router : Router,private platform : Platform,private modal : ModalController,private global : GlobalService, private scan : BarcodeScanner) { }
  
  async ngOnInit() {
    this.storage.get("token").then(val=>{
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
   })
    this.platform.ready().then(res=>{
      if (this.platform.is('ios')){
        WifiWizard2.iOSDisconnectNetwork("BBAM").then((res)=>{
          this.storage.get("token").then(val=>{
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
         })
       })
      }
      
    })
    
    
    
  }
  onSynchro() {
    this.global.onSynchroB1B2(this.token);
  }
  async onAddBottleCeint() {
    this.router.navigate(['addbottleceint']);
  }
  async onChooseStock(i) {
    localStorage.setItem("adds",i);
    this.router.navigate(['choosestock']);
  }
  remRack() {
    this.scan.scan().then(async res=>{
      if(res.text != ''){
        var text = res.text;
        this.upc3Service.getBottleFromRack(this.token,res.text).subscribe(async res=>{
          alert(JSON.stringify(res));
          if(res.result.length> 0){
            var modal = await this.modal.create({
              component : RackcontentPage,
              componentProps : {
                rack : text
              }
            })
            modal.present();
          } else {
            alert("Aucune bouteille est associée à ce Rack !");
          }
        },err=>{
          alert(JSON.stringify(err));
        })
        
        /*this.upcv3Service.removeRack(res.text,this.token).subscribe(res=>{

        })*/
      }
      
    })
  }
  goStock() {
    if(!this.isStock){
      this.name = "arrow-dropdown";
      this.isStock = true;
      
      this.upc3Service.getAllStock(localStorage.getItem("token")).subscribe(res=>{
        
        this.stock = res.result;
      },err=>{
        alert("Erreur de Connexion");
      })
    }
    else {
      this.name = "arrow-dropright";
      this.isStock = false;
    } 
   
    //this.router.navigate(['stock']);
  }
  

}
