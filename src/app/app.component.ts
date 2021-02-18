import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Upcv3serviceService } from './api/upcv3service.service';
import { Code } from './api/ApiResponse';
import { GlobalService } from './api/global.service';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Installation',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Visite Technique',
      url: '/list',
      icon: 'list'
    },
    
    {
      title: 'Bouteilles',
      icon:'barcode',
      url : "/optionbottle",
    },
    {
      title:'Programmation',
      icon : 'snow',
      url : "/synchro"
    },
    {
      title : 'Réglages Pression',
      url : '/adjustment'
    },
    {
      title : "Max/Min",
      url : "/controldiff"
    },
    {
      title : "Contrôle Diff",
      url : "/cdiff"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    private upcv3Service : Upcv3serviceService,
    private global : GlobalService,
    private hotspot: Hotspot
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      var token = localStorage.getItem("token");
      this.upcv3Service.getUPC3(token).subscribe(res=>{
        if(res.code == Code.UPCV3_RECOVERED){
          
          localStorage.setItem("upc3",JSON.stringify(res.result));
        }
      })

    });
  }
  onClearInterval() {
    
    clearInterval(this.global.interval);
  }
  /*onClick(url) {
    
    //this.navCtrl.navigateForward("listecommande/encours",{replaceUrl : true});
    this.router.navigate([url]);
  }*/
  
}
