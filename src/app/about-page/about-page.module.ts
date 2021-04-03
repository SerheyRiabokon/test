import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageComponent } from './about-page.component';
import { AboutPageRouting } from './about-page.routing.module';

@NgModule({
    imports: [
      CommonModule,
      AboutPageRouting,
      AboutPageComponent
    ],
    declarations: [AboutPageComponent]
  })
  export class AboutPageModule {}
  