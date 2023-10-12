import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ListBusinessComponent } from './pages/business/list-business/list-business.component';
import { ViewBusinessComponent } from './pages/business/view-business/view-business.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path:'inicio',
    component:HomeComponent
  },
  {
    path:'nosotros',
    component:AboutComponent
  },
  {
    path:'emprendimientos',
    component:ListBusinessComponent
  },
  {
    path:'emprendimiento/:name',
    component:ViewBusinessComponent
  },
  {
    path:'contactanos',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
