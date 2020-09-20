import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// RUTAS

import { app_routing} from './app.routes';


// SERVICIOS

import { InformacionService } from './services/informacion.service';
import { PeliculasService } from './services/peliculas.service';
import { PersonasService } from './services/personas.service';
import { PlanetasService } from './services/planetas.service';
import { EspeciesService } from './services/especies.service';
import { NavesEspacialesService } from './services/naves-espaciales.service';
import { VehiculosService } from './services/vehiculos.service';
import { Personas2Service } from './services/personas2.service';
import { Personas3Service } from './services/personas3.service';
import { Personas4Service } from './services/personas4.service';
import { Personas5Service } from './services/personas5.service';
import { Personas6Service } from './services/personas6.service';
import { Personas7Service } from './services/personas7.service';
import { Personas8Service } from './services/persona8.service';
import { Personas9Service } from './services/persona9.service'

// COMPONENTES

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { HistoriaComponent } from './component/historia/historia.component';
import { PeliculasComponent } from './component/peliculas/peliculas.component';
import { PlanetasComponent } from './component/planetas/planetas.component';
import { PersonasComponent } from './component/personas/personas.component';
import { EspeciesComponent } from './component/especies/especies.component';
import { NavesEspacialesComponent } from './component/naves-espaciales/naves-espaciales.component';
import { VehiculosComponent } from './component/vehiculos/vehiculos.component';
import { IntegrantesDeTrabajoComponent } from './component/integrantes-de-trabajo/integrantes-de-trabajo.component';
import { FooterComponent } from './component/footer/footer.component';
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
    HeaderComponent,
    BannerComponent,
    HistoriaComponent,
    PeliculasComponent,
    PlanetasComponent,
    PersonasComponent,
    EspeciesComponent,
    NavesEspacialesComponent,
    VehiculosComponent,
    IntegrantesDeTrabajoComponent,
    FooterComponent,
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
    app_routing,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    PeliculasService,
    VehiculosService,
    NavesEspacialesService,
    EspeciesService,
    PersonasService,
    PlanetasService,
    InformacionService,
    Personas2Service,
    Personas3Service,
    Personas4Service,
    Personas5Service,
    Personas6Service,
    Personas7Service,
    Personas8Service,
    Personas9Service
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
