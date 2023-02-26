import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ThemesPagesComponent } from './themes-pages/themes-pages.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SearchResultsComponent,
    ThemesPagesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    RouterModule
  ]
})
export class PagesModule { }
