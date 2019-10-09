import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CapitalizePipe } from './pipes/capitalize.pipes';

import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEs);

import { AppComponent } from './app.component';
import { DOMsafePipe } from './pipes/domsafe.pipe';
import {ContrasenaPipe} from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    DOMsafePipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
