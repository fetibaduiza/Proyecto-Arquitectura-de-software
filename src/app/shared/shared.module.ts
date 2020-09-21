import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';

import {MaterialModule} from '@material/material.module';

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

@NgModule({
  declarations: [
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
    FooterComponent
  ],
  exports: [
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
    MaterialModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class SharedModule { }
