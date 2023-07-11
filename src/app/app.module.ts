import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeComponent } from './liste/liste.component';
import { StepsModule } from 'primeng/steps';

@NgModule({
  declarations: [
    AppComponent,
    ListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    StepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
