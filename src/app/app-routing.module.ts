import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { FestivalcollectionComponent } from './festivalcollection/festivalcollection.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : '',
    component : HomepageComponent
  },
 
  {
    path : 'mens-wear',
    component : MenComponent
  },
  {
    path : 'womens-wear',
    component : WomenComponent
  },
  {
    path : 'kids-wear',
    component : KidsComponent
  },
  {
    path : 'festival-collection',
    component : FestivalcollectionComponent
  },
  {
    path : 'about-us',
    component : AboutusComponent
  },
  {
    path : 'contact-us',
    component : ContactusComponent
  },
  {
    path : '**',
    component : PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
