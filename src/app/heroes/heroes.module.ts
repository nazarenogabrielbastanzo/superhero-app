import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './pages/details/details.component';
import { SessionComponent } from './components/session/session.component';
import { PowerstatsComponent } from './components/powerstats/powerstats.component';
import { AveragesComponent } from './components/averages/averages.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    DetailsComponent,
    SessionComponent,
    PowerstatsComponent,
    AveragesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule
  ]
})
export class HeroesModule { }
