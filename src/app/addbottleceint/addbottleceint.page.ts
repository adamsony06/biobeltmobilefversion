import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
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

declare var WifiWizard2: any;

@Component({
  selector: 'app-addbottleceint',
  templateUrl: './addbottleceint.page.html',
  styleUrls: ['./addbottleceint.page.scss'],
})
export class AddbottleceintPage implements OnInit {
  stockRet = "En cours...";
  upc : UPCModbus;
  addressage = 41119;
  addressage2 = 41169;
  B1= [];
  B1String = [];
  B1Desig = [];
  B1IsMesser = [];
  B2 = [];
  B2String = [];
  B2Desig = [];
  B2IsMesser = [];
  i = 0;
  y = 0;
  addedBottleB1 : any = {barcodes : [],kg : []};
  addedBottleB2 : any = {barcodes : [], kg : []};
  removedBottle : any = {barcodes : []};
  token : string;
  isBBAM = false;
  contenuB1 = 0;
  contenuB2 = 0;
  ssid = "";

  constructor(private platform : Platform,private ngZone : NgZone,private network : Network,private scan : BarcodeScanner,private modal : ModalController,private loadingCTRL : LoadingController,private cd: ChangeDetectorRef, private upcv3Service : Upcv3serviceService,private storage : Storage,private hotspot : Hotspot,private global : GlobalService) { }
  //Mise à jour puis wipe puis test 
  //Retest 
  //Wipe + Sauvegarde d'offset pour UPC
  ngOnInit() {
      

      this.addedBottleB1.date = new Date().toISOString().substr(0,16);
      this.addedBottleB1.objet ="Remplissage";
      this.addedBottleB2.date = new Date().toISOString().substr(0,16);
      this.addedBottleB2.objet ="Remplissage";
      this.removedBottle.date = new Date().toISOString().substr(0,16);

      this.platform.ready().then(async ()=>{
        this.storage.get("token").then(val=>{
          this.token = val;
        })
        if(this.platform.is('ios')){
          WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async res=>{
            
            var loading = await this.loadingCTRL.create({
              message : "Connection à l'UPC en cours...",
              duration : 10000
            })
            loading.present();
           
            this.global.isBBAM = true;
            this.platform.ready().then(
              readySource => {
                if (readySource == 'cordova') {
                  
                  this.upc = new UPCModbus(state => {
                    this.ngZone.run(() => {
                      // Force refresh UI
                      
                        
                        //this.readDiffusionParameters();
                      
                    });
                  });
                  
                  this.network.onConnect().subscribe(async (async) => {
                    
                    if (this.network.type === this.network.Connection.WIFI) {
                      
                      await this.upc.client.connect();
                      
                      await setTimeout(async ()=>{
                        this.ngZone.run(()=>{
                          this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                            this.stockRet = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                            this.cd.detectChanges();
                            loading.dismiss();
                          })
                          this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                              this.global.ssid = res;
                          })
                          for (var ad = 41119;ad<=41159;ad+=10){
                            this.upc.client.getStringFromHoldingRegister(ad,10).then(res=>{
                              
                              if (/^\d+$/.test(res.substr(0,8))){
                                
                                this.B1String.push("Messer ("+res.substr(0,8)+") 37.5 kg");
                                this.B1Desig.push("37.5");
                                this.B1IsMesser.push(true);
                                this.addressage+=10;
                                this.B1.push(res.substr(0,8));
                                
                              } else if(/^[a-z0-9]+$/i.test(res.substr(0,7))){
                                var kg = "";
                                
                                if(res.charAt(7) == "0"){
                                  kg = "10 kg";
                                  this.B1Desig.push("10");
                                }
                                if (res.charAt(7) == "1"){
                                  kg = "20 kg";
                                  this.B1Desig.push("20");
                                }
                                if (res.charAt(7) == "2"){
                                  kg = "22.6796 kg";
                                  this.B1Desig.push("22.6796");
                                }
                                if (res.charAt(7)=="3"){
                                  kg = "34 kg";
                                  this.B1Desig.push("34");
                                }
                                this.B1String.push("Air liquide ("+res.substr(0,7)+") "+kg);
                                this.B1IsMesser.push(false);
                                this.addressage+=10;
                                this.B1.push(res.substr(0,7));
                              }
                              this.cd.detectChanges();
                            })
                          } for(var ad2=41169;ad2<=41208;ad2+=10){
                            this.upc.client.getStringFromHoldingRegister(ad2,10).then(res=>{
                              
                              if(/^\d+$/.test(res.substr(0,8))){
                                this.B2String.push("Messer ("+res.substr(0,8)+") 37.5 kg");
                                this.B2Desig.push("37.5");
                                this.B2IsMesser.push(true);
                                this.addressage2+=10;
                                this.B2.push(res.substr(0,8));
                              } else if(/^[a-z0-9]+$/i.test(res.substr(0,7))){
                                var kg = "";
                                if(res.charAt(7) == "0"){
                                  kg = "10 kg";
                                  this.B2Desig.push("10");
                                }
                                if (res.charAt(7) == "1"){
                                  kg = "20 kg";
                                  this.B2Desig.push("20");
                                }
                                if (res.charAt(7) == "2"){
                                  kg = "22.6796 kg";
                                  this.B2Desig.push("22.6796");
                                }
                                if (res.charAt(7)=="3"){
                                  kg = "34 kg";
                                  this.B2Desig.push("34");
                                }
                                this.B2String.push("Air liquide ("+res.substr(0,7)+") "+kg);
                                this.B2IsMesser.push(false);
                                this.addressage2+=10;
                                this.B2.push(res.substr(0,7));
                              }
                              this.cd.detectChanges();
                            })
                          }
                          
                        })
                        
                        //alert(JSON.stringify(this.upc));
                      },5000)
                     
                      
                      
                      //await this.upc.getAllVars().general.upcNameId;
                      /*this.upc.getAllVars().then(res=>{
                        alert(res.general.upcNameId);
                      })
                      this.stockRet = {
                        name : this.upc.nameId 
                      }*/
                     
                      
                      
                      
                    }
                  },err=>{
                    loading.dismiss();
                    alert("Connection à l'UPC echoué !");
                  });
                }
              }
            );
          }).catch(err=>{
            this.stockRet = "Erreur lors de la connexion UPC";
            alert("La connexion a echoué veuillez vous approcher de l'UPC et réessayer !");
          })
        }
        else if(this.platform.is("android")) {
          var loading = await this.loadingCTRL.create({
            message : "Connection à l'UPC en cours...",
            duration : 10000
          })
          loading.present();
          this.hotspot.isWifiOn().then(async res=>{
            if(res == false){
              await this.hotspot.toggleWifi();

            }
            await this.hotspot.connectToWifi("BBAM","BioBeltService").then(res=>{
              this.global.isBBAM = true;
              this.platform.ready().then(
                async readySource => {
                  if (readySource == 'cordova') {
                    
                    this.upc = new UPCModbus(state => {
                      this.ngZone.run(() => {
                        // Force refresh UI
                        
                          
                          //this.readDiffusionParameters();
                        
                      });
                    });
                    await this.upc.client.connect();
                        this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                          this.stockRet = res.replace(/[^a-zA-Z0-9]/g,'');
                          this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g,'');
                          this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                          this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g,'');
                          this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                          this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                          this.cd.detectChanges();
                          loading.dismiss();
                        }).catch(err=>{
                          
                        })
                       await setTimeout(async ()=>{
                          this.ngZone.run(()=>{
                            this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                              this.stockRet = res.replace(/[^a-zA-Z0-9]/g,'');
                              this.addedBottleB1.name = res.replace(/[^a-zA-Z0-9]/g,'');
                              this.addedBottleB1.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                              this.addedBottleB2.name = res.replace(/[^a-zA-Z0-9]/g,'');
                              this.addedBottleB2.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                              this.removedBottle.upcNameId = res.replace(/[^a-zA-Z0-9]/g,'');
                              this.cd.detectChanges();
                              loading.dismiss();
                            }).catch(err=>{
                              
                            })
                            this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                              this.global.ssid = res;
                            })
                            
                            for (var ad = 41119;ad<=41159;ad+=10){
                              this.upc.client.getStringFromHoldingRegister(ad,10).then(res=>{
                               
                                if (/^\d+$/.test(res.substr(0,8))){
                                  
                                  this.B1String.push("Messer ("+res.substr(0,8)+") 37.5 kg");
                                  this.B1Desig.push("37.5");
                                  this.B1IsMesser.push(true);
                                  this.addressage+=10;
                                  this.B1.push(res.substr(0,8));
                                } else if(/^[a-z0-9]+$/i.test(res.substr(0,7))){
                                  var kg = "";
                                  
                                  if(res.charAt(7) == "0"){
                                    kg = "10 kg";
                                    this.B1Desig.push("10");
                                  }
                                  if (res.charAt(7) == "1"){
                                    kg = "20 kg";
                                    this.B1Desig.push("20");
                                  }
                                  if (res.charAt(7) == "2"){
                                    kg = "22.6796 kg";
                                    this.B1Desig.push("22.6796");
                                  }
                                  if (res.charAt(7)=="3"){
                                    kg = "34 kg";
                                    this.B1Desig.push("34");
                                  }
                                  this.B1String.push("Air liquide ("+res.substr(0,7)+") "+kg);
                                  this.B1IsMesser.push(false);
                                  this.addressage+=10;
                                  this.B1.push(res.substr(0,7));
                                }
                                this.cd.detectChanges();
                              }).catch(err=>{
                                
                              })
                            } for(var ad2=41169;ad2<=41208;ad2+=10){
                              this.upc.client.getStringFromHoldingRegister(ad2,10).then(res=>{
                                
                                if(/^\d+$/.test(res.substr(0,8))){
                                  this.B2String.push("Messer ("+res.substr(0,8)+") 37.5 kg");
                                  this.B2Desig.push("37.5");
                                  this.B2IsMesser.push(true);
                                  this.addressage2+=10;
                                  this.B2.push(res.substr(0,8));
                                } else if(/^[a-z0-9]+$/i.test(res.substr(0,7))){
                                  var kg = "";
                                  if(res.charAt(7) == "0"){
                                    kg = "10 kg";
                                    this.B2Desig.push("10");
                                  }
                                  if (res.charAt(7) == "1"){
                                    kg = "20 kg";
                                    this.B2Desig.push("20");
                                  }
                                  if (res.charAt(7) == "2"){
                                    kg = "22.6796 kg";
                                    this.B2Desig.push("22.6796");
                                  }
                                  if (res.charAt(7)=="3"){
                                    kg = "34 kg";
                                    this.B2Desig.push("34");
                                  }
                                  this.B2String.push("Air liquide ("+res.substr(0,7)+") "+kg);
                                  this.B2IsMesser.push(false);
                                  this.addressage2+=10;
                                  this.B2.push(res.substr(0,7));
                                  
                                }
                                this.cd.detectChanges();
                              }).catch(err=>{
                                
                              })
                            }
                            
                          })
                          
                          //alert(JSON.stringify(this.upc));
                        },5000)
                    
                    /*this.network.onConnect().subscribe(async (async) => {
                      
                      if (this.network.type === this.network.Connection.WIFI) {
                        
                        
                       
                        
                        
                        //await this.upc.getAllVars().general.upcNameId;
                        /*this.upc.getAllVars().then(res=>{
                          alert(res.general.upcNameId);
                        })
                        this.stockRet = {
                          name : this.upc.nameId 
                        }*/
                       
                        
                        
                        
                      /*}
                    },err=>{
                      loading.dismiss();
                      alert("Connection à l'UPC echoué !");
                    });*/
                  }
                }
              );
            })
          })
          
          /*WifiWizard2.connect("BBAM",false,"BioBeltService","WPA",false).then(res=>{
            this.isBBAM = true;
            this.platform.ready().then(
              readySource => {
                if (readySource == 'cordova') {
                  
                  this.upc = new UPCModbus(state => {
                    this.ngZone.run(() => {
                      // Force refresh UI
                      
                        
                        //this.readDiffusionParameters();
                      
                    });
                  });
                  
                  this.network.onConnect().subscribe(async (async) => {
                    
                    if (this.network.type === this.network.Connection.WIFI) {
                      
                      await this.upc.client.connect();
                      
                      await setTimeout(async ()=>{
                        this.ngZone.run(()=>{
                          this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                            this.stockRet = res;
                            this.addedBottleB1.name = res;
                            this.addedBottleB1.upcNameId = res;
                            this.addedBottleB2.name = res;
                            this.addedBottleB2.upcNameId = res;
                            this.removedBottle.upcNameId = res;
                            this.cd.detectChanges();
                            loading.dismiss();
                          })
                          
                          for (var ad = 41119;ad<=41159;ad+=10){
                            this.upc.client.getStringFromHoldingRegister(ad,10).then(res=>{
                              
                              if (/^\d+$/.test(res.substr(0,8))){
                                
                                this.B1String.push("Messer ("+res.substr(0,12)+") 37.5 kg");
                                this.B1Desig.push("37.5");
                                this.B1IsMesser.push(true);
                                this.addressage+=10;
                                this.B1.push(res.substr(0,12));
                              } else if(/^[a-z0-9]+$/i.test(res.substr(0,7))){
                                var kg = "";
                                
                                if(res.charAt(7) == "0"){
                                  kg = "10 kg";
                                  this.B1Desig.push("10");
                                }
                                if (res.charAt(7) == "1"){
                                  kg = "20 kg";
                                  this.B1Desig.push("20");
                                }
                                if (res.charAt(7) == "2"){
                                  kg = "22.6796 kg";
                                  this.B1Desig.push("22.6796");
                                }
                                if (res.charAt(7)=="3"){
                                  kg = "34 kg";
                                  this.B1Desig.push("34");
                                }
                                this.B1String.push("Air liquide ("+res.substr(0,7)+") "+kg);
                                this.B1IsMesser.push(false);
                                this.addressage+=10;
                                this.B1.push(res.substr(0,7));
                              }
                              this.cd.detectChanges();
                            })
                          } for(var ad2=41169;ad2<=41208;ad2+=10){
                            this.upc.client.getStringFromHoldingRegister(ad2,10).then(res=>{
                              
                              if(/^\d+$/.test(res.substr(0,8))){
                                this.B2String.push("Messer ("+res.substr(0,12)+") 37.5 kg");
                                this.B2Desig.push("37.5");
                                this.B2IsMesser.push(true);
                                this.addressage2+=10;
                                this.B2.push(res.substr(0,12));
                              } else if(/^[a-z0-9]+$/i.test(res.substr(0,7))){
                                var kg = "";
                                if(res.charAt(7) == "0"){
                                  kg = "10 kg";
                                  this.B2Desig.push("10");
                                }
                                if (res.charAt(7) == "1"){
                                  kg = "20 kg";
                                  this.B2Desig.push("20");
                                }
                                if (res.charAt(7) == "2"){
                                  kg = "22.6796 kg";
                                  this.B2Desig.push("22.6796");
                                }
                                if (res.charAt(7)=="3"){
                                  kg = "34 kg";
                                  this.B2Desig.push("34");
                                }
                                this.B2String.push("Air liquide ("+res.substr(0,7)+") "+kg);
                                this.B2IsMesser.push(false);
                                this.addressage2+=10;
                                this.B2.push(res.substr(0,7));
                              }
                              this.cd.detectChanges();
                            })
                          }
                          
                        })
                        
                        //alert(JSON.stringify(this.upc));
                      },5000)
                     
                      
                      
                      //await this.upc.getAllVars().general.upcNameId;
                      /*this.upc.getAllVars().then(res=>{
                        alert(res.general.upcNameId);
                      })
                      this.stockRet = {
                        name : this.upc.nameId 
                      }*/
                     
                      
                      
                      
                    /*}
                  },err=>{
                    loading.dismiss();
                    alert("Connection à l'UPC echoué !");
                  });
                }
              }
            );
          })*/
        }
        
      })
  }

  onRemove() {
    this.scan.scan().then(res=>{
        var scanned = false;
        var indexB1 = -1;
        var indexB2 = -1;
        var indexB1front = -1;
        var indexB2front = -1;
        this.B1.forEach((item,index)=>{
          if(item.includes(res.text)){
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
        
        this.B2.forEach((item,index)=>{
          if(item.includes(res.text)){
            scanned = true;
            indexB2 = index;
          }
        })
        this.B2String.forEach((item,index)=>{
          if(item.includes(res.text)){
            scanned = true;
            indexB2front = index;
          }
        })
        if(scanned){
          
          this.removedBottle.barcodes.push(res.text);
          if(indexB1 >= 0){
              var addresse = indexB1*10+41119;
              
              this.upc.client.setStringInHoldingRegister(addresse,"          ").then(res=>{
                  //this.B1.splice(indexB1,1);
                  this.B1Desig.splice(indexB1front,1);
                  this.B1IsMesser.splice(indexB1front,1);
                  this.B1String.splice(indexB1front,1);
                  this.addressage-=10;
                  this.cd.detectChanges();
              }).catch(err=>{
                alert(JSON.stringify(err));
              })
          }
          if(indexB2 >= 0){
              var adresse = indexB2*10+41169;
              this.upc.client.setStringInHoldingRegister(adresse,"          ").then(res=>{
                //this.B2.splice(indexB2,1);
                this.B2Desig.splice(indexB2front,1);
                this.B2IsMesser.splice(indexB2front,1);
                this.B2String.splice(indexB2front,1);
                this.addressage2-=10;
                this.cd.detectChanges();
              }).catch(err=>{
                alert(JSON.stringify(err));
              })
          }
        }else{
          alert("La bouteille n'est pas assigné à cette bouteille");
        }
    }).catch(err=>{
      alert("Veuillez activer l'autorisation photo de l'app")
    })
  }

  doRefresh($event) {
    this.ngOnInit();
    $event.target.complete();
  }
  onChangeDesigB2(i) {
    var adresse = i*10+41169;
    var index;
    this.addedBottleB2.kg[i] = this.B2Desig[i];
    this.contenuB2 = 0;
    for(var j =0;j<this.addedBottleB2.kg;j++){
        this.contenuB2 += parseFloat(this.addedBottleB2.kg[j]);
    }
    if(this.B2Desig[i] =="10"){
      index = "0";
      this.contenuB2+=10;
    }
    if(this.B2Desig[i] == "20"){
      index = "1";
      this.contenuB2+= 20;
    }
    if(this.B2Desig[i] == "22.6796"){
      index = "2";
      this.contenuB2 += 22.6796;
    }
    if (this.B2Desig[i] == "34"){
      this.contenuB2 += 34;
      index = "3";
    }
    this.upc.client.setStringInHoldingRegister(adresse,this.B2[i]+index).then(res=>{
      
    }).catch(err=>{
      alert("Erreur de réécriture, veuillez réessayer");
    })
  }
  onChangeDesigB1(i) {
    
    var adresse = i*10+41119;
    
    var index;
    this.addedBottleB1.kg[i] = this.B1Desig[i];
    this.contenuB1 = 0;
    for (var j =0;j<this.addedBottleB1.kg.length;j++){
      this.contenuB1 += parseFloat(this.addedBottleB1.kg[j]);
    }
    if (this.B1Desig[i] == "10"){
      index = "0";
    }
    if(this.B1Desig[i] == "20") {
      index = "1";
    }
    if(this.B1Desig[i] == "22.6796"){
      index = "2";
    }
    if(this.B1Desig[i]== "34"){
      index = "3";
    }
    this.upc.client.setStringInHoldingRegister(adresse,this.B1[i]+index).then(res=>{
      
    }).catch(err=>{
      alert("Erreur de réécriture, veuillez réessayer");
    })
  }
  onScanBarCodeB2() {
    this.scan.scan().then(res=>{
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
          if(/^\d+$/.test(res.text)) {
            
            this.contenuB2 +=37.5;
            this.upc.client.setFloatInHoldingRegister(40386,this.contenuB2).then(res=>{

            }).catch(err=>{
              this.contenuB2 -= 37.5;
              alert("Veuillez rescanner la bouteille, l'enregistrement ne s'est pas bien fait !")
            })
            var text = res.text;
            this.upc.client.setStringInHoldingRegister(this.addressage2,res.text).then((res)=>{
              this.B2String.push("Messer ("+text+") 37.5 kg");
              this.B2Desig.push("37.5");
              this.addedBottleB2.kg.push("37.5");
              this.B2IsMesser.push(true);
              this.addedBottleB2.barcodes.push(text);

              this.addedBottleB2.reserve = "B2";
              localStorage.setItem("bottleB2",JSON.stringify(this.addedBottleB2));

              this.addressage2+= 10;
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
          }
          else {
           
            this.contenuB2 += 34;
            var text = res.text;
            this.upc.client.setFloatInHoldingRegister(40386,this.contenuB2).then(res=>{

            }).catch(err=>{
              this.contenuB2 -= 34;
              alert("Veuillez rescanner la bouteille, l'enregistrement ne s'est pas bien fait !")
            })
            
            
            this.upc.client.setStringInHoldingRegister(this.addressage2,text+"3").then((res)=>{
              this.B2String.push("Air Liquide ("+text+")");
              this.B2Desig.push("34");
              this.addedBottleB2.kg.push("34");

              this.B2IsMesser.push(false);
              this.addedBottleB2.barcodes.push(text);

              this.addedBottleB2.reserve = "B2";
              localStorage.setItem("bottleB2",JSON.stringify(this.addedBottleB2));
              this.addressage2+= 10;
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
          }
          this.B2.push(res.text);
        }
      } else {
        alert("Vous avez déjà scanner la bouteille !");
      }
      
      
    })
  }
  onScanBarCodeB1() {
    this.scan.scan().then(res=>{
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
         
          if(/^\d+$/.test(res.text)) {
           
            this.contenuB1 += 37.5;
            this.upc.client.setFloatInHoldingRegister(40384,this.contenuB1).then(res=>{

            }).catch(err=>{
              this.contenuB1 -= 37.5;
              alert("Veuillez rescanner la bouteille !");
            })
            var text = res.text;
            this.upc.client.setStringInHoldingRegister(this.addressage,res.text).then((res)=>{
              this.B1String.push("Messer ("+text+") 37.5 kg");
              this.B1Desig.push("37.5");
              this.addedBottleB1.kg.push("37.5");

              this.B1IsMesser.push(true);
              this.addedBottleB1.barcodes.push(text);
              this.B1.push(text);

              this.addedBottleB1.reserve = "B1";
              localStorage.setItem("bottleB1",JSON.stringify(this.addedBottleB1));

              this.addressage+= 10;
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
          }
          else {
            
            this.contenuB1 += 34;
            this.upc.client.setFloatInHoldingRegister(40384,this.contenuB1).then(res=>{

            }).catch(err=>{
              alert("Veuillez rescanner la bouteille !");
            })
            var text = res.text;
            this.upc.client.setStringInHoldingRegister(this.addressage,res.text+"3").then((res)=>{
              this.B1String.push("Air Liquide ("+text+")");
              this.B1Desig.push("34");
              this.addedBottleB1.kg.push("34");
              this.B1IsMesser.push(false);
              this.addedBottleB1.barcodes.push(text);

              this.addedBottleB1.reserve = "B1";
              this.B1.push(text);

              localStorage.setItem("bottleB1",JSON.stringify(this.addedBottleB1));
              this.addressage+= 10;
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
          }
          
        }
      } else {
        alert("Vous avez déjà scanner la bouteille !");
      }
      
      
    })
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

}
