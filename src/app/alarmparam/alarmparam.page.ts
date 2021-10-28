import { Component, NgZone, OnInit,ChangeDetectorRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GlobalService } from '../api/global.service';
import { UPCModbus } from '../model/upcv3/upcmodbus';

@Component({
  selector: 'app-alarmparam',
  templateUrl: './alarmparam.page.html',
  styleUrls: ['./alarmparam.page.scss'],
})
export class AlarmparamPage  {
  upc : UPCModbus;
  alresbasse : boolean;
  seuilresbasse : number;
  alresvide : boolean;
  seuilfluxvide : number;
  periodtestvide : number;
  alpresentre : boolean;
  seuilpresentre : number;
  alpresortie : boolean;
  seuilpresortie : number;
  aldebco2 : boolean;
  seuildebco2 : number;
  alimret : boolean;
  alimcoup : boolean;
  name ="";
  redBackground = false;

  constructor(private global : GlobalService,
              private ngZone : NgZone,
              private platform : Platform
              ,private cd : ChangeDetectorRef) {
                this.global.checkMode()
               }
               ionViewWillEnter() {
                this.platform.ready().then(cordova=>{
                  if(cordova == "cordova") {
                    this.global.onConnectWiFi().then(res=>{
                         
            
                    //setTimeout(async ()=>{
                      
                      /*this.global.upcmodbus.client.getStringFromHoldingRegister(40001,10).then(res=>{
                        
                        localStorage.setItem("upcname",res);
                        this.redBackground = false;
                        this.cd.detectChanges();
                      }).catch(err=>{
                        //localStorage.removeItem("isConnected");
                        this.redBackground = true;
                        //localStorage.removeItem("isConnected");
                        alert("Veuillez vous connecter à l'UPC");
                        
                        this.cd.detectChanges();
                        //this.ngOnInit();
                      })*/
                      /*this.global.upcmodbus.client.getStringFromHoldingRegister(40045,10).then(res=>{
                  
                        localStorage.setItem("currentssid",res);
                       
                      })*/
                      this.alresbasse = this.global.upcmodbus.alarm.alrResLowEn;
                      this.alresvide = this.global.upcmodbus.alarm.alrResEmptyEn;
                      this.alpresentre = this.global.upcmodbus.alarm.alrPresInpEn;
                      this.alpresortie = this.global.upcmodbus.alarm.alrPresOutEn;
                      this.aldebco2 = this.global.upcmodbus.alarm.alrFlowAvgEn;
                      this.alimcoup = this.global.upcmodbus.alarm.alrPowDownEn;
                      this.alimret = this.global.upcmodbus.alarm.alrPowBackEn;
                      this.seuilresbasse = this.global.upcmodbus.alarm.alrResLowLevel;
                      this.seuilfluxvide = this.global.upcmodbus.alarm.alrResEmptyFlow;
                      this.seuilpresentre = this.global.upcmodbus.alarm.alrPresInpTol;
                      this.seuilpresortie = this.global.upcmodbus.alarm.alrPresOutTol;
                      this.seuildebco2 = this.global.upcmodbus.alarm.alrFlowSetTol;
                      this.periodtestvide = this.global.upcmodbus.alarm.alrResEmptyTest;
                      this.global.ssid = this.global.upcmodbus.communicationParameters.comGsmName;

                      
                      
                      
                      
                      
                      
                      
                      /*this.global.interval = setInterval(()=>{
                        this.global.upcmodbus.client.getIntFromHoldingRegister(40168,1).then(res=>{
                            this.redBackground = false;
                            this.cd.detectChanges();
                        }).catch(err=>{
                          this.redBackground = true;
                          //localStorage.removeItem("isConnected");
                          //alert("Veuillez vous connectez au WiFi de l'UPC")
                          this.cd.detectChanges();
                        })
                        if(this.redBackground) {
                          clearInterval(this.global.interval);
                          this.ionViewWillEnter();
                        }
                      },500)*/
                    //},2000)
                    })
                   
                  }
                })
              }
              
              changerAlrmResbasse(){
                var alrm = !(this.alresbasse == true ? 1:0);
               
                this.global.upcmodbus.client.setIntInHoldingRegister(40066,1,alrm).then(res=>{
                    this.global.upcmodbus.alarm.alrResLowEn = alrm;
                })
              }
              changeSeuilResBasse(){
                
                this.global.upcmodbus.client.setFloatInHoldingRegister(40227,this.seuilresbasse).then(res=>{
                   
                  this.global.upcmodbus.alarm.alrResLowLevel = this.seuilresbasse;
                    
                }).catch(err=>{
                  alert(JSON.stringify(err));
                })
              }
              changeAlrmResVide() {
                var alrm = !(this.alresvide == true ? 1:0);
                this.global.upcmodbus.client.setIntInHoldingRegister(40169,1,alrm).then(res=>{
                    this.global.upcmodbus.alarm.alrResEmptyEn = alrm;
                })
              }
              changeSeuilFluxVide() {
                this.global.upcmodbus.client.setFloatInHoldingRegister(40225,this.seuilfluxvide).then(res=>{
                  this.global.upcmodbus.alarm.alrResEmptyFlow = this.seuilfluxvide;
                })
              }
              changePeriodVide() {
              
                this.global.upcmodbus.client.setIntInHoldingRegister(40388,2,this.periodtestvide).then(res=>{
                    this.global.upcmodbus.alarm.alrResEmptyTest = this.periodtestvide;
                })
              }
              changeAlrmPresentree() {
                var alrm = !(this.alpresentre == true ?1:0);
                this.global.upcmodbus.client.setIntInHoldingRegister(40170,1,alrm).then(res=>{
                  this.global.upcmodbus.alarm.alrPresInpEn = alrm;
                })
              }
              changeSeuilPresentree() {
                this.global.upcmodbus.client.setFloatInHoldingRegister(40269,this.seuilpresentre).then(res=>{
                    this.global.upcmodbus.alarm.alrPresInpTol = this.seuilpresentre;
                })
              }
              changeAlrmResSortie() {
                var alrm = !(this.alpresortie == true ?1 : 0);
                this.global.upcmodbus.client.setIntInHoldingRegister(40171,1,alrm).then(res=>{
                    this.global.upcmodbus.alarm.alrPresOutEn = alrm;
                })
              }
              doRefresh(event) {
                this.ionViewWillEnter();
                event.target.complete();
              }
              changeSeuilPresSortie() {
                this.global.upcmodbus.client.setFloatInHoldingRegister(40291,this.seuilpresortie).then(res=>{
                    this.global.upcmodbus.alarm.alrPresOutTol = this.seuilpresortie;
                })
              }
              changeAlrmDebCo2() {
                var alrm = !(this.aldebco2 == true ? 1:0);
                this.global.upcmodbus.client.setIntInHoldingRegister(40172,1,alrm).then(res=>{
                    this.global.upcmodbus.alarm.alrFlowAvgEn = alrm;
                })
              }
              changeSeuilDebCo2() {
                this.global.upcmodbus.client.setFloatInHoldingRegister(40293,this.seuildebco2).then(res=>{
                  this.global.upcmodbus.alarm.alrFlowSetTol = this.seuildebco2;
                })
              }
              changeAlimRet() {
                var alrm = !(this.alimret == true ? 1:0);
                this.global.upcmodbus.client.setIntInHoldingRegister(40174,1,alrm).then(res=>{
                    this.global.upcmodbus.alarm.alrPowBackEn = alrm;
                })
              }
              changeAlimCoup() {
                var alrm = !(this.alimcoup == true ? 1:0);
                this.global.upcmodbus.client.setIntInHoldingRegister(40173,1,alrm).then(res=>{
                    this.global.upcmodbus.alarm.alrPowDownEn = alrm;
                })
              }

            

}