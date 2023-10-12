import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardDashboardComponent } from './cards/card-dashboard/card-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CardBusinessComponent } from './cards/card-business/card-business.component';
import { WidgetComponent } from './widget/widget.component';
import { AddBusinessComponent } from './modals/add-business/add-business.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './modals/add-product/add-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardDashboardComponent,
    HeaderComponent,
    CardBusinessComponent,
    WidgetComponent,
    AddBusinessComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CardDashboardComponent,
    HeaderComponent,
    CardBusinessComponent,
    WidgetComponent,
    AddBusinessComponent,
    AddProductComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentesModule { }
