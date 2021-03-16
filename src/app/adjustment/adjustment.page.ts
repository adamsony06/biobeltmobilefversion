import { Component, OnInit, NgZone, ChangeDetectorRef,OnDestroy  } from '@angular/core';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Network } from '@ionic-native/network/ngx';
import { Platform, LoadingController } from '@ionic/angular';
import { GlobalService } from '../api/global.service';
import { UPCV3 } from '../model/upcv3/upcv3';

declare var WifiWizard2: any;

@Component({
  selector: 'app-adjustment',
  templateUrl: './adjustment.page.html',
  styleUrls: ['./adjustment.page.scss'],
})
export class AdjustmentPage implements OnInit {
  upc : UPCModbus;
  upc3s : UPCV3[];
  input : number = 0;
  inputref : number = 0; // 2+0.8*(nbpieges-10)/90
  outputcomp : number = 0;
  output : number = 0;
  outputref : number = 0;
  resActive : number = 0;
  intensity : number = 0;
  fluxmax : number= 0;
  intensityFlux : number= 0;
  flux : number = 0;
  temp : number= 0;
  fluxref : number= 0;
  modediff : number = 0;
  backgroundPE = false;
  backgroundPS = false;
  backgroundDeb = false;
  bgdebwarning = false;
  bgpswarning = false;
  successB1 = "";
  successB2 = "";
  colordif = "primary";
  textdiff = "Start/Stop";
  colorAct = "light";
  colorDes = "light";
 
  colorB1 = "light";
  colorB2 = "light";
  colorMin = "light";
  colorMax = "light";
  colorAuto = "light";
  PEB1Int1 = 0;
  PEB2Int1 = 0;
  PSB1Int1 = 0;
  PSB2Int1 = 0;
  DebB1Int1 = 0;
  DebB1Int10 = 0;
  DebB2Int1 = 0;
  DebB2Int10 = 0;
  PEB1Int10 = 0;
  PEB2Int10 = 0;
  PSB1Int10 = 0;
  PSB2Int10 = 0; 
  PE = "PE";
  

  constructor(private platform : Platform, private loadingCTRL : LoadingController,private ngZone : NgZone,private network : Network,private hotspot : Hotspot,private cd: ChangeDetectorRef,private global : GlobalService) { }

  async ngOnInit() {
    this.upc3s = JSON.parse(localStorage.getItem("upc3"));
    this.upc3s.forEach(item=>{
      
        //if(item.upcNameId == "Test4G1"){
          this.outputref = item.generalParameters.co2PresOutRef5/1000;
          this.inputref = 2+0.8*(item.generalParameters.upcTrapNum-10)/90;
          //this.fluxref = 5*(0.17*item.generalParameters.upcTrapNum)/10;
       // }
      
    })
    /*if(this.platform.is("ios")){
      this.platform.ready().then(async res=>{
        if(localStorage.getItem("BBAM") != "true"){
          WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async ()=>{
            var loading = await this.loadingCTRL.create({
              message : "Connection à l'UPC en cours...",
              duration : 10000
            })
            loading.present();
            this.global.isBBAM = true;
            localStorage.setItem("BBAM",""+true);
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
                      setTimeout(async ()=>{
                        //this.ngZone.run(async ()=>{
                          await this.upc.client.getFloatFromHoldingRegister(40018).then(async(res)=>{
                            this.fluxref = res*5/10; 
                            await this.upc.client.setIntInHoldingRegister(40065,1,5).then(async()=>{
                              this.intensityFlux = 5;
                              
                              await this.upc.client.setIntInHoldingRegister(40011,1,0).then(async()=>{
                                this.colordif = "primary"
                                this.textdiff = "Start";
                                this.colorAct = "light";
                                this.colorDes = "primary";
                                this.modediff = 0;
                                await this.upc.client.setIntInHoldingRegister(40150,1,0).then(async ()=>{
                                  this.resActive = 0;
                                  this.colorB1 = "light";
                                  this.colorB2 = "light";
                                  this.global.isBBAM = true;
                                  this.global.ssid = "BBAM";
                                  this.global.interval = setInterval(async ()=>{
                                    await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                                  
                                    
                                      //40435
                                      var iFlux = [res[19],res[20]]
                                      this.input = this.upc.client.registerToFloat(iFlux);
                                      if(Math.abs(((this.input-this.inputref)/this.inputref))*100 <10){
                                        this.backgroundPE = true;
                                      } else {
                                        this.backgroundPE = false;
                                      }
            
                                      //40437
                                      var out = [res[21],res[22]]
                                      this.output = this.upc.client.registerToFloat(out); 
            
                                      //40439
                                      var f = [res[23],res[24]];
                                      this.flux = this.upc.client.registerToFloat(f);
                                      if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100) <5){
                                        this.backgroundDeb = true;
                                        this.bgdebwarning = false;
                                      } else if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100)<10) {
                                        
                                        this.bgdebwarning = true;
                                      } else {
                                        this.backgroundDeb = false;
                                        this.bgdebwarning = false;
                                      }
            
                                      //40451
                                      var tmp = [res[35],res[36]];
                                      this.temp = this.upc.client.registerToFloat(tmp);
            
                                      //40463
                                      var outcomp = [res[47],res[48]];
                                      this.outputcomp = this.upc.client.registerToFloat(outcomp);
                                      if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <5){
                                        this.backgroundPS = true;
                                        this.bgpswarning = false;
                                      } else if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <10){
                                        this.bgpswarning = true;
                                      } else {
                                        this.backgroundPS = false;
                                        this.bgpswarning = false;
                                      }
            
                                      this.cd.detectChanges();
                                      loading.dismiss();
            
                                    })
                                  },500)
                                  
                                })
                              })
                            })
                          })
                          
                          
                          
                          
                          /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                            this.input = res;
                            this.cd.detectChanges();
                        }).catch(err=>{
                          
                        })
                        await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                          //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
                          var upc = "Test4G1";
                          this.upc3s.forEach(item=>{
                            if(item.upcNameId == upc){
                              this.outputref = item.generalParameters.co2PresOutRef5/1000;
                              
                            }
                          })
                        })
                        await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                          this.inputref = 2+0.8*(res-10)/90;
                          this.fluxref = 0.17*res;
                          this.cd.detectChanges();
                        })
                        //40271 40273 40275 40277 40279
                        
                        await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                            this.outputcomp = res;
                            this.cd.detectChanges();
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                          this.output = res;
                          this.cd.detectChanges();
                        })
                        await this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                          this.global.ssid = res;
                        })
                        await this.upc.client.getIntFromHoldingRegister(40011,1).then(res=>{
                          
                          if(res == 2 || res == 4369) {
                            
  
                            this.textdiff = "Stop";
                            this.colordif = "danger";
                            this.colorAct = "danger";
                            this.colorDes = "light";
                          }
                          else {
                            this.colordif = "primary"
                            this.textdiff = "Start";
                            this.colorAct = "light";
                            this.colorDes = "primary";
                          } 
                          this.modediff = res;
                          this.cd.detectChanges();
                        })
                        await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                          
                          this.resActive = res;
                          if (res == 1){
                            this.colorB1 = "primary";
                            this.PE = "B1";
                          } if(res == 2) {
                            this.colorB2 = "primary";
                            this.PE = "B2"
                          }
                          this.cd.detectChanges();
                        })
                        
                        await this.upc.client.setIntInHoldingRegister(40065,1,5).then(res=>{
                          this.intensity = 5;
                        })
                        /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                          this.fluxmax = res;
                          
                          this.cd.detectChanges();
                        })*/
                        /*await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                          this.intensityFlux = res;
                          
                          this.cd.detectChanges();
                        })//
                        await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                          this.flux = res;
                          this.cd.detectChanges();
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                          this.temp = res;
                          this.cd.detectChanges();
                        })
                        await this.upc.client.setFloatInHoldingRegister(40018,(this.fluxref*10)/this.intensity).then(res=>{
                          this.fluxmax = (this.fluxref*10)/this.intensity;
                        })
                        this.cd.detectChanges();
                        loading.dismiss();
                        this.interval = setInterval(async ()=>{
                          
                          await this.upc.client.connect();
                          await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                            this.input = res;
                            if(Math.abs(((this.input-this.inputref)/this.inputref))*100 <10){
                              this.backgroundPE = true;
                            } else {
                              this.backgroundPE = false;
                            }
                            this.cd.detectChanges();
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                            this.outputcomp = res;
                            if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <5){
                              this.backgroundPS = true;
                              this.bgpswarning = false;
                            } else if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <10){
                              this.bgpswarning = true;
                            } else {
                              this.backgroundPS = false;
                              this.bgpswarning = false;
                            }
                            this.cd.detectChanges();
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                          this.output = res;
                          this.cd.detectChanges();
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                          this.flux = res;
                          if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100) <5){
                            this.backgroundDeb = true;
                            this.bgdebwarning = false;
                          } else if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100)<10) {
                            
                            this.bgdebwarning = true;
                          } else {
                            this.backgroundDeb = false;
                            this.bgdebwarning = false;
                          }
                          this.cd.detectChanges();
                        })
                        await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                          this.intensityFlux = res;
                          this.cd.detectChanges();
                        })//
                        /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                          this.fluxmax = res;
                          this.cd.detectChanges();
                        })*/
                        //this.fluxref = this.intensityFlux * this.fluxmax /10;
                        //},500)
                        //})
                          
                     // },5000)
                  /*this.network.onConnect().subscribe(async res=>{
                    //if (this.network.type === this.network.Connection.WIFI) {
                      
                      
                    //}
                  })*/
    
                /*}
              }
            )
          })
        } else {
          this.upc = new UPCModbus(state => {
            this.ngZone.run(() => {
              // Force refresh UI
              
                
                //this.readDiffusionParameters();
              
            });
          });
          
          //await this.upc.client.connect();
              setTimeout(async ()=>{
                //this.ngZone.run(async ()=>{
                  await this.upc.client.getFloatFromHoldingRegister(40018).then(async(res)=>{
                    this.fluxref = res*5/10; 
                    await this.upc.client.setIntInHoldingRegister(40065,1,5).then(async()=>{
                      this.intensityFlux = 5;
                      
                      await this.upc.client.setIntInHoldingRegister(40011,1,0).then(async()=>{
                        this.colordif = "primary"
                        this.textdiff = "Start";
                        this.colorAct = "light";
                        this.colorDes = "primary";
                        this.modediff = 0;
                        this.global.ssid = "BBAM";
                        this.global.isBBAM = true; 
                        await this.upc.client.setIntInHoldingRegister(40150,1,0).then(async ()=>{
                          this.resActive = 0;
                          this.colorB1 = "light";
                          this.colorB2 = "light";
                          this.global.interval = setInterval(async ()=>{
                            await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                          
                            
                              
    
                      
    
                              //40451
                              var tmp = [res[35],res[36]];
                              this.temp = this.upc.client.registerToFloat(tmp);
    
                              //40463
                              var outcomp = [res[47],res[48]];
                              this.outputcomp = this.upc.client.registerToFloat(outcomp);
                              if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <5){
                                this.backgroundPS = true;
                                this.bgpswarning = false;
                              } else if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <10){
                                this.bgpswarning = true;
                              } else {
                                this.backgroundPS = false;
                                this.bgpswarning = false;
                              }
    
                              
                              
                              //40435
                              var iFlux = [res[19],res[20]]
                              this.input = this.upc.client.registerToFloat(iFlux);
                              if(Math.abs(((this.input-this.inputref)/this.inputref))*100 <10){
                                this.backgroundPE = true;
                              } else {
                                this.backgroundPE = false;
                              }
    
                              //40437
                              var out = [res[21],res[22]]
                              this.output = this.upc.client.registerToFloat(out); 
    
                              //40439
                              var f = [res[23],res[24]];
                              this.flux = this.upc.client.registerToFloat(f);
                              if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100) <5){
                                this.backgroundDeb = true;
                                this.bgdebwarning = false;
                              } else if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100)<10) {
                                
                                this.bgdebwarning = true;
                              } else {
                                this.backgroundDeb = false;
                                this.bgdebwarning = false;
                              }

                              this.cd.detectChanges();
                              //loading.dismiss();
    
                            })
                          },500)
                          
                        })
                      })
                    })
                  })
                  
                  
                  
                  
                  /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                    this.input = res;
                    this.cd.detectChanges();
                }).catch(err=>{
                  
                })
                await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                  //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
                  var upc = "Test4G1";
                  this.upc3s.forEach(item=>{
                    if(item.upcNameId == upc){
                      this.outputref = item.generalParameters.co2PresOutRef5/1000;
                      
                    }
                  })
                })
                await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                  this.inputref = 2+0.8*(res-10)/90;
                  this.fluxref = 0.17*res;
                  this.cd.detectChanges();
                })
                //40271 40273 40275 40277 40279
                
                await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                    this.outputcomp = res;
                    this.cd.detectChanges();
                })
                await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                  this.output = res;
                  this.cd.detectChanges();
                })
                await this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                  this.global.ssid = res;
                })
                await this.upc.client.getIntFromHoldingRegister(40011,1).then(res=>{
                  
                  if(res == 2 || res == 4369) {
                    

                    this.textdiff = "Stop";
                    this.colordif = "danger";
                    this.colorAct = "danger";
                    this.colorDes = "light";
                  }
                  else {
                    this.colordif = "primary"
                    this.textdiff = "Start";
                    this.colorAct = "light";
                    this.colorDes = "primary";
                  } 
                  this.modediff = res;
                  this.cd.detectChanges();
                })
                await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                  
                  this.resActive = res;
                  if (res == 1){
                    this.colorB1 = "primary";
                    this.PE = "B1";
                  } if(res == 2) {
                    this.colorB2 = "primary";
                    this.PE = "B2"
                  }
                  this.cd.detectChanges();
                })
                
                await this.upc.client.setIntInHoldingRegister(40065,1,5).then(res=>{
                  this.intensity = 5;
                })
                /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                  this.fluxmax = res;
                  
                  this.cd.detectChanges();
                })*/
                /*await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                  this.intensityFlux = res;
                  
                  this.cd.detectChanges();
                })//
                await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                  this.flux = res;
                  this.cd.detectChanges();
                })
                await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                  this.temp = res;
                  this.cd.detectChanges();
                })
                await this.upc.client.setFloatInHoldingRegister(40018,(this.fluxref*10)/this.intensity).then(res=>{
                  this.fluxmax = (this.fluxref*10)/this.intensity;
                })
                this.cd.detectChanges();
                loading.dismiss();
                this.interval = setInterval(async ()=>{
                  
                  await this.upc.client.connect();
                  await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                    this.input = res;
                    if(Math.abs(((this.input-this.inputref)/this.inputref))*100 <10){
                      this.backgroundPE = true;
                    } else {
                      this.backgroundPE = false;
                    }
                    this.cd.detectChanges();
                })
                await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                    this.outputcomp = res;
                    if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <5){
                      this.backgroundPS = true;
                      this.bgpswarning = false;
                    } else if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <10){
                      this.bgpswarning = true;
                    } else {
                      this.backgroundPS = false;
                      this.bgpswarning = false;
                    }
                    this.cd.detectChanges();
                })
                await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                  this.output = res;
                  this.cd.detectChanges();
                })
                await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                  this.flux = res;
                  if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100) <5){
                    this.backgroundDeb = true;
                    this.bgdebwarning = false;
                  } else if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100)<10) {
                    
                    this.bgdebwarning = true;
                  } else {
                    this.backgroundDeb = false;
                    this.bgdebwarning = false;
                  }
                  this.cd.detectChanges();
                })
                await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                  this.intensityFlux = res;
                  this.cd.detectChanges();
                })//
                /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                  this.fluxmax = res;
                  this.cd.detectChanges();
                })*/
                //this.fluxref = this.intensityFlux * this.fluxmax /10;
                //},500)
                //})
                  
              /*},1000)
        }
        
      })
      
    }*/
    //else if(this.platform.is("android")) {
      if(localStorage.getItem("BBAM") != "true") {
        //this.hotspot.connectToWifi("BBAM","BioBeltService").then(async res=>{
          /*var loading = await this.loadingCTRL.create({
            message : "Connection à l'UPC en cours...",
            duration : 10000
          })
          loading.present();*/
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
  
                    setTimeout(async ()=>{
                      await this.upc.client.getFloatFromHoldingRegister(40018).then(async(res)=>{
                        this.fluxref = res*5/10; 
                        await this.upc.client.setIntInHoldingRegister(40065,1,5).then(async()=>{
                          this.intensityFlux = 5;
                          
                          await this.upc.client.setIntInHoldingRegister(40011,1,0).then(async()=>{
                            this.colordif = "primary"
                            this.textdiff = "Start";
                            this.colorAct = "light";
                            this.colorDes = "primary";
                            this.modediff = 0;
                            await this.upc.client.setIntInHoldingRegister(40150,1,0).then(async ()=>{
                              this.resActive = 0;
                              this.colorB1 = "light";
                              this.colorB2 = "light";
                              this.global.interval = setInterval(async ()=>{
                                await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                              
                                
                                  //40435
                                  var iFlux = [res[19],res[20]]
                                  this.input = this.upc.client.registerToFloat(iFlux);
                                  if(Math.abs(((this.input-this.inputref)/this.inputref))*100 <10){
                                    this.backgroundPE = true;
                                  } else {
                                    this.backgroundPE = false;
                                  }
        
                                  //40437
                                  var out = [res[21],res[22]]
                                  this.output = this.upc.client.registerToFloat(out); 
        
                                  //40439
                                  var f = [res[23],res[24]];
                                  this.flux = this.upc.client.registerToFloat(f);
                                  if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100) <5){
                                    this.backgroundDeb = true;
                                    this.bgdebwarning = false;
                                  } else if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100)<10) {
                                    
                                    this.bgdebwarning = true;
                                  } else {
                                    this.backgroundDeb = false;
                                    this.bgdebwarning = false;
                                  }
        
                                  //40451
                                  var tmp = [res[35],res[36]];
                                  this.temp = this.upc.client.registerToFloat(tmp);
        
                                  //40463
                                  var outcomp = [res[47],res[48]];
                                  this.outputcomp = this.upc.client.registerToFloat(outcomp);
                                  if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <5){
                                    this.backgroundPS = true;
                                    this.bgpswarning = false;
                                  } else if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <10){
                                    this.bgpswarning = true;
                                  } else {
                                    this.backgroundPS = false;
                                    this.bgpswarning = false;
                                  }
        
                                  this.cd.detectChanges();
                                  //loading.dismiss();
        
                                }).catch(err=>{
                                  alert("Veuiller vous connectez à BBAM");
                                  this.global.ssid = "ADMIN";
                                  this.global.isBBAM = false;
                                  clearInterval(this.global.interval);
                                })
                              },500)
                              
                            })
                          })
                        })
                      })
                      /*await this.upc.client.setIntInHoldingRegister(40416,1,5).then(async()=>{
                        this.intensityFlux = 5;
                        await this.upc.client.setIntInHoldingRegister(40011,1,61166).then(async()=>{
                          this.colordif = "primary"
                          this.textdiff = "Start";
                          this.colorAct = "light";
                          this.colorDes = "primary";
                          this.modediff = 0;
                          await this.upc.client.setIntInHoldingRegister(40150,1,0).then(async ()=>{
                            this.resActive = 0;
                            this.colorB1 = "light";
                            this.colorB2 = "light";
                            this.interval = setInterval(async ()=>{
                              await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                            
                              
                                //40435
                                var iFlux = [res[19],res[20]]
                                this.input = this.upc.client.registerToFloat(iFlux);
      
                                //40437
                                var out = [res[21],res[22]]
                                this.output = this.upc.client.registerToFloat(out); 
      
                                //40439
                                var f = [res[23],res[24]];
                                this.flux = this.upc.client.registerToFloat(f);
      
                                //40451
                                var tmp = [res[35],res[36]];
                                this.temp = this.upc.client.registerToFloat(tmp);
      
                                //40463
                                var outcomp = [res[47],res[48]];
                                this.outputcomp = this.upc.client.registerToFloat(outcomp);
      
                                this.cd.detectChanges();
                                loading.dismiss();
      
                              })
                            },500)
                            
                          })
                        })
                      })*/
                        /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                            this.input = res;
                        })
                        await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                          //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
                          var upc = "Test4G1";
                          this.upc3s.forEach(item=>{
                            if(item.upcNameId == upc){
                              this.outputref = item.generalParameters.co2PresOutRef5/1000;
                              
                            }
                          })
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                            this.outputcomp = res;
                        })
                        await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                          this.inputref = 2+0.8*(res-10)/90;
                          
                          this.fluxref = 0.17*res;
                        })
                        
                        
                        await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                          this.output = res;
                        })
                        await this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                          this.global.ssid = res;
                        })
                        await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                          this.resActive = res;
                          if (res == 1){
                            this.colorB1 = "primary";
                            this.colorB2 = "light";
                            this.PE = "B1";
                          } if(res == 2) {
                            this.colorB2 = "primary";
                            this.colorB1 = "light";
                            this.PE = "B2";
                          }
                        })//0xc8ad64bbeb56470496bf2336e92c9caa
                        await this.upc.client.setIntInHoldingRegister(40065,1,5).then(res=>{
                          this.intensity = 5;
                        })
                        await this.upc.client.setFloatInHoldingRegister(40018,(this.fluxref*10)/this.intensity).then(res=>{
                          this.fluxmax = (this.fluxref*10)/this.intensity;
                        })
                        await this.upc.client.getIntFromHoldingRegister(40011,1).then(res=>{
                          //alert(res);
                          if(res == 2 || res == 4369) {
                            
  
                            this.textdiff = "Stop";
                            this.colordif = "danger";
                            this.colorAct = "danger";
                            this.colorDes = "light";
                          }
                          else {
                            this.colordif = "primary"
                            this.textdiff = "Start";
                            this.colorAct = "light";
                            this.colorDes = "primary";
                          } 
                          this.modediff = res;
                          this.cd.detectChanges();
                        })
                        await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                          this.intensityFlux = res;
                        })//
                        await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                          this.flux = res;
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                          this.temp = res;
                        })
                        
                        loading.dismiss();
                        this.interval = setInterval(async ()=>{
                          await this.upc.client.connect();
                          await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                            this.input = res;
                            if(Math.abs(((this.input-this.inputref)/this.inputref))*100 <10){
                              this.backgroundPE = true;
                            } else {
                              this.backgroundPE = false;
                            }
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                            this.outputcomp = res;
                            if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <5){
                              this.backgroundPS = true;
                              this.bgpswarning = false;
                            } else if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <10){
                              this.bgpswarning = true;
                            } else {
                              this.backgroundPS = false;
                              this.bgpswarning = false;
                            }
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                          this.output = res;
                          
                        })
                        await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                          this.flux = res;
                          if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100) <5){
                            this.backgroundDeb = true;
                            this.bgdebwarning = false;
                          } else if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100)<10) {
                            
                            this.bgdebwarning = true;
                          } else {
                            this.backgroundDeb = false;
                            this.bgdebwarning = false;
                          }
                          this.cd.detectChanges();
                        })
                        await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                          this.intensityFlux = res;
                          this.cd.detectChanges();
                        })//
                        */
                        /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                          this.fluxmax = res;
                          this.cd.detectChanges();
                        })*/
                        //this.fluxref = this.intensityFlux * this.fluxmax /10;
                        /*if(this.backgroundDeb && this.backgroundPE && this.backgroundPS){
                          if(this.resActive == 1) {
                              this.successB1 = "checkmark-outline";
                          } else if(this.resActive == 2){
                              this.successB2 = "checkmark-outline";
                          } 
                        }
                        },500)*/
                    },1000)
  
                  
  
              }
            }
          )
        //})
      } else {
        this.upc = new UPCModbus(state => {
          this.ngZone.run(() => {
            // Force refresh UI
            
              
              //this.readDiffusionParameters();
            
          });
        });
        
            await this.upc.client.connect();

            setTimeout(async ()=>{
              await this.upc.client.getFloatFromHoldingRegister(40018).then(async(res)=>{
                this.fluxref = res*5/10; 
                await this.upc.client.setIntInHoldingRegister(40065,1,5).then(async()=>{
                  this.intensityFlux = 5;
                 
                  await this.upc.client.setIntInHoldingRegister(40011,1,0).then(async()=>{
                    this.colordif = "primary"
                    this.textdiff = "Start";
                    this.colorAct = "light";
                    this.colorDes = "primary";
                    this.modediff = 0;
                    await this.upc.client.setIntInHoldingRegister(40150,1,0).then(async ()=>{
                      this.resActive = 0;
                      this.colorB1 = "light";
                      this.colorB2 = "light";
                      this.global.interval = setInterval(async ()=>{
                        await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                      
                        
                          //40435
                          var iFlux = [res[19],res[20]]
                          this.input = this.upc.client.registerToFloat(iFlux);

                          //40437
                          var out = [res[21],res[22]]
                          this.output = this.upc.client.registerToFloat(out); 

                          //40439
                          var f = [res[23],res[24]];
                          this.flux = this.upc.client.registerToFloat(f);

                          //40451
                          var tmp = [res[35],res[36]];
                          this.temp = this.upc.client.registerToFloat(tmp);

                          //40463
                          var outcomp = [res[47],res[48]];
                          this.outputcomp = this.upc.client.registerToFloat(outcomp);

                          this.cd.detectChanges();
                          //loading.dismiss();

                        })
                      },500)
                      
                    })
                  })
                })
              })
              /*await this.upc.client.setIntInHoldingRegister(40416,1,5).then(async()=>{
                this.intensityFlux = 5;
                await this.upc.client.setIntInHoldingRegister(40011,1,61166).then(async()=>{
                  this.colordif = "primary"
                  this.textdiff = "Start";
                  this.colorAct = "light";
                  this.colorDes = "primary";
                  this.modediff = 0;
                  await this.upc.client.setIntInHoldingRegister(40150,1,0).then(async ()=>{
                    this.resActive = 0;
                    this.colorB1 = "light";
                    this.colorB2 = "light";
                    this.interval = setInterval(async ()=>{
                      await this.upc.client.readHoldingRegisters(40416,100).then(res=>{
                    
                      
                        //40435
                        var iFlux = [res[19],res[20]]
                        this.input = this.upc.client.registerToFloat(iFlux);

                        //40437
                        var out = [res[21],res[22]]
                        this.output = this.upc.client.registerToFloat(out); 

                        //40439
                        var f = [res[23],res[24]];
                        this.flux = this.upc.client.registerToFloat(f);

                        //40451
                        var tmp = [res[35],res[36]];
                        this.temp = this.upc.client.registerToFloat(tmp);

                        //40463
                        var outcomp = [res[47],res[48]];
                        this.outputcomp = this.upc.client.registerToFloat(outcomp);

                        this.cd.detectChanges();
                        loading.dismiss();

                      })
                    },500)
                    
                  })
                })
              })*/
                /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                    this.input = res;
                })
                await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
                  //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
                  var upc = "Test4G1";
                  this.upc3s.forEach(item=>{
                    if(item.upcNameId == upc){
                      this.outputref = item.generalParameters.co2PresOutRef5/1000;
                      
                    }
                  })
                })
                await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                    this.outputcomp = res;
                })
                await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                  this.inputref = 2+0.8*(res-10)/90;
                  
                  this.fluxref = 0.17*res;
                })
                
                
                await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                  this.output = res;
                })
                await this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
                  this.global.ssid = res;
                })
                await this.upc.client.getIntFromHoldingRegister(40150,1).then(res=>{
                  this.resActive = res;
                  if (res == 1){
                    this.colorB1 = "primary";
                    this.colorB2 = "light";
                    this.PE = "B1";
                  } if(res == 2) {
                    this.colorB2 = "primary";
                    this.colorB1 = "light";
                    this.PE = "B2";
                  }
                })//0xc8ad64bbeb56470496bf2336e92c9caa
                await this.upc.client.setIntInHoldingRegister(40065,1,5).then(res=>{
                  this.intensity = 5;
                })
                await this.upc.client.setFloatInHoldingRegister(40018,(this.fluxref*10)/this.intensity).then(res=>{
                  this.fluxmax = (this.fluxref*10)/this.intensity;
                })
                await this.upc.client.getIntFromHoldingRegister(40011,1).then(res=>{
                  //alert(res);
                  if(res == 2 || res == 4369) {
                    

                    this.textdiff = "Stop";
                    this.colordif = "danger";
                    this.colorAct = "danger";
                    this.colorDes = "light";
                  }
                  else {
                    this.colordif = "primary"
                    this.textdiff = "Start";
                    this.colorAct = "light";
                    this.colorDes = "primary";
                  } 
                  this.modediff = res;
                  this.cd.detectChanges();
                })
                await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                  this.intensityFlux = res;
                })//
                await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                  this.flux = res;
                })
                await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                  this.temp = res;
                })
                
                loading.dismiss();
                this.interval = setInterval(async ()=>{
                  await this.upc.client.connect();
                  await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                    this.input = res;
                    if(Math.abs(((this.input-this.inputref)/this.inputref))*100 <10){
                      this.backgroundPE = true;
                    } else {
                      this.backgroundPE = false;
                    }
                })
                await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                    this.outputcomp = res;
                    if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <5){
                      this.backgroundPS = true;
                      this.bgpswarning = false;
                    } else if(Math.abs((this.outputcomp-this.outputref)/this.outputref)*100 <10){
                      this.bgpswarning = true;
                    } else {
                      this.backgroundPS = false;
                      this.bgpswarning = false;
                    }
                })
                await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                  this.output = res;
                  
                })
                await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                  this.flux = res;
                  if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100) <5){
                    this.backgroundDeb = true;
                    this.bgdebwarning = false;
                  } else if(Math.abs(((this.flux-this.fluxref)/this.fluxref)*100)<10) {
                    
                    this.bgdebwarning = true;
                  } else {
                    this.backgroundDeb = false;
                    this.bgdebwarning = false;
                  }
                  this.cd.detectChanges();
                })
                await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
                  this.intensityFlux = res;
                  this.cd.detectChanges();
                })//
                */
                /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
                  this.fluxmax = res;
                  this.cd.detectChanges();
                })*/
                //this.fluxref = this.intensityFlux * this.fluxmax /10;
                /*if(this.backgroundDeb && this.backgroundPE && this.backgroundPS){
                  if(this.resActive == 1) {
                      this.successB1 = "checkmark-outline";
                  } else if(this.resActive == 2){
                      this.successB2 = "checkmark-outline";
                  } 
                }
                },500)*/
            },5000)
      }
      
    //}
  }
  doRefresh(event) {
    this.ngOnInit();
    event.target.complete();
  }
  /*ionViewWillLeave() {

    alert("Destroyed !");
    clearInterval(this.interval);
  }

  ngOnDestroy(): void {

    alert("Destroyed !");
    clearInterval(this.interval);
  }*/
  changeResAct(i) {
    if(this.resActive != null){
      
      
      setTimeout(()=>{
        this.upc.client.setIntInHoldingRegister(40151,1,i).then(res=>{
          this.upc.client.setIntInHoldingRegister(40150,1,i).then(res=>{
            this.resActive = i;
            if(this.resActive == 1){
              this.colorB1 = "primary";
              this.colorB2 = "light";
              this.PE = "B1"; 
            } if(this.resActive == 2) {
              this.colorB2 = "primary";
              this.colorB1 = "light";
              this.PE = "B2";
            }// lire plusieurs variables modbus 
            /*this.interval = setInterval(async ()=>{
              await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                this.input = res;
            })
            await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
                this.outputcomp = res;
            })
            await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
              this.output = res;
            })
            await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
              this.flux = res;
              this.cd.detectChanges();
            })
            await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
              this.intensityFlux = res;
              this.cd.detectChanges();
            })
            this.fluxref = this.intensityFlux * this.fluxmax /10;
            },500)*/
            this.cd.detectChanges();
          }).catch(async err=>{
            var loading = await this.loadingCTRL.create({
              message : "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
              duration : 10000
            })
            loading.present();
            this.ngOnInit();
          })
        })
        
      },1000)
      
    }
    
  }
  changeInt() {
    if(this.intensity != null){
      clearInterval(this.global.interval);
      setTimeout(()=>{
        this.upc.client.setIntInHoldingRegister(40065,1,this.intensity).then(res=>{
          if(this.intensity == 1){
            this.colorMin = "primary";
            this.colorMax ="light";
          } if(this.intensity == 10){
            this.colorMax = "primary"
            this.colorMin = "light";
          }
          this.global.interval = setInterval(async ()=>{
            await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
              this.input = res;
          })
          await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
              this.outputcomp = res;
          })
          await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
            this.output = res;
          })
          await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
            this.flux = res;
            this.cd.detectChanges();
          })
          await this.upc.client.getIntFromHoldingRegister(40416,1).then(res=>{
            this.intensityFlux = res;
            this.cd.detectChanges();
          })//
          /*await this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
            this.fluxmax = res;
            this.cd.detectChanges();
          })*/
          this.fluxref = this.intensityFlux * this.fluxmax /10;
          },500)
        }).catch(async err=>{
          var loading = await this.loadingCTRL.create({
            message : "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
            duration : 10000
          })
          loading.present();
          this.ngOnInit();
        })
      },1000)
      
    }
    
  }
  minInt() {
    this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
      this.intensity = 1;
      
        this.colorMin = "primary";
        this.colorMax ="light";
      
    }).catch(async err=>{
      var loading = await this.loadingCTRL.create({
        message : "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
        duration : 10000
      })
      loading.present();
      this.ngOnInit();
    })
  }
  maxInt() {
    this.upc.client.setIntInHoldingRegister(40065,1,10).then(res=>{
      this.intensity = 10
      
        this.colorMax = "primary"
        this.colorMin = "light";
      
    }).catch(async err=>{
      var loading = await this.loadingCTRL.create({
        message : "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
        duration : 10000
      })
      loading.present();
      this.ngOnInit();
    })
  }
  async testMinB2() {
    var loading = await this.loadingCTRL.create({
        message : "Calcul des Pressions pour B2 à l'intensité 1 en cours...",
    })
    loading.present();
    this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
      this.intensity = 1;
      this.upc.client.setIntInHoldingRegister(40150,1,2).then(res=>{
        var cpt = 0;
        var intervalB2I1 = setInterval(()=>{
          this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
            this.PEB1Int1 = res;
          })
          this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
            this.PSB1Int1 = res;
          })
          this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
            
            if(Math.abs(((this.DebB1Int1 -res)/res)*100) <10){
                cpt++;
            } 
            this.DebB1Int1 = res;
          })
          
          if(cpt >= 10){
            clearInterval(intervalB2I1);
            
            loading.dismiss();
            
          }
        },500)
      })
    })
  }
  async testMaxB2() {
    var loading = await this.loadingCTRL.create({
      message : "Calcul des Pressions pour B2 à l'intensité 10 en cours ...",
      
    });
    loading.present();

    this.upc.client.setIntInHoldingRegister(40065,1,10).then(res=>{
      this.intensity = 10;
      this.upc.client.setIntInHoldingRegister(40150,1,1).then(res=>{
        var cpt = 0;
        var intervalB2I10 = setInterval(()=>{
          this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
            this.PEB1Int1 = res;
          })
          this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
            this.PSB1Int1 = res;
          })
          this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
            
            if(Math.abs(((this.DebB1Int1 -res)/res)*100) <10){
                cpt++;
            } 
            this.DebB1Int1 = res;
          })
          
          if(cpt >= 10){
            clearInterval(intervalB2I10);
            
            loading.dismiss();
            
          }
        },500)
      })
    })
  }
  async testMaxB1() {
    var loading = await this.loadingCTRL.create({
      message : "Calcul des Pressions pour B1 à l'intensité 10 en cours ...",
      
    });
    loading.present();

    this.upc.client.setIntInHoldingRegister(40065,1,10).then(res=>{
      this.intensity = 10;
      this.upc.client.setIntInHoldingRegister(40150,1,1).then(res=>{
        var cpt = 0;
        var intervalB1I10 = setInterval(()=>{
          this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
            this.PEB1Int1 = res;
          })
          this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
            this.PSB1Int1 = res;
          })
          this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
            
            if(Math.abs(((this.DebB1Int1 -res)/res)*100) <10){
                cpt++;
            } 
            this.DebB1Int1 = res;
          })
          
          if(cpt >= 10){
            clearInterval(intervalB1I10);
            
            loading.dismiss();
            
          }
        },500)
      })
    })
  }
  async testMinB1() {
    var loading = await this.loadingCTRL.create({
      message : "Calcul des Pressions pour B1 à l'intensité 1 en cours ...",
      
    });
    loading.present();
    this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
      this.intensity = 1;
      this.upc.client.setIntInHoldingRegister(40150,1,1).then(res=>{
        var cpt = 0;
        var intervalva = setInterval(()=>{
          
          this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
            this.PEB1Int1 = res;
          })
          this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
            this.PSB1Int1 = res;
          })
          this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
            
            if(Math.abs(((this.DebB1Int1 -res)/res)*100) <10){
                cpt++;
            } 
            this.DebB1Int1 = res;
          })
          
          if(cpt >= 10){
            clearInterval(intervalva);
            
            loading.dismiss();
            
          }
        },500);
        
      }).catch(err=>{
        alert("Erreur lors de l'écriture ModBus !")
        loading.dismiss();
      })
    }).catch(err=>{
      alert("Erreur lors de l'écriture ModBus !")
      loading.dismiss();
    })
  }
  async auto () {
    var loading = await this.loadingCTRL.create({
      message : "Calcul des Pressions en cours...",
      
    });
    loading.present();
    this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
      this.intensity = 1;
      this.upc.client.setIntInHoldingRegister(40150,1,1).then(res=>{
        var interval = setInterval(()=>{
          
          this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
            this.PEB1Int1 = res;
          })
          this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
            this.PSB1Int1 = res;
          })
          this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
            if(Math.abs(this.DebB2Int1 -res)>0.01){
             
              //alert("Seuil Atteind !"); Fichier Excel dispo par URL
            }
            this.DebB1Int1 = res;
          })
        },500)
        setTimeout(()=>{
          clearInterval(interval);

          this.upc.client.setIntInHoldingRegister(40150,1,2).then(res=>{
            
            var interval2 = setInterval(()=>{
              this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                this.PEB2Int1 = res;
              })
              this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                this.PSB2Int1 = res;
              })
              this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                if(Math.abs(this.DebB2Int1 -res) > 0.1){
                    clearInterval(interval2);
                }
                this.DebB2Int1 = res;
              })
            },500)
            setTimeout(()=>{
              clearInterval(interval2);
              this.upc.client.setIntInHoldingRegister(40065,1,10).then(res=>{
                this.intensity = 10;
                var interval3 = setInterval(()=>{
                  this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                    this.PEB2Int10 = res;
                  })
                  this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                    this.PSB2Int10 = res;
                  })
                  this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                    this.DebB2Int10 = res;
                  })
                },500)
                setTimeout(()=>{
                  clearInterval(interval3);
                  this.upc.client.setIntInHoldingRegister(40150,1,1).then(res=>{
                    var interval4 = setInterval(()=>{
                      this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                        this.PEB1Int10 = res;
                      })
                      this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                        this.PSB1Int10 = res;
                      })
                      this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                        this.DebB1Int10 = res;
                      })
                    },500)
                    setTimeout(()=>{
                      clearInterval(interval4);
                      alert("Test Auto Réalisé !");
                      loading.dismiss();
                    },40000)
                  })
                },30000)
              })
            },20000)
          })
        },10000)  
      })
    })
  }
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
      this.colorAct = "primary";
      this.colorDes ="light";
      this.modediff = 2;
      this.cd.detectChanges();
    })
  }
  onDisableDiff() {
    this.upc.client.setIntInHoldingRegister(40011,1,0).then(res=>{
      this.textdiff = "Start";
      this.colordif = "primary";
      this.colorAct = "light";
      this.colorDes ="primary";
      this.modediff = 0;
      this.cd.detectChanges();
    })
  }
  changeFluxMax() {
    if(this.fluxmax != null) {
      this.upc.client.setFloatInHoldingRegister(40018,this.fluxmax).then(res=>{
        alert(this.fluxmax);
      }).catch(async err=>{
        var loading = await this.loadingCTRL.create({
          message : "Vous n'êtes pas connecté à l'UPC, Reconnexion en cours...",
          duration : 10000
        })
        loading.present();
        this.ngOnInit();
      })
    }
   
  }
}
