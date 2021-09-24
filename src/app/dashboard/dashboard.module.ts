import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AveragesComponent } from './components/averages/averages.component';
import { CardComponent } from './components/card/card.component';
import { PowerstatsComponent } from './components/powerstats/powerstats.component';
import { SearchComponent } from './components/search/search.component';
import { SessionComponent } from './components/session/session.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AveragesComponent,
    CardComponent,
    PowerstatsComponent,
    SearchComponent,
    SessionComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
