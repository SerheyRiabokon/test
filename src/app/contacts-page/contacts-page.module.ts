import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsPageComponent } from './contacts-page.component';
import { ContactsPageRouting } from './contacts-page.routing.module';

@NgModule({
    imports: [
      CommonModule,
      ContactsPageRouting,
      ContactsPageComponent
    ],
    declarations: [ContactsPageComponent]
  })
  export class ContactsPageModule {}
  