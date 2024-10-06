import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LiveComponent } from './Components/live/live.component';
import { PointsTableComponent } from './Components/points-table/points-table.component';
import { HistoryComponent } from './Components/history/history.component';
import { ErrorComponent } from './Components/error/error.component';
import { HeaderComponent } from './Components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchCardComponent } from './Components/live/match-card/match-card.component';


const appRoutes: Routes = [
  {path:"", redirectTo:'home', pathMatch:"full"},
  {path:"home", component:HomeComponent, title:"Home | CricStat"},
  {path:"live", component:LiveComponent, title:"Live | CricStat"},
  {path:"history", component:HistoryComponent, title:"History | CricStat"},
  {path:"points-table", component:PointsTableComponent, title:"Points-Table | CricStat"},
  {path:"**", component:ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveComponent,
    PointsTableComponent,
    HistoryComponent,
    ErrorComponent,
    HeaderComponent,
    MatchCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
