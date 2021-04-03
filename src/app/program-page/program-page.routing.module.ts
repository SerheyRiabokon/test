import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramPageComponent } from './program-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramPageRouting {}
