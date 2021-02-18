import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionbottlePageRoutingModule } from './optionbottle-routing.module';

import { OptionbottlePage } from './optionbottle.page';
import { RackcontentPage } from '../rackcontent/rackcontent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionbottlePageRoutingModule,
  ],
  declarations: [OptionbottlePage,RackcontentPage],
  entryComponents : [RackcontentPage]
  
})
export class OptionbottlePageModule {}
