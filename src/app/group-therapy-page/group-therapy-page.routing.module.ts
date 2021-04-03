import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupTherapyPageComponent } from './group-therapy-page.component';

const routes: Routes = [
  {
    path: '',
    component: GroupTherapyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupTherapyPageRouting {}
