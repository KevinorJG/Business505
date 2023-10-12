import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminBlogPageRoutingModule } from './admin-blog-routing.module';

import { AdminBlogPage } from './admin-blog.page';
import { ComponentesModule } from 'src/app/components/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminBlogPageRoutingModule,
    ReactiveFormsModule,
    ComponentesModule
  ],
  declarations: [AdminBlogPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminBlogPageModule {}
