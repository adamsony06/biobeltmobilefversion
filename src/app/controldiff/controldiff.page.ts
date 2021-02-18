import { Component, OnInit, NgZone, ChangeDetectorRef,OnDestroy } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { GlobalService } from '../api/global.service';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { UPCV3 } from '../model/upcv3/upcv3';

declare var WifiWizard2: any;

@Component({
  selector: 'app-controldiff',
  templateUrl: './controldiff.page.html',
  styleUrls: ['./controldiff.page.scss'],
})
export class ControldiffPage implements OnInit {
  colordif = "primary";
  textdiff = "Start";
  upc : UPCModbus;
  upc3s : UPCV3[];
  intensity : number = 0;
  temp : number= 0;

  fluxref : number = 0;
  fluxref10 : number = 0;
  fluxmax : number=0;
  flux : number  = 0;
  backgroundDeb  = false;
  bgdebwarning = false;
  backgroundPE = false;
  inputref = 0;
  outputref10 = 0;
  input = 0;
  output = 0;
  outputref = 0;
  backgroundPS = false;
  bgpswarning = false;
  outputcomp = 0;
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
  highlightB1I1 = false;
  highlightB1I10 = false;
  highlightB2I1 = false;
  highlightB2I10 = false;
  intervalva : any;
  intervalB2I1 : any;
  intervalB1I10 : any;
  intervalB2I10 : any;
  int : any; 
  
  // Un seul message de succès Ecriture UPC, Ecriture Database 
  // Quantité CO2
  constructor(private platform : Platform, private loadingCTRL : LoadingController,private ngZone : NgZone,private network : Network,private hotspot : Hotspot,private cd: ChangeDetectorRef,private global : GlobalService) { }

  ngOnInit() {
    this.upc3s = JSON.parse(localStorage.getItem("upc3"));
    this.upc3s.forEach(item=>{
      if(item.upcNameId == "Test4G1"){
        this.inputref = 2+0.8*(item.generalParameters.upcTrapNum-10)/90;
        //this.fluxref = 0.2;
        //this.fluxref10 = 2;
        this.outputref = item.generalParameters.co2PresOutRef1/1000;
        this.outputref10 = item.generalParameters.co2PresOutRef10/1000;
      }
    })
    if(this.platform.is('ios')){
      this.platform.ready().then(async ()=>{
        if(localStorage.getItem("BBAM") != "true"){
          WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async res=>{
            var loading = await this.loadingCTRL.create({
              message : "Connection à l'UPC en cours...",
              duration : 10000
            })
            loading.present();
            this.global.isBBAM = true;
            localStorage.setItem("BBAM",""+true);
            this.platform.ready().then(async readySource => {
                if(readySource == "cordova"){
                  this.upc = new UPCModbus(state => {
                    this.ngZone.run(() => {
                      // Force refresh UI
                      
                        
                        //this.readDiffusionParameters();
                      
                    });
                  });
                  await this.upc.client.connect();
                  this.readParams(loading);
                }
            })
            
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
            await this.upc.client.getFloatFromHoldingRegister(40018).then(async res =>{
              this.fluxmax = res;
              this.fluxref = this.fluxmax/10;
              this.fluxref10 = this.fluxmax;
              await this.upc.client.setIntInHoldingRegister(40065,1,1).then(async res=>{
                this.intensity = 1;
                await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
                  this.temp = res;
                  
                })
               /*this.global.interval = setInterval(async ()=>{
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
 
                   this.global.ssid = "BBAM";
                   this.global.isBBAM = true;
   
                   this.cd.detectChanges();
                   //loading.dismiss();
                 }).catch(err=>{
                   this.ngOnInit();
                 })
               },2000)*/ 
               
              }).catch(async err=>{
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
               }).catch(err=>{
                 
               })
              })
            })
             
               
                /*await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
                  this.inputref = 2+0.8*(res-10)/90;
                  this.fluxref = 0.017*res;
                  this.fluxref10 = 0.17*res;
                  this.cd.detectChanges();
        })*/
        /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
          this.input = res;
          this.cd.detectChanges();
        }).catch(err=>{
          
        })*/
        /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
          this.temp = res;
        })*/
        /*await this.upc.client.setFloatInHoldingRegister(40018,1).then(res=>{
          this.fluxmax = 1;
          this.cd.detectChanges();
        })
        await this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
            this.intensity = 1;
            this.cd.detectChanges();
        })*/
        /*await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
          this.outputcomp = res;
          this.cd.detectChanges();
        })*/
        /*this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
          this.global.ssid = res;
        })*/
        /*await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
          //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
          var upc = "Test4G1";
          this.upc3s.forEach(item=>{
            if(item.upcNameId == upc){
              this.outputref = item.generalParameters.co2PresOutRef1/1000;
              this.outputref10 = item.generalParameters.co2PresOutRef10/1000;
            }
          })
          this.cd.detectChanges();
        })*/
        /*await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
          this.output = res;
          this.cd.detectChanges();
        })*/
        /*await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
          this.flux = res;
          this.cd.detectChanges();
        })*/
              
              
              
            //})
          },2000)
        }
        
      })
      
    } else if(this.platform.is("android")){
        this.hotspot.connectToWifi("BBAM","BioBeltService").then(async()=>{
            var loading = await this.loadingCTRL.create({
              message : "Connection à l'UPC en cours...",
              duration : 10000
            })
            loading.present();
            this.global.isBBAM = true;
            this.platform.ready().then(async readySource=>{
              if (readySource == 'cordova') {
                this.upc = new UPCModbus(state => {
                  this.ngZone.run(() => {
                    // Force refresh UI
                    
                      
                      //this.readDiffusionParameters();
                    
                  });
                });

                await this.upc.client.connect();

                this.readParams(loading);
              }
            })
        })
    }
  }//+-2%
  async startstop() {
    if(this.textdiff == "Start"){
      this.textdiff = "Stop";
      this.colordif = "danger";
      clearInterval(this.global.interval);
      await this.upc.client.setIntInHoldingRegister(40011,1,2).then(async ()=>{
        await this.testMinB1().then(async ()=>{
          await this.testMinB2().then(async()=>{
            await this.testMaxB1().then(async()=>{
              await this.testMaxB2().then(async()=>{
                this.onDisableDiff();
                alert("Test Min/Max terminé !");
              });
            });
          });
        });
      })
    } else {
      this.onDisableDiff();
    }
    
   
    
    
    
  }
  readParams (loading) {
    setTimeout(async ()=>{
      //this.ngZone.run(async ()=>{
        await this.upc.client.getFloatFromHoldingRegister(40018).then(async res=>{
          this.fluxmax = res;
          this.fluxref = this.fluxmax/10;
          this.fluxref10 = this.fluxmax;
          await this.upc.client.setIntInHoldingRegister(40065,1,1).then(async res=>{
            this.intensity = 1;
            await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
              this.temp = res;
              loading.dismiss();
            })
           /*this.global.interval = setInterval(async ()=>{
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

               this.global.ssid = "BBAM";

               this.cd.detectChanges();
               loading.dismiss();
             }).catch(err=>{
               this.ngOnInit();
             })
           },2000) */
           
          })/*.catch(async err=>{
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
           }).catch(err=>{
             
           })
          })*/
        })
       
         
          /*await this.upc.client.getIntFromHoldingRegister(40015,1).then(res=>{
            this.inputref = 2+0.8*(res-10)/90;
            this.fluxref = 0.017*res;
            this.fluxref10 = 0.17*res;
            this.cd.detectChanges();
  })*/
  /*await this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
    this.input = res;
    this.cd.detectChanges();
  }).catch(err=>{
    
  })*/
  /*await this.upc.client.getFloatFromHoldingRegister(40451).then(res=>{
    this.temp = res;
  })*/
  /*await this.upc.client.setFloatInHoldingRegister(40018,1).then(res=>{
    this.fluxmax = 1;
    this.cd.detectChanges();
  })
  await this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
      this.intensity = 1;
      this.cd.detectChanges();
  })*/
  /*await this.upc.client.getFloatFromHoldingRegister(40463).then(res=>{
    this.outputcomp = res;
    this.cd.detectChanges();
  })*/
  /*this.upc.client.getStringFromHoldingRegister(40045,10).then(res=>{
    this.global.ssid = res;
  })*/
  /*await this.upc.client.getStringFromHoldingRegister(40001,10).then(res=>{
    //var upc = res.replace(/[^a-zA-Z0-9]/g,'');
    var upc = "Test4G1";
    this.upc3s.forEach(item=>{
      if(item.upcNameId == upc){
        this.outputref = item.generalParameters.co2PresOutRef1/1000;
        this.outputref10 = item.generalParameters.co2PresOutRef10/1000;
      }
    })
    this.cd.detectChanges();
  })*/
  /*await this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
    this.output = res;
    this.cd.detectChanges();
  })*/
  /*await this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
    this.flux = res;
    this.cd.detectChanges();
  })*/
        
        
        
      //})
    },5000)
  }
  async testMinB1() {
    return new Promise(async (resolve, reject)=>{
      /*var loading = await this.loadingCTRL.create({
        message : "Calcul des Pressions pour B1 à l'intensité 1 en cours ...",
        
      });
      loading.present();*/
      this.highlightB1I1 = true;
      //this.upc.client.getFloatFromHoldingRegister(40018).then(res=>{
        
        this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
          this.intensity = 1;
          this.upc.client.setIntInHoldingRegister(40150,1,1).then(res=>{
            this.upc.client.setIntInHoldingRegister(40011,1,2).then(res=>{
              var DebB1 = 0;
              var cpt = 0;
              this.intervalva = setInterval(()=>{
                
                this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                  this.PEB1Int1 = res;
                  this.cd.detectChanges();
                })
                this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                  this.PSB1Int1 = res;
                  this.cd.detectChanges();
                })
                this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                  
                  if(cpt == 0){
                      DebB1 = res;
                      

                  }
                  this.DebB1Int1 = res;
                  cpt++;
                  
                  this.cd.detectChanges();
                })
                
                /*if(cpt >= 10){
                  clearInterval(intervalva);
                  
                  loading.dismiss();
                  resolve();
                  
                }*/
                if(cpt >= 20) {
                  //alert(Math.abs(DebB1 -this.DebB1Int1));
                  if(Math.abs(DebB1 -this.DebB1Int1) < 0.02){
                    clearInterval(this.intervalva);
                    //clearInterval(this.int);
                    this.highlightB1I1 = false; 
                    resolve();
                  }
                  DebB1 = this.DebB1Int1;
                  this.cd.detectChanges();
                  cpt = 0;
                }
                /*this.int = setInterval(()=>{
                  
                },10000)*/
              },500);
            })
            
            
          }).catch(err=>{
            alert("Erreur lors de l'écriture ModBus !")
            this.highlightB1I1 = false; 
          })
        }).catch(err=>{
          alert("Erreur lors de l'écriture ModBus !")
          this.highlightB1I1 = false; 
        })
      //})
      
    })
    
  }
  async testMinB2() {
    return new Promise(async (resolve, reject)=>{
      /*var loading = await this.loadingCTRL.create({
        message : "Calcul des Pressions pour B2 à l'intensité 1 en cours...",
    })
    loading.present();*/
    this.highlightB2I1 = true;
    //this.upc.client.setFloatInHoldingRegister(40018,2).then(res=>{
      this.upc.client.setIntInHoldingRegister(40065,1,1).then(res=>{
        this.intensity = 1;
        this.upc.client.setIntInHoldingRegister(40150,1,2).then(res=>{
          var cpt = 0;
          var debB2 = 0;
          this.intervalB2I1 = setInterval(()=>{
            this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
              this.PEB2Int1 = res;
              this.cd.detectChanges();
            })
            this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
              this.PSB2Int1 = res;
              this.cd.detectChanges();
            })
            this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
              
              if(cpt == 0){
                  debB2 = res;
                  
              } 
              cpt++;
              this.DebB2Int1 = res;
              this.cd.detectChanges();
            })
            
            if(cpt >= 20){
              if (Math.abs(debB2-this.DebB2Int1) < 0.02){
                clearInterval(this.intervalB2I1);
                //clearInterval(this.int);
                this.highlightB2I1 = false; 
                resolve();
              }
              debB2 = this.DebB2Int1;
              this.cd.detectChanges();
              cpt = 0;
            }
            
          },500)
        })
        })
    //})
    
    })
    
  }
  doRefresh(event) {
      this.ngOnInit();
      event.target.complete();

  }
  /*ionViewWillLeave() {

    
    clearInterval(this.interval);
    clearInterval(this.intervalB1I10);
    clearInterval(this.intervalB2I1);
    clearInterval(this.intervalva);
    clearInterval(this.intervalB2I10);
  }

  ngOnDestroy(): void {

    
    clearInterval(this.interval);
    clearInterval(this.intervalB1I10);
    clearInterval(this.intervalB2I1);
    clearInterval(this.intervalva);
    clearInterval(this.intervalB2I10);
  }*/
  async testMaxB1() {
    return new Promise(async (resolve, reject)=>{
      /*var loading = await this.loadingCTRL.create({
        message : "Calcul des Pressions pour B1 à l'intensité 10 en cours ...",
        
      });
      loading.present();*/
      this.highlightB1I10 = true;
      //this.upc.client.setFloatInHoldingRegister(40018,2).then(res=>{
        this.upc.client.setIntInHoldingRegister(40065,1,10).then(res=>{
          this.intensity = 10;
          this.upc.client.setIntInHoldingRegister(40150,1,1).then(res=>{
            var cpt = 0;
            var debB1 = 0;
            this.intervalB1I10 = setInterval(()=>{
              this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                this.PEB1Int10 = res;
                this.cd.detectChanges();
              })
              this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                this.PSB1Int10 = res;
                this.cd.detectChanges();
              })
              this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                
                if(cpt == 0){
                    debB1 =res;
                    
                } 
                cpt++;
                this.DebB1Int10 = res;
                this.cd.detectChanges();
              })
              
              if(cpt >= 20){
                if(Math.abs(debB1 -this.DebB1Int10) <0.02){
                  clearInterval(this.intervalB1I10);
                  //clearInterval(this.int);
                  this.highlightB1I10 = false;
                  resolve();
                }
                debB1 = this.DebB1Int10;
                this.cd.detectChanges();
                cpt = 0;
                
              }
              
            },500)
          })
        })
      //})  
      
    })
    
  }
  async testMaxB2() {
    return new Promise(async(resolve, reject)=>{
     /* var loading = await this.loadingCTRL.create({
        message : "Calcul des Pressions pour B2 à l'intensité 10 en cours ...",
        
      });
      
      loading.present();*/
      this.highlightB2I10 = true;
      //this.upc.client.setFloatInHoldingRegister(40018,2).then(res=>{
        this.upc.client.setIntInHoldingRegister(40065,1,10).then(res=>{
          this.intensity = 10;
          this.upc.client.setIntInHoldingRegister(40150,1,2).then(res=>{
            var cpt = 0;
            var debB2 = 0;
            this.intervalB2I10 = setInterval(()=>{
              this.upc.client.getFloatFromHoldingRegister(40435).then(res=>{
                this.PEB2Int10 = res;
                this.cd.detectChanges();
              })
              this.upc.client.getFloatFromHoldingRegister(40437).then(res=>{
                this.PSB2Int10 = res;
                this.cd.detectChanges();
              })
              this.upc.client.getFloatFromHoldingRegister(40439).then(res=>{
                
                if(cpt == 0){
                    debB2 = res;
                    
                } 
                cpt++;
                this.DebB2Int10 = res;
                this.cd.detectChanges();
              })
              
              if(cpt >= 20){
                if(Math.abs(debB2 - this.DebB2Int10) < 0.02){
                  clearInterval(this.intervalB2I10);
                  clearInterval(this.int);
                  this.highlightB2I10 = false;
                  resolve();
                }
                debB2 = this.DebB2Int10;
                this.cd.detectChanges();
                cpt = 0;
                
              }
             
            },500)
          })
        })
      //})
      
    })
    
  }
  onChangeDiff() {
    this.upc.client.setIntInHoldingRegister(40011,1,2).then(res=>{
      this.textdiff = "Stop";
      this.colordif = "danger";
      
      
      
    })
  }
  onDisableDiff() {
    this.upc.client.setIntInHoldingRegister(40011,1,0).then(res=>{
      this.textdiff = "Start";
      this.colordif = "primary";
      this.highlightB1I10 = false;
      this.highlightB2I1 = false;
      this.highlightB2I10 = false;
      this.highlightB1I1 = false;
      clearInterval(this.intervalB1I10);
      clearInterval(this.intervalB2I1);
      clearInterval(this.intervalva);
      clearInterval(this.intervalB2I10);
      
    })
  }
  

}