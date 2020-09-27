import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { Personas9Service } from './services/persona9.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
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
  bootstrap: []
})
export class CoreModule { }
