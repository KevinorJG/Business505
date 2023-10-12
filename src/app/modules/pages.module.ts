import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';
import { ComponentsModule } from './components.module';
import { AboutComponent } from '../pages/about/about.component';
import { AppRoutingModule } from '../app-routing.module';
import { ListBusinessComponent } from '../pages/business/list-business/list-business.component';
import { ViewBusinessComponent } from '../pages/business/view-business/view-business.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ListBusinessComponent,
    ViewBusinessComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ListBusinessComponent,
    ViewBusinessComponent,
    ContactUsComponent
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
