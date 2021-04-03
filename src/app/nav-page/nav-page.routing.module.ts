import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavPageComponent } from './nav-page.component';

const routes: Routes = [
  {
    path: '',
    component: NavPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavPageRouting {}
