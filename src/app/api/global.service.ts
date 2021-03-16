import { Injectable } from '@angular/core';
import { UPCV3 } from '../model/upcv3/upcv3';
import { Platform, LoadingController } from '@ionic/angular';
import { Upcv3serviceService } from './upcv3service.service';
declare var WifiWizard2: any;

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public upc3:UPCV3;
  public op :string;
  public B1 = [];
  public B2 = [];
  public designationB1=[];
  public designationB2 = [];
  public ssid = "";
  public isBBAM = false;
  public proprietaire = "Bernard Dupont";
  public objetIntervention = [];
  public intervenants = [];

  interval : any;
  constructor(public platform : Platform, public loadingCTRL : LoadingController,private upcv3Service : Upcv3serviceService) { }

  public onSynchroB1B2(token) {
    if(localStorage.getItem("bottleB1")){
      var jsonB1 = JSON.parse(localStorage.getItem("bottleB1"));
      alert(JSON.stringify(jsonB1));
      jsonB1.endate = new Date().toISOString().substr(0,16);
      if(this.platform.is("ios")){
        WifiWizard2.iOSDisconnectNetwork("BBAM").then(async res=>{
          var loading = await this.loadingCTRL.create({
            message : "Synchronisation avec le Serveur en cours...",
            duration : 10000
          })
          loading.present();
          this.upcv3Service.addBottleBelt(jsonB1,token).subscribe(res=>{
            loading.dismiss();
          })
        })
      }
      else {
        WifiWizard2.disconnect("BBAM").then(async res=>{
          var loading = await this.loadingCTRL.create({
            message : "Synchronisation avec le Serveur en cours...",
            duration : 10000
          })
          loading.present();
          this.upcv3Service.addBottleBelt(jsonB1,token).subscribe(res=>{
            loading.dismiss();
          })
        })
      }
    }
    if(localStorage.getItem("bottleB2")){
      var jsonB2 = JSON.parse(localStorage.getItem("bottleB2"));
      jsonB2.endate = new Date().toISOString().substr(0,16);
      if(this.platform.is("ios")){
        WifiWizard2.iOSDisconnectNetwork(("BBAM")).then(async res=>{
          var loading = await this.loadingCTRL.create({
            message : "Synchronisation avec le Serveur en cours...",
            duration : 10000
          })
          loading.present();
          this.upcv3Service.addBottleBelt(jsonB2,token).subscribe(res=>{
            loading.dismiss();
          })
        })
      } else {
        WifiWizard2.disconnect("BBAM").then(async res=>{
          var loading = await this.loadingCTRL.create({
            message : "Synchronisation avec le Serveur en cours...",
            duration : 10000
          })
          loading.present();
          this.upcv3Service.addBottleBelt(jsonB2,token).subscribe(res=>{
            loading.dismiss();
          })
        })
      }
    }
  }
}
