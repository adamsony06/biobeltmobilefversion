import { Component, OnInit, NgZone, ChangeDetectorRef,OnDestroy } from '@angular/core';
import { GlobalService } from '../api/global.service';
import { Platform, LoadingController } from '@ionic/angular';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { Network } from '@ionic-native/network/ngx';
import { UPCV3 } from '../model/upcv3/upcv3';

declare var WifiWizard2: any;

@Component({
  selector: 'app-cdiff',
  templateUrl: './cdiff.page.html',
  styleUrls: ['./cdiff.page.scss'],
})
export class CdiffPage implements OnInit {
  textdiff = "Start";
  colordif = "primary";
  upc : UPCModbus;
  fluxmax : number = 0;
  intensity : number = 0;
  resActive : number = 0;
  temp : number = 0;
  debiRef : number = 0;
  peRef : number = 0;
  psRef : number = 0;
  debiMes : number = 0;
  peMes : number = 0;
  psMes : number = 0;
  psComp : number = 0;
  psCompMes : number = 0;
  upc3s : UPCV3[];
  backgroundeb = false;
  backgrounddangerdeb = false;
  
  //diffusion à l'arrêt start reload front detectchange 

  constructor(private global :GlobalService,
              private platform : Platform,
              private loadingCTRL : LoadingController,
              private ngZone : NgZone,
              private hotspot : Hotspot,
              private network : Network,
              private cd : ChangeDetectorRef) { }

  ngOnInit() {
    this.upc3s = JSON.parse(localStorage.getItem("upc3"));
    this.platform.ready().then(async ()=>{
      /*if (this.platform.is('ios')){
        if (localStorage.getItem("BBAM") != "true"){
          WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async(res)=>{
            var loading = await this.loadingCTRL.create({
              message : "Connection à l'UPC en cours...",
              duration : 10000
            })
            loading.present();
            this.global.isBBAM = true;
            localStorage.setItem("BBAM",""+true);
            this.upc = new UPCModbus(async state => {
              this.ngZone.run(() => {
                // Force refresh UI
                
                  
                  //this.readDiffusionParameters();
                
              });
              
            });
            await this.upc.client.connect();
              setTimeout(async ()=>{
                //this.ngZone.run(async()=>{
                  await this.upc.client.readHoldingRegisters(40018,100).then(async res=>{
                    //40018
                    var fluxmax = [res[0],res[1]];
                    this.fluxmax = this.upc.client.registerToFloat(fluxmax);
                    
                    //40065
                    //this.intensity = this.upc.client.registerToUint32(res[47]);
                    
                    //40045
                    var ssid = [];
                    for(var i = 27;i<37;i++){
                        ssid.push(res[i]);
                    }
                    this.global.ssid = this.upc.client.registerToString(ssid).replace(/[^a-zA-Z0-9]/g,'');
                    await this.upc.client.getIntFromHoldingRegister(40150,1).then(async res=>{
                      this.resActive = res;
                      await this.upc.client.getIntFromHoldingRegister(40065,1).then(async res=>{
                        this.intensity = res;
                        this.debiRef = (this.fluxmax*this.intensity)/10;
                        this.global.interval = setInterval(async ()=>{
                          await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
    
                            //40416
                            //this.intensity = this.upc.client.registerToUint32(res[0]); 
                           //40435
                           var iFlux = [res[19],res[20]]
                           this.peMes = this.upc.client.registerToFloat(iFlux);
      
                           //40437
                           var out = [res[21],res[22]]
                           this.psMes = this.upc.client.registerToFloat(out); 
      
                           //40439
                           var f = [res[23],res[24]];
                           this.debiMes = this.upc.client.registerToFloat(f);
                           if(Math.abs(((this.debiMes-this.debiRef)/this.debiRef)*100) <5){
                            this.backgroundeb = true;
                            this.backgrounddangerdeb = false;
                          } else if(Math.abs(((this.debiMes-this.debiRef)/this.debiRef)*100)<10) {
                            
                            this.backgrounddangerdeb = true;
                          } else {
                            this.backgroundeb = false;
                            this.backgrounddangerdeb = false;
                          }
      
                           //40451
                           var tmp = [res[35],res[36]];
                           this.temp = this.upc.client.registerToFloat(tmp);
      
                           //40463
                           var outcomp = [res[47],res[48]];
                           this.psCompMes = this.upc.client.registerToFloat(outcomp);
                           this.global.ssid = "BBAM";
      
                           this.cd.detectChanges();
                           loading.dismiss();
                          });
                        },2000)
                        
                      })
                    })
                    
                    
                    //40150
                    /*this.resActive = this.upc.client.registerToUint32(res[132]);
                    alert(this.resActive);*/
                    
                  //})
                  /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                    this.temp = res;
                  })
                  await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                    this.fluxmax = res;
                    this.cd.detectChanges();
                  })
                  this.upc.client.getIntFromHoldingRegister(40065,1).then(res=>{
                    this.intensity = res;
                    this.cd.detectChanges();
                  })
                  this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                    this.global.ssid = res;
                  })
                  await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                          
                    this.resActive = res;
                    
                    this.cd.detectChanges();
                  })*/
                //}) si connecté lecture uniquement 
                //Mesure instantané mesure intensité 1 10 Activer diffusion fin B1 B2 voyant aucune diffusion 
                //Mini Maxi Reactualiser les données 
              /*},5000)
          })
        } else {
          this.upc = new UPCModbus(async state => {
            this.ngZone.run(() => {
              // Force refresh UI
              
                
                //this.readDiffusionParameters();
              
            });
            
          });
          //await this.upc.client.connect();
            setTimeout(async ()=>{
              //this.ngZone.run(async()=>{
                await this.upc.client.readHoldingRegisters(40018,100).then(async res=>{
                  //40018
                  var fluxmax = [res[0],res[1]];
                  this.fluxmax = this.upc.client.registerToFloat(fluxmax);
                  
                  //40065
                  //this.intensity = this.upc.client.registerToUint32(res[47]);
                  
                  //40045
                  var ssid = [];
                  for(var i = 27;i<37;i++){
                      ssid.push(res[i]);
                  }
                  this.global.ssid = this.upc.client.registerToString(ssid).replace(/[^a-zA-Z0-9]/g,'');
                  await this.upc.client.getIntFromHoldingRegister(40150,1).then(async res=>{
                    this.resActive = res;
                    await this.upc.client.getIntFromHoldingRegister(40065,1).then(async res=>{
                      this.intensity = res;
                      this.debiRef = (this.fluxmax*this.intensity)/10;
                      this.global.interval = setInterval(async ()=>{
                        await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
  
                          //40416
                          //this.intensity = this.upc.client.registerToUint32(res[0]); 
                         //40435
                         var iFlux = [res[19],res[20]]
                         this.peMes = this.upc.client.registerToFloat(iFlux);
    
                         //40437
                         var out = [res[21],res[22]]
                         this.psMes = this.upc.client.registerToFloat(out); 
    
                         //40439
                         var f = [res[23],res[24]];
                         this.debiMes = this.upc.client.registerToFloat(f);
                         if(Math.abs(((this.debiMes-this.debiRef)/this.debiRef)*100) <5){
                          this.backgroundeb = true;
                          this.backgrounddangerdeb = false;
                        } else if(Math.abs(((this.debiMes-this.debiRef)/this.debiRef)*100)<10) {
                          
                          this.backgrounddangerdeb = true;
                        } else {
                          this.backgroundeb = false;
                          this.backgrounddangerdeb = false;
                        }
    
                         //40451
                         var tmp = [res[35],res[36]];
                         this.temp = this.upc.client.registerToFloat(tmp);
    
                         //40463
                         var outcomp = [res[47],res[48]];
                         this.psCompMes = this.upc.client.registerToFloat(outcomp);
                         this.global.ssid = "BBAM";
                         this.global.isBBAM = true;
    
                         this.cd.detectChanges();
                         //loading.dismiss();
                        });
                      },2000)
                      
                    })
                  })
                  
                  
                  //40150
                  /*this.resActive = this.upc.client.registerToUint32(res[132]);
                  alert(this.resActive);*/
                  
                //})
                /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                  this.temp = res;
                })
                await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                  this.fluxmax = res;
                  this.cd.detectChanges();
                })
                this.upc.client.getIntFromHoldingRegister(40065,1).then(res=>{
                  this.intensity = res;
                  this.cd.detectChanges();
                })
                this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                  this.global.ssid = res;
                })
                await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                        
                  this.resActive = res;
                  
                  this.cd.detectChanges();
                })*/
              //}) si connecté lecture uniquement 
              //Mesure instantané mesure intensité 1 10 Activer diffusion fin B1 B2 voyant aucune diffusion 
              //Mini Maxi Reactualiser les données 
            /*},2000)
        }
        
      }*/ //else if(this.platform.is('android')) {
        //this.hotspot.connectToWifi("BBAM","BioBeltService").then(async res=>{
            /*var loading = await this.loadingCTRL.create({
              message : "Connection à l'UPC en cours...",
              duration : 10000
            })
            loading.present();*/
            this.global.isBBAM = true;
            this.upc = new UPCModbus(async state => {
              this.ngZone.run(() => {
                // Force refresh UI
                
                  
                  //this.readDiffusionParameters();
                
              });
              
            });
            //await this.upc.client.connect();
            setTimeout(async ()=>{
              //this.ngZone.run(async()=>{
                await this.upc.client.readHoldingRegisters(40018,100).then(async res=>{
                  //40018
                  var fluxmax = [res[0],res[1]];
                  this.fluxmax = this.upc.client.registerToFloat(fluxmax);
                  
                  //40065
                  //this.intensity = this.upc.client.registerToUint32(res[47]);
                  
                  //40045
                  var ssid = [];
                  for(var i = 27;i<37;i++){
                      ssid.push(res[i]);
                  }
                  this.global.ssid = this.upc.client.registerToString(ssid).replace(/[^a-zA-Z0-9]/g,'');
                  await this.upc.client.getIntFromHoldingRegister(40150,1).then(async res=>{
                    this.resActive = res;
                    await this.upc.client.getIntFromHoldingRegister(40065,1).then(async res=>{
                      this.intensity = res;
                      this.debiRef = (this.fluxmax*this.intensity)/10;
                      this.global.interval = setInterval(async ()=>{
                        await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
  
                          //40416
                          //this.intensity = this.upc.client.registerToUint32(res[0]); 
                         //40435
                         var iFlux = [res[19],res[20]]
                         this.peMes = this.upc.client.registerToFloat(iFlux);
    
                         //40437
                         var out = [res[21],res[22]]
                         this.psMes = this.upc.client.registerToFloat(out); 
    
                         //40439
                         var f = [res[23],res[24]];
                         this.debiMes = this.upc.client.registerToFloat(f);
                         if(Math.abs(((this.debiMes-this.debiRef)/this.debiRef)*100) <5){
                          this.backgroundeb = true;
                          this.backgrounddangerdeb = false;
                        } else if(Math.abs(((this.debiMes-this.debiRef)/this.debiRef)*100)<10) {
                          
                          this.backgrounddangerdeb = true;
                        } else {
                          this.backgroundeb = false;
                          this.backgrounddangerdeb = false;
                        }
    
                         //40451
                         var tmp = [res[35],res[36]];
                         this.temp = this.upc.client.registerToFloat(tmp);
    
                         //40463
                         var outcomp = [res[47],res[48]];
                         this.psCompMes = this.upc.client.registerToFloat(outcomp);
                         this.global.ssid = "BBAM";
    
                         this.cd.detectChanges();
                         //loading.dismiss();
                        }).catch(err=>{
                          alert("Veuillez vous connectez à BBAM");
                          this.global.ssid = "ADMIN";
                          this.global.isBBAM = false;
                          clearInterval(this.global.interval);
                        });
                      },2000)
                      
                    })
                  })
                  
                  
                  //40150
                  /*this.resActive = this.upc.client.registerToUint32(res[132]);
                  alert(this.resActive);*/
                  
                })
                /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                  this.temp = res;
                })
                await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                  this.fluxmax = res;
                  this.cd.detectChanges();
                })
                this.upc.client.getIntFromHoldingRegister(40065,1).then(res=>{
                  this.intensity = res;
                  this.cd.detectChanges();
                })
                this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                  this.global.ssid = res;
                })
                await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                        
                  this.resActive = res;
                  
                  this.cd.detectChanges();
                })*/
              //}) si connecté lecture uniquement 
              //Mesure instantané mesure intensité 1 10 Activer diffusion fin B1 B2 voyant aucune diffusion 
              //Mini Maxi Reactualiser les données 
            },1000)
        //})
      //}
    })
  }
  /*ionViewWillLeave() {

    
    clearInterval(this.interval);
  }

  ngOnDestroy(): void {

    
    clearInterval(this.interval);
  }*/
  startstop() {
    if(this.colordif == "primary"){
      this.onChangeDiff();
    } else {
      this.onDisableDiff();
    }
  }
  onChangeDiff() {
    this.upc.client.setIntInHoldingRegister(40011,1,2).then(res=>{
      
      this.textdiff = "Stop";
      this.colordif = "danger";
      
      this.cd.detectChanges();
    })
  }
  onDisableDiff() {
    this.upc.client.setIntInHoldingRegister(40011,1,0).then(res=>{
      this.textdiff = "Start";
      this.colordif = "primary";
      
      this.cd.detectChanges();
    })
  }
  changeInt() {
      this.upc.client.setIntInHoldingRegister(40065,1,this.intensity).then(res=>{
        this.debiRef = (this.fluxmax*this.intensity)/10;
      })
  }
  changeFluxMax() {
    this.upc.client.setFloatInHoldingRegister(40018,this.fluxmax).then(res=>{
      this.debiRef = (this.fluxmax*this.intensity)/10;
    })
  }
  changeResAct() {
    this.resActive = this.resActive == 1 ? 2 : 1;
    this.upc.client.setIntInHoldingRegister(40150,1,this.resActive).then(res=>{

    })
  }
}
