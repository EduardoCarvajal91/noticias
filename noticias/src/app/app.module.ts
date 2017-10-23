import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTabsModule,
  MatGridListModule
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatGridListModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
