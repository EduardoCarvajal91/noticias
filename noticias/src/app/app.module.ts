import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

//routes
import {routing, appRoutingProviders} from "./app.routing";

import {
  MatListModule,
  MatInputModule,
  MatChipsModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule
} from "@angular/material";
import { HomeComponent } from './components/home/home.component';
//services
import {HackerNewsService} from "./services/hacker-news.service";
import { FavoritesComponent } from './components/favorites/favorites.component';
import {FavoritesService} from "./services/favorites.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    routing
  ],
  providers: [HackerNewsService, appRoutingProviders, FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
