import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { GlobalService } from '../api/global.service';

declare var WifiWizard2: any;

@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {
  upc : UPCModbus;
  mode = "";
  level = 0;
  ber = 0;
  bertab = [];
  fw = 0;
  levelTab = [];
  dureTab = [];

  constructor(private platform : Platform, private global : GlobalService, private loadingCTRL : LoadingController,private hotspot : Hotspot,private ngZone : NgZone, private cd : ChangeDetectorRef) { }

  ngOnInit() {
    this.platform.ready().then(async ()=>{
      /*if( this.platform.is('ios')){
        WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async ()=>{
          var loading = await this.loadingCTRL.create({
            message : "Connection à l'UPC en cours...",
            duration : 10000
          })
          loading.present();
          this.global.isBBAM = true;
          this.upc = new UPCModbus(state => {
            this.ngZone.run(() => {
              // Force refresh UI
              
                
                //this.readDiffusionParameters();
              
            });
          });
          setTimeout(async ()=>{
                  await this.upc.client.connect();

                  this.readConnectionParams();
                  loading.dismiss();
          },5000)
          
        })
      }*/ //else if (this.platform.is("android")){
          //this.hotspot.connectToWifi("BBAM","BioBeltService").then(async ()=>{
            var loading = await this.loadingCTRL.create({
              message : "Connection à l'UPC en cours...",
              duration : 10000
            })
            loading.present();
            this.global.isBBAM = true;
            this.upc = new UPCModbus(state => {
              this.ngZone.run(() => {
                // Force refresh UI
                
                  
                  //this.readDiffusionParameters();
                
              });
            });
            await this.upc.client.connect();

            this.readConnectionParams();
            loading.dismiss();
          /*}).catch(err=>{
            alert(JSON.stringify(err));
          })*/
      //}
    })
    
  }
  readConnectionParams() {
    //40414 40415 
    //41225 41239
    var intervalconnect =
    setInterval(()=>{
      //this.upc.client.readHoldingRegisters(41225,20).then(res=>{
        
        /*this.bertab.push(this.upc.client.registerToFloat([res[0],res[1]]));
        this.bertab.push(this.upc.client.registerToFloat([res[2],res[3]]));
        this.bertab.push(this.upc.client.registerToFloat([res[4],res[5]]));
        this.bertab.push(this.upc.client.registerToFloat([res[6],res[7]]));*/
        //this.upc.client.getIntFromHoldingRegister(40168,1).then(res=>{
          
          
            this.upc.client.readHoldingRegisters(41219,50).then(res=>{
              this.levelTab.push(this.upc.client.registerToFloat([res[0],res[1]]));
              this.levelTab.push(this.upc.client.registerToFloat([res[2],res[3]]));
              this.levelTab.push(this.upc.client.registerToFloat([res[4],res[5]]));


              this.bertab.push(this.upc.client.registerToFloat([res[6],res[7]]));
              this.bertab.push(this.upc.client.registerToFloat([res[8],res[9]]));
              this.bertab.push(this.upc.client.registerToFloat([res[10],res[11]]));
              this.bertab.push(this.upc.client.registerToFloat([res[12],res[13]]));

              //this.dureTab.push(this.upc.client.registerToFloat([res[14],res[15]]));
              this.dureTab.push(this.upc.client.registerToFloat([res[16],res[17]]));
              this.dureTab.push(this.upc.client.registerToFloat([res[18],res[19]]));
              this.dureTab.push(this.upc.client.registerToFloat([res[20],res[21]]));

            })
          
          
        //})
        this.upc.client.readHoldingRegisters(40414,10).then(res=>{
          var connect = this.upc.client.registerToUint32([res[0]]);
          switch(connect) {
            case 0: this.mode = 'Non enregistré';this.ber = 0;
            case 1: this.mode =  '2G GPRS'; this.ber = this.bertab[0];
            case 2: this.mode =  '2G EDGE'; this.ber = this.bertab[1];
            case 3: this.mode =  '3G WCDMA';this.ber = this.bertab[2];
            case 4: this.mode =  '3G HSDPA';this.ber = this.bertab[2];
            case 5: this.mode =  '3G HSUPA';this.ber = this.bertab[2];
            case 6: this.mode =  '3G HSDPA/HSUPA';this.ber = this.bertab[2];
            case 7: this.mode =  '4G';this.ber = this.bertab[3];
          }
          this.level = this.upc.client.registerToUint32([res[1]]);
          if(this.level > 500) {
            this.level = 0;
          }
          this.cd.detectChanges();
          
        }).catch(err=>{
          alert("Veuillez vous connecter à BBAM");
          this.global.ssid = "ADMIN";
          this.global.isBBAM = false;
          clearInterval(intervalconnect);
        })
    //})
    
      
    },500)
    
  }

}
