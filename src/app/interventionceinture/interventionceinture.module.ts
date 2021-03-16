import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterventionceinturePageRoutingModule } from './interventionceinture-routing.module';

import { InterventionceinturePage } from './interventionceinture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterventionceinturePageRoutingModule
  ],
  declarations: [InterventionceinturePage]
})
export class InterventionceinturePageModule {}
