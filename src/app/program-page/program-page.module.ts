import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramPageComponent } from './program-page.component';
import { ProgramPageRouting } from './program-page.routing.module';

@NgModule({
    imports: [
      CommonModule,
      ProgramPageRouting,
      ProgramPageComponent
    ],
    declarations: [ProgramPageComponent]
  })
  export class ProgramPageModule {}
  