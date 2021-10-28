import { Component, OnInit, NgZone,  ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import {GlobalService} from '../api/global.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UPCV3 } from '../model/upcv3/upcv3';
import * as $ from 'jquery';
import { Events, LoadingController, Platform } from '@ionic/angular';
import { UPCModbus } from '../model/upcv3/upcmodbus';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { Network} from '@ionic-native/network/ngx';
import { ThrowStmt } from '@angular/compiler';
import { AlertController} from '@ionic/angular';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { User } from '../model/user';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


declare var WifiWizard2: any;


@Component({
  selector: 'app-interventionceinture',
  templateUrl: './interventionceinture.page.html',
  styleUrls: ['./interventionceinture.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InterventionceinturePage implements OnInit {
  //tenter un accès modbus et s'il ne réussit pas alert connectez vous à l'upc
  //accès modbus s'il se connecte 

  

  /* Variables liées à la séquence d'écrans */
  sequenceOfScreensOptions = {
    installation : [
      "Initialisation / Echange boitier UPC",
      "Etat de la connexion au réseau",
      "Changement de bouteilles sur ceinture",
      "Réglage des détendeurs",
      "Controle débits Mini/Maxi",
      "Vérification débits pièges individuels",
      "Programmation diffusion CO2",
      "Mesures pressions de sortie"
    ],
    remiseEnRoute : [
      "Etat de la connexion au réseau",
      "Changement de bouteilles sur ceinture",
      "Réglage des détendeurs",
      "Controle débits Mini/Maxi",
      "Vérification débits pièges individuels",
      "Programmation diffusion CO2",
      "Mesures pressions de sortie"
    ],   
    modificationNbPieges : [
      "Modification du nombre de pièges",
      "Réglage des détendeurs",
      "Controle débits Mini/Maxi",
      "Mesures pressions de sortie"
    ],
    maintenance : [
      "Etat de la connexion au réseau",
      "Controle débits Mini/Maxi"      
    ],
    changementBouteillesCo2 : [
      "Réglage des détendeurs",
      "Controle débits Mini/Maxi"      
    ],
    changementUpc : [
      "Initialisation/Echange boitier UPC",
      "Etat de la connexion au réseau"      
    ]
  };

  sequenceOfScreens = [];
  sequenceOfScreensTmp = [];


  /* Variables liées à l'objet de l'intervention */
  motiveOptions = ["Installation","Modification du nombre de pièges","Remise en route","Maintenance","Changements de bouteilles CO2","Changement d'UPC", "Hivernage", "Autre"];
  motive = []; //format pour la base de données
  selectedMotive = []; //format pour la liste
  otherObj;


  /* Variables liées aux intervenants */
  intervenants = []; //liste de tous les intervenants  
  intervenantsChoisis = []; //format pour la base de données
  selectedIntervenants = []; //format pour la liste


  /* Variables liées aux ceintures */ 
  nearUPC=[];
  nearUPCToSort=[];
  nearUPCNotSorted=[];
  nearUPCNames=[];
  nearUPCList=[];  
  ceintureChoisieObject;
  ceintureChoisieBottles=[];
  ceintureChoisieBottlesTypes=[];
  ceintureChoisieCommentaires = [];  
  selectedUpcSsid;
  selectedUpcPass;
  selectedCeintureName;  
  connectedUpcName ="";
  connectedUpcSsid ="";
  isCeintureSelected = false;
  data=[];
  useGeolocation = true;
  lat;
  long;
  geolocationErrorFunction;


  /* Variables liées aux bouteilles */
  bottles; 
  bottlesInTransit=[];  
 

  /* Variables d'affichage*/  
  display=false;
  displayCommentaire = false;
  disabled=false;
  ShowFilter = false;
  limitSelection = false;
  dropdownSettings = { // Liste objets + Liste intervenants
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',      
    allowSearchFilter: true
  };
  
  dropdownSettings2 = { // Liste ceintures 
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',         
    allowSearchFilter: true
  };
  needToLoadData; // Affichage symbole chargement données 


  /* Variables liées aux commentaires */ 
  commentaire;


  /* Variables liées à la récupération des données / login */
  token;
  
 

  

  
   
  
  
 
  
  
  isUpcConnected = false;
  
 

  
  
  dt= new Date(Date.now());
  dateString;
  upc: UPCModbus;	
  
 
  selectedItems = [];
  dropdownList = [];
  connectedOperator;
  
  
  poursuivre = false;
  globals = [];
  selectedUpcSsidTmp: string;
  selectedUpcPassTmp: string;
 
  success;
  ceintureChoisieObjectTmp: any;
  username = "";
  password = "";
  item: any;
  errorFunction: string;  
  displayNoDataMessage: boolean;
  ceintureId: any;
  function: string;
  mode: string;
  nbPieges;
  modeConnexion: string;
  niveauConnexion: any;
  versionFw: any;
  modeOperation;
  ssid;

 

  constructor(
    private upcv3service : Upcv3serviceService,
    private storage : Storage,
    private router : Router,
    private global:GlobalService,
    private geolocation: Geolocation,
    private platform : Platform,
    private loadingCTRL: LoadingController,
    private hotspot : Hotspot,
    private ngZone : NgZone,
    private network : Network,
    private cd : ChangeDetectorRef,
    private alertController : AlertController,
    private diagnostic: Diagnostic,
    private events : Events    
  ) {     
    this.global.checkMode()    
  }

  ngOnInit() {  
    this.global.connexionRequise="Aucune"
      this.storage.get("token").then((res)=>{
        this.token = res;     
        this.storage.get("dataAlreadyLoaded").then(res=>{             
          if(res != true){        
            this.needToLoadData = true; 
            this.function = "getDataFromServer"
            this.getDataFromServer()                  
          } 
          else{
            this.getDataFromStorage()          
          }
        })                
      })
   

    
    /*Formattage de la date pour la création de l'intervention*/
   
    var dtstring = this.dt.getFullYear()
    + '-' + this.pad2(this.dt.getMonth()+1)
    + '-' + this.pad2(this.dt.getDate())
    + 'T' + this.pad2(this.dt.getHours())
    + ':' + this.pad2(this.dt.getMinutes())
    + ':' + this.pad2(this.dt.getSeconds());
    this.dateString = dtstring;

    this.storage.set("debutIntervention",this.dateString) 
     
  }
  

  getDataFromStorage(){    
    this.storage.get("intervenantsList").then(res=>{
      this.intervenants = res;
      this.storage.get("nearUpcList").then(res=>{
        this.nearUPCList = res;
        this.storage.get("bottlesInTransit").then(res=>{ 
          this.bottlesInTransit = res;
          this.setInterventionVariables(); 
        })             
      })
    })
    
  }


  getDataFromServer(){
    this.global.connexionRequise="Serveur";
      this.upcv3service.getConnected(this.token).subscribe(res=>{ //Opérateur connecté 
        this.global.statutConnexion="Serveur"
           
          this.connectedOperator = res.result.lastName + " " + res.result.firstName;
          this.storage.set("connectedOperator",this.connectedOperator)
          this.upcv3service.getOperators(this.token).subscribe(res => { //Liste des intervenants 
            this.global.statutConnexion="Serveur"                          
              var data = res.result   
              for (var i = 0; i < data.length; i++){
                this.intervenants.push(data[i]["lastName"]+" "+ data[i]["firstName"]);
              }
              this.storage.set("intervenantsList",this.intervenants)          
              this.getNearUpcList()  
              
          },(err) => {          
            this.global.onConnect(err).then(res => { 
          
              if(res == "retry"){
                this.getDataFromServer()
              }
              else{
                this.needToLoadData = false;
                this.displayNoDataMessage = true;
              } 
              
            })
          })         
      }, err => {
        this.global.onConnect(err).then(res => { 
          
          if(res == "retry"){
            this.getDataFromServer()
          } 
          else{
            this.needToLoadData = false;
            this.displayNoDataMessage = true;
          }
          
        })
      }) 
        
  }
  

  login(){
    this.storage.get("user").then(res =>{     
      this.username = res;
      this.storage.get("pass").then(res=>{
        this.password = res;
        var user = new User();
        user.username = this.username;
        user.password = this.password;     
        this.upcv3service.login(user).subscribe(async res=>{
          this.storage.set("token",res.result).then(()=>{
            switch(this.errorFunction){
              case "connectedOperator":
                this.getDataFromServer()
                break;
              case "operators":
                this.getDataFromServer()
                break;
              case "upcs":
                this.getNearUpcList()
                break;
              case "bottlesInTransit":
                this.getBottlesInTransitList()
                break;
              case "commentaires":
                this.getCommentaires(this.item)
                break;
              case "sites":
                this.getBottlesInfos()
                break;
              case 'siteBottles':
                this.getBottlesInfos()
                break;          
            }
          })          
        }, err => {
         this.global.onConnect(err)
        })
      })
    })    
  }

  async getMotiveItems(){
    var res = await this.storage.get("motiveItems") //format pour la liste
    return res
  }

  async getMotiveString(){
    var res = await this.storage.get("motiveString") //format pour la base de données
    return res
  }

  async getIntervenantsItems(){
    var res = await this.storage.get("intervenantsItems")
    return res
  }

  async getIntervenantsString(){
    var res = await this.storage.get("intervenantsString")
    return res
  }
  
  
  async getCeintureChoisieObject(){
    var res = await this.storage.get("ceintureChoisieObject")
    return res
  }
  
  async getUpcSsid(){
    var res = await this.storage.get("ssid")
    return res
  } 

  async getUpcPass(){
    var res = await this.storage.get("password")
    return res
  }

  async getUpcName(){
    var res = await this.storage.get("upcname")
    return res
  }

  async getStockBottleTypes(){
    var res =  await this.storage.get("stockBottleTypes")
    return res
  }

  async getCeintureChoisieBottles(){
    var res = await this.storage.get("ceintureChoisieBottles")
    return res
  }

  async getCeintureChoisieCommentaires(){
    var res = await this.storage.get("ceintureChoisieCommentaires")
    return res
  }

  async setInterventionVariables(){
    var arr = await Promise.all([       
      this.getMotiveItems(), 
      this.getMotiveString(),
      this.getIntervenantsItems(),
      this.getIntervenantsString(), 
      this.getCeintureChoisieObject(),
      this.getUpcSsid(),
      this.getUpcPass(), 
      this.getUpcName(),
      this.getStockBottleTypes(), 
      this.getCeintureChoisieBottles(),  
      this.getCeintureChoisieCommentaires()    
    ]) 

    console.log(arr)
   

    if(arr[0] == undefined || arr[0] == null){//motif format liste
      this.storage.set("motiveItems","")         
    }
    else{
      if(arr[0]!= ""){      
        this.selectedMotive = arr[0]
      }
    }
    
    if(arr[1] == undefined || arr[1] == null){//motif format bdd                                                 
      this.storage.set("motiveString","")          
    }
    else{
      if(arr[1]!= ""){   
        this.motive = arr[1] 
      }
    }

    if(this.motive.includes("Autre")){     
      if(this.storage.get("autre") != undefined && this.storage.get("autre") != null){
        this.motive[this.motive.indexOf("Autre")]=this.storage.get("autre")
      }
    } 

    if(arr[2] == undefined || arr[2] == null){//intervenants choisis format liste
      this.storage.set("intervenantsItems", "")
    }
    else{
      if(arr[2]!= ""){   
        this.selectedIntervenants = arr[2]
      }
    }

    if(arr[3] == undefined || arr[3] == null){//intervenants choisis format bdd
      this.storage.set("intervenantsString", "")
    }
    else{
      if(arr[3]!= ""){   
        this.intervenantsChoisis = arr[3] 
      }
    }   

    if(arr[4] == undefined || arr[4] == null){//ceinture choisie 
      this.storage.set("ceintureChoisieObject","")
      this.ceintureChoisieObject = ""
      this.selectedCeintureName = ""
    }
    else{
      if(arr[4]!= ""){      
        this.ceintureChoisieObject = JSON.parse(arr[4]) 
        this.selectedCeintureName = this.ceintureChoisieObject.upcNameId    
      }  
      else{
        this.ceintureChoisieObject = ""
        this.selectedCeintureName = ""
      }
    }

    if(arr[5] == undefined || arr[5] == null){//ceinture choisie ssid 
      this.storage.set("ssid","")
      this.selectedUpcSsid = ""
    } 
    else{
      this.selectedUpcSsid = arr[5]
    }

    if(arr[6] == undefined || arr[6] == null){//ceinture choisie password   
      this.storage.set("password","")
      this.selectedUpcPass = ""
    }
    else{
      this.selectedUpcPass = arr[6]
    } 
    
    if(arr[7] == undefined || arr[7] == null){//nom de l'upc
      this.storage.set("upcname","")
    }   

    if(arr[8] == undefined || arr[8] == null){//types des bouteilles de l'entrepôt associé à la ceinture
      this.storage.set("stockBottleTypes","")    
    }
    else{
      if(arr[8] != ""){
        this.ceintureChoisieBottlesTypes = arr[8] 
      }
    }

    
    if(arr[9] == undefined || arr[9] == null){//bouteilles de l'entrepôt associé à la ceinture 
      this.storage.set("ceintureChoisieBottles","")    
    }
    else{
      if(arr[9] != ""){
        this.ceintureChoisieBottles = arr[9] 
      }
    }

    if(arr[10] == undefined || arr[10] == null){//commentaires associé à la ceinture
      this.storage.set("commentaires","")
    }
    else{
      if(arr[10] != ""
      ){
        this.ceintureChoisieCommentaires = arr[10]   
      }      
    }
    
    this.preselectCeinture()
    if(this.ceintureChoisieObject != ""){
      var d=new Date()    
      this.global.logs.push(this.global.msToTime(d.getTime())+" --- Présélection ceinture ---")
      this.connectToUpc()
    }
    
  }

 

  preselectCeinture(){   
    if(this.ceintureChoisieObject != ""){ //si ceinture sauvegardée         
      this.storage.get("commentaires").then(res => {
        if(res != "")
        {          
          this.commentaire = res;
          this.displayCommentaire = true;
        }
        this.nearUPCList.forEach(element =>{ //compare les id pour présélectionner la ceinture                 
          if(this.ceintureChoisieObject.id == element.item_id.id){
            this.selectedItems = [element];
            this.isCeintureSelected = true                                                                                                  
          }
        }) 
      })
    }
    else{
      this.selectedItems = [];
    }
    this.display = true   
    this.needToLoadData = false;   
    this.storage.set("dataAlreadyLoaded",true)
    
  }  


  /*fonction formattage date*/

  pad2(number) { 
    return (number < 10 ? '0' : '') + number
  } 

  getCommentaires(item){
    this.item = item;
    if(item != undefined && item != null){
      this.upcv3service.getActionNotDoneById(this.token,item.item_id.id).subscribe(res=>{         
        if(res.result[0] != undefined){
          if (res.result[0].mess != null){
            this.displayCommentaire = true;   
            this.commentaire = res     
            this.storage.set("commentaires",res)            
          }
        }
        this.getBottlesInfos()
      }, async err => {          
          
          this.global.onConnect(err).then(res => { 
          
          if(res == "retry"){
            this.getCommentaires(item)
          } 
          else{
            this.needToLoadData = false;
            this.displayNoDataMessage = true;
          }        
        }) 
      })
  }else{
      this.getBottlesInfos()
    }
  }


  getBottlesInfos(){

    /*Récupération des informations sur les bouteilles dans la base de données*/

    if(this.ceintureChoisieObject != undefined && this.ceintureChoisieObject != null && this.ceintureChoisieObject != ""){
      this.upcv3service.getSitesByUpcID(this.ceintureChoisieObject.id,this.token).subscribe(res => {         
        if(res.result.stock != null){ //entrepôt associé à la ceinture           
          this.ceintureChoisieBottlesTypes = res.result.stock.bottleTypes; //liste des types de bouteilles de l'entreôt associé à la ceinture
          this.storage.set("stockBottleTypes", this.ceintureChoisieBottlesTypes);
          this.upcv3service.getBottlesByStockId(res.result.stock.id, this.token).subscribe(res => {
            res.result.forEach(element => {
              this.ceintureChoisieBottles.push(element) //liste des bouteilles de l'entrepôt associé à la ceinture
            })
            this.storage.set("ceintureChoisieBottles", this.ceintureChoisieBottles);            
            this.connectToUpc()                     
          }, err => { 
            this.global.onConnect(err)
          }) 
        }
        else{        
          this.connectToUpc()
        }       
      }, err => {
        this.global.onConnect(err).then(res => { 
          
          if(res == "retry"){
            this.getBottlesInfos()
          } 
          else{
            this.needToLoadData = false;
            this.displayNoDataMessage = true;
          }        
        })  
      })
    }
  }


  /*Récupération de la liste des opérateurs dans la base de données*/

  

  /*Liste des ceintures*/ 

  getNearUpcList(){   

    this.upcv3service.getUPC3(this.token).subscribe(res =>{  
      this.storage.set("statutConnexion","Serveur").then(()=>{      
        var data = res.result //liste de toutes les ceintures   
        this.data = data;     
        this.checkLocationEnabled(data)    
      })      
    }, err => {
      this.global.onConnect(err).then(res => { 
          
        if(res == "retry"){
          this.getDataFromServer()
        }
        else{
          this.needToLoadData = false;
          this.displayNoDataMessage = true;
        } 
        
      })
    })    
  }

  checkLocationEnabled(data){
    this.diagnostic.isLocationEnabled().then(res=>{
      if(res == true){
        this.successGeolocation(data);
      }
      else{
        this.geolocationErrorFunction = "check"
        alert("La page a besoin de la position de l'appareil. Activez la géolocalisation puis appuyez sur 'OK'.")
        this.checkLocationEnabled(this.data)
      }
    }).catch(error => {      
      this.successGeolocation(data)
    }) 
  }

  successGeolocation(data){
    this.geolocation.getCurrentPosition().then(res=>{      
      this.lat = res.coords.latitude;
      this.long = res.coords.longitude;      
      this.makeUpcList()      
    }).catch(err => {     
      this.geolocationAlert();
    });
  
  }

  makeUpcList(){
    this.data.forEach(element=>{          
      this.nearUPCNotSorted.push(element); //Liste des ceintures qu'on gardera volontairement non triée             
      this.nearUPCToSort.push(element); //Liste des ceintures qu'on va trier 
    })

    if(this.useGeolocation == true){
      this.nearUPCToSort.sort((a,b)=>{ //Tri croissant des ceintures en fonction de la distance où elles se trouvent par rapport à la position du téléphone
        return this.getDistanceFromLatLonInKm(this.lat,this.long,a.lat,a.lng)-this.getDistanceFromLatLonInKm(this.lat,this.long,b.lat,b.lng);
      })
      
      //crée la liste avec les 10 ceintures les plus proches
      for (var i=0; i<10; i++){
        this.nearUPC.push(this.nearUPCToSort[i])
        this.nearUPCNames.push(this.nearUPC[i].upcNameId);
      }
    }        
    //ajoute toutes les ceintures sans ordre de distance 
    this.nearUPCNotSorted.forEach(element=>{
      this.nearUPC.push(element);
      this.nearUPCNames.push(element.upcNameId);            
    })              
         
    this.nearUPC.forEach(element => { //crée une liste d'items ceinture {item_id:{json de la ceinture},item_text:"nom de la ceinture"}                  
      this.nearUPCList.push({item_id: element, item_text: element.upcNameId });
    }) 
    this.storage.set("nearUpcList", this.nearUPCList);               
    this.getBottlesInTransitList()
  }

  getBottlesInTransitList(){

    this.upcv3service.getAllBottle(this.token).subscribe(res => { //liste de toutes les bouteilles
      this.storage.set("statutConnexion","Serveur").then(()=>{      
        this.bottles = res;       
        this.bottles.result.forEach(element => {           
          if(element.localisationType == "TRANSIT"){
            this.bottlesInTransit.push(element) //liste des bouteilles en transit
          }        
        }); 
        this.storage.set("bottlesInTransitList", this.bottlesInTransit); 
        this.setInterventionVariables(); 
      })  
    }, err => {
      this.global.onConnect(err)
    })   
  } 



  /* --- fonctions liées à l'objet de l'intervention --- */

  other(){ //choix d'un objet "autre" qui n'est pas dans la liste
    this.display=false;   
    this.motive[this.motive.indexOf("Autre")]=this.otherObj;
    this.storage.set("autre", this.otherObj)
    setTimeout(()=>{     
      this.display=true; 
    },20)           
  }


  onSelectMotive(item: any){     
   console.log(JSON.stringify(item))
    if(!this.motive.includes(item)){
      this.motive.push(item)
    }  
    alert(this.motive)
       
    
    this.storage.set("motiveItems",this.selectedMotive) //format pour la liste
    this.storage.set("motiveString", this.motive) //format pour la base de données    
  }

  onRemoveMotive(item : any){    
    this.motive = this.motive.filter(function(element) {
      return element !== item
    })
    alert(this.motive)
    this.storage.set("motiveItems",this.selectedMotive) //format pour la liste
    this.storage.set("motiveString", this.motive) //format pour la base de données   
  }

  /* --- fonctions liées aux intervenants --- */

  onSelectIntervenant(item: any){     
    console.log(JSON.stringify(item))
     if(!this.intervenantsChoisis.includes(item)){
       this.intervenantsChoisis.push(item)
     }  
     alert(this.intervenantsChoisis)
     this.storage.set("intervenantsItems", this.selectedIntervenants)  
     this.storage.set("intervenantsString", this.intervenantsChoisis)    
   }
 
   onRemoveIntervenant(item : any){    
     this.intervenantsChoisis = this.intervenantsChoisis.filter(function(element) {
       return element !== item
     })
     this.storage.set("intervenantsItems", this.selectedIntervenants)  
     this.storage.set("intervenantsString", this.intervenantsChoisis)   
     alert(this.intervenantsChoisis)
   } 


  /* --- fonctions liées à la ceinture --- */
  
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  
  //fonction calcul de distance 
  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  } 

  
  async onSelectedCeinture(item: any){

    //var res = await this.global.upcmodbus.client.disconnect()
    //WifiWizard2.disconnect()

    this.item = item;

    if(this.isCeintureSelected == true){ 
     this.ceintureChoisieObjectTmp = item.item_id  
     this.selectedUpcSsidTmp = item.item_id.communicationParameters.comWiFiName 
     this.selectedUpcPassTmp = item.item_id.communicationParameters.comWiFiPass 
     this.changementCeintureAlert();
    }
    else{   
      await this.storage.set("ceintureChoisieObject", JSON.stringify(item.item_id)) 
      this.ceintureChoisieObject = item.item_id   
      this.isCeintureSelected = true;     
      this.ceintureId = item.item_id.id    
    
      this.selectedCeintureName = item.item_text;    
      this.selectedUpcSsid = item.item_id.communicationParameters.comWiFiName
      this.selectedUpcPass = item.item_id.communicationParameters.comWiFiPass     
      
      await this.storage.set("ssid", this.selectedUpcSsid)
      await this.storage.set("password", this.selectedUpcPass)
      await this.storage.set("ceintureId", this.ceintureId)
      await this.storage.set("upcname", this.ceintureChoisieObject.upcNameId)

      /*Récupération commentaires "à faire" dans la base de données*/
      this.getCommentaires(item)          
  
    }    
   
  }

  onRemoveCeinture(item : any){     
    this.isCeintureSelected = false; 
    this.storage.set("ceintureChoisieObject", "")   
  }
 

  connectToUpc(){   

    if(this.displayCommentaire == true){ //placé ici car si placé plus tôt problème de chargement du DOM      
      this.commentaire.result.forEach(element => {                 
        $("#commentairesList").append("<li>"+element.mess+"</li>")    
      });
    } 
    var d=new Date()    
    this.global.logs.push(this.global.msToTime(d.getTime())+" --- Sélection ceinture ---")
    this.global.connexionRequise="UPC"
   
   
    
    this.loadingFullModbusValues()
             
    /*  await this.global.upcmodbus.client.getStringFromHoldingRegister(40001,10).then(res=>{
        this.connectedUpcName = res;                                
        if(this.connectedUpcName == this.ceintureChoisieObject.upcNameId){   
          this.storage.set("upcname",this.connectedUpcName);                 
          
        }
        else{                
          this.showAlert(res, this.ceintureChoisieObject.upcNameId)                   
        }                                
      }).catch(err=>{alert(JSON.stringify(err))}) */   
    
  }  


  
  //fonction qui charge les données de l'upc 
  async loadingFullModbusValues(){   

       
     //mode de diffusion
     this.events.subscribe("loadParameters",($event)=>{
      
      switch(this.global.upcmodbus.general.upcStatus){
        case 0:
          this.modeOperation = "Diffusion OFF"
          break;                        
        case 1:
          this.modeOperation = "Diff. programmée ACTIF"
          break;
        case 2:
          this.modeOperation = "Mode ADJUST"
          break;
        case 3:
          this.modeOperation = "Mode CHECK Pressions"
          break;
        case 4:
          this.modeOperation = "Auto-cal. offset"
          break;      
        case 5:
          this.modeOperation = "Test R1 Vide"
          break;
        case 6:
          this.modeOperation="Test R2 Vide"
          break;
        case 7:
          this.modeOperation="Test Réserve Vide"
          break;
        case 100:
          this.modeOperation="R1 & R2 vides"
          break;
      }      
     
      
     //nombre de pièges           
      this.nbPieges = this.global.upcmodbus.general.upcTrapNum  
        
      console.log(this.nbPieges);
    

     //mode de connexion
      
        
        switch(this.global.upcmodbus.communicationParameters.comMdmMode){
          case 0:
            this.modeConnexion = "non enregistré"
            break;                        
          case 1:
            this.modeConnexion = "2G GPRS"
            break;
          case 2:
            this.modeConnexion = "2G EDGE"
            break;
          case 3:
            this.modeConnexion = "3G WCDMA"
            break;
          case 4:
            this.modeConnexion = "3G HSDPA"
            break;
          case 5:
            this.modeConnexion = "3G HSUPA"
            break;
          case 6:
            this.modeConnexion = "3G HSDPA/HSUPA"
            break;
          case 7:
            this.modeConnexion = "4G"
            break;
        }       
                      
      
    

     //niveau de connexion
     this.niveauConnexion = this.global.upcmodbus.communicationParameters.comGsmLevel
    
    

     //version firmware
     this.versionFw = this.global.upcmodbus.general.upcFwVer
    

    //ssid
    this.ssid = this.global.upcmodbus.communicationParameters.comWiFiName
            

    this.cd.detectChanges();

      
    /*if(this.modeOperation == ""){
      this.modeOperation = "-"
    }
    if(this.nbPieges == ""){
      this.nbPieges = "-"
    }  
    if(this.modeConnexion == ""){
      this.modeConnexion = "-"
    }  
    if(this.niveauConnexion == ""){
      this.niveauConnexion = "-"
    }  
    if(this.versionFw == ""){
      this.versionFw = "-"
    } */       
                   
     })  

  
   
  }

 

  /*Changement de ceinture dans le cas d'une intervention en cours*/
  changementCeintureAlert(){ 
    return new Promise<void>(async (resolve, reject)=>{
      this.alertController.create({
      header : "Attention",
      subHeader : "Intervention en cours",
      message : "Une intervention est en cours sur la ceinture "+this.selectedCeintureName+". Les données ne seront pas enregistrées, souhaitez-vous continuer ?",
      buttons : [
        {
          text: "Annuler", 
          role: 'cancel',
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
          text: "Continuer", handler: () => {  
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
        }
      ]
    }).then(res=>res.present());
  })
  }
  
  

  geolocationAlert(){
    return new Promise<void>(async (resolve, reject)=>{
      this.alertController.create({
      header : "Attention",
      subHeader : "Géolocalisation requise",
      message : "La page a besoin de la position de l'appareil. Activez la géolocalisation puis appuyez sur 'OK'.",
      buttons : [
        {
          text: "Poursuivre sans géolocalisation", 
          role: 'cancel',
          handler: () => {             
            this.useGeolocation = false;
            this.makeUpcList();                                        
            resolve();
          }
        },
        {
          text: "OK", handler: () => { 
            switch(this.geolocationErrorFunction){
              case "check":
                this.checkLocationEnabled(this.data)
                break;
              case "pos":
                this.successGeolocation(this.data)
                break;
            }
                              
            resolve();      
          }
        }
      ]
    }).then(res=>res.present());
  })
  }


  async createSequence(){    

  
    var notSortedSequenceOfScreensTmp = []

    this.motive.forEach(element =>{//récupère tous les écrans pour tous les motifs d'intervention choisis
      switch(element){
        case "Installation":
          this.sequenceOfScreensOptions.installation.forEach(element =>{
            notSortedSequenceOfScreensTmp.push(element)
          })
          break;
        case "Modification du nombre de pièges":
          this.sequenceOfScreensOptions.modificationNbPieges.forEach(element =>{notSortedSequenceOfScreensTmp.push(element)})
          break;
        case "Remise en route":
          this.sequenceOfScreensOptions.remiseEnRoute.forEach(element =>{notSortedSequenceOfScreensTmp.push(element)})
          break;
        case "Maintenance": 
          this.sequenceOfScreensOptions.maintenance.forEach(element =>{notSortedSequenceOfScreensTmp.push(element)})
          break;
        case "Changements de bouteilles CO2":
          this.sequenceOfScreensOptions.changementBouteillesCo2.forEach(element =>{notSortedSequenceOfScreensTmp.push(element)})
          break;
        case "Changement d'UPC":
          this.sequenceOfScreensOptions.changementUpc.forEach(element =>{notSortedSequenceOfScreensTmp.push(element)})
          break;
        case "Hivernage":           
          break;  
        default : 
          break;   
      }
    })
    
    const tmp = notSortedSequenceOfScreensTmp.reduce(
      (acc, element) => {
        return acc.add(element)
      }, new Set()
    )
    this.sequenceOfScreensTmp = [...tmp]

    this.sequenceOfScreensTmp.push("Commentaires", "Rapport de visite", "Fin d'intervention") 
    
    var sequenceTmp = [];   

    this.sequenceOfScreensTmp.forEach(element=>{ 
      var page;
      switch(element){
        case "Initialisation / Echange boitier UPC":
          page="initechangeboitierupc";
          break;
        case "Etat de la connexion au réseau":
          page="connection";
          break;
        case "Changement de bouteilles sur ceinture":
          page="addbottleceint";
          break;
        case "Réglage des détendeurs":
          page="adjustment";
          break;
        case "Controle débits Mini/Maxi":
          page="controldiff";
          break;
        case "Vérification débits pièges individuels":
          page="verifpiegesindividuels";
          break;
        case "Programmation diffusion CO2":
          page="synchro";
          break;
        case "Mesures pressions de sortie":
          page="check";
          break;
        case "Modification du nombre de pièges":
          page="modifnbpieges";
          break;      
        case "Commentaires":
          page="commentaires";
          break;
        case "Rapport de visite":
          page="rapportvisite";
          break;
        case "Fin d'intervention":
          page="finintervention";
          break;        
      }
      sequenceTmp.push([element, false, page]) 
    })

    this.storage.get("sequence").then(res=>{
      var sequence;
      if(res == undefined){             
        sequence = sequenceTmp;     
      }
      else{
        if(res != null){          
          sequenceTmp.forEach(elementTmp =>{
            res.forEach(elementRes =>{
              if(elementRes[2] == elementTmp[2]){
                if(elementRes[1] != elementTmp[1]){
                  elementTmp[1] = elementRes[1]
                }
              }
            })           
          }) 
          sequence = sequenceTmp;                   
        }
      }
      this.storage.set("sequence", sequence).then(()=>{
        this.router.navigate([sequence[0][2]])
      }) 
    })

    

  
  
  

  }

  /*Commence la séquence et/ou redirige vers la première page de la séquence suivante*/
  goNext(){
    if(this.motive == [] || this.intervenants == [] || this.ceintureChoisieObject == ""){
      alert("Vous devez remplir tous les champs pour continuer.")
    }  
    else{
      this.createSequence();
    }
    
    

  }

  reload(){
    document.location.reload();
  }



}

