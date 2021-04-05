import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FounderPageComponent } from './founder-page.component';
import { FounderPageRouting } from './founder-page.routing.module';

@NgModule({
    imports: [
      CommonModule,
      FounderPageRouting
    ],
    declarations: [FounderPageComponent]
  })
  export class FounderPageModule {}
  