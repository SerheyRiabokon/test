import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavPageComponent } from './nav-page.component';
import { NavPageRouting } from './nav-page.routing.module';

@NgModule({
    imports: [
      CommonModule,
      NavPageRouting
    ],
    declarations: [NavPageComponent]
  })
  export class NavPageModule {}
  