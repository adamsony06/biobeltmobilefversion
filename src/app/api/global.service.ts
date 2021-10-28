import { Injectable, NgZone } from '@angular/core';
import { UPCV3 } from '../model/upcv3/upcv3';
import { Platform, LoadingController, ToastController, AlertController, Events } from '@ionic/angular';
import { Upcv3serviceService } from './upcv3service.service';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Storage } from '@ionic/storage';
import { User } from '../model/user';
import {  Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { resolve } from 'url';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
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
  public upcmodbus: UPCModbus;
  public username = "";
  public password = "";
  public appPagesModeIntervention = [ 
    {
      title : "Logs",
      url : "/debug"
    },  
    {
      title : "Intervention sur Ceinture",
      url : "/interventionceinture",
      icon : "hammer"
    },
    {
      title : "Paramètres Généraux UPC",
      url : "/namepiege"
    },
    {
      title : "Initialisation / Echange boitier UPC",
      url : "/initechangeboitierupc"
    },
    {
      title : "Modification du nombre de pièges",
      url : "/modifnbpieges"
    },
    {
      title : "Vérification débits pièges individuels",
      url : "/verifpiegesindividuels"
    },
    {
      title: 'Changement de bouteilles sur ceinture',
      url: '/addbottleceint',
      icon: 'barcode'
    }, 
    {
      title: 'Réglage des détendeurs',
      url: '/adjustment',
      icon: 'return-right'
    },
    {
      title : "Contrôle débits Mini/Maxi",
      url : "/controldiff",
      icon : "infinite",
    },
    {
      title: 'Programmation',
      icon:'sunny',
      url : "/synchro",
    },
    {
      title : "Etat de la Connexion",
      icon : "globe",
      url : "/connection"
    },
    {
      title : "Contrôle Diffusion",
      url : "/cdiff"
    },
    {
      title : "Mesure des pressions de sortie",
      url : "/check",
    },
    {
      title : "Paramètre de Communication",
      url : "/comunicationparam",
      icon : "wifi"
    },
    {
      title : "Paramètre d'Alarme",
      url : "/alarmparam",
      icon : "alarm"
    },
    {
      title : "Commentaires",
      url : "/commentaires"
    },
    {
      title : "Rapport de visite",
      url : "/rapportvisite"
    },
    {
      title : "Fin d'intervention",
      url : "/finintervention"
    }

    
  ];

  public appPagesModeMvtBouteilles = [    
    {
      title : "Mouvements de bouteilles",
      url : "/optionbottle"
    }    
  ];

  public appPagesModeTest = [ 
    {
      title : "Logs",
      url : "/debug"
    },       
    {
      title : "Paramètres Généraux UPC",
      url : "/namepiege"
    },
    {
      title : "Initialisation / Echange boitier UPC",
      url : "/initechangeboitierupc"
    },
    {
      title : "Modification du nombre de pièges",
      url : "/modifnbpieges"
    },
    {
      title : "Vérification débits pièges individuels",
      url : "/verifpiegesindividuels"
    },
    {
      title: 'Changement de bouteilles sur ceinture',
      url: '/addbottleceint',
      icon: 'barcode'
    }, 
    {
      title: 'Réglage des détendeurs',
      url: '/adjustment',
      icon: 'return-right'
    },
    {
      title : "Contrôle débits Mini/Maxi",
      url : "/controldiff",
      icon : "infinite",
    },
    {
      title: 'Programmation',
      icon:'sunny',
      url : "/synchro",
    },
    {
      title : "Etat de la Connexion",
      icon : "globe",
      url : "/connection"
    },
    {
      title : "Contrôle Diffusion",
      url : "/cdiff"
    },
    {
      title : "Mesure des pressions de sortie",
      url : "/check",
    },
    {
      title : "Paramètre de Communication",
      url : "/comunicationparam",
      icon : "wifi"
    },
    {
      title : "Paramètre d'Alarme",
      url : "/alarmparam",
      icon : "alarm"
    }    
  ];
  pages = [];


  interval : any;
  function: any;
  logs = [];
  mode=""; 
  lectureCycliqueEnCours = false;
  lectureStatiqueEnCours =false;
  ecritureEnCours = false;
  statutConnexion = "Aucune";
  connexionRequise = "Aucune";
  currentssid;
  public perteConnexion: boolean;
  global: any;
  upcname="";
  appelOnConnectModbus = false;
  needToCheckState = false;
  needToCheckFlags = false;
  intv: NodeJS.Timer;
  startReadDate;
  intervalOnreadStatique: NodeJS.Timer;
  intervalOnReadCyclique: NodeJS.Timer;
  needToCallOnReadStatique = false;
  needToCallOnReadCyclique = false;
  onConnectEnCours = false;
  count;
 
 
  
  constructor(
    public platform : Platform, 
    public loadingCTRL : LoadingController,
    private upcv3Service : Upcv3serviceService,
    private hotspot :Hotspot,
    private ngZone : NgZone,
    private storage : Storage, 
    private upc3serv : Upcv3serviceService,
    private toastCtrl : ToastController,
    public alertController: AlertController,
    private router : Router,
    private network: Network,
    private diagnostic: Diagnostic,
    private events : Events) { }


  public onSynchroB1B2(token) {
    if(localStorage.getItem("bottleB1")){
      var jsonB1 = JSON.parse(localStorage.getItem("bottleB1"));
      //alert(JSON.stringify(jsonB1));
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
        this.upcv3Service.addBottleBelt(jsonB1,token).subscribe(res=>{
            alert(JSON.stringify(res))
        },err =>{
          JSON.stringify(err)
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
  async ConnectError() {
    let toast = await this.toastCtrl.create({message : "Veuillez vous connectez au WiFi de l'UPC",duration : 4000,position : "middle"})

    toast.present();
  }
  async UpcReadWriteError() {
    let toast = await this.toastCtrl.create({message : "Echec lors de la communication avec l'UPC", duration : 4000, position : "middle"});

    toast.present();
  }
  async UpcErrorCoAuto() {
    let toast = await this.toastCtrl.create({message : "Erreur lors de la connexion automatique ! Veuillez vous connecter manuellement via les Réglages!",duration : 4000,position: "middle"});

    toast.present();
  }
  // Ne pas Enregistrer point d'accès si l'application en sommeil
  onConnectWiFi() {
    return new Promise<void>(async (resolve, reject)=>{
      if(!localStorage.getItem("ssid")){
       /* let alert = await this.alertController.create({message : "Veuillez Vous connectez au WiFi de l'UPC !",
                                                       buttons : [{
                                                         text : "OK",
                                                         handler : ()=>{
                                                          WifiWizard2.getConnectedSSID().then(res=>{
                                                             localStorage.setItem("ssid",res);
                                                           })
                                                           
                                                         }
                                                       }/*,{
                                                        text : "NON",
                                                        handler : ()=>{
                                                         this.onConnectWiFi();
                                                        }
                                                       }*//*] 
                                                      })
        await alert.present();*/
      }
    

      
      var ssid = localStorage.getItem("ssid") ? localStorage.getItem("ssid") :"BBAM";
      var password = localStorage.getItem("password") ? localStorage.getItem("password") : "BioBeltService";
    if(this.platform.is("android")){
      
      //this.hotspot.isConnectedToInternet().then(res=>{
        if (!localStorage.getItem("isConnected")){         
         this.hotspot.connectToWifi(ssid,password).then(res=>{
            this.upcmodbus =  new UPCModbus(state => {
              
              if (state == 2) {
                var currentState = 2;
                setTimeout(()=>{
                  
                  if (currentState == state){
                    //alert("Vous n'êtes pas connecté à un UPC !");
                  }
                },1000)
              }
              if (state == 1){
                this.ngZone.run(() => {
                  // Force refresh UI
                  
                  localStorage.setItem("isConnected","true");
                  resolve();
                    //this.readDiffusionParameters();
                  
                });
              }
              
            });
            
            
          }).catch(err=>{
            alert("Echec de Connexion à l'UPC ! Veuillez recharger la page !");
            alert(err)
            
          })
        }else {
          
          resolve();
        }
        
      //})
    } else if(this.platform.is("ios")){
      
      if (!localStorage.getItem("isConnected")){
        
          WifiWizard2.iOSConnectNetwork(ssid,password).then(res=>{
            //setTimeout(()=>{
              var bool = false;
              this.upcmodbus = new UPCModbus(state => {
                
                if (state == 2) {
                  bool = true;
                  setTimeout(() => {
                     if (bool) {
                       localStorage.removeItem("isConnected");
                       //alert("Vous n'êtes pas connecté à un UPC");
                     } 
                  }, 1000);
                }
                if (state == 1) {
                  bool = false;
                  this.ngZone.run(() => {
                    // Force refresh UI
                    //this.upcmodbus.getAllVars();
                    //alert(JSON.stringify(this.upcmodbus));
                    
                    localStorage.setItem("isConnected","true");
                    resolve();  
                      //this.readDiffusionParameters();
                    
                  });
                }
                
              });
            //},5000)
              
              
              
              
            
            
          }).catch(err=>{
            
            //alert("Echec de Connexion à l'UPC ! Veuillez recharger la page !");
            //this.UpcErrorCoAuto();
            
            localStorage.setItem("isConnected","true");
            resolve();
          })
        
        
      } else {
       
        resolve();
      }
    } 
  
  })
  
  }
  onConnectInternet() {
    return new Promise<void>(async (resolve, reject)=>{
      if(this.platform.is("ios")){
        resolve();
        /*WifiWizard2.iOSDisconnectNetwork(localStorage.getItem("ssid")).then(async res=>{
          
          await this.storage.get('user').then(val => this.username = val);
          await this.storage.get('pass').then(val => this.password = val);
          await this.storage.get('remember').then(async res=>{
      if (res === 1){
        /*const loading = await this.loadingCtrl.create({
          message: 'Connexion en cours...'
        });
        loading.present();*/
        
          
            
              /*let user = new User();
              user.username = this.username;
              user.password = this.password;
    
              this.upc3serv.login(user).subscribe(async res=>{
                //loading.dismiss();
               
                if(res.result){
                  localStorage.setItem("token",res.result);
                  localStorage.removeItem("ssid");
                  resolve();
                }
                else {
                  // Check code
                  switch (res.code) {
                    case 'TOKEN_WRONG_IDENTIFIERS':
                      let toast = await this.toastCtrl.create({
                        message: 'Identifiants incorrects !',
                        duration: 3000,
                        position: 'top'
                      });
                      toast.present();
                      break;
                  }
                  //this.onBBAM();
                  resolve();
                }
              },
              async err => {
                localStorage.removeItem("ssid");
                resolve();
                // Hide loading
                //loading.dismiss();
      
                /*let toast = await this.toastCtrl.create({
                  message: 'Impossible de se connecter à internet ! Connexion UPC !',
                  duration: 3000,
                  position: 'top'
                });
                toast.present()*/
                //this.onBBAM();
              /*})
            
          
          
          
        
      }
    });
        })*/
      } else if(this.platform.is("android")){
        this.hotspot.toggleWifi().then(async res=>{
          
          await this.storage.get('user').then(val => this.username = val);
          await this.storage.get('pass').then(val => this.password = val);
          await this.storage.get('remember').then(async res=>{
            
      if (res === 1){
        /*const loading = await this.loadingCtrl.create({
          message: 'Connexion en cours...'
        });
        loading.present();*/
        
      
        
         
          
            let user = new User();
            user.username = this.username;
            user.password = this.password;
  
            this.upc3serv.login(user).subscribe(async res=>{
              //loading.dismiss();
             
              if(res.result){
                localStorage.setItem("token",res.result);
                localStorage.removeItem("ssid");
                resolve();
              }
              else {
                // Check code
                switch (res.code) {
                  case 'TOKEN_WRONG_IDENTIFIERS':
                    let toast = await this.toastCtrl.create({
                      message: 'Identifiants incorrects !',
                      duration: 3000,
                      position: 'top'
                    });
                    toast.present();
                    break;
                }
                //this.onBBAM();
                resolve();
              }
            },
            async err => {
              localStorage.removeItem("ssid");
              resolve();
              // Hide loading
              //loading.dismiss();
    
              /*let toast = await this.toastCtrl.create({
                message: 'Impossible de se connecter à internet ! Connexion UPC !',
                duration: 3000,
                position: 'top'
              });
              toast.present()*/
              //this.onBBAM();
            })
          
        
          
          
        
      }
    });
        })
      }
      
    })
  }
  async checkNextPage(){   
    var urls = []; 
    var success :Boolean;
    const url = this.router.url; 
    const splittedUrl = url.split("/");    
    const urlFinal = splittedUrl[1];     
 
    var sequence = await this.storage.get("sequence")         
    if(sequence != undefined){
      if(sequence != ""){
        sequence.forEach((element) =>{  
          urls.push(element[2])  
        })
      }       
      if(urls.includes(urlFinal)){
        var pos = urls.indexOf(urlFinal)
        sequence[pos][1]=true; 
        this.storage.set("sequence", sequence)                      
        if(urls[pos+1]!=undefined){              
          this.storage.set("nexturl",urls[pos+1])          
          success = true           
        }                  
      }        
    }      
    return success;
  }

  checkMode(){
    var response;    
    switch(this.mode){
        case "intervention":
          this.pages = this.appPagesModeIntervention          
          break;
        case "mvtBouteilles": 
          this.pages = this.appPagesModeMvtBouteilles          
          break;
        case "modeTest":
          this.pages = this.appPagesModeTest
          break;
    }
    response = this.pages
    return response;   
  }

  onConnect(error) {
    this.onConnectEnCours = true;
    return new Promise(async (resolve, reject)=>{ 
      var d=new Date()
       this.logs.push(this.msToTime(d.getTime())+" - entrée fonction onConnect") //console.log(msToTime(300000))
     
        if(this.connexionRequise == "Aucune"){
          var d=new Date()
          this.logs.push(this.msToTime(d.getTime())+" - connexion requise : aucune") 
          resolve("")        
        }
        if(this.connexionRequise == "UPC"){
          var d=new Date()
          this.logs.push(this.msToTime(d.getTime())+" - connexion requise : UPC")       
          this.storage.get("ssid").then(res=>{
            this.ssid = res
            var d=new Date()
            this.logs.push(this.msToTime(d.getTime())+" - ssid stocké : "+this.ssid)
            this.diagnostic.isWifiEnabled().then(res =>{         
              if(res == true){ //WIFI activé
                var d=new Date()
                this.logs.push(this.msToTime(d.getTime())+" - wifi activé") 
                WifiWizard2.getConnectedSSID().then(res=>{ 
                  var d2=new Date()
                  this.logs.push(this.msToTime(d2.getTime())+" - wifi connecté") //WIFI connecté
                  this.currentssid = res;
                  var d=new Date() 
                  this.logs.push(this.msToTime(d.getTime())+" - ssid courant : "+this.currentssid)                    
                  if(this.ssid == undefined || this.ssid == ""){ //ssid vide 
                    var d=new Date()  
                    this.logs.push(this.msToTime(d.getTime())+" - ssid stocké vide : "+this.ssid)
                    this.appelOnConnectModbus = true;             
                    this.onConnectModbus().then(async ()=>{ //on tente une connexion modbus pour déterminer si c'est un upc
                      //connexion modbus réussie : c'est un upc
                      var d=new Date()
                      this.appelOnConnectModbus = false;    
                      this.logs.push(this.msToTime(d.getTime())+" - connexion Modbus réussie")
                      
                      await this.storage.set("ssid",this.currentssid) //le ssid par défaut devient celui auquel on est connecté
                      this.logs.push(this.msToTime(d.getTime())+" - ssid stocké devient ssid connecté")
                      this.ssid = this.currentssid 
                         
                      resolve("")
                    }).catch(err =>{                   
                      var d=new Date()
                      this.appelOnConnectModbus = false;
                      this.logs.push(this.msToTime(d.getTime())+" - connexion Modbus échouée")
                      resolve("")      
                    })
                  }
                  else{ //ssid non vide  
                    var d=new Date() 
                    this.logs.push(this.msToTime(d.getTime())+" - ssid stocké non vide")                          
                    if(this.currentssid == this.ssid){ //le ssid du réseau auquel on est connecté est le même que celui de la ceinture sélectionnée
                      var d=new Date()
                      this.logs.push(this.msToTime(d.getTime())+" - ssid courant = ssid stocké")
                      this.appelOnConnectModbus = true;  
                      this.onConnectModbus().then(()=>{
                        this.appelOnConnectModbus = false; 
                        this.logs.push(this.msToTime(d.getTime())+" - statut connexion devient UPC")
                        this.statutConnexion = "UPC"
                        resolve("")
                      }).catch(err =>{                   
                        var d=new Date()
                        this.appelOnConnectModbus = false;
                        this.logs.push(this.msToTime(d.getTime())+" - connexion Modbus échouée")
                        resolve("")      
                      })                      
                    }
                    else{ //le ssid du réseau auquel on est connecté est différent de celui de la ceinture sélectionnée
                      var d=new Date()
                      this.logs.push(this.msToTime(d.getTime())+" - ssid courant != ssid stocké")                      
                        if(this.platform.is("android")){
                          this.logs.push(this.msToTime(d.getTime())+" - android")                   
                                      
                          async () => {  
                            var d=new Date()
                            this.logs.push(this.msToTime(d.getTime())+" - in async")                                               
                            this.appelOnConnectModbus = true
                            this.onConnectModbus().then(async ()=>{
                              this.appelOnConnectModbus = false;
                              this.logs.push(this.msToTime(d.getTime())+" - connexion Modbus réussie")                      
                              await this.storage.set("ssid",this.currentssid) //le ssid par défaut devient celui auquel on est connecté
                              this.logs.push(this.msToTime(d.getTime())+" - ssid stocké devient ssid connecté")
                              this.ssid = this.currentssid                          
                              resolve("")
                            }).catch(err=>{
                              var d=new Date()                              
                              this.statutConnexion = "Aucune"
                              this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
                              this.logs.push(this.msToTime(d.getTime())+" - présentation alerte connexion upc : ")
                              if (!window.confirm("La page a besoin d'être connecté à l'UPC. Connectez-vous à l'UPC puis appuyez sur 'OK'.")) {
                               
                                  var d=new Date()
                                  this.logs.push(this.msToTime(d.getTime())+" - réponse utilisateur : annuler")
                                  this.connexionRequise="Aucune"
                                  resolve("")
                                                         
                              }
                              else{
                                var d=new Date()
                                this.logs.push(this.msToTime(d.getTime())+" - réponse utilisateur : OK")
                                resolve("")
                              }  
                            })
                          
                          }
                      /*}).catch(err=>{
                        var d=new Date()
                        this.logs.push(this.msToTime(d.getTime())+" - déconnexion du point d'accès échouée : "+JSON.stringify(err)) 
                        resolve("")
                      })*/
                      }
                      else{
                        if(this.platform.is("ios")){
                          async () => {  
                            var password= await this.storage.get("password")       
                         
                              var d=new Date()
                              this.logs.push(this.msToTime(d.getTime())+" - ios")   
                              this.appelOnConnectModbus = true;
                              this.onConnectModbus().then(async res=>{
                                var d=new Date()
                                this.appelOnConnectModbus = false;
                                this.logs.push(this.msToTime(d.getTime())+" - connexion Modbus réussie")
                                await this.storage.set("ssid",this.currentssid) //le ssid par défaut devient celui auquel on est connecté
                                this.logs.push(this.msToTime(d.getTime())+" - ssid stocké devient ssid connecté")
                                this.currentssid = this.ssid
                                resolve("")
                              }).catch(err=>{
                                var d=new Date()
                                this.appelOnConnectModbus = false;
                                this.logs.push(this.msToTime(d.getTime())+" - connexion Modbus échouée")
                                resolve("")   
                              })
                            
                          }
                        }
                      }
                      
                    }                  
                  
                }


              }).catch(()=>{
                var d=new Date()
                this.logs.push(this.msToTime(d.getTime())+" - wifi non connecté")
                if(this.ssid == undefined || this.ssid == ""){ //ssid vide 
                  this.statutConnexion = "Aucune";
                  var d=new Date()
                  this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
                  this.logs.push(this.msToTime(d.getTime())+" - présentation alerte connexion upc : ")
                  if (!window.confirm("La page a besoin d'être connecté à l'UPC. Connectez-vous à l'UPC puis appuyez sur 'OK'.")) {
                    
                      var d=new Date()
                      this.logs.push(this.msToTime(d.getTime())+" - réponse utilisateur : annuler")
                      this.connexionRequise="Aucune"
                      resolve("")
                                             
                  }
                  else{ 
                    var d=new Date()
                    this.logs.push(this.msToTime(d.getTime())+" - réponse utilisateur : OK")
                    resolve("")
                  }
                }
                else{//ssid non vide                   
                  WifiWizard2.disconnect().then(async ()=>{ //précaution pour le cas où la socket a mal été fermée (ex connexion/déconnexion manuelle à l'UPC)                    
                    var d=new Date()
                    this.logs.push(this.msToTime(d.getTime())+" - déconnexion du point d'accès réussie") 
                    var password= await this.storage.get("password")
                    WifiWizard2.connect(this.ssid,password).then(res=>{ //on tente une connexion au point d'accès
                      var d=new Date()
                      this.logs.push(this.msToTime(d.getTime())+" - connexion au point d'accès réussie")
                      this.currentssid = this.ssid;
                      this.logs.push(this.msToTime(d.getTime())+" - current ssid : "+this.ssid)                          
                      this.appelOnConnectModbus = true;
                      this.onConnectModbus().then(res =>{ // on tente une connexion modbus
                        //connexion modbus réussie   
                        var d=new Date()
                        this.appelOnConnectModbus = false;
                        this.logs.push(this.msToTime(d.getTime())+" - connexion Modbus réussie")
                        this.logs.push(this.msToTime(d.getTime())+" - current ssid = ssid connecté")
                        this.currentssid = this.ssid                       
                        resolve("")
                      }).catch(err =>{                       
                        var d=new Date()
                        this.appelOnConnectModbus = false;
                        this.logs.push(this.msToTime(d.getTime())+" - connexion Modbus échouée")
                        resolve("")      
                      })
                    }).catch(err =>{ //connexion au point d'accès échouée
                      this.perteConnexion = true;
                      var d=new Date()
                      this.logs.push(this.msToTime(d.getTime())+" - connexion au point d'accès échouée : "+JSON.stringify(err))
                      this.statutConnexion = "Aucune"
                      this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
                      this.logs.push(this.msToTime(d.getTime())+" - présentation alerte connexion upc : ")
                      if (!window.confirm("La page a besoin d'être connecté à l'UPC. Connectez-vous à l'UPC puis appuyez sur 'OK'.")) {
                       
                          var d=new Date()
                          this.logs.push(this.msToTime(d.getTime())+" - réponse utilisateur : annuler")
                          this.connexionRequise="Aucune"
                          resolve("")
                                                 
                      }
                      else{
                        var d=new Date()
                        this.logs.push(this.msToTime(d.getTime())+" - réponse utilisateur : OK")
                        resolve("")
                      }  
                    })
                  }).catch(err=>{
                    var d=new Date()
                    this.logs.push(this.msToTime(d.getTime())+" - déconnexion du point d'accès échouée : "+JSON.stringify(err)) 
                    resolve("")
                  })

                  resolve("")
                }   
              

               
               
              })     
              } 
              else{ //WIFI désactivé
                var d=new Date()
                this.logs.push(this.msToTime(d.getTime())+" - wifi désactivé")
                if(this.ssid == undefined || this.ssid == ""){ //ssid vide
                  var d=new Date()
                  this.logs.push(this.msToTime(d.getTime())+" - ssid vide : "+this.ssid)
                  this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
                  this.statutConnexion="Aucune"                  
                  var d=new Date()                  
                  this.logs.push(this.msToTime(d.getTime())+" - présentation alerte connexion upc : ")
                  if (!window.confirm("La page a besoin d'être connecté à l'UPC. Connectez-vous à l'UPC puis appuyez sur 'OK'.")) {
                    
                      var d=new Date()
                      this.logs.push(this.msToTime(d.getTime())+" - réponse utilisateur : annuler")
                      this.connexionRequise="Aucune"
                      resolve("")
                                             
                  }
                  else{
                    var d=new Date()
                    this.logs.push(this.msToTime(d.getTime())+" - réponse utilisateur : OK")
                    resolve("")
                  } 
                  
                }
                else { //ssid non vide
                  var d=new Date()
                  this.logs.push(this.msToTime(d.getTime())+" - ssid stocké non vide")
                  this.storage.get("password").then(res=>{
                    var password = res 
                    if(this.platform.is("android")){
                      this.logs.push(this.msToTime(d.getTime())+" - ssid : "+this.ssid+" - password : "+password)
                        WifiWizard2.connect(this.ssid,password).then(()=>{ 
                          var d=new Date()
                          this.logs.push(this.msToTime(d.getTime())+" - connexion au point d'accès réussie")
                          this.currentssid = this.ssid;
                          this.logs.push(this.msToTime(d.getTime())+" - current ssid : "+this.ssid)      
                          this.appelOnConnectModbus = true;
                          this.onConnectModbus().then(()=>{    
                            var d=new Date()
                            this.appelOnConnectModbus = false;
                            this.logs.push(this.msToTime(d.getTime())+" - connexion Modbus réussie") 
                            this.logs.push(this.msToTime(d.getTime())+" - current ssid = ssid connecté")
                            this.currentssid = this.ssid                     
                            resolve("")
                            
                          }).catch(err =>{                       
                            var d=new Date()
                            this.appelOnConnectModbus = false;
                            this.logs.push(this.msToTime(d.getTime())+" - connexion Modbus échouée")
                            resolve("")      
                          })                
                        
                        }).catch(err =>{ //connexion au point d'accès échouée
                          this.perteConnexion = true;
                          var d=new Date()
                          this.logs.push(this.msToTime(d.getTime())+" - connexion au point d'accès échouée : "+JSON.stringify(err))
                          this.statutConnexion = "Aucune"
                          this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
                          this.logs.push(this.msToTime(d.getTime())+" - présentation alerte connexion upc : ")
                          if (!window.confirm("La page a besoin d'être connecté à l'UPC. Connectez-vous à l'UPC puis appuyez sur 'OK'.")) {
                            
                              var d=new Date()
                              this.logs.push(this.msToTime(d.getTime())+" - réponse utilisateur : annuler")
                              this.connexionRequise="Aucune"
                              resolve("")
                                                     
                          }
                          else{
                            var d=new Date()
                            this.logs.push(this.msToTime(d.getTime())+" - réponse utilisateur : OK")
                            resolve("")
                          }  
                        })
                     
                    }
                    else{
                      WifiWizard2.iOSDisconnectNetwork(this.ssid).then(async ()=>{ 
                        var d=new Date()
                        var password= await this.storage.get("password")  
                        this.logs.push(this.msToTime(d.getTime())+" - déconnexion du point d'accès réussie")                         
                        WifiWizard2.iOSConnectNetwork(this.ssid, password).then(()=>{
                          var d=new Date()
                          this.logs.push(this.msToTime(d.getTime())+" - connexion au point d'accès réussie")
                          this.appelOnConnectModbus = true;
                          this.onConnectModbus().then(res=>{
                            var d=new Date()
                            this.appelOnConnectModbus = false;
                            this.logs.push(this.msToTime(d.getTime())+" - connexion Modbus réussie")
                            this.logs.push(this.msToTime(d.getTime())+" - current ssid = ssid connecté")
                            this.currentssid = this.ssid
                            resolve("")
                          }).catch(err =>{                       
                            var d=new Date()
                            this.appelOnConnectModbus = false;
                            this.logs.push(this.msToTime(d.getTime())+" - connexion Modbus échouée")
                            resolve("")      
                          })
                        }).catch(err =>{
                          var d=new Date()
                          this.logs.push(this.msToTime(d.getTime())+" - connexion au point d'accès échouée : "+JSON.stringify(err))
                          this.statutConnexion = "Aucune"
                          this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
                          this.logs.push(this.msToTime(d.getTime())+" - présentation alerte connexion upc : ")
                          if (!window.confirm("La page a besoin d'être connecté à l'UPC. Connectez-vous à l'UPC puis appuyez sur 'OK'.")) {
                            
                              var d=new Date()
                              this.logs.push(this.msToTime(d.getTime())+" - réponse utilisateur : annuler")
                              this.connexionRequise="Aucune"
                              resolve("")
                                                     
                          }
                          else{
                            var d=new Date()
                            this.logs.push(this.msToTime(d.getTime())+" - réponse utilisateur : OK")
                            resolve("")
                          }   
                        })
                      })
                     
                    }
                  })                              
                }
              }
            }).catch(err=>{
              var d=new Date()
              this.logs.push(this.msToTime(d.getTime())+" - Erreur fonction isWifiEnabled : "+JSON.stringify(err))
              resolve("")
            })   
          })
          
        }
        if(this.connexionRequise == "Serveur"){
          var d=new Date()
          this.logs.push(this.msToTime(d.getTime())+" - connexion requise : serveur")
          if(error.status == 403) {                
            this.login()          
          }
          else{
            if(error.statusText == "Unknown Error") {              
              this.logs.push(JSON.stringify(error))
              if (window.confirm("Une connexion internet est requise pour cette page. Raccordez-vous à internet puis appuyez sur 'OK'.")) {              
                resolve("retry")
              } 
              else{
                this.connexionRequise="Aucune"
                  resolve("cancel")
              
              }          
            }         

            if(error == "UPC"){
              WifiWizard2.disconnect().then(()=>{
                this.statutConnexion = "Aucune"
                var d=new Date()
                this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
              }).catch(()=>{
                if (window.confirm("Une connexion internet est requise pour cette page. Raccordez-vous à internet puis appuyez sur 'OK'.")) {                
                  resolve("retry")
                } 
                else{
                  this.connexionRequise="Aucune"
                    resolve("cancel")
                  
                }             
              })
            }
          }
        }
    })
  }

   onReadStatiqueEnable(){   
    return new Promise<void>(async (resolve, reject)=>{  
      var d=new Date()   
      this.logs.push(this.msToTime(d.getTime())+" - appel onReadStatiqueEnable ") 
      this.logs.push(this.msToTime(d.getTime())+" - flags onReadStatiqueEnable :") 
      this.logs.push(this.msToTime(d.getTime())+" - lecture cyclique : "+this.lectureCycliqueEnCours)
      this.logs.push(this.msToTime(d.getTime())+" - ecriture : "+this.ecritureEnCours)
      this.logs.push(this.msToTime(d.getTime())+" - onConnect : "+this.onConnectEnCours)
      this.logs.push(this.msToTime(d.getTime())+" - statut connexion : "+this.statutConnexion)
      this.lectureStatiqueEnCours = true;
                 
        
      if(this.ecritureEnCours == true || this.lectureCycliqueEnCours == true || this.onConnectEnCours == true || this.statutConnexion != "UPC"){  
        this.lectureStatiqueEnCours = false;
        var d=new Date()  
        this.logs.push(this.msToTime(d.getTime())+" -attente onReadStatique ")
        this.onWait(50,60000,"onReadStatiqueEnable").then(()=>{
         
            var d=new Date()  
            this.logs.push(this.msToTime(d.getTime())+" - fin d'attente onReadStatique ")
            //var d=new Date() 
            //this.logs.push(this.msToTime(d.getTime())+" - statut connexion = UPC")           
            if(this.upcmodbus != undefined){
              this.storage.get("upcname").then(res =>{                   
                this.upcname = res;  
                var d=new Date()
                this.logs.push(this.msToTime(d.getTime())+" - appel fonction onReadStatique")
                this.logs.push(this.msToTime(d.getTime())+" - lectureCycliqueEnCours : "+this.lectureCycliqueEnCours)    
                const url = this.router.url; 
                const splittedUrl = url.split("/");    
                const urlFinal = splittedUrl[1];   
                this.logs.push(this.msToTime(d.getTime())+" - page : "+urlFinal)                         
                this.upcmodbus.onReadStatique(this.upcname, this.mode, urlFinal).then(res=>{   
                  if(res == true){
                    //var d=new Date()
                    //this.logs.push(this.msToTime(d.getTime())+" - lecture réussie")
                    this.events.publish("loadParameters")
                    this.lectureStatiqueEnCours = false;
                    var d=new Date()
                    this.logs.push("durée lecture statique : "+(d.getTime() - this.startReadDate.getTime()))
                    resolve()
                  }
                  else{
                    if(res == "Terminer l'intervention en cours"){
                      var d=new Date()
                      this.logs.push(this.msToTime(d.getTime())+" - Terminer l'intervention en cours")
                      this.router.navigate(["finintervention"])
                      this.lectureStatiqueEnCours = false;
                      resolve()
                    }
                    else{
                      if(res == "Abandonner l'intervention en cours"){
                        var d=new Date()
                        this.logs.push(this.msToTime(d.getTime())+" - Abandonner l'intervention en cours")
                        this.resetParameters().then(()=>{
                          this.router.navigate(["home"])
                          this.lectureStatiqueEnCours = false;
                          resolve()
                        })
                      }
                      else{
                        if(res == "Se rapprocher de l'upc"){
                          var d=new Date()
                          this.logs.push(this.msToTime(d.getTime())+" - Se rapprocher de l'upc")
                          resolve()
                        }
                        else{
                          if(res.object.errCode != undefined){
                            var d=new Date()
                            this.logs.push(this.msToTime(d.getTime())+" - "+res.object.errCode+" - bloc :"+res.object.bloc)
                            this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
                            this.statutConnexion="Aucune"
                            //this.onConnect(res.object.errCode).then(res=>{
                              this.lectureStatiqueEnCours = false;
                              resolve()
                            //})    
                          } 
                          else{
                            var d=new Date()
                            this.logs.push(this.msToTime(d.getTime())+" - "+JSON.stringify(res.object)+" - bloc :"+res.object.bloc)
                            this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
                            this.statutConnexion="Aucune"
                            //this.onConnect(res.object.errCode).then(res=>{
                              this.lectureStatiqueEnCours = false;
                              resolve()
                            //})  
                          }  
                        }
                      }
                    }                           
                  }
                }).catch(err =>{
                  var d=new Date()
                  this.logs.push(this.msToTime(d.getTime())+" - catch onReadStatique : "+JSON.stringify(err))
                  this.lectureStatiqueEnCours = false;   
                  reject()
                }) 
              })
            } 
            else {
              var d=new Date()
              this.logs.push(this.msToTime(d.getTime())+" - upcmodbus undefined")           
              this.lectureStatiqueEnCours = false;
              resolve()                
            }
         

        }).catch(()=>{
          alert("lecture impossible")
          reject()
        }) 
      }  
      else{
      /* pas de lecture cyclique en cours ni d'écriture ni de onConnect donc lecture statique possible */
      
      
        
        //var d=new Date() 
        //this.logs.push(this.msToTime(d.getTime())+" - statut connexion = UPC")           
        if(this.upcmodbus != undefined){
          this.storage.get("upcname").then(res =>{                   
            this.upcname = res;  
            var d=new Date()
            this.logs.push(this.msToTime(d.getTime())+" - appel fonction onReadStatique")
            this.logs.push(this.msToTime(d.getTime())+" - lectureCycliqueEnCours : "+this.lectureCycliqueEnCours)    
            const url = this.router.url; 
            const splittedUrl = url.split("/");    
            const urlFinal = splittedUrl[1];   
            this.logs.push(this.msToTime(d.getTime())+" - page : "+urlFinal)                         
            this.upcmodbus.onReadStatique(this.upcname, this.mode, urlFinal).then(res=>{   
              if(res == true){
                //var d=new Date()
                //this.logs.push(this.msToTime(d.getTime())+" - lecture réussie")
                this.events.publish("loadParameters")
                this.lectureStatiqueEnCours = false;
                var d=new Date()
                this.logs.push("durée lecture statique : "+(d.getTime() - this.startReadDate.getTime()))
                resolve()
              }
              else{
                if(res == "Terminer l'intervention en cours"){
                  var d=new Date()
                  this.logs.push(this.msToTime(d.getTime())+" - Terminer l'intervention en cours")
                  this.router.navigate(["finintervention"])
                  this.lectureStatiqueEnCours = false;
                  resolve()
                }
                else{
                  if(res == "Abandonner l'intervention en cours"){
                    var d=new Date()
                    this.logs.push(this.msToTime(d.getTime())+" - Abandonner l'intervention en cours")
                    this.resetParameters().then(()=>{
                      this.router.navigate(["home"])
                      this.lectureStatiqueEnCours = false;
                      resolve()
                    })
                  }
                  else{
                    if(res == "Se rapprocher de l'upc"){
                      var d=new Date()
                      this.logs.push(this.msToTime(d.getTime())+" - Se rapprocher de l'upc")
                      resolve()
                    }
                    else{
                      if(res.object.errCode != undefined){
                        var d=new Date()
                        this.logs.push(this.msToTime(d.getTime())+" - "+res.object.errCode+" - bloc :"+res.object.bloc)
                        this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
                        this.statutConnexion="Aucune"
                        //this.onConnect(res.object.errCode).then(res=>{
                          this.lectureStatiqueEnCours = false;
                          resolve()
                        //})    
                      } 
                      else{
                        var d=new Date()
                        this.logs.push(this.msToTime(d.getTime())+" - "+JSON.stringify(res.object)+" - bloc :"+res.object.bloc)
                        this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
                        this.statutConnexion="Aucune"
                        //this.onConnect(res.object.errCode).then(res=>{
                          this.lectureStatiqueEnCours = false;
                          resolve()
                        //})  
                      }  
                    }
                  }
                }                           
              }
            }).catch(err =>{
              var d=new Date()
              this.logs.push(this.msToTime(d.getTime())+" - catch onReadStatique : "+JSON.stringify(err))
              //this.onConnect("UPC")  
              this.lectureStatiqueEnCours = false;   
              reject()
            }) 
          })
        } 
        else {
          var d=new Date()
          this.logs.push(this.msToTime(d.getTime())+" - upcmodbus undefined 2")
          //this.onConnect("UPC").then(()=>{
            this.lectureStatiqueEnCours = false;
            resolve()
          //})   
        }
      }
    })
  }

  

  onReadCycliqueEnable(){   
    return new Promise<void>(async (resolve, reject)=>{  
     
      //var d=new Date()    
      //this.logs.push(this.msToTime(d.getTime())+" - onReadModbusVariables")
      
             
        
       
            
           
              
              
              if(this.statutConnexion == "UPC"){  
                //var d=new Date() 
                //this.logs.push(this.msToTime(d.getTime())+" - statut connexion = UPC")           
                
                
                if(this.upcmodbus != undefined){

                  
                  this.storage.get("upcname").then(res =>{                   
                    this.upcname = res;  
                    //var d=new Date()
                    //this.logs.push(this.msToTime(d.getTime())+" - appel fonction readAllReg cas 1 : "+res)  
                    const url = this.router.url; 
                    const splittedUrl = url.split("/");    
                    const urlFinal = splittedUrl[1];                        
                    this.upcmodbus.onReadCyclique(this.upcname, this.mode, urlFinal).then(res=>{   
                                                                       
                      if(res == true){
                        //var d=new Date()
                        //this.logs.push(this.msToTime(d.getTime())+" - lecture réussie")
                        this.events.publish("loadParameters")
                        this.lectureCycliqueEnCours = false;
                        var d=new Date()
                        this.logs.push("durée lecture : "+(d.getTime() - this.startReadDate.getTime()))

                        resolve()
                      }
                      else{
                       
                        if(res.object.errCode != undefined){
                          var d=new Date()
                          this.logs.push(this.msToTime(d.getTime())+" - "+res.object.errCode+" - bloc :"+res.object.bloc)
                          this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
                          this.statutConnexion="Aucune"
                          if(this.onConnectEnCours == false){
                            this.onConnect(res.object.errCode).then(res=>{                             
                              this.onConnectEnCours = false;
                              resolve()
                            })  
                          }
                          else{
                            resolve()
                          }
                          
                        } 
                        else{
                          var d=new Date()
                          this.logs.push(this.msToTime(d.getTime())+" - "+JSON.stringify(res.object)+" - bloc :"+res.object.bloc)
                          this.logs.push(this.msToTime(d.getTime())+" - statut connexion : Aucune ")
                          this.statutConnexion="Aucune"
                          if(this.onConnectEnCours == false){
                            this.onConnect(res.object.errCode).then(res=>{                              
                              this.onConnectEnCours = false;
                              resolve()
                            }) 
                          }
                          else{
                            resolve()
                          } 
                        }  
                      }                       
                     
                    }).catch(err =>{
                      var d=new Date()
                      this.logs.push(this.msToTime(d.getTime())+" - catch onReadCyclique")
                      if(this.onConnectEnCours == false){
                        this.onConnect("UPC").then(res =>{                           
                          this.onConnectEnCours = false; 
                          resolve()
                        })
                      } 
                      else{
                        resolve()
                      }                       
                    }) 
                  })                
                } else {
                  var d=new Date()
                  this.logs.push(this.msToTime(d.getTime())+" - upcmodbus undefined")
                  if(this.onConnectEnCours == false){
                    this.onConnect("UPC").then(()=>{                      
                      this.onConnectEnCours = false; 
                      resolve()
                    })
                  }
                  else{
                    resolve()
                  }                 
                }                                                   
              } 
              else{
                var d=new Date()
                this.logs.push(this.msToTime(d.getTime())+" - statut connexion != UPC")
               
                  
                  if(this.connexionRequise == "UPC"){  
                    if(this.onConnectEnCours == false){                    
                      this.onConnect("UPC").then(()=>{                        
                        this.onConnectEnCours = false; 
                        resolve()
                      })
                    }
                    else{                                        
                      resolve()
                    }                  
                  }
                  else{                    
                    resolve()
                  }          
               
              } 
            
         
        
      })
  }

  onWriteEnable(variable, value){
    
    return new Promise<void>(async (resolve, reject)=>{  
      
     
     
        var d=new Date()   
        this.logs.push(this.msToTime(d.getTime())+" - appel onWriteEnable ") 
        this.logs.push(this.msToTime(d.getTime())+" - flags onWriteEnable :") 
        this.logs.push(this.msToTime(d.getTime())+" - lecture cyclique : "+this.lectureCycliqueEnCours)
        this.logs.push(this.msToTime(d.getTime())+" - lecture statique : "+this.lectureStatiqueEnCours)
        this.logs.push(this.msToTime(d.getTime())+" - ecriture : "+this.ecritureEnCours)
        this.logs.push(this.msToTime(d.getTime())+" - onConnect : "+this.onConnectEnCours)
        this.logs.push(this.msToTime(d.getTime())+" - statut connexion : "+this.statutConnexion)
        this.ecritureEnCours = true;
                   
     
        if(this.statutConnexion != "UPC" || this.lectureCycliqueEnCours == true || this.lectureStatiqueEnCours == true || this.onConnectEnCours == true){  
          this.ecritureEnCours = false  
          var d=new Date() 
         
          this.logs.push(this.msToTime(d.getTime())+" - lecture en cours : "+this.lectureCycliqueEnCours)  
          
          
  
            
                   
              this.onWait(50,60000,"onWriteEnable").then(()=>{
                if(variable.type == "int"){
                  this.upcmodbus.client.setIntInHoldingRegister(variable.adr, variable.dim, value).then(()=>{
                    var d=new Date() 
                    this.logs.push(this.msToTime(d.getTime())+" - écriture réussie")
                    this.ecritureEnCours = false;
                    this.needToCheckFlags = false;
                    this.onReadStatiqueEnable().then(()=>{
                      resolve()
                    }).catch(()=>{
                      alert("lecture impossible")
                      reject()
                    })
                  }).catch(()=>{
                    alert("écriture impossible")
                    reject()
                  })
                }
                if(variable.type == "string"){
                  this.upcmodbus.client.setStringInHoldingRegister(variable.adr, value).then(()=>{
                    var d=new Date() 
                    this.logs.push(this.msToTime(d.getTime())+" - écriture réussie")
                    this.ecritureEnCours = false;
                    this.needToCheckFlags = false;
                    this.onReadStatiqueEnable().then(()=>{
                      resolve()
                    }).catch(()=>{
                      alert("lecture impossible")
                      reject()
                    })
                  }).catch(()=>{
                    alert("écriture impossible")
                    reject()
                  })
                }
                if(variable.type == "float"){
                  this.upcmodbus.client.setFloatInHoldingRegister(variable.adr, value).then(()=>{
                    var d=new Date() 
                    this.logs.push(this.msToTime(d.getTime())+" - écriture réussie")
                    this.ecritureEnCours = false;
                    this.needToCheckFlags = false;
                    this.onReadStatiqueEnable().then(()=>{
                      resolve()
                    }).catch(()=>{
                      alert("lecture impossible")
                      reject()
                    })
                  }).catch(()=>{
                    alert("écriture impossible")
                    reject()
                  })
                }
              }).catch(()=>{
                alert("écriture impossible")
                reject()
              })
              
        }
        else{
               //if(this.lectureCycliqueEnCours != true && this.lectureStatiqueEnCours != true){
                var d=new Date() 
                this.logs.push(this.msToTime(d.getTime())+" - pas de lecture en cours, écriture possible") 
                
                if(variable.type == "int"){
                  this.upcmodbus.client.setIntInHoldingRegister(variable.adr, variable.dim, value).then(()=>{
                    var d=new Date() 
                    this.logs.push(this.msToTime(d.getTime())+" - écriture réussie")
                    this.ecritureEnCours = false;
                    this.needToCheckFlags = false;
                    this.onReadStatiqueEnable().then(()=>{
                      resolve()
                    }).catch(()=>{
                      alert("lecture impossible")
                      reject()
                    })
                  }).catch(()=>{
                    alert("écriture impossible")
                    reject()
                  })
                }
                if(variable.type == "string"){
                  this.upcmodbus.client.setStringInHoldingRegister(variable.adr, value).then(()=>{
                    var d=new Date() 
                    this.logs.push(this.msToTime(d.getTime())+" - écriture réussie")
                    this.ecritureEnCours = false;
                    this.needToCheckFlags = false;
                    this.onReadStatiqueEnable().then(()=>{
                      resolve()
                    }).catch(()=>{
                      alert("lecture impossible")
                      reject()
                    })
                  }).catch(()=>{
                    alert("écriture impossible")
                    reject()
                  })
                }
                if(variable.type == "float"){
                  this.upcmodbus.client.setFloatInHoldingRegister(variable.adr, value).then(()=>{
                    var d=new Date() 
                    this.logs.push(this.msToTime(d.getTime())+" - écriture réussie")
                    this.ecritureEnCours = false;
                    this.needToCheckFlags = false;
                    this.onReadStatiqueEnable().then(()=>{
                      resolve()
                    }).catch(()=>{
                      alert("lecture impossible")
                      reject()
                    })
                  }).catch(()=>{
                    alert("écriture impossible")
                    reject()
                  })
                }
              }     
    })
    
  }

  onWait(loopDelay, timeoutDelay, func){
    return new Promise<void>(async (resolve, reject)=>{ 
      this.needToCheckFlags = true      
      switch(func){
        case "onWriteEnable":
          this.intv = setInterval(()=>{
            if(this.statutConnexion == "UPC" && this.lectureCycliqueEnCours != true && this.lectureStatiqueEnCours != true && this.onConnectEnCours != true && this.ecritureEnCours != true){  
              
                this.global.ecritureEnCours = true;
                this.needToCheckFlags = false;
                var d=new Date() 
                this.logs.push(this.msToTime(d.getTime())+" - fin lecture en cours - écriture possible")
                clearInterval(this.intv)   
                resolve()
              
            }              
          },loopDelay)           
          setTimeout(()=>{            
            if(this.needToCheckFlags == true){
              if(this.lectureCycliqueEnCours == true || this.lectureStatiqueEnCours == true || this.onConnectEnCours == true || this.ecritureEnCours == true){
                this.needToCheckFlags = false;
                clearInterval(this.intv)
                var d=new Date() 
                this.logs.push(this.msToTime(d.getTime())+" - écriture impossible - fin de timer") 
                reject()
              } 
            }              
          },timeoutDelay)
          break;
        case "onReadStatiqueEnable":
          this.intv = setInterval(()=>{
            if(this.statutConnexion == "UPC" && this.lectureCycliqueEnCours != true && this.ecritureEnCours != true && this.onConnectEnCours != true){  
             
                this.lectureStatiqueEnCours = true;
                this.needToCheckFlags = false;
                var d=new Date() 
                this.logs.push(this.msToTime(d.getTime())+" - lecture statique possible")
                clearInterval(this.intv)   
                resolve()
              
            }              
          },loopDelay)           
          setTimeout(()=>{            
            if(this.needToCheckFlags == true){
              if(this.lectureCycliqueEnCours == true || this.ecritureEnCours == true || this.onConnectEnCours == true || this.statutConnexion != "UPC"){
                this.needToCheckFlags = false;
                clearInterval(this.intv)
                var d=new Date() 
                this.logs.push(this.msToTime(d.getTime())+" - lecture statique impossible - fin de timer") 
                reject()
              } 
            }              
          },timeoutDelay)
          break;
      }
  
    })

  }
 

  

  login(){
    return new Promise<void>(async (resolve, reject)=>{
      this.storage.get("user").then(res =>{     
        this.username = res;
        this.storage.get("pass").then(res=>{
          this.password = res;
          var user = new User();
          user.username = this.username;
          user.password = this.password;     
          this.upc3serv.login(user).subscribe(async res=>{
            this.storage.set("token",res.result).then(()=>{
              resolve()
            })          
          }, err => {
            this.onConnect(err).then(res=>{
              resolve()
            })
            .catch(res=>{resolve()})
          })
        })
      }) 
    })   
  }

  onConnectModbus(){
    this.logs.push("onConnectModbus")
    return new Promise<void>(async (resolve, reject)=>{
      if(this.upcmodbus != undefined){
       
          this.upcmodbus.client.close()
          this.upcmodbus = new UPCModbus(state => { 
            if(this.appelOnConnectModbus == true){
              this.needToCheckState = true;
              var d = new Date()
              this.logs.push(this.msToTime(d.getTime())+" - state : "+state)   
              let i = setInterval(()=>{
              
                if (state == 1) {          
                  this.statutConnexion="UPC"
                  var d = new Date()
                  this.logs.push(this.msToTime(d.getTime())+" - statut connexion : UPC ")
                  this.needToCheckState = false;
                  clearInterval(i)          
                  resolve()
                }              
                
              },50)             
              setTimeout(() => {
                if(this.needToCheckState == true){
                
                  if(state == 1){                 
                    this.statutConnexion="UPC"
                    var d = new Date()
                    this.logs.push(this.msToTime(d.getTime())+" - statut connexion : UPC (fin de timer) ")
                    this.needToCheckState = false;
                    clearInterval(i)          
                    resolve()
                  }
                  else{
                    this.statutConnexion="Aucune"
                    var d = new Date()
                    this.logs.push(this.msToTime(d.getTime())+" - appelOnConnectModbus : "+this.appelOnConnectModbus)
                    this.logs.push(this.msToTime(d.getTime())+" - statut connexion : aucune (fin de timer) ")
                    this.needToCheckState = false;
                    clearInterval(i)
                    reject()
                  }
                }
                
              }, 60000);
            }
        
          })   
          
      
       
       
      }
      else{
        this.upcmodbus = new UPCModbus(state => {
          if(this.appelOnConnectModbus == true){
            this.needToCheckState = true;
            var d = new Date()
            this.logs.push(this.msToTime(d.getTime())+" - state : "+state)   
            let i = setInterval(()=>{
            
              if (state == 1) {          
                this.statutConnexion="UPC"
                var d = new Date()
                this.logs.push(this.msToTime(d.getTime())+" - appelOnConnectModbus : "+this.appelOnConnectModbus)
                this.logs.push(this.msToTime(d.getTime())+" - statut connexion : UPC ")
                this.needToCheckState = false;
                this.storage.set("ssid",this.currentssid)
                clearInterval(i)          
                resolve()
              }
              else{
                return
              }
              
            },50)             
            setTimeout(() => {
              if(this.needToCheckState == true){
                if(state == 1){                 
                  this.statutConnexion="UPC"
                  var d = new Date()
                  this.logs.push(this.msToTime(d.getTime())+" - appelOnConnectModbus : "+this.appelOnConnectModbus)
                  this.logs.push(this.msToTime(d.getTime())+" - statut connexion : UPC (fin de timer) ")
                  this.needToCheckState = false;
                  clearInterval(i)          
                  resolve()
                }
                else{
                  this.statutConnexion="Aucune"
                  var d = new Date()
                  this.logs.push(this.msToTime(d.getTime())+" - appelOnConnectModbus : "+this.appelOnConnectModbus)
                  this.logs.push(this.msToTime(d.getTime())+" - statut connexion : aucune (fin de timer) ")
                  this.needToCheckState = false;
                  clearInterval(i)
                  reject()
                }
              }
            }, 60000);
          }
        })
      }    
    })
  }

  async resetParameters(){
    var arr = await Promise.all([  
      await this.storage.set("motiveItems",""),
      await this.storage.set("motiveString",""),
      await this.storage.set("intervenantsItems",""),  
      await this.storage.set("intervenantsString",""),   
      await this.storage.set("ceintureChoisieObject", ""),
      await this.storage.set("ssid", ""),
      await this.storage.set("password", ""),
      await this.storage.set("currentssid",""),
      await this.storage.set("currentpassword",""),
      await this.storage.set("upcname",""),      
      await this.storage.set("stockBottleTypes",""),
      await this.storage.set("ceintureChoisieBottles", ""),
      await this.storage.set("commentaires", ""),         
      await this.storage.set("dataAlreadyLoaded","false"),
      await this.storage.set("json",""),
      await this.storage.set("isInterventionEnCours", false), 
      await this.storage.set("isInterventionNotSaved",false)
    ]) 
    return arr    
  }


  msToTime(duration) {

    var milliseconds: any
    var seconds: any
    var minutes: any
    var hours: any

    milliseconds = Math.floor((duration % 1000) / 100)
    seconds = Math.floor((duration / 1000) % 60)
    minutes = Math.floor((duration / (1000 * 60)) % 60)
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  /*Changement de ceinture dans le cas d'une intervention en cours*/
  /*changementCeintureAlert(){ 
    return new Promise<void>(async (resolve, reject)=>{
      this.alertController.create({
      header : "Attention",
      subHeader : "Intervention en cours",
      message : "Une intervention est en cours sur la ceinture "+this.upcname+". Voulez-vous la terminer ?",
      buttons : [
        {
          text: "Terminer l'intervention en cours",           
          handler: () => { 
            this.selectedUpcSsidTmp = "";
            this.selectedUpcPassTmp = ""; 
            this.nearUPCList.forEach(element =>{ //compare les id pour présélectionner la ceinture                 
              if(this.ceintureChoisieObject.id == element.item_id.id){
                this.selectedItems = [element];                                                                                                              
              }
            })  
            this.displayCommentaire = false;
            this.isCeintureSelected = false; 
            this.selectedItems = [];                        
            resolve();
          }
        },
        {
          text: "Abandonner l'intervention en cours", handler: () => {  
            this.selectedUpcSsid = this.selectedUpcSsidTmp
            this.selectedUpcPass = this.selectedUpcPassTmp
            this.ceintureChoisieObject = this.ceintureChoisieObjectTmp
            this.storage.set("ceintureChoisieObject", JSON.stringify(this.ceintureChoisieObject)) 
            this.selectedCeintureName = this.ceintureChoisieObject.upcNameId
            this.display = false   
            this.display = true                   
            WifiWizard2.disconnect().then(
              this.connectToUpc()
            );           
            resolve();      
          }
        },
        {
          text: "Se rapprocher de l'upc "+this.upcname, 
          role: 'cancel',
          handler: () => {  
            this.onConnect("").then(()=>{

            })          
            resolve();      
          }
        }
      ]
    }).then(res=>res.present());
  })
  }*/


}


