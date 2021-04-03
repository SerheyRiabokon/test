import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page/home-page.module';
import { NavPageModule } from './nav-page/nav-page.module';
import { AboutPageModule } from './about-page/about-page.module';
import { GroupTherapyPageModule } from './group-therapy-page/group-therapy-page.module';
import { ProgramPageModule } from './program-page/program-page.module';
import { FounderPageModule } from './founder-page/founder-page.module';
import { ContactsPageModule } from './contacts-page/contacts-page.module';
import { HeaderComponent } from './components/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageModule,
    NavPageModule,
    AboutPageModule,
    GroupTherapyPageModule,
    ProgramPageModule,
    FounderPageModule,
    ContactsPageModule,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
