import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBlogPage } from './admin-blog.page';

const routes: Routes = [
  {
    path: '',
    component: AdminBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminBlogPageRoutingModule {}
