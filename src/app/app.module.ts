import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page/home-page.component';
import { NavPageComponent } from './nav-page/nav-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GroupTherapyPageComponent } from './group-therapy-page/group-therapy-page.component';
import { ProgramPageComponent } from './program-page/program-page.component';
import { FounderPageComponent } from './founder-page/founder-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { HeaderComponent } from './components/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavPageComponent,
    AboutPageComponent,
    GroupTherapyPageComponent,
    ProgramPageComponent,
    FounderPageComponent,
    ContactsPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
