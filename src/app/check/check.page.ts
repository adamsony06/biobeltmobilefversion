import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Network } from '@ionic-native/network/ngx';
import { Platform, LoadingController } from '@ionic/angular';
import { GlobalService } from '../api/global.service';

declare var WifiWizard2: any;

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  upc : UPCModbus;
  co2PresOutRef = [];
  co2PresInp1 = [];
  cos2PresInp2 = [];
  co2PresOutSet = [];

  constructor(private platform : Platform,
              private loadingCTRL : LoadingController,
              private global : GlobalService,
              private ngZone :NgZone,
              private network : Network,
              private hotspot : Hotspot,
              private cd : ChangeDetectorRef) { }

  ngOnInit() {
    this.platform.ready().then(()=>{
      if(this.platform.is("ios")){
        WifiWizard2.iOSConnectNetwork("BBAM","BioBeltService").then(async item=>{
          var loadingCTRL = await this.loadingCTRL.create({
            message : "Connection à l'UPC en cours...",
            duration : 10000
          });
          loadingCTRL.present();
          this.global.isBBAM = true;
          this.platform.ready().then(async readySource=>{
            if (readySource == 'cordova') {
              this.upc = new UPCModbus(state => {
                this.ngZone.run(() => {
                  // Force refresh UI
                  
                    
                    //this.readDiffusionParameters();
                  
                });
              });
              this.network.onConnect().subscribe(async res=>{
                if (this.network.type === this.network.Connection.WIFI) {
                  await this.upc.client.connect();
                  setTimeout(()=>{
                    this.ngZone.run(async ()=>{
                      //Read parameters for check 40271 40291
                      for(var i =40271;i<40291;i+=2){
                          this.upc.client.getFloatFromHoldingRegister(i).then(res=>{
                            this.co2PresOutRef.push(res);
                          })
                      }
                      this.cd.detectChanges();
                      // 40229 - 40249
                      for(var j = 40229;j<40249;j+=2) {
                        this.upc.client.getFloatFromHoldingRegister(j).then(res=>{
                          this.co2PresInp1.push(res/1000);
                        })
                      }
                      this.cd.detectChanges();
                      for(var k = 40249;k<40269;k+=2){
                        this.upc.client.getFloatFromHoldingRegister(k).then(res=>{
                          this.cos2PresInp2.push(res/1000);
                        })
                      }
                      this.cd.detectChanges();
                      for(var l = 40356;l<40376;l+=2){
                        this.upc.client.getFloatFromHoldingRegister(l).then(res=>{
                          this.co2PresOutSet.push(res/1000);
                        })
                      }
                      this.cd.detectChanges();
                    })
                  },5000)
                }
              })
            }
          })
        })
      } else if (this.platform.is("android")){
          this.hotspot.connectToWifi("BBAM","BioBeltService").then(async res=>{
            var loading = await this.loadingCTRL.create({
              message : "Connection à l'UPC en cours...",
              duration : 10000
            })
            loading.present();
            this.global.isBBAM = true;
            this.platform.ready().then(
              async readySource=>{
                if (readySource == 'cordova') {
                  this.upc = new UPCModbus(state => {
                    this.ngZone.run(() => {
                      // Force refresh UI
                      
                        
                        //this.readDiffusionParameters();
                      
                    });
                  });
                }
                await this.upc.client.connect();

                setTimeout(()=>{
                    //Read parameters for check 40271 40291
                    for(var i =40271;i<40291;i+=2){
                      this.upc.client.getFloatFromHoldingRegister(i).then(res=>{
                        this.co2PresOutRef.push(res);
                      })
                    }
                    this.cd.detectChanges();
                    // 40229 - 40249
                    for(var j = 40229;j<40249;j+=2) {
                      this.upc.client.getFloatFromHoldingRegister(j).then(res=>{
                        this.co2PresInp1.push(res/1000);
                      })
                    }
                    this.cd.detectChanges();
                    for(var k = 40249;k<40269;k+=2){
                      this.upc.client.getFloatFromHoldingRegister(k).then(res=>{
                        this.cos2PresInp2.push(res/1000);
                      })
                    }
                    this.cd.detectChanges();
                    for(var l = 40356;l<40376;l+=2){
                      this.upc.client.getFloatFromHoldingRegister(l).then(res=>{
                        this.co2PresOutSet.push(res/1000);
                      })
                    }
                    this.cd.detectChanges();
                },5000)
              }
            )
          })
      }
    })
    
  }

}
