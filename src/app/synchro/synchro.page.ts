import { Component, Input, NgZone, OnInit, ChangeDetectorRef } from '@angular/core';
import { getMaxListeners } from 'process';
import { Upcv3serviceService } from '../api/upcv3service.service';
import { InterventionV3 } from '../model/interventionv3';
import { User } from '../model/user';
import { LoadingController, Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { UPCModbus } from 'src/app/model/upcv3/upcmodbus';
import { UPCV3 } from '../model/upcv3/upcv3';
import { Router } from '@angular/router';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { Chart } from 'chart.js';
import * as d3 from "d3";
import * as moment from 'moment';
//import { WifiWizard2 } from '@ionic-native/wifi-wizard-2';
//import { Console } from 'console';

declare var WifiWizard2: any;
declare var google: { visualization: { arrayToDataTable: (arg0: (string | number)[][]) => any; BarChart: new (arg0: HTMLElement) => any; }; };
declare var google2: { visualization: { arrayToDataTable: (arg0: (string | number)[][]) => any; BarChart: new (arg0: HTMLElement) => any; }; };

@Component({
  selector: 'app-synchro',
  templateUrl: './synchro.page.html',
  styleUrls: ['./synchro.page.scss'],
})
export class SynchroPage implements OnInit { 
  upc: UPCModbus		
  upc3: UPCV3		
  nbpiege:number;	    
  programmes = []; 
  pStart = [];
  pEnd = [];
  formattedHours;
  formattedMinutes;
  intensity = [];
  finishRead = false;
  //intensity2;
  frequency = [];
  frequency2 = [];
  intensityOptions = [0,1,2,3,4,5,6,7,8,9,10];
  frequencyOptions = ["Tous les jours","Semaine","Weekend","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
  frequencyValue = [7,9,8,0,1,2,3,4,5,6];
  colors =[];   
  pastart = "00:00";		
  pcstart = "00:00";		
  paend = "00:00";		
  pcend = "00:00";		  
  paselect:String = "+";		
  pcselect:String = "+";		
  paintensity: String = "Désactivée";		
  pcintensity: String = "Désactivée";
  
  				 		


  constructor(
    private loadingCTRL: LoadingController,
    private upcv3Service: Upcv3serviceService,
    private platform : Platform, 
    private router:Router,
    private ngZone : NgZone, private network : Network,
    private hotspot : Hotspot,private cg :ChangeDetectorRef,
  ) {
    
        
          
    
    
   }
  token : String 
  intervention : InterventionV3
  time : String = "08:10"
  googleChartLibrary;
  
  ngOnInit() {
    if(this.platform.is("ios")){
      this.platform.ready().then(()=>{
        WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async ()=>{
          var loading = await this.loadingCTRL.create({
            message : "Connection à l'UPC en cours...",
            duration : 10000
          })
          loading.present();
  
          this.platform.ready().then(
            async readySource => {
              if (readySource == 'cordova') {
                this.upc = new UPCModbus(state => {
                  this.ngZone.run(() => {
                    // Force refresh UI
                    
                      
                      //this.readDiffusionParameters();
                    
                  });
                });
                
                    await this.upc.client.connect()
                    setTimeout(async ()=>{
                      //this.ngZone.run(async ()=>{
                        
                        await this.upc.client.readHoldingRegisters(40072,100).then(res =>{

                          //programme 1 
                          var tab=[res[0],res[1]];
                          this.pStart.push(this.upc.client.registerToUint32(tab));
                         
                          var tab2 = [res[2],res[3]];
                          this.pEnd.push(this.upc.client.registerToUint32(tab2));
                        
                          var tab3 = [res[4]];
                          this.frequency2.push(this.upc.client.registerToUint32(tab3));
                          
                          var tab5 = [res[5]];
                          this.intensity.push(this.upc.client.registerToUint32(tab5));
                         
    
                          //programme 2
                          tab=[res[6],res[7]];
                          this.pStart.push(this.upc.client.registerToUint32(tab));
                          tab = [res[8],res[9]];
                          this.pEnd.push(this.upc.client.registerToUint32(tab));
                          tab = [res[10]];
                          this.frequency2.push(this.upc.client.registerToUint32(tab));
                          tab = [res[11]];
                          this.intensity.push(this.upc.client.registerToUint32(tab));
    
                          //programme 3
                          tab=[res[12],res[13]];
                          this.pStart.push(this.upc.client.registerToUint32(tab));
                          tab = [res[14],res[15]];
                          this.pEnd.push(this.upc.client.registerToUint32(tab));
                          tab = [res[16]];
                          this.frequency2.push(this.upc.client.registerToUint32(tab));
                          tab = [res[17]];
                          this.intensity.push(this.upc.client.registerToUint32(tab));
    
                          //programme 4
                          tab=[res[18],res[19]];
                          this.pStart.push(this.upc.client.registerToUint32(tab));
                          tab = [res[20],res[21]];
                          this.pEnd.push(this.upc.client.registerToUint32(tab));
                          tab = [res[22]];
                          this.frequency2.push(this.upc.client.registerToUint32(tab));
                          tab = [res[23]];
                          this.intensity.push(this.upc.client.registerToUint32(tab));
    
                          //programme 5
                          tab=[res[24],res[25]];
                          this.pStart.push(this.upc.client.registerToUint32(tab));
                          tab = [res[26],res[27]];
                          this.pEnd.push(this.upc.client.registerToUint32(tab));
                          tab = [res[28]];
                          this.frequency2.push(this.upc.client.registerToUint32(tab));
                          tab = [res[29]];
                          this.intensity.push(this.upc.client.registerToUint32(tab));
    
                          //programme 6
                          tab=[res[30],res[31]];
                          this.pStart.push(this.upc.client.registerToUint32(tab));
                          tab = [res[32],res[33]];
                          this.pEnd.push(this.upc.client.registerToUint32(tab));
                          tab = [res[34]];
                          this.frequency2.push(this.upc.client.registerToUint32(tab));
                          tab = [res[35]];
                          this.intensity.push(this.upc.client.registerToUint32(tab));
    
                          //programme 7
                          tab=[res[36],res[37]];
                          this.pStart.push(this.upc.client.registerToUint32(tab));
                          tab = [res[38],res[39]];
                          this.pEnd.push(this.upc.client.registerToUint32(tab));
                          tab = [res[40]];
                          this.frequency2.push(this.upc.client.registerToUint32(tab));
                          tab = [res[41]];
                          this.intensity.push(this.upc.client.registerToUint32(tab));
    
                          //programme 8
                          tab=[res[42],res[43]];
                          this.pStart.push(this.upc.client.registerToUint32(tab));
                          tab = [res[44],res[45]];
                          this.pEnd.push(this.upc.client.registerToUint32(tab));
                          tab = [res[46]];
                          this.frequency2.push(this.upc.client.registerToUint32(tab));
                          tab = [res[47]];
                          this.intensity.push(this.upc.client.registerToUint32(tab));
    
                          //programme 9
                          tab=[res[48],res[49]];
                          this.pStart.push(this.upc.client.registerToUint32(tab));
                          tab = [res[50],res[51]];
                          this.pEnd.push(this.upc.client.registerToUint32(tab));
                          tab = [res[52]];
                          this.frequency2.push(this.upc.client.registerToUint32(tab));
                          tab = [res[53]];
                          this.intensity.push(this.upc.client.registerToUint32(tab));
    
                          //programme 10
                          tab=[res[54],res[55]];
                          this.pStart.push(this.upc.client.registerToUint32(tab));
                          tab = [res[56],res[57]];
                          this.pEnd.push(this.upc.client.registerToUint32(tab));
                          tab = [res[58]];
                          this.frequency2.push(this.upc.client.registerToUint32(tab));
                          tab = [res[59]];
                          this.intensity.push(this.upc.client.registerToUint32(tab));
                          setTimeout(()=>{
                            this.finishRead = true;
                          },1000)
                          
                        })
                      this.finishRead = true;
                      //})
                      
                    },5000)
                /*this.network.onConnect().subscribe(async res=>{
                  if (this.network.type === this.network.Connection.WIFI) {
                    
  
                  }
                })*/
  
              }
            }
          )
        })
      })
      
    }
    else if(this.platform.is("android")) {
      this.hotspot.connectToWifi("BBAM","BioBeltService").then(async res=>{
        
        var loading = await this.loadingCTRL.create({
          message : "Connection à l'UPC en cours...",
          duration : 10000
        })
        loading.present();
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

                    await this.upc.client.readHoldingRegisters(40072,100).then(res =>{

                      //programme 1 
                      var tab=[res[0],res[1]];
                      this.pStart.push(this.upc.client.registerToUint32(tab));
                     
                      var tab2 = [res[2],res[3]];
                      this.pEnd.push(this.upc.client.registerToUint32(tab2));
                    
                      var tab3 = [res[4]];
                      this.frequency2.push(this.upc.client.registerToUint32(tab3));
                      
                      var tab5 = [res[5]];
                      this.intensity.push(this.upc.client.registerToUint32(tab5));
                     

                      //programme 2
                      tab=[res[6],res[7]];
                      this.pStart.push(this.upc.client.registerToUint32(tab));
                      tab = [res[8],res[9]];
                      this.pEnd.push(this.upc.client.registerToUint32(tab));
                      tab = [res[10]];
                      this.frequency2.push(this.upc.client.registerToUint32(tab));
                      tab = [res[11]];
                      this.intensity.push(this.upc.client.registerToUint32(tab));

                      //programme 3
                      tab=[res[12],res[13]];
                      this.pStart.push(this.upc.client.registerToUint32(tab));
                      tab = [res[14],res[15]];
                      this.pEnd.push(this.upc.client.registerToUint32(tab));
                      tab = [res[16]];
                      this.frequency2.push(this.upc.client.registerToUint32(tab));
                      tab = [res[17]];
                      this.intensity.push(this.upc.client.registerToUint32(tab));

                      //programme 4
                      tab=[res[18],res[19]];
                      this.pStart.push(this.upc.client.registerToUint32(tab));
                      tab = [res[20],res[21]];
                      this.pEnd.push(this.upc.client.registerToUint32(tab));
                      tab = [res[22]];
                      this.frequency2.push(this.upc.client.registerToUint32(tab));
                      tab = [res[23]];
                      this.intensity.push(this.upc.client.registerToUint32(tab));

                      //programme 5
                      tab=[res[24],res[25]];
                      this.pStart.push(this.upc.client.registerToUint32(tab));
                      tab = [res[26],res[27]];
                      this.pEnd.push(this.upc.client.registerToUint32(tab));
                      tab = [res[28]];
                      this.frequency2.push(this.upc.client.registerToUint32(tab));
                      tab = [res[29]];
                      this.intensity.push(this.upc.client.registerToUint32(tab));

                      //programme 6
                      tab=[res[30],res[31]];
                      this.pStart.push(this.upc.client.registerToUint32(tab));
                      tab = [res[32],res[33]];
                      this.pEnd.push(this.upc.client.registerToUint32(tab));
                      tab = [res[34]];
                      this.frequency2.push(this.upc.client.registerToUint32(tab));
                      tab = [res[35]];
                      this.intensity.push(this.upc.client.registerToUint32(tab));

                      //programme 7
                      tab=[res[36],res[37]];
                      this.pStart.push(this.upc.client.registerToUint32(tab));
                      tab = [res[38],res[39]];
                      this.pEnd.push(this.upc.client.registerToUint32(tab));
                      tab = [res[40]];
                      this.frequency2.push(this.upc.client.registerToUint32(tab));
                      tab = [res[41]];
                      this.intensity.push(this.upc.client.registerToUint32(tab));

                      //programme 8
                      tab=[res[42],res[43]];
                      this.pStart.push(this.upc.client.registerToUint32(tab));
                      tab = [res[44],res[45]];
                      this.pEnd.push(this.upc.client.registerToUint32(tab));
                      tab = [res[46]];
                      this.frequency2.push(this.upc.client.registerToUint32(tab));
                      tab = [res[47]];
                      this.intensity.push(this.upc.client.registerToUint32(tab));

                      //programme 9
                      tab=[res[48],res[49]];
                      this.pStart.push(this.upc.client.registerToUint32(tab));
                      tab = [res[50],res[51]];
                      this.pEnd.push(this.upc.client.registerToUint32(tab));
                      tab = [res[52]];
                      this.frequency2.push(this.upc.client.registerToUint32(tab));
                      tab = [res[53]];
                      this.intensity.push(this.upc.client.registerToUint32(tab));

                      //programme 10
                      tab=[res[54],res[55]];
                      this.pStart.push(this.upc.client.registerToUint32(tab));
                      tab = [res[56],res[57]];
                      this.pEnd.push(this.upc.client.registerToUint32(tab));
                      tab = [res[58]];
                      this.frequency2.push(this.upc.client.registerToUint32(tab));
                      tab = [res[59]];
                      this.intensity.push(this.upc.client.registerToUint32(tab));
                      setTimeout(()=>{
                        this.finishRead = true;
                      },1000)
                      
                    })
                    /*
                    //Program 1
                    await this.upc.client.getIntFromHoldingRegister(40072,2).then(res=>{
                      this.pStart.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40074,2).then(res=>{
                      this.pEnd.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40076,1).then(res=>{
                      alert(this.frequencyOptions[this.convertDaysCode(res)]) 
                      this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res)]);                     
                    })
                    await this.upc.client.getIntFromHoldingRegister(40077,1).then(res=>{
                      this.intensity.push(res);
                    })

                    //Program 2
                    await this.upc.client.getIntFromHoldingRegister(40078,2).then(res=>{
                      this.pStart.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40080,2).then(res=>{
                      this.pEnd.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40082,1).then(res=>{
                      this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res)]);                     
                    })
                    await this.upc.client.getIntFromHoldingRegister(40083,1).then(res=>{
                      this.intensity.push(res);
                    })

                    //Program 3
                    await this.upc.client.getIntFromHoldingRegister(40084,2).then(res=>{
                      this.pStart.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40086,2).then(res=>{
                      this.pEnd.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40088,1).then(res=>{
                      this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res)]);                   
                    })
                    await this.upc.client.getIntFromHoldingRegister(40089,1).then(res=>{
                      this.intensity.push(res);
                    })
                    
                    //Program 4
                    await this.upc.client.getIntFromHoldingRegister(40090,2).then(res=>{
                      this.pStart.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40092,2).then(res=>{
                      this.pEnd.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40094,1).then(res=>{
                      this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res)]);                   
                    })
                    await this.upc.client.getIntFromHoldingRegister(40095,1).then(res=>{
                      this.intensity.push(res);
                    })
                    
                    //Program 5
                    await this.upc.client.getIntFromHoldingRegister(40096,2).then(res=>{
                      this.pStart.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40098,2).then(res=>{
                      this.pEnd.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40100,1).then(res=>{
                      this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res)]);
                                           
                    })
                    await this.upc.client.getIntFromHoldingRegister(40101,1).then(res=>{
                      this.intensity.push(res);
                    })

                    //Program 6
                    await this.upc.client.getIntFromHoldingRegister(40102,2).then(res=>{
                      this.pStart.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40104,2).then(res=>{
                      this.pEnd.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40106,1).then(res=>{
                      this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res)]);                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40107,1).then(res=>{
                      this.intensity.push(res);
                    })

                    //Program 7
                    await this.upc.client.getIntFromHoldingRegister(40108,2).then(res=>{
                      this.pStart.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                     
                    })
                    await this.upc.client.getIntFromHoldingRegister(40110,2).then(res=>{
                      this.pEnd.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40112,1).then(res=>{
                      this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res)]);                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40113,1).then(res=>{
                      this.intensity.push(res);
                    })

                    //Program 8
                    await this.upc.client.getIntFromHoldingRegister(40114,2).then(res=>{
                      this.pStart.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40116,2).then(res=>{
                      this.pEnd.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40118,1).then(res=>{
                      this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res)]);                     
                    })
                    await this.upc.client.getIntFromHoldingRegister(40119,1).then(res=>{
                      this.intensity.push(res);
                    })

                    //Program 9
                    await this.upc.client.getIntFromHoldingRegister(40120,2).then(res=>{
                      this.pStart.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40122,2).then(res=>{
                      this.pEnd.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40124,1).then(res=>{
                      this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res)]);                     
                    })
                    await this.upc.client.getIntFromHoldingRegister(40125,1).then(res=>{
                      this.intensity.push(res);
                    })

                    //Program 10
                    await this.upc.client.getIntFromHoldingRegister(40126,2).then(res=>{
                      this.pStart.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40128,2).then(res=>{
                      this.pEnd.push(this.secondsToHoursMinutes(res));
                      this.cg.detectChanges();                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40130,1).then(res=>{
                      this.frequency2.push(this.frequencyOptions[this.convertDaysCode(res)]);                      
                    })
                    await this.upc.client.getIntFromHoldingRegister(40131,1).then(res=>{
                      this.intensity.push(res);
                    })*/
                  },5000)
                  this.drawChartjs();

                

            }
          }
        )
      }).catch(error => {alert(JSON.stringify(error))})
    }
    var user = new User();
    user.username = "guillaume.barault@dipteratech.com"
    user.password = "DIPTERA_AdminBioBelt_2020"

    this.upcv3Service.login(user).subscribe(res=>{
      this.token=res.result
    })
    
    this.fillTab()
    this.drawChartjs()
  
   
  }

  fillTab(){
    for (var i = 0; i<10;i++){
      this.programmes.push(["00:00","00:00"]);
    }  
    /*for (var i = 0; i<10;i++){
      this.intensity.push("Désactivée");
    }*/  
    for (var i = 0; i<10;i++){
      this.frequency.push("Tous les jours");
    } 
    for (var i = 0; i<10;i++){
      this.colors.push("grey");
    }     
  }


  secondsToHoursMinutes(secs){
    var hours = Math.trunc(secs / 3600);
    var minutes = Math.trunc((secs % 3600) / 60);  
    if (hours < 10){
      this.formattedHours = "0"+hours;
     } 
    else{
      this.formattedHours = hours.toString();
    }  
    if (minutes < 10){
      this.formattedMinutes = "0"+minutes;
    }
    else{
      this.formattedMinutes = minutes.toString();
    }
    var res = this.formattedHours+":"+this.formattedMinutes;
    return res;
  }

  hoursMinutesToSeconds(hm){
    var splitted = hm.split(":");
    var hours = splitted[0]*3600;
    var minutes = splitted[1]*60;
    var res = hours + minutes;
    return(res);
  }
 
  convertDaysCode(dc){
    var res;
    switch (dc){
      case 0:
        res = 9;
        break;
      case 1:
        res = 3;
        break;
      case 2:
        res = 4;
        break;
      case 3:
        res = 5;
        break;
      case 4:
        res = 6;
        break;
      case 5:
        res = 7;
        break;
      case 8:
        res = 9;
        break;
      case 7: 
        res = 0;
        break;
      case 8: 
        res = 2;
        break;
      case 9:
        res = 1;
        break;     
    }
    return res;
  }

  reverseConvertDaysCode(dc){
    var res;
    switch (dc){
      case "Tous les jours":
        res = 7;
        break;
      case "Semaine":
        res = 9;
        break;
      case "Weekend":
        res = 8;
        break;
      case "Lundi":
        res = 1;
        break;
      case "Mardi":
        res = 2;
        break;
      case "Mercredi":
        res = 3;
        break;
      case "Jeudi":
        res = 4;
        break;
      case "Vendredi": 
        res = 5;
        break;
      case "Samedi": 
        res = 6;
        break;
      case "Dimanche":
        res = 0;
        break;     
    }
    return res;
  }


  
  getUPCparams(){
    setTimeout(async ()=>{   
      await this.upc.client.readHoldingRegisters(40072,100).then(res =>{

        //programme 1 
        var tab=[res[0],res[1]];
        this.pStart.push(this.upc.client.registerToUint32(tab));
    
        tab = [res[2],res[3]];
        this.pEnd.push(this.upc.client.registerToUint32(tab));
   
        tab = [res[4]];
        this.frequency2.push(this.upc.client.registerToUint32(tab));
        
        tab = [res[5]];
        this.intensity.push(this.upc.client.registerToUint32(tab));
        
        

        //programme 2
        tab=[res[6],res[7]];
        this.pStart.push(this.upc.client.registerToUint32(tab));
        tab = [res[8],res[9]];
        this.pEnd.push(this.upc.client.registerToUint32(tab));
        tab = [res[10]];
        this.frequency2.push(this.upc.client.registerToUint32(tab));
        tab = [res[11]];
        this.intensity.push(this.upc.client.registerToUint32(tab));

        //programme 3
        tab=[res[12],res[13]];
        this.pStart.push(this.upc.client.registerToUint32(tab));
        tab = [res[14],res[15]];
        this.pEnd.push(this.upc.client.registerToUint32(tab));
        tab = [res[16]];
        this.frequency2.push(this.upc.client.registerToUint32(tab));
        tab = [res[17]];
        this.intensity.push(this.upc.client.registerToUint32(tab));

        //programme 4
        tab=[res[18],res[19]];
        this.pStart.push(this.upc.client.registerToUint32(tab));
        tab = [res[20],res[21]];
        this.pEnd.push(this.upc.client.registerToUint32(tab));
        tab = [res[22]];
        this.frequency2.push(this.upc.client.registerToUint32(tab));
        tab = [res[23]];
        this.intensity.push(this.upc.client.registerToUint32(tab));

        //programme 5
        tab=[res[24],res[25]];
        this.pStart.push(this.upc.client.registerToUint32(tab));
        tab = [res[26],res[27]];
        this.pEnd.push(this.upc.client.registerToUint32(tab));
        tab = [res[28]];
        this.frequency2.push(this.upc.client.registerToUint32(tab));
        tab = [res[29]];
        this.intensity.push(this.upc.client.registerToUint32(tab));

        //programme 6
        tab=[res[30],res[31]];
        this.pStart.push(this.upc.client.registerToUint32(tab));
        tab = [res[32],res[33]];
        this.pEnd.push(this.upc.client.registerToUint32(tab));
        tab = [res[34]];
        this.frequency2.push(this.upc.client.registerToUint32(tab));
        tab = [res[35]];
        this.intensity.push(this.upc.client.registerToUint32(tab));

        //programme 7
        tab=[res[36],res[37]];
        this.pStart.push(this.upc.client.registerToUint32(tab));
        tab = [res[38],res[39]];
        this.pEnd.push(this.upc.client.registerToUint32(tab));
        tab = [res[40]];
        this.frequency2.push(this.upc.client.registerToUint32(tab));
        tab = [res[41]];
        this.intensity.push(this.upc.client.registerToUint32(tab));

        //programme 8
        tab=[res[42],res[43]];
        this.pStart.push(this.upc.client.registerToUint32(tab));
        tab = [res[44],res[45]];
        this.pEnd.push(this.upc.client.registerToUint32(tab));
        tab = [res[46]];
        this.frequency2.push(this.upc.client.registerToUint32(tab));
        tab = [res[47]];
        this.intensity.push(this.upc.client.registerToUint32(tab));

        //programme 9
        tab=[res[48],res[49]];
        this.pStart.push(this.upc.client.registerToUint32(tab));
        tab = [res[50],res[51]];
        this.pEnd.push(this.upc.client.registerToUint32(tab));
        tab = [res[52]];
        this.frequency2.push(this.upc.client.registerToUint32(tab));
        tab = [res[53]];
        this.intensity.push(this.upc.client.registerToUint32(tab));

        //programme 10
        tab=[res[54],res[55]];
        this.pStart.push(this.upc.client.registerToUint32(tab));
        tab = [res[56],res[57]];
        this.pEnd.push(this.upc.client.registerToUint32(tab));
        tab = [res[58]];
        this.frequency2.push(this.upc.client.registerToUint32(tab));
        tab = [res[59]];
        this.intensity.push(this.upc.client.registerToUint32(tab));

      }) 
       /*             
      //Program 1
      await this.upc.client.getIntFromHoldingRegister(40072,2).then(res=>{
        this.pStart[0]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40074,2).then(res=>{
        this.pEnd[0]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40076,1).then(res=>{
        this.frequency2[0]=this.frequencyOptions[this.convertDaysCode(res)];                     
      })
      await this.upc.client.getIntFromHoldingRegister(40077,1).then(res=>{
        this.intensity[0]=res;
      })

      //Program 2
      await this.upc.client.getIntFromHoldingRegister(40078,2).then(res=>{
        this.pStart[1]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40080,2).then(res=>{
        this.pEnd[1]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40082,1).then(res=>{
        this.frequency2[1]=this.frequencyOptions[this.convertDaysCode(res)];                    
      })
      await this.upc.client.getIntFromHoldingRegister(40083,1).then(res=>{
        this.intensity[1]=res;
      })

      //Program 3
      await this.upc.client.getIntFromHoldingRegister(40084,2).then(res=>{
        this.pStart[2]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40086,2).then(res=>{
        this.pEnd[2]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40088,1).then(res=>{
        this.frequency2[2]=this.frequencyOptions[this.convertDaysCode(res)];                  
      })
      await this.upc.client.getIntFromHoldingRegister(40089,1).then(res=>{
        this.intensity[2]=res;
      })
      
      //Program 4
      await this.upc.client.getIntFromHoldingRegister(40090,2).then(res=>{
        this.pStart[3]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40092,2).then(res=>{
        this.pEnd[3]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40094,1).then(res=>{
        this.frequency2[3]=this.frequencyOptions[this.convertDaysCode(res)];                   
      })
      await this.upc.client.getIntFromHoldingRegister(40095,1).then(res=>{
        this.intensity[3]=res;
      })
      
      //Program 5
      await this.upc.client.getIntFromHoldingRegister(40096,2).then(res=>{
        this.pStart[4]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40098,2).then(res=>{
        this.pEnd[4]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40100,1).then(res=>{
        this.frequency2[4]=this.frequencyOptions[this.convertDaysCode(res)];                       
      })
      await this.upc.client.getIntFromHoldingRegister(40101,1).then(res=>{
        this.intensity[4]=res;
      })

      //Program 6
      await this.upc.client.getIntFromHoldingRegister(40102,2).then(res=>{
        this.pStart[5]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40104,2).then(res=>{
        this.pEnd[5]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40106,1).then(res=>{
        this.frequency2[5]=this.frequencyOptions[this.convertDaysCode(res)];                        
      })
      await this.upc.client.getIntFromHoldingRegister(40107,1).then(res=>{
        this.intensity[5]=res;
      })

      //Program 7
      await this.upc.client.getIntFromHoldingRegister(40108,2).then(res=>{
        this.pStart[6]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                     
      })
      await this.upc.client.getIntFromHoldingRegister(40110,2).then(res=>{
        this.pEnd[6]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40112,1).then(res=>{
        this.frequency2[6]=this.frequencyOptions[this.convertDaysCode(res)];                      
      })
      await this.upc.client.getIntFromHoldingRegister(40113,1).then(res=>{
        this.intensity[6]=res;
      })

      //Program 8
      await this.upc.client.getIntFromHoldingRegister(40114,2).then(res=>{
        this.pStart[7]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40116,2).then(res=>{
        this.pEnd[7]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40118,1).then(res=>{
        this.frequency2[7]=this.frequencyOptions[this.convertDaysCode(res)];                    
      })
      await this.upc.client.getIntFromHoldingRegister(40119,1).then(res=>{
        this.intensity[7]=res;
      })

      //Program 9
      await this.upc.client.getIntFromHoldingRegister(40120,2).then(res=>{
        this.pStart[8]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40122,2).then(res=>{
        this.pEnd[8]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40124,1).then(res=>{
        this.frequency2[8]=this.frequencyOptions[this.convertDaysCode(res)];                    
      })
      await this.upc.client.getIntFromHoldingRegister(40125,1).then(res=>{
        this.intensity[8]=res;
      })

      //Program 10
      await this.upc.client.getIntFromHoldingRegister(40126,2).then(res=>{
        this.pStart[9]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40128,2).then(res=>{
        this.pEnd[9]=this.secondsToHoursMinutes(res);
        this.cg.detectChanges();                      
      })
      await this.upc.client.getIntFromHoldingRegister(40130,1).then(res=>{
        this.frequency2[9]=this.frequencyOptions[this.convertDaysCode(res)];                 
      })
      await this.upc.client.getIntFromHoldingRegister(40131,1).then(res=>{
        this.intensity[9]=res;
      })*/
    },5000)
  }
  


 async onEdit(i){ //set UPC params    
       if(this.finishRead){
        switch(i){
          case 0:         
            //Program 1
            
            await this.upc.client.setIntInHoldingRegister(40072,2,this.hoursMinutesToSeconds(this.pStart[0])).then(data=>{ //40072 correspond à starttime 1, sa taille est de 2, exprimé en secondes 
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            
            await this.upc.client.setIntInHoldingRegister(40074,2,this.hoursMinutesToSeconds(this.pEnd[0])).then(data=>{//40074 correspond à end time 1, sa taille est de 2, exprimé en secondes 
             
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40076,1,this.reverseConvertDaysCode(this.frequency2[0])).then(data=>{//daycode 1, taille 1
             
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40077,1,this.intensity[0]).then(data=>{//intensité premier programme, taille 1
             
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            break;
  
          case 1:
                //Program 2
            await this.upc.client.setIntInHoldingRegister(40078,2,this.hoursMinutesToSeconds(this.pStart[1])).then(data=>{ //40072 correspond à starttime 1, sa taille est de 2, exprimé en secondes 
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            
            await this.upc.client.setIntInHoldingRegister(40080,2,this.hoursMinutesToSeconds(this.pEnd[1])).then(data=>{//40074 correspond à end time 1, sa taille est de 2, exprimé en secondes 
            
            }).catch(err=>{
              alert(JSON.stringify(err));
            });;
            await this.upc.client.setIntInHoldingRegister(40082,1,this.reverseConvertDaysCode(this.frequency2[1])).then(data=>{//daycode 1, taille 1
            
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40083,1,this.intensity[1]).then(data=>{//intensité premier programme, taille 1
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            break;
  
          case 2: 
              //Program 3
            await this.upc.client.setIntInHoldingRegister(40084,2,this.hoursMinutesToSeconds(this.pStart[2])).then(data=>{ //40072 correspond à starttime 1, sa taille est de 2, exprimé en secondes 
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            
            await this.upc.client.setIntInHoldingRegister(40086,2,this.hoursMinutesToSeconds(this.pEnd[2])).then(data=>{//40074 correspond à end time 1, sa taille est de 2, exprimé en secondes 
             
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40088,1,this.reverseConvertDaysCode(this.frequency2[2])).then(data=>{//daycode 1, taille 1
           
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40089,1,this.intensity[2]).then(data=>{//intensité premier programme, taille 1
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            break;
  
          case 3:
                //Program 4
            await this.upc.client.setIntInHoldingRegister(40090,2,this.hoursMinutesToSeconds(this.pStart[3])).then(data=>{ //40072 correspond à starttime 1, sa taille est de 2, exprimé en secondes 
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            
            await this.upc.client.setIntInHoldingRegister(40092,2,this.hoursMinutesToSeconds(this.pEnd[3])).then(data=>{//40074 correspond à end time 1, sa taille est de 2, exprimé en secondes 
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40094,1,this.reverseConvertDaysCode(this.frequency2[3])).then(data=>{//daycode 1, taille 1
     
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40095,1,this.intensity[3]).then(data=>{//intensité premier programme, taille 1
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            break;
  
          case 4:
            //Program 5
            await this.upc.client.setIntInHoldingRegister(40096,2,this.hoursMinutesToSeconds(this.pStart[4])).then(data=>{ //40072 correspond à starttime 1, sa taille est de 2, exprimé en secondes 
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
  
            await this.upc.client.setIntInHoldingRegister(40098,2,this.hoursMinutesToSeconds(this.pEnd[4])).then(data=>{//40074 correspond à end time 1, sa taille est de 2, exprimé en secondes 
           
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40100,1,this.reverseConvertDaysCode(this.frequency2[4])).then(data=>{//daycode 1, taille 1
           
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40101,1,this.intensity[4]).then(data=>{//intensité premier programme, taille 1
            
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            break;
  
          case 5:
            //Program 6
            await this.upc.client.setIntInHoldingRegister(40102,2,this.hoursMinutesToSeconds(this.pStart[5])).then(data=>{ //40072 correspond à starttime 1, sa taille est de 2, exprimé en secondes 
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            
            await this.upc.client.setIntInHoldingRegister(40104,2,this.hoursMinutesToSeconds(this.pEnd[5])).then(data=>{//40074 correspond à end time 1, sa taille est de 2, exprimé en secondes 
             
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40106,1,this.reverseConvertDaysCode(this.frequency2[5])).then(data=>{//daycode 1, taille 1
             
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40107,1,this.intensity[5]).then(data=>{//intensité premier programme, taille 1
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            break;
  
          case 6:
            //Program 7
            await this.upc.client.setIntInHoldingRegister(40108,2,this.hoursMinutesToSeconds(this.pStart[6])).then(data=>{ //40072 correspond à starttime 1, sa taille est de 2, exprimé en secondes 
     
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
  
            await this.upc.client.setIntInHoldingRegister(40110,2,this.hoursMinutesToSeconds(this.pEnd[6])).then(data=>{//40074 correspond à end time 1, sa taille est de 2, exprimé en secondes 
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40112,1,this.reverseConvertDaysCode(this.frequency2[6])).then(data=>{//daycode 1, taille 1
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40113,1,this.intensity[6]).then(data=>{//intensité premier programme, taille 1
         
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            break;
  
          case 7:          
            //Program 8
            await this.upc.client.setIntInHoldingRegister(40114,2,this.hoursMinutesToSeconds(this.pStart[7])).then(data=>{ //40072 correspond à starttime 1, sa taille est de 2, exprimé en secondes 
         
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            
            await this.upc.client.setIntInHoldingRegister(40116,2,this.hoursMinutesToSeconds(this.pEnd[7])).then(data=>{//40074 correspond à end time 1, sa taille est de 2, exprimé en secondes 
            
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40118,1,this.reverseConvertDaysCode(this.frequency2[7])).then(data=>{//daycode 1, taille 1
             
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40119,1,this.intensity[7]).then(data=>{//intensité premier programme, taille 1
             
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            break;
  
          case 8:
                //Program 9
            await this.upc.client.setIntInHoldingRegister(40120,2,this.hoursMinutesToSeconds(this.pStart[8])).then(data=>{ //40072 correspond à starttime 1, sa taille est de 2, exprimé en secondes 
   
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            
            await this.upc.client.setIntInHoldingRegister(40122,2,this.hoursMinutesToSeconds(this.pEnd[8])).then(data=>{//40074 correspond à end time 1, sa taille est de 2, exprimé en secondes 
            
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40124,1,this.reverseConvertDaysCode(this.frequency2[8])).then(data=>{//daycode 1, taille 1
             
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40125,1,this.intensity[8]).then(data=>{//intensité premier programme, taille 1
             
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            break;
  
          case 9:
                  //Program 10
            await this.upc.client.setIntInHoldingRegister(40126,2,this.hoursMinutesToSeconds(this.pStart[9])).then(data=>{ //40072 correspond à starttime 1, sa taille est de 2, exprimé en secondes 
           
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            
            await this.upc.client.setIntInHoldingRegister(40128,2,this.hoursMinutesToSeconds(this.pEnd[9])).then(data=>{//40074 correspond à end time 1, sa taille est de 2, exprimé en secondes 
            
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40130,1,this.reverseConvertDaysCode(this.frequency2[9])).then(data=>{//daycode 1, taille 1
           
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            await this.upc.client.setIntInHoldingRegister(40131,1,this.intensity[9]).then(data=>{//intensité premier programme, taille 1
              
            }).catch(err=>{
              alert(JSON.stringify(err));
            });
            break;
        }    
  
        this.getUPCparams();
        this.drawChartjs();
       }
      
      
    }
  

   
  
    drawChartjs(){
      
      var stringToIntProgrammes=[]
      var barColors=[]
      
      //console.log(this.programmes)
      
      this.programmes.forEach(function(prog){//pour chaque programme (programmes[0], programmes[1] etc)
        prog.forEach(function(element) {//pour chaque horaire (programmes[0][0],programmes[0][1],etc)
          var parsed=element.split(":")
          var p = parseInt(parsed[1],10)/60
          var p2 = parseInt(parsed[0])+p
          stringToIntProgrammes.push(p2)
          
        });
        
        
      
      });     
      
      //console.log("intensity :",this.intensity);
      //console.log("frequency :",this.frequency);
      
     
      
      this.intensity.forEach(intensityElement =>{
        switch (intensityElement) {
          case 0:
            barColors.push("#ffffff00")    
            break;        
          case 1:
            barColors.push("#D3D3D3")   
            break;  
          case 2:
            barColors.push("#CECECE")  
            break;   
          case 3:
            barColors.push("#C0C0C0") 
            break;    
          case 4:
            barColors.push("#A9A9A9")  
            break;   
          case 5:
            barColors.push("#9E9E9E")   
            break;  
          case 6:
            barColors.push("#8f8f8f")   
            break;  
          case 7:
            barColors.push("#808080")  
            break;   
          case 8:
            barColors.push("#696969")  
            break;   
          case 9:
            barColors.push("#303030")  
            break;   
          case 10:
            barColors.push("#130E0A")  
            break;  
        }  
      })
     //console.log(barColors);
      var data=[
        [stringToIntProgrammes[0],stringToIntProgrammes[1]],
        [stringToIntProgrammes[2],stringToIntProgrammes[3]],
        [stringToIntProgrammes[4],stringToIntProgrammes[5]],
        [stringToIntProgrammes[6],stringToIntProgrammes[7]],
        [stringToIntProgrammes[8],stringToIntProgrammes[9]],
        [stringToIntProgrammes[10],stringToIntProgrammes[11]],
        [stringToIntProgrammes[12],stringToIntProgrammes[13]],
        [stringToIntProgrammes[14],stringToIntProgrammes[15]],
        [stringToIntProgrammes[16],stringToIntProgrammes[17]],
        [stringToIntProgrammes[18],stringToIntProgrammes[19]]
      ];

      

      var ctx = 'myChart';
      var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels:["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9", "P10"],
          datasets: [
            {
              backgroundColor: barColors,          
              data: data, 
            },           
          ]
      },
        options: {
          legend: {
            display: false,
           

          },
          title: {
            display: true,
            text: 'Aube Crépuscule'
          },
          scales: {
            xAxes: [{
                             
               
              
                ticks: {
                    beginAtZero: true,
                    max: 24,
                    stepSize:6 
                },
                position: 'top' 
            }]
        }
        }
    });   
    }
}
