import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBusinessPageRoutingModule } from './view-business-routing.module';

import { ViewBusinessPage } from './view-business.page';
import { ComponentesModule } from 'src/app/components/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBusinessPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ViewBusinessPage]
})
export class ViewBusinessPageModule {}
