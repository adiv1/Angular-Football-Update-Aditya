import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LeagueDashboardComponent } from './components/league-dashboard/league-dashboard.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GridrenderComponent } from './components/gridrender/gridrender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';
import { MatTabsModule } from '@angular/material/tabs';
import { FootballgameInterceptor } from './services/footballgame-interceptor';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    AgGridModule,
    RouterModule.forRoot([
      { path: '', component: LeagueDashboardComponent },
      { path: 'leagues', component: LeagueDashboardComponent },
      { path: 'gamedetails/:teamId', component: GameDetailsComponent },
    ]),
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    LeagueDashboardComponent,
    GameDetailsComponent,
    GridrenderComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FootballgameInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
