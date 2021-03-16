import { Component } from '@angular/core';
import {Upcv3serviceService} from '../api/upcv3service.service';
import{ApiResponse, Code} from '../api/ApiResponse'
import { UPCV3 } from '../model/upcv3/upcv3';
import {User} from '../model/user';
import {Router} from '@angular/router';
import { first } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import {GlobalService} from '../api/global.service';
import { Site } from '../model/site';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  upcv3: UPCV3[];
  
  token:string;
  value:string;
  operators:any;
  op:any;

  operationTypeOptions=["Mouvement de bouteilles dans l'entrepôt","Intervention sur une ceinture"];
  operationType = "Mouvement de bouteilles dans l'entrepôt";

  constructor(private ucp3service:Upcv3serviceService,
              private storage:Storage,
              private router : Router,
              private global:GlobalService) {
         
    
  }
  async ngOnInit(){
    
    await this.storage.get('token').then(val =>{this.token = val});       
    await this.ucp3service.getUPC3(this.token).subscribe(
      res =>{
        switch(res.code){
          case Code.UPCV3_RECOVERED:
          this.upcv3 = res.result;
          
          break;

          case Code.UNAUTHORIZED:
          alert("Erreur, vous n'êtes pas autorisé à utiliser l'application mobile !")
          break;
        }
      }
    )
    
    await this.ucp3service.getOperators(this.token).subscribe(
      res =>{
        switch (res.code) {
          
          case Code.OPERATOR_RECOVERED:
          this.operators = res.result;
          
          break;

          case Code.UNAUTHORIZED:
          this.operators = [];
          break;

        }
      }
    )
  }
  goToPieges (){
    this.global.upc3 = this.upcv3[this.value];
    this.global.op = this.op;
    
    
    this.router.navigate(['instalpieges']);
  }

  goTo(operationType){
    switch(this.operationType){
      case this.operationTypeOptions[0]:
        this.router.navigate(["optionbottle"]);
        break;
      case this.operationTypeOptions[1]:
        this.router.navigate(['interventionceinture']);
        break;
    }
  }



}
