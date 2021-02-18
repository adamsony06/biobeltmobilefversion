import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbottlemodalPage } from 'src/app/addbottlemodal/addbottlemodal.page';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [AddbottlemodalPage],
  entryComponents : [AddbottlemodalPage],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
