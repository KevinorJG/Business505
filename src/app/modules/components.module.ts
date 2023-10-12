import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from '../components/footer/footer.component';
import { CardProductComponent } from '../components/cards/card-product/card-product.component';
import { CardBusinessComponent } from '../components/cards/card-business/card-business.component';
import { ModalViewImageComponent } from '../components/modal-view-image/modal-view-image.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardProductComponent,
    CardBusinessComponent,
    ModalViewImageComponent
  ],

  imports: [
    CommonModule,
    AppRoutingModule
  ],

  exports:[
    HeaderComponent,
    FooterComponent,
    CardProductComponent,
    CardBusinessComponent,
    ModalViewImageComponent
  ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
