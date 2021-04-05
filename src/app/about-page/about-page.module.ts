import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageComponent } from './about-page.component';
import { AboutPageRouting } from './about-page.routing.module';

@NgModule({
    imports: [
      CommonModule,
      AboutPageRouting
    ],
    declarations: [AboutPageComponent]
  })
  export class AboutPageModule {}
  