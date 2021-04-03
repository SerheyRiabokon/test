import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomePageModule } from './home-page/home-page/home-page.module';
// import { NavPageModule } from './nav-page/nav-page.module';
// import { AboutPageModule } from './about-page/about-page.module';
// import { GroupTherapyPageModule } from './group-therapy-page/group-therapy-page.module';
// import { ProgramPageModule } from './program-page/program-page.module';
// import { FounderPageModule } from './founder-page/founder-page.module';
// import { ContactsPageModule } from './contacts-page/contacts-page.module';


const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./home-page/home-page/home-page.module').then(m => m.HomePageModule)
    },
    {
      path: 'nav-page',
      loadChildren: () => import('./nav-page/nav-page.module').then( m => m.NavPageModule)
    },
    {
      path: 'about-page',
      loadChildren: () => import('./about-page/about-page.module').then( m => m.AboutPageModule)
    },
    {
      path: 'group-therapy-page',
      loadChildren: () => import('./group-therapy-page/group-therapy-page.module').then( m => m.GroupTherapyPageModule)
    },
    {
      path: 'program-page',
      loadChildren: () => import('./program-page/program-page.module').then( m => m.ProgramPageModule)
    },
    {
      path: 'founder-page',
      loadChildren: () => import('./founder-page/founder-page.module').then(m => m.FounderPageModule),
    },
    {
      path: 'contacts-page',
      loadChildren: () => import('./contacts-page/contacts-page.module').then( m => m.ContactsPageModule)
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
