import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ThemesPagesComponent } from './themes-pages/themes-pages.component';

const routes: Routes = [

  {
    path: '',
    children: [

      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'search-results',
        component: SearchResultsComponent
      },
      {
        path: 'themes',
        component: ThemesPagesComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
