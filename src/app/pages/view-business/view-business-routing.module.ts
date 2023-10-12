import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBusinessPage } from './view-business.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBusinessPageRoutingModule {}
