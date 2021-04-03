import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupTherapyPageComponent } from './group-therapy-page.component';
import { GroupTherapyPageRouting } from './group-therapy-page.routing.module';

@NgModule({
    imports: [
      CommonModule,
      GroupTherapyPageRouting,
      GroupTherapyPageComponent
    ],
    declarations: [GroupTherapyPageComponent]
  })
  export class GroupTherapyPageModule {}
  