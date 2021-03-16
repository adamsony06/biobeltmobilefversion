import { Component, OnInit } from '@angular/core';
import { Upcv3serviceService } from '../api/upcv3service.service';
import {GlobalService} from '../api/global.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-interventionceinture2',
  templateUrl: './interventionceinture2.page.html',
  styleUrls: ['./interventionceinture2.page.scss'],
})
export class Interventionceinture2Page implements OnInit {
  motiveOptions = ["Installation","Modification du nombre de pièges","Remise en route","Maintenance","Changements de bouteilles CO2","Changement d'UPC", "Hivernage", "Autre"];
  motive = this.global.objetIntervention
  data;
  token;;
  intervenants = [];
  intervenantsChoisis = this.global.intervenants;
 

  constructor(private upcv3service : Upcv3serviceService,
    private storage : Storage,
    private router : Router,
    private global:GlobalService) { }

    async ngOnInit() {
      await this.storage.get('token').then(val =>{this.token = val
        this.upcv3service.getOperators(this.token).subscribe(res=>{
          this.data = res.result           
          for (var i = 0; i < this.data.length; i++){
              this.intervenants.push(this.data[i]["lastName"]+" "+ this.data[i]["firstName"]);
            }         
          
        })
      });
      this.motive.forEach(element => {      
        $("#motiveList" ).append( "<li>"+element+"</li>");
      })    
      this.intervenantsChoisis.forEach(element => {      
        $("#intervenantsList" ).append( "<li>"+element+"</li>");
      })     
     
    }


}
