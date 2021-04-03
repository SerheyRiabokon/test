import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FounderPageComponent } from './founder-page.component';

const routes: Routes = [
  {
    path: '',
    component: FounderPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FounderPageRouting {}
