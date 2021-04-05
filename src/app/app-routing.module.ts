import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { NavPageComponent } from './nav-page/nav-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GroupTherapyPageComponent } from './group-therapy-page/group-therapy-page.component';
import { ProgramPageComponent } from './program-page/program-page.component';
import { FounderPageComponent } from './founder-page/founder-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';


const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./home-page/home-page/home-page.component').then(m => m.HomePageComponent)
    },
    {
      path: 'nav-page',
      loadChildren: () => import('./nav-page/nav-page.component').then( m => m.NavPageComponent)
    },
    {
      path: 'about-page',
      loadChildren: () => import('./about-page/about-page.component').then( m => m.AboutPageComponent)
    },
    {
      path: 'group-therapy-page',
      loadChildren: () => import('./group-therapy-page/group-therapy-page.component').then( m => m.GroupTherapyPageComponent)
    },
    {
      path: 'program-page',
      loadChildren: () => import('./program-page/program-page.component').then( m => m.ProgramPageComponent)
    },
    {
      path: 'founder-page',
      loadChildren: () => import('./founder-page/founder-page.component').then(m => m.FounderPageComponent),
    },
    {
      path: 'contacts-page',
      loadChildren: () => import('./contacts-page/contacts-page.component').then( m => m.ContactsPageComponent)
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
