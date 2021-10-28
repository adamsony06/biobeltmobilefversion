import { Component, OnInit, NgZone, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Platform, ModalController, LoadingController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {Storage} from '@ionic/storage';
import {InterventionV3} from '../model/interventionv3';
import { LocalDateTime } from '../model/upcv3/LocalDateTime';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { GlobalService } from '../api/global.service';
import { resolve } from 'url';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { first } from 'rxjs/operators'
import { CorrespondancesRegistres } from '../model/upcv3/correspondancesRegistres';


declare var WifiWizard2: any;
declare let Ping : any;

@Component({
  selector: 'app-addbottleceint',
  templateUrl: './addbottleceint.page.html',
  styleUrls: ['./addbottleceint.page.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AddbottleceintPage  {
  stockRet = "En cours...";
  upc : UPCModbus;
  addressage = 41124;
  addressage2 = 41169;
  B1= [];
  B1Ad = [];
  B1String = [];
  B1Desig = [];
  B1IsMesser = [];
  isAddedB1 = [];
  B2 = [];
  B2Ad = [];
  B2String = [];
  B2Desig = [];
  B2IsMesser = [];
  isAddedB2 = [];
  i = 0;
  y = 0;
  addedBottleB1 : any = {barcodes : [],kg : []};
  addedBottleB2 : any = {barcodes : [], kg : []};
  removedBottle : any = {barcodes : []};
  removedBottleStringB1 = [];
  removedBottleStringB2 = [];
  removedBottleUnknown = [];
  token : string;
  isBBAM = false;
  contenuB1 = 0;
  contenuB2 = 0;
  highlightB1 = false;
  highlightB2 = false;
  statusB1;
  statusB2;
  ssid = "";
  interval;
  redBackground = false;
  display = false;
  isLoaded = false;
  contenantB1 = 0;
  contenantB2 = 0;
  bottleIncB1 = [];
  bottleIncB2 = [];
  correspondancesRegistres: CorrespondancesRegistres;
  

  constructor(private platform : Platform,private ngZone : NgZone,private network : Network,private scan : BarcodeScanner,private modal : ModalController,private loadingCTRL : LoadingController,private cd: ChangeDetectorRef, private upcv3Service : Upcv3serviceService,private storage : Storage,private hotspot : Hotspot,private global : GlobalService,private alertCTRL : AlertController,private router :Router,private events : Events) { 
    this.global.checkMode()
  }
  //Mise à jour puis wipe puis test 
  //Retest 
  //Wipe + Sauvegarde d'offset pour UPC
  
  ionViewWillEnter(){
    
     
   
    this.global.checkNextPage().then(res=>{
      if(res == true){
        this.display = true;
      }
    }) 

    this.addedBottleB1.date = new Date().toISOString().substr(0,16);
    this.addedBottleB1.objet ="Remplissage";
    this.addedBottleB2.date = new Date().toISOString().substr(0,16);
    this.addedBottleB2.objet ="Remplissage";
    this.removedBottle.date = new Date().toISOString().substr(0,16);
    
      this.platform.ready().then(()=>{
             
          this.correspondancesRegistres = new CorrespondancesRegistres()
    
          this.global.onReadStatiqueEnable().then(()=>{
            this.subscribeRefresh()
          })   
            
          
             
      })
}
  calcContenantB1() {
    this.contenantB1 = 0;
    for(var i = 0;i<this.B1Desig.length;i++){
      this.contenantB1 += parseFloat(this.B1Desig[i]);
    }
  }
  //Capacité en dessous enlèvement bouteille Capacité : x kg
  //Identifier bouteille inconnue avec non scanné 
  calcContenantB2() {
    this.contenantB2 = 0;
    for(var i = 0;i<this.B2Desig.length;i++){
      this.contenantB2 += parseFloat(this.B2Desig[i]);
    }
  }



  
  changeContentStatusB1() {
    //alert(this.statusB1);
    

    this.global.upcmodbus.client.setIntInHoldingRegister(40381,1,parseInt(this.statusB1)).then(res=>{
      //this.statusB1 = ""+this.global.upcmodbus.reserves.co2Res1Status;
      this.global.upcmodbus.reserves.co2Res1Status = this.statusB1;
      //alert(this.statusB1);
    })
  }
  changeContentStatusB2 () {
    
    this.global.upcmodbus.client.setIntInHoldingRegister(40383,1,parseInt(this.statusB2)).then(res=>{
       //this.statusB2 = ""+this.global.upcmodbus.reserves.co2Res2Status;
        this.global.upcmodbus.reserves.co2Res2Status = this.statusB2;
    })
  } 
  loadBottles() {
    
    this.B1= [];
    this.B1Ad = [];
    this.B1String = [];
    this.B1Desig = [];
    this.B1IsMesser = [];
    this.isAddedB1 = [];
    this.B2 = [];
    this.B2Ad = [];
    this.B2String = [];
    this.B2Desig = [];
    this.B2IsMesser = [];
    this.isAddedB2 = [];
    this.bottleIncB1 = [];
    this.bottleIncB2 = [];
   
    if(localStorage.getItem("removedStringB1")){
      this.removedBottleStringB1 = JSON.parse(localStorage.getItem("removedStringB1"));
     
    }
    if (localStorage.getItem("removedStringB2")){
      this.removedBottleStringB2 = JSON.parse(localStorage.getItem("removedStringB2"));
    }
    if(localStorage.getItem("removedBottleUnknown")){
      this.removedBottleUnknown = JSON.parse(localStorage.getItem("removedBottleUnknown"));
    }
   
    for(var i = 0;i< this.global.upcmodbus.reserves.bottlesB1.length;i++){
      var text = this.global.upcmodbus.reserves.bottlesB1[i].replace(/[^\w\s]/gi, '');
      if(text.substr(0,text.length-1).includes("Inco")){
        this.bottleIncB1.push(i);
       
      }
          /*if (/^\d+$/.test(text.substr(0,text.length-1))){
            
            this.B1String.push("Messer ("+text.substr(0,text.length-1)+") 37.5 kg");
            this.B1Desig.push("37.5");
            this.B1IsMesser.push(true);
            this.B1Ad.push(text);
            this.addressage+=5;
            this.B1.push(text.substr(0,text.length-1));
            this.isAddedB1.push(false);
          } else if(/^[a-z0-9]+$/i.test(text.substr(0,text.length-1))){*/
            if(text != ""){
              var kg = "";
            
            if(text.charAt(text.length-1) == "0"){
              kg = "10 kg";
              this.B1Desig.push("10");
              this.B1String.push("Air liquide ("+text.substr(0,text.length-1)+") "+kg);
              this.B1.push(text.substr(0,text.length-2));
              this.B1IsMesser.push(false);
              this.B1Ad.push(text);
              var count = 10-text.length;
              var barcode = text;
              for(var m=0;m<count;m++){
                text+='\0';
              }
              this.B1Ad.push(barcode);
            }
            else if (text.charAt(text.length-1) == "1"){
              kg = "20 kg";
              this.B1Desig.push("20");
              this.B1String.push("Air liquide ("+text.substr(0,text.length-1)+") "+kg);
              this.B1.push(text.substr(0,text.length-2));
              this.B1IsMesser.push(false);
              this.B1Ad.push(text);
              var count = 10-text.length;
              var barcode = text;
              for(var m=0;m<count;m++){
                text+='\0';
              }
              this.B1Ad.push(barcode);
            }
            else if (text.charAt(text.length-1) == "2"){
              kg = "50 lb";
              this.B1Desig.push("22.6796");
              this.B1String.push("Air liquide ("+text.substr(0,text.length-1)+") "+kg);
              this.B1.push(text.substr(0,text.length-2));
              this.B1IsMesser.push(false);
              this.B1Ad.push(text);
              var count = 10-text.length;
              var barcode = text;
              for(var m=0;m<count;m++){
                text+='\0';
              }
              this.B1Ad.push(barcode);
            }
            else if (text.charAt(text.length-1)=="3"){
              kg = "34 kg";
              this.B1Desig.push("34");
              this.B1String.push("Air liquide ("+text.substr(0,text.length-1)+") "+kg);
              this.B1.push(text.substr(0,text.length-2));
              this.B1IsMesser.push(false);
              this.B1Ad.push(text);
              var count = 10-text.length;
              var barcode = text;
              for(var m=0;m<count;m++){
                text+='\0';
              }
              this.B1Ad.push(barcode);
            }else if(text.charAt(text.length-1)=="5"){
              kg = "(Rembo) 100 kg";
              this.B1Desig.push("100");
              this.B1String.push("Air liquide ("+text.substr(0,text.length-1)+") "+kg);
              this.B1.push(text.substr(0,text.length-2));
              this.B1IsMesser.push(false);
              this.B1Ad.push(text);
              var count = 10-text.length;
              var barcode = text;
              for(var m=0;m<count;m++){
                text+='\0';
              }
              this.B1Ad.push(barcode);
            }else if(text.charAt(text.length-1)=="6"){
              kg = "(Rembo) 180 kg";
              this.B1Desig.push("180");
              this.B1String.push("Air liquide ("+text.substr(0,text.length-1)+") "+kg);
              this.B1.push(text.substr(0,text.length-2));
              this.B1IsMesser.push(false);
              this.B1Ad.push(text);
              var count = 10-text.length;
              var barcode = text;
              for(var m=0;m<count;m++){
                text+='\0';
              }
              this.B1Ad.push(barcode);
            }else if(text.charAt(text.length-1) == "7"){
              kg = "(Rembo) 270 kg";
              this.B1Desig.push("270");
              this.B1String.push("Air liquide ("+text.substr(0,text.length-1)+") "+kg);
              this.B1.push(text.substr(0,text.length-2));
              this.B1IsMesser.push(false);
              this.B1Ad.push(text);
              var count = 10-text.length;
              var barcode = text;
              for(var m=0;m<count;m++){
                text+='\0';
              }
              this.B1Ad.push(barcode);
            } else if(text.charAt(text.length-1)=="8") {
              kg = "37,5 kg";
              this.B1Desig.push("37.5L");
              this.B1String.push("Linde ("+text.substr(0,text.length-1)+") "+kg);
              
              this.B1.push(text.substr(0,text.length-2));
              this.B1IsMesser.push(true);
              var count = 10-text.length;
              var barcode = text;
              for(var k=0;k<count;k++){
                text+='\0';
              }
              this.B1Ad.push(barcode);
            }
             else if(text.charAt(text.length-1) == "4") {
              kg = "37,5 kg";
              this.B1Desig.push("37.5");
              this.B1String.push("Messer ("+text.substr(0,text.length-1)+") "+kg);
              this.B1.push(text.substr(0,text.length-2));
              this.B1IsMesser.push(true);
              this.B1Ad.push(text);
              var count = 10-text.length;
              var barcode = text;
              for(var l=0;l<count;l++){
                text+='\0';
              }
              this.B1Ad.push(barcode);
              
            }/*else if(text.charAt(text.length-1) != "8"){
              this.B1String.push("Air liquide ("+text.substr(0,text.length-1)+") "+kg);
              this.B1.push(text.substr(0,text.length-2));
              this.B1IsMesser.push(false);
              this.B1Ad.push(text);
              var count = 10-text.length;
              var barcode = text;
              for(var m=0;m<count;m++){
                text+='\0';
              }
              this.B1Ad.push(barcode);
             
            }*/
            else if(text == '' || text == undefined) {
              this.B1Ad.push("\0\0\0\0\0\0\0\0\0\0");
            }
            
            this.addressage+=5;
            this.isAddedB1.push(false);
            }
            
          //}
          alert(this.B1Ad[i]);
          this.cd.detectChanges();
    } if(localStorage.getItem("isAddedB1")){
      this.isAddedB1 = JSON.parse(localStorage.getItem("isAddedB1"));
    }
    
    for(var j = 0;j<this.global.upcmodbus.reserves.bottlesB2.length;j++){
      var text = this.global.upcmodbus.reserves.bottlesB2[j].replace(/[^\w\s]/gi, '');
      if(text.substr(0,text.length-1).includes("Inco")){
        this.bottleIncB2.push(j);
        
      }
      /*if(/^\d+$/.test(text.substr(0,text.length-1))){
        this.B2String.push("Messer ("+text.substr(0,text.length-1)+") 37.5 kg");
        this.B2Desig.push("37.5");
        this.B2IsMesser.push(true);
        this.B2Ad.push(text);
        this.addressage2+=5;
        this.B2.push(text);
        this.isAddedB2.push(false);
      } else if(/^[a-z0-9]+$/i.test(text.substr(0,text.length-1))){*/
        if(text != ""){
          var kg = "";
          if(text.charAt(text.length-1) == "0"){
            kg = "10 kg";
            this.B2Desig.push("10");
          }
          if (text.charAt(text.length-1) == "1"){
            kg = "20 kg";
            this.B2Desig.push("20");
          }
          if (text.charAt(text.length-1) == "2"){
            kg = "50 lb";
            this.B2Desig.push("22.6796");
          }
          if (text.charAt(text.length-1)=="3"){
            kg = "34 kg";
            this.B2Desig.push("34");
          }if(text.charAt(text.length-1)=="5"){
            kg = "(Rembo) 100 kg"
            this.B2Desig.push("100");
          }if(text.charAt(text.length-1)=="6"){
            kg = "(Rembo) 180 kg";
            this.B2Desig.push("180");
          }if(text.charAt(text.length-1) == "7"){
            kg = "(Rembo) 270 kg";
            this.B2Desig.push("270");
          }if(text.charAt(text.length-1) == "8"){
              kg = "37,5 kg";
              this.B2Desig.push("37.5L");
              this.B2String.push("Linde ("+text.substr(0,text.length-1)+") "+kg);
              this.B2.push(text.substr(0,text.length-2));
              this.B2IsMesser.push(true);
              this.B2Ad.push(text);
          } else if(text.charAt(text.length-1) == "4") {
            kg = "37,5 kg";
            this.B2Desig.push("37.5");
            this.B2String.push("Messer ("+text.substr(0,text.length-1)+") "+kg);
            this.B2.push(text.substr(0,text.length-2));
            this.B2IsMesser.push(true);
            this.B2Ad.push(text);
          } else if(text.charAt(text.length-1) != "8") {
            this.B2String.push("Air liquide ("+text.substr(0,text.length-1)+") "+kg);
            this.B2IsMesser.push(false);
            this.B2Ad.push(text);
            this.B2.push(text.substr(0,text.length-2));
  
          }
          
          this.addressage2+=5;
          this.isAddedB2.push(false);
        //}
        this.cd.detectChanges();
        }
       
    }if(localStorage.getItem("isAddedB2")){
      this.isAddedB2 = JSON.parse(localStorage.getItem("isAddedB2"));
    }
    this.isLoaded = true;
    this.calcContenantB1();
    this.calcContenantB2();

  }//Contenue à changer en B2 changeDesigB2
  async onRemoveWithIndexB1(i,text) {
    
      this.removedBottle.barcodes.push(text);
      localStorage.setItem("removed",JSON.stringify(this.removedBottle));
      if(this.B1Desig[i] == "37.5L"){
        this.contenantB1 -= 37.5;
      }else {
        this.contenantB1 -= parseFloat(this.B1Desig[i]);
      }
      
      if(this.contenantB1 < 0){
        this.contenantB1 = 0;
      }
      this.removedBottleStringB1.push(this.B1String[i].replace("Inconnue",text));
      localStorage.setItem("removedStringB1",JSON.stringify(this.removedBottleStringB1));

                
                
      this.B1Ad.splice(i,1);
      if(this.isAddedB1[i]){
        if(this.B1Desig[i] == "37.5L"){
          this.contenuB1 -= 37.5;
        }else {
          this.contenuB1 -= parseFloat(this.B1Desig[i]);
        }
      }
      this.isAddedB1.splice(i,1);
      this.global.upcmodbus.reserves.bottlesB1.splice(i,1);
      localStorage.setItem("isAddedB1",JSON.stringify(this.isAddedB1));

      for(var rmb =0;rmb<10;rmb++){
                  
        if(this.B1Ad[rmb] == undefined || this.B1Ad[rmb] == ""){
          this.B1Ad[rmb] = "\0\0\0\0\0\0\0\0\0\0";
        }
      }
      this.B1.splice(i,1);
      this.B1Desig.splice(i,1);
      this.B1String.splice(i,1);
      this.B1IsMesser.splice(i,1);

      
                          /*this.B1= [];
                          this.B1Ad = [];
                          this.B1String = [];
                          this.B1Desig = [];
                          this.B1IsMesser = [];
                          this.B2 = [];
                          this.B2Ad = [];
                          this.B2String = [];
                          this.B2Desig = [];
                          this.B2IsMesser = [];
                          
                          this.loadBottles();*/
              
                  
                  
         
         
        
   
  }
  async onRemoveWithIndexB2(i,text){
    this.removedBottle.barcodes.push(text);
    localStorage.setItem("removed",JSON.stringify(this.removedBottle));

    if(this.B2Desig[i] == "37.5L"){
      this.contenantB2 -= 37.5;
    }else {
      this.contenantB2 -= parseFloat(this.B2Desig[i]);
    }
    
    if(this.contenantB2 < 0){
      this.contenantB2 = 0;
    }

    this.removedBottleStringB2.push(this.B2String[i].replace("Inconnue",text));
    localStorage.setItem("removedStringB2",JSON.stringify(this.removedBottleStringB2));

    this.B2Ad.splice(i,1);
      if(this.isAddedB2[i]){
        if(this.B2Desig[i] == "37.5L"){
          this.contenuB2 -= 37.5;
        }else {
          this.contenuB2 -= parseFloat(this.B2Desig[i]);
        }
      }
      this.isAddedB2.splice(i,1);
      this.global.upcmodbus.reserves.bottlesB2.splice(i,1);
      localStorage.setItem("isAddedB2",JSON.stringify(this.isAddedB2));

      this.B2.splice(i,1);
      this.B2String.splice(i,1);
      this.B2Desig.splice(i,1);
      this.B2IsMesser.splice(i,1);

      for(var rmb =0;rmb<10;rmb++){
                  
        if(this.B2Ad[rmb] == undefined || this.B2Ad[rmb] == ""){
          this.B2Ad[rmb] = "\0\0\0\0\0\0\0\0\0\0";
        }
      }

              
      await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[0])
      this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;              
      await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[1])
      this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;    
      await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[2])
      this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;    
      await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[3])
      this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;  
      await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[4])
      this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;  
      await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[5])
      this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;  
      await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[6])
      this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;  
      await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[7])
      this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;  
      await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[8])
      this.correspondancesRegistres.xCo2Res2CodesBarres.adr = 41169; 

  }
  onRemove() {
    //retrancher au contenu 
    this.scan.scan().then(async res=>{
       
        if(res.cancelled != true){
          var scanned = false;
          var indexB1 = -1;
          var indexB2 = -1;
          var indexB1front = -1;
          var indexB2front = -1;
          var indexB1Ad = -1;
          var indexB2Ad = -1;
          this.B1.forEach((item,index)=>{
            
            if(res.text.includes(item)){
              scanned = true;
              indexB1 = index;
            }
            
          })
          this.B1String.forEach((item,index)=>{
            if(item.includes(res.text) ) {
              indexB1front = index;
              scanned = true;
            }
          })
          this.B1Ad.forEach((item,index)=>{
            if(item.includes(res.text)){
              scanned = true;
              indexB1Ad = index;
            }
          })
          this.B2Ad.forEach((item,index)=>{
            if(item.includes(res.text)) {
              scanned = true;
              indexB2Ad = index;
            }
          })
          this.B2.forEach((item,index)=>{
            if(res.text.includes(item)){
              scanned = true;
              indexB2 = index;
              
            }
            //alert(indexB2);
          })
          this.B2String.forEach((item,index)=>{
            if(item.includes(res.text)){
              scanned = true;
              indexB2front = index;
            }
          })
         
          if(scanned){
            //Index à revoir car parfois ne pointe pas sur le bon point
            //alert(indexB1);
            this.removedBottle.barcodes.push(res.text);
            localStorage.setItem("removed",JSON.stringify(this.removedBottle));
            if(indexB1 >= 0){
              if(this.B1Desig[indexB1] == "37.5L"){
                this.contenantB1 -= 37.5;
              }else {
                this.contenantB1 -= parseFloat(this.B1Desig[indexB1]);
              }
              
              if(this.contenantB1 < 0){
                this.contenantB1 = 0;
              }
                
                this.removedBottleStringB1.push(this.B1String[indexB1]);
                localStorage.setItem("removedStringB1",JSON.stringify(this.removedBottleStringB1));
              
              
   

                
                
                this.B1Ad.splice(indexB1,1);
                if(this.isAddedB1[indexB1] == true){
                  if(this.B1Desig[indexB1] == "37.5L"){
                    this.contenuB1 -= 37.5;
                  }else {
                    this.contenuB1 -= parseFloat(this.B1Desig[indexB1]);
                  }
                  this.global.upcmodbus.client.setFloatInHoldingRegister(40157,this.contenuB1/0.001974).then(res=>{

                  });
                }
                
                this.isAddedB1.splice(indexB1,1);
                this.B1String.splice(indexB1,1);
                this.B1.splice(indexB1,1);
                this.B1IsMesser.splice(indexB1,1);

                this.addressage-= 5;
                this.global.upcmodbus.reserves.bottlesB1.splice(indexB1,1);
                localStorage.setItem("isAddedB1",JSON.stringify(this.isAddedB1));
                for(var i =0;i<10;i++){
                  
                  if(this.B1Ad[i] == undefined || this.B1Ad[i] == ""){
                    this.B1Ad[i] = "\0\0\0\0\0\0\0\0\0\0";
                  }
                  else {
                    var count = 10-this.B1Ad[i].length;
                    for(var j = 0;j<count;j++){
                      this.B1Ad[i] += "\0";
                    }
                  }
                }
                  
                
                
                

                
            }
            else if(indexB2 >= 0){
              if(this.B2Desig[indexB2] == "37.5L"){
                this.contenantB2 -= 37.5;
              }else {
                this.contenantB2 -= parseFloat(this.B2Desig[indexB2]);
              }
              
              if(this.contenantB2 <0){
                this.contenantB2 = 0;
              }
                this.removedBottleStringB2.push(this.B2String[indexB2]);
                localStorage.setItem("removedStringB2",JSON.stringify(this.removedBottleStringB2));
                this.B2Ad.splice(indexB2,1);
                if(this.isAddedB2[indexB2]){
                  if(this.B2Desig[indexB2] == "37.5L"){
                    this.contenuB2 -= 37.5;
                  } else {
                    this.contenuB2 -= parseFloat(this.B2Desig[indexB2]);
                  }
                  this.global.upcmodbus.client.setFloatInHoldingRegister(40165,this.contenuB2/0.001974).then(res=>{
                  
                  });
                }
                this.B2String.splice(indexB2,1);
                this.B2.splice(indexB2,1);
                this.B2Desig.splice(indexB2,1);
                this.B2IsMesser.splice(indexB2,1);
                this.isAddedB2.splice(indexB2,1);
                this.global.upcmodbus.reserves.bottlesB2.splice(indexB2,1);
                this.addressage2 -= 5;
                localStorage.setItem("isAddedB2",JSON.stringify(this.isAddedB2));

                for(var i =0;i<10;i++){
                  if(this.B2Ad[i]== undefined || this.B2Ad[i] == ""){
                    this.B2Ad[i] = "\0\0\0\0\0\0\0\0\0\0";
                  }
                }

                await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[0])
                this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;              
                await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[1])
                this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;    
                await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[2])
                this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;    
                await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[3])
                this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;  
                await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[4])
                this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;  
                await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[5])
                this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;  
                await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[6])
                this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;  
                await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[7])
                this.correspondancesRegistres.xCo2Res2CodesBarres.adr += 5;  
                await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res2CodesBarres,this.B2Ad[8])
                this.correspondancesRegistres.xCo2Res2CodesBarres.adr = 41169; 
            }
            
          }else{
            var input = [];
            var alertInc;
            this.bottleIncB1.forEach(item=>{
               input.push({label :this.B1String[item]+ " en B1",type : 'radio', 'name' :this.B1Desig[item],handler : ()=>{this.onRemoveWithIndexB1(item,res.text);alertInc.dismiss()}});
            })
            this.bottleIncB2.forEach(item=>{
              input.push({label : this.B2String[item]+" en B2",type : 'radio','name': this.B2Desig[item],handler : ()=>{this.onRemoveWithIndexB2(item,res.text);alertInc.dismiss()}});
            })
            if(this.bottleIncB2.length > 0 || this.bottleIncB1.length > 0){
              alertInc = await this.alertCTRL.create({
                cssClass : "nothing",
                header : "Enlèvement Bouteille",
                message : "Il y a des bouteilles inconnues, veuillez assigner la bouteille scannée...",
                inputs : input
              })
              alertInc.present();
            }
            else {
              const alert = await this.alertCTRL.create({
                cssClass: 'my-custom-class',
                header: 'Enlèvement Bouteille',
                message: "La bouteille n'a pas été scanné par le passé, Êtes vous sur de vouloir l'enlever ?",
                buttons: [{text : "OUI", handler : async ()=>{
                  var reserve = "";
                  const alrt = await this.alertCTRL.create({
                    cssClass: 'my-custom-class',
                    header: 'Enlèvement Bouteille',
                    message : "La bouteille était en B1 ou en B2",
                    buttons : [{text : "B1", handler : ()=>{
                      reserve = "B1";
                      
                      alrtinput.present();
                      this.removedBottle.barcodes.push(res.text);
                      localStorage.setItem("removed",JSON.stringify(this.removedBottle));/*this.removedBottleUnknown.push(res.text+" en B1");localStorage.setItem("removedBottleUnknown",JSON.stringify(this.removedBottleUnknown));*/
                    }},{
                      text : "B2", handler : ()=>{
                        reserve = "B2";
                        alrtinput.present();
                        this.removedBottle.barcodes.push(res.text);
                        localStorage.setItem("removed",JSON.stringify(this.removedBottle));/*this.removedBottleUnknown.push(res.text+" en B2");localStorage.setItem("removedBottleUnknown",JSON.stringify(this.removedBottleUnknown));*/
                      }
                    } ]
                  })
                  alrt.present();
  
                  const alrtinput = await this.alertCTRL.create({
                    cssClass : "my-custom-class",
                    header: 'Type de Bouteille',
                    inputs : [
                      {
                        name: '10',
                        type: 'radio',
                        label: 'Air liquide 10 kg',
                        handler : ()=>{
                          if(reserve == "B1") {
                            this.contenantB1 -= 10;
                            this.removedBottleStringB1.push("Air liquide ("+res.text+") 10 kg");
                          }
                          else {
                            this.contenantB2 -= 10;
                            this.removedBottleStringB2.push("Air liquide ("+res.text+") 10 kg");
  
                          }
                          if(this.contenantB2 < 0) this.contenantB2 = 0;
                          if(this.contenantB1 <0) this.contenantB1 = 0;
                          alrtinput.dismiss();
                        }
                      },
                      {
                        name: '20',
                        type: 'radio',
                        label: 'Air liquide 20 kg',
                        handler : ()=>{
                          if(reserve == "B1") {
                            this.contenantB1 -= 20;
                            this.removedBottleStringB1.push("Air liquide ("+res.text+") 20 kg");
  
                          }
                          else {
                            this.contenantB2 -= 20;
                            this.removedBottleStringB2.push("Air liquide ("+res.text+") 20 kg");
  
                          }
                          if(this.contenantB2 < 0) this.contenantB2 = 0;
                          if(this.contenantB1 <0) this.contenantB1 = 0;
                          alrtinput.dismiss();
                        }
                      },{
                        name: '22.6796',
                        type: 'radio',
                        label: 'Air liquide 50 lb',
                        handler : ()=>{
                          if(reserve == "B1") {
                            this.contenantB1 -= 22.6796;
                            this.removedBottleStringB1.push("Air liquide ("+res.text+") 50 lb");
  
                          }
                          else {
                            this.contenantB2 -= 22.6796;
                            this.removedBottleStringB2.push("Air liquide ("+res.text+") 50 lb");
  
                          }
                          if(this.contenantB2 < 0) this.contenantB2 = 0;
                          if(this.contenantB1 <0) this.contenantB1 = 0;
                          alrtinput.dismiss();
                        }
                      },{
                        name: '34',
                        type: 'radio',
                        label: 'Air liquide 34 kg',
                        handler : ()=>{
                          if(reserve == "B1") {
                            this.contenantB1 -= 34;
                            this.removedBottleStringB1.push("Air liquide ("+res.text+") 34 kg");
  
                          }
                          else {
                            this.contenantB2 -= 34;
                            this.removedBottleStringB2.push("Air liquide ("+res.text+") 34 kg");
  
                          }
                          if(this.contenantB2 < 0) this.contenantB2 = 0;
                          if(this.contenantB1 <0) this.contenantB1 = 0;
                          alrtinput.dismiss();
                        }
                      },{
                        name: '37.5',
                        type: 'radio',
                        label: 'Messer 37,5 kg',
                        handler : ()=>{
                          if(reserve == "B1") {
                            this.contenantB1 -= 37.5;
                            this.removedBottleStringB1.push("Messer ("+res.text+") 37,5 kg");
  
                          }
                          else {
                            this.contenantB2 -= 37.5;
                            this.removedBottleStringB2.push("Messer ("+res.text+") 37,5 kg");
  
                          }
                          if(this.contenantB2 < 0) this.contenantB2 = 0;
                          if(this.contenantB1 <0) this.contenantB1 = 0;
                          alrtinput.dismiss();
                        }
                      },{
                        name: '37',
                        type: 'radio',
                        label: 'Linde 37,5 kg',
                        handler : ()=>{
                          if(reserve == "B1") {
                            this.contenantB1 -= 37.5;
                            this.removedBottleStringB1.push("Linde ("+res.text+") 37,5 kg");
  
                          }
                          else {
                            this.contenantB2 -= 37.5;
                            this.removedBottleStringB2.push("Linde ("+res.text+") 37,5 kg");
  
                          }
                          if(this.contenantB2 < 0) this.contenantB2 = 0;
                          if(this.contenantB1 <0) this.contenantB1 = 0;
                          alrtinput.dismiss();
                        }
                      }
                    ]
                  })
                  
                }},{text : "NON", handler : ()=>{}}]
              });
              alert.present();
              //alert("La bouteille n'est pas assigné à cette ceinture");
            }
            
          }
        }
        
    }).catch(err=>{
      alert("Veuillez activer l'autorisation photo de l'app")
    })
  }

  doRefresh($event) {

    this.B1= [];
    this.B1Ad = [];
    this.B1String = [];
    this.B1Desig = [];
    this.B1IsMesser = [];
    this.B2 = [];
    this.B2Ad = [];
    this.B2String = [];
    this.B2Desig = [];
    this.B2IsMesser = [];

    this.ionViewWillEnter();
    $event.target.complete();
  }
  onMinusContentB2(i) {
    if(this.B2Desig[i] == "37.5L"){
      this.contenuB2 -= 37.5;
    } else {
      this.contenuB2 -= parseFloat(this.B2Desig[i]);
    }
    
  }
  reloadComponent() {
    alert("Reloading...");
    let currentUrl = this.router.url;
    alert("Reloading should be alright !");
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
    
  }
  onChangeDesigB2(i) {
    var adresse = i*5+41169;
   
    var index;
    this.addedBottleB2.kg[i] = this.B2Desig[i];
    this.contenuB2 += this.B2Desig[i];
    // 37.5 BDesig
    if(this.B2Desig[i] == "37.5L"){
      this.contenuB2 += 37.5;
    } else {
      this.contenuB2 += parseFloat(this.B2Desig[i]);
    }
    
    
    if(this.B2Desig[i] =="10"){
      index = "0";
      //this.contenuB2+=10;
      this.B2String[i] = "Air liquide ("+this.B2[i]+") "+this.B2Desig[i]+" kg";

    }
    if(this.B2Desig[i] == "20"){
      index = "1";
      //this.contenuB2+= 20;
      this.B2String[i] = "Air liquide ("+this.B2[i]+") "+this.B2Desig[i]+" kg";
    }
    if(this.B2Desig[i] == "22.6796"){
      index = "2";
      //this.contenuB2 += 22.6796;
      this.B2String[i] = "Air liquide ("+this.B2[i]+") 50 lb";
    }
    if (this.B2Desig[i] == "34"){
      //this.contenuB2 += 34;
      index = "3";
      this.B2String[i] = "Air liquide ("+this.B2[i]+") "+this.B2Desig[i]+" kg";
    } if(this.B2Desig[i] == "37.5"){
      index = "4";
      this.B2String[i] = "Messer ("+this.B2[i]+") "+this.B2Desig[i]+" kg";

    } if(this.B2Desig[i] == "37.5L"){
      index = "8";
      this.B2String[i] = "Linde ("+this.B2[i]+") 37,5 kg";

    }
    //indexB1Ad
    this.calcContenantB2();
  
    this.global.upcmodbus.client.setStringInHoldingRegister(adresse,"\0\0\0\0\0\0\0\0\0\0").then(res=>{
      this.global.upcmodbus.client.setStringInHoldingRegister(adresse,this.B2[i]+index).then(res=>{
        //this.global.upcmodbus.reserves.bottlesB2.push(this.B2[i]+index);
        this.global.upcmodbus.reserves.bottlesB2[i] = this.B2[i];
        
      }).catch(err=>{
        alert("Erreur de réécriture, veuillez vous connecter à l'UPC ou recharger la page !");
      })
    })
    
  }//Archevechedemonaco IP 
  removeB1 () {
    return new Promise<void>(async (resolve, reject)=>{
      for (var i = 41124;i<=41164;i+=5){
        this.global.upcmodbus.client.setStringInHoldingRegister(i,"\0\0\0\0\0\0\0\0\0\0").then(res=>{
          this.B1= [];
                            this.B1Ad = [];
                            this.B1String = [];
                            this.B1Desig = [];
                            this.B1IsMesser = [];
                            this.B2 = [];
                            this.B2Ad = [];
                            this.B2String = [];
                            this.B2Desig = [];
                            this.B2IsMesser = [];
                            this.addressage = 41124;
          this.loadBottles();
          
        })
      }
      
      resolve();
    })
    
  }
  removeB2 () {
    return new Promise<void>(async(resolve,reject)=>{
      var j = 0;
      for (var i=41169;i<=41209;i+=5){
        this.global.upcmodbus.client.setStringInHoldingRegister(i,"\0\0\0\0\0\0\0\0\0\0").then(res=>{
          this.B1= [];
                            this.B1Ad = [];
                            this.B1String = [];
                            this.B1Desig = [];
                            this.B1IsMesser = [];
                            this.B2 = [];
                            this.B2Ad = [];
                            this.B2String = [];
                            this.B2Desig = [];
                            this.B2IsMesser = [];
                            this.addressage2 = 41170;
          this.loadBottles();
           
        })
      }
      
      resolve();
    })
    
  }
  onMinusContentB1(i) {
    if(this.B1Desig[i] == "37.5L"){
      this.contenuB1 -= 37.5;
    } else {
      this.contenuB1 -= parseFloat(this.B1Desig[i]);
    }
    
  }
  
  onChangeDesigB1(i) {
   
    var adresse = i*5+41124;
    
    
    var index;
    this.addedBottleB1.kg[i] = this.B1Desig[i];
    if(this.B1Desig[i] == "37.5L"){
      this.contenuB1 += 37.5;
    }else {
      this.contenuB1 += parseFloat(this.B1Desig[i]);
    }
    
    
    //this.contenantB1 = this.contenuB1;

    if (this.B1Desig[i] == "10"){
      index = "0";
      this.B1String[i] = "Air liquide ("+this.B1[i]+") "+this.B1Desig[i]+" kg";
    }
    if(this.B1Desig[i] == "20") {
      index = "1";
      this.B1String[i] = "Air liquide ("+this.B1[i]+") "+this.B1Desig[i]+" kg";

    }
    if(this.B1Desig[i] == "22.6796"){
      index = "2";
      this.B1String[i] = "Air liquide ("+this.B1[i]+") 50 lb";

    }
    if(this.B1Desig[i]== "34"){
      index = "3";
      this.B1String[i] = "Air liquide ("+this.B1[i]+") "+this.B1Desig[i]+" kg";

    } if (this.B1Desig[i] == "37.5") {
      index = "4";
      this.B1String[i] = "Messer ("+this.B1[i]+") "+this.B1Desig[i]+" kg";

    } if(this.B1Desig[i] == "37.5L") {
      index = "8";
      this.B1String[i] = "Linde ("+this.B1[i]+") 37.5 kg";
    }
   this.calcContenantB1();
    this.global.upcmodbus.client.setStringInHoldingRegister(adresse,"\0\0\0\0\0\0\0\0\0\0").then(res=>{
      this.global.upcmodbus.client.setStringInHoldingRegister(adresse,this.B1[i]+index).then(res=>{
        //this.global.upcmodbus.reserves.bottlesB1.push(this.B1[i]+index);
        this.global.upcmodbus.reserves.bottlesB1[i] = this.B1[i]+index;
      }).catch(err=>{
        alert("Erreur de réécriture, veuillez vous connecter à l'UPC ou recharger la page !");
      })
    })
    
  }
  onScanBarCodeB2() {
    this.scan.scan().then(async res=>{
      
      var isScanned = false;
      this.B1.forEach(item=>{
        if(item == res.text){
          isScanned = true;
        }
      })
      this.B2.forEach(item=>{
        if(item == res.text){
          isScanned = true;
        }
      })

      if(!isScanned) {
        //if(res.text == bouteilleTransit.barcode){
        //ajoute bouteille automatiquement à B1 B1String B1Ad B1Desig B1IsMesser
        //this.B1.push(res.text);
        //this.B1String.push("Air liquide ("+barcode+") x kg");
        //var index;
        // si 10 kg index = '0' si 20 kg index = '1' bottletransit.bottleType.contenue/designation
        //this.B1Ad.push(res.text+index)
        //B1Desig.push("10") 20
        //B1ISMesser.push(true si messer false si pas Messer)
        //}
        
        if(res.text != ""){
          const alrtBT = await this.alertCTRL.create({
            header : "Type de bouteille",message : "",inputs : [
              {
                name: '34',
                type: 'radio',
                label: 'Air liquide 34 kg',
                handler : ()=>{
                  //AL 34 kg
                  this.writeUPC(this.addressage2,res.text,"34","Air liquide ("+res.text+") 34 kg","B2","3");

                  alrtBT.dismiss();
                }
              },{
                name: '37.5',
                type: 'radio',
                label: 'Messer 37,5 kg',
                handler : ()=>{
                  //Messer 37.5 kg
                  this.writeUPC(this.addressage2,res.text,"37.5","Messer ("+res.text+") 37.5 kg","B2","4");

                  alrtBT.dismiss();
                }
              },
              {
                name: '37',
                type: 'radio',
                label: 'Linde 37,5 kg',
                handler : ()=>{
                  //37.5 kg Linde
                  this.writeUPC(this.addressage2,res.text,"37.5L","Linde ("+res.text+") 37.5 kg","B2","8");

                  alrtBT.dismiss();
                }
              },

              {
                name: '10',
                type: 'radio',
                label: 'Air liquide 10 kg',
                handler : ()=>{
                  //AL 10 kg
                  this.writeUPC(this.addressage2,res.text,"10","Air liquide ("+res.text+") 10 kg","B2",'0');
                  alrtBT.dismiss();
                }
              },
              {
                name: '20',
                type: 'radio',
                label: 'Air liquide 20 kg',
                handler : ()=>{
                  //AL 20 kg
                  this.writeUPC(this.addressage2,res.text,"20","Air liquide ("+res.text+") 20 kg","B2",'1');

                  alrtBT.dismiss();
                }
              },{
                name: '22.6796',
                type: 'radio',
                label: 'Air liquide 50 lb',
                handler : ()=>{
                  //AL 22.6796 kg
                  this.writeUPC(this.addressage2,res.text,"22.6796","Air liquide ("+res.text+") 22.6796 kg","B2",'2');

                  alrtBT.dismiss();
                }
              }
            ]
            
          })
          alrtBT.present();
          
        }
      } else {
        alert("La bouteille est déjà en ligne !");
      }
      
      
    })
  }
  onScanBarCodeB1() {
    //Voir liste bouteilles en transit sinon afficher fenêtre ajout bouteille
    this.scan.scan().then(async res=>{
      var isScanned = false;
      this.B1.forEach(item=>{
        if(item == res.text){
          isScanned = true;
        }
      })
      this.B2.forEach(item=>{
        if(item == res.text){
          isScanned = true;
        }
      })
      if(!isScanned) {
        
        if(res.text != ""){
          //alert(res.text.substr(0,8))
          //Synchro plan 
          const alrtBT = await this.alertCTRL.create({
            header : "Type de bouteille",message : "",inputs : [
              {
                name: '34',
                type: 'radio',
                label: 'Air liquide 34 kg',
                handler : ()=>{
                  //AL 34 kg
                  this.writeUPC(this.addressage,res.text,"34","Air liquide ("+res.text+") 34 kg","B1","3");

                  alrtBT.dismiss();
                }
              },{
                name: '37.5',
                type: 'radio',
                label: 'Messer 37,5 kg',
                handler : ()=>{
                  //Messer 37.5 kg
                  this.writeUPC(this.addressage,res.text,"37.5","Messer ("+res.text+") 37.5 kg","B1","4");

                  alrtBT.dismiss();
                }
              },{
                name: '37',
                type: 'radio',
                label: 'Linde 37,5 kg',
                handler : ()=>{
                  //37.5 kg Linde
                  this.writeUPC(this.addressage,res.text,"37.5L","Linde ("+res.text+") 37.5 kg","B1","8");

                  alrtBT.dismiss();
                }
              },
              {
                name: '10',
                type: 'radio',
                label: 'Air liquide 10 kg',
                handler : ()=>{
                  //AL 10 kg
                  this.writeUPC(this.addressage,res.text,"10","Air liquide ("+res.text+") 10 kg","B1",'0');
                  alrtBT.dismiss();
                }
              },
              {
                name: '20',
                type: 'radio',
                label: 'Air liquide 20 kg',
                handler : ()=>{
                  //AL 20 kg
                  this.writeUPC(this.addressage,res.text,"20","Air liquide ("+res.text+") 20 kg","B1",'1');

                  alrtBT.dismiss();
                }
              },{
                name: '22.6796',
                type: 'radio',
                label: 'Air liquide 50 lb',
                handler : ()=>{
                  //AL 22.6796 kg
                  this.writeUPC(this.addressage,res.text,"22.6796","Air liquide ("+res.text+") 22.6796 kg","B1",'2');

                  alrtBT.dismiss();
                }
              }
            ]
            
          })
          alrtBT.present();        
          
          
        }
      } else {
        alert("La bouteille est déjà en ligne !");
      }
      
      
    })
  }
  async writeUPC(adresse,text,desig,barcodetxt,reserve,index) {
   
    //this.contenantB1 = this.contenuB1;
    var obj;
    if(reserve == "B1"){
      this.correspondancesRegistres.xCo2Res1CodesBarres.adr = adresse;
      obj = this.correspondancesRegistres.xCo2Res1CodesBarres;
    } else if(reserve == "B2") {
      this.correspondancesRegistres.xCo2Res2CodesBarres.adr = adresse;
      obj = this.correspondancesRegistres.xCo2Res2CodesBarres; 

    }
    var count = 10-(text+index).length;
    var barcode = text+index;
    for(var i =0;i<count;i++){
      barcode += '\0';
    }
    
    /*var d = new Date();
    this.global.logs.push(this.global.msToTime(d)+" - BBBBBBBBBBBBBBBBBBBBBBBBBB : "+JSON.stringify(obj));
      await this.global.onWriteEnable(obj,barcode)
      var d = new Date();
    this.global.logs.push(this.global.msToTime(d)+" - CCCCCCCCCCCCCCCCCCCCCCCCCC : "+JSON.stringify(obj));*/
        if(reserve == "B1"){
          if(desig == "37.5L"){
            this.contenuB1 += 37.5;
          }else {
            this.contenuB1 += parseFloat(desig);
          }
          
          this.B1String.push(barcodetxt);
          this.B1Ad.push(barcode);
          this.B1.push(text);
          this.B1Desig.push(desig);
          this.addedBottleB1.kg.push(desig);

          this.B1IsMesser.push(true);
          this.addedBottleB1.barcodes.push(text);
          
          this.addedBottleB1.reserve = reserve;
          localStorage.setItem("bottle"+reserve,JSON.stringify(this.addedBottleB1));

          
          this.addressage+= 5;
          this.isAddedB1.push(true);
          this.global.upcmodbus.reserves.bottlesB2.push(text);
          localStorage.setItem("isAddedB1",JSON.stringify(this.isAddedB1));
          this.calcContenantB1();
        
        }else if(reserve == "B2"){
          if(desig == "37.5L"){
            this.contenuB2 += 37.5;
          }else {
            this.contenuB2 += parseFloat(desig);
          }
          
          this.B2String.push(barcodetxt);
          this.B2Ad.push(barcode);
          this.B2IsMesser.push(text);
          this.B2Desig.push(desig);
          this.addedBottleB2.kg.push(desig);

          this.B2IsMesser.push(true);
          this.addedBottleB2.barcodes.push(text);
          
          this.addedBottleB2.reserve = reserve;
          localStorage.setItem("bottle"+reserve,JSON.stringify(this.addedBottleB2));

          
          this.addressage2+= 5;
          this.isAddedB2.push(true);
          this.global.upcmodbus.reserves.bottlesB2.push(text);
          localStorage.setItem("isAddedB2",JSON.stringify(this.isAddedB2));
          this.calcContenantB2();
          
        }
        
        
        this.cd.detectChanges();
    
   

  }
  
  
  changeRes(i) {
     
      
      this.global.upcmodbus.client.setIntInHoldingRegister(40151,1,i).then(res=>{
          if(i == 1) {
            this.highlightB1 = true;
            this.highlightB2 = false;
          } else if(i == 2){
            this.highlightB2 = true;
            this.highlightB1 = false;
          } 
          this.global.upcmodbus.reserves.co2ResActive = i;
          
          this.cd.detectChanges();
      });
     
      
    
    
  }
  onSynchroCeint() {
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
    
  }


  subscribeRefresh(){

      this.stockRet = this.global.upcmodbus.nameId;
      this.statusB1 = ""+this.global.upcmodbus.reserves.co2Res1Status;
      this.statusB2 = ""+this.global.upcmodbus.reserves.co2Res2Status;
                    
      this.highlightB1 = this.global.upcmodbus.reserves.co2ResActive == 1;
      this.highlightB2 = this.global.upcmodbus.reserves.co2ResActive == 2;
      this.contenuB1 = this.global.upcmodbus.reserves.co2Res1ActVol;
      this.contenuB2 = this.global.upcmodbus.reserves.co2Res2ActVol;
      this.contenantB1 = this.global.upcmodbus.reserves.co2Res1StartVol;
      this.contenantB2 = this.global.upcmodbus.reserves.co2Res2StartVol;

      if(this.global.upcmodbus.reserves.bottlesB1.length > 0 || this.global.upcmodbus.reserves.bottlesB2.length > 0){
        this.loadBottles();                      
      }
   
                  
  }

  async onSynchro(){
      var d = new Date();
      this.global.logs.push(this.global.msToTime(d)+" - ON SYNCHRO")
      
      alert(this.B1Ad.join(';'))
      await this.global.onWriteEnable(this.correspondancesRegistres.xCo2Res1CodesBarres,this.B1Ad.join(''))

      

      var d = new Date();
      this.global.logs.push(this.global.msToTime(d)+" - SUCCESS")

      await this.global.onWriteEnable(this.correspondancesRegistres.co2Res1StartVol,this.contenantB1/0.001974)
      this.global.upcmodbus.reserves.co2Res1StartVol = this.contenantB1;
     
      
      await this.global.onWriteEnable(this.correspondancesRegistres. co2Res2StartVol,this.contenantB2/0.001974)
      this.global.upcmodbus.reserves.co2Res2StartVol = this.contenantB2;
        

     
      if(this.contenuB1 > 0){
        
        if(this.global.upcmodbus.general.upcStatus == 1){
          await this.global.onWriteEnable(this.correspondancesRegistres.upcMode,0)
        }
        //await this.global.onWriteEnable(this.correspondancesRegistres.co2Res1ActVol,0)       
        
        await this.global.onWriteEnable(this.correspondancesRegistres.co2Res1FillNew,this.contenuB1/0.001974)
        this.global.upcmodbus.reserves.co2Res1ActVol = this.contenuB1;
        //this.contenantB1 = this.contenuB1;
        
        if(this.global.upcmodbus.general.upcStatus == 1) {
          await this.global.onWriteEnable(this.correspondancesRegistres.upcMode,1)
        }              
        
          /*let int = setInterval(()=>{
          this.global.upcmodbus.client.getIntFromHoldingRegister(40381,1).then(res=>{
          if(this.global.upcmodbus.reserves.co2Res1Status != res){
                              clearInterval(int);
                            }
                            this.statusB1 = ""+res;
                            this.global.upcmodbus.reserves.co2Res1Status = res;
                          })
                        },1000)*/
                      
                      
                      
                  
                
      }
      
        
    

    
      if(this.contenuB2 > 0) {
        if(this.global.upcmodbus.general.upcStatus == 1){
          //await this.global.onWriteEnable(this.correspondancesRegistres.co2Res2ActVol,0)   
          await this.global.onWriteEnable(this.correspondancesRegistres.upcMode,0)
        }    
      
        await this.global.onWriteEnable(this.correspondancesRegistres.co2Res2FillNew,this.contenuB2/0.001974)
        this.global.upcmodbus.reserves.co2Res2ActVol = this.contenuB2;
                    //this.contenantB2 = this.contenuB2;
          
                     
        if(this.global.upcmodbus.general.upcStatus == 1) {
          await this.global.onWriteEnable(this.correspondancesRegistres.upcMode,1)
        } 
   
                    /* let int = setInterval(()=>{
                        this.global.upcmodbus.client.getIntFromHoldingRegister(40383,1).then(res=>{
                          if(this.global.upcmodbus.reserves.co2Res2Status != res){
                            clearInterval(int);
                          }
                          this.statusB2 = ""+res;
                          this.global.upcmodbus.reserves.co2Res2Status = res;
                        })
                      },1000)*/
                  
                    
                    
            
          
          
      }
        
  } 

  goToNextPage(){   
    clearInterval(this.global.interval); 
    this.storage.get("nexturl").then(res=>{  
      this.router.navigate([res]);
    })  
  }


}
