import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { HomePageRouting } from './home-page-routing.module';

@NgModule({
    imports: [
      CommonModule,
      HomePageRouting,
      HomePageComponent
    ],
    declarations: [HomePageComponent]
  })
  export class HomePageModule {}
  