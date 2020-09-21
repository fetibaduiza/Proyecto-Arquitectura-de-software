import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SharedModule} from '@shared/shared.module';
import {CoreModule} from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from '@layout/layout.component';

import { Pagina2Component } from './personajes/pagina2/pagina2.component';
import { Pagina3Component } from './personajes/pagina3/pagina3.component';
import { Pagina4Component } from './persojanes/pagina4/pagina4.component';
import { Pagina5Component } from './personajes/pagina5/pagina5.component';
import { Pagina6Component } from './personajes/pagina6/pagina6.component';
import { Pagina7Component } from './personajes/pagina7/pagina7.component';
import { Pagina8Component } from './personajes/pagina8/pagina8.component';
import { Pagina9Component } from './personajes/pagina9/pagina9.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    Pagina5Component,
    Pagina6Component,
    Pagina7Component,
    Pagina8Component,
    Pagina9Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [

  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
