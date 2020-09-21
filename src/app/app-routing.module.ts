
import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {
  HistoriaComponent,
  IntegrantesDeTrabajoComponent,
  BannerComponent,
  PeliculasComponent,
  PersonasComponent,
  PlanetasComponent,
  EspeciesComponent,
  NavesEspacialesComponent,
  VehiculosComponent,
} from '@shared/component/index.paginas';
import { Pagina2Component } from './personajes/pagina2/pagina2.component';
import { Pagina3Component } from './personajes/pagina3/pagina3.component';
import { Pagina4Component } from './persojanes/pagina4/pagina4.component';
import { Pagina5Component } from './personajes/pagina5/pagina5.component';
import { Pagina6Component } from './personajes/pagina6/pagina6.component';
import { Pagina7Component } from './personajes/pagina7/pagina7.component';
import { Pagina8Component } from './personajes/pagina8/pagina8.component';
import { Pagina9Component } from './personajes/pagina9/pagina9.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {path : 'home', component: BannerComponent},
      {path : 'pagina2', component: Pagina2Component},
      {path : 'pagina3', component: Pagina3Component},
      {path : 'pagina4', component: Pagina4Component},
      {path : 'pagina5', component: Pagina5Component},
      {path : 'pagina6', component: Pagina6Component},
      {path : 'pagina7', component: Pagina7Component},
      {path : 'pagina8', component: Pagina8Component},
      {path : 'pagina9', component: Pagina9Component},
      {path : 'historia', component: HistoriaComponent},
      {path : 'integrantes-de-trabajo', component: IntegrantesDeTrabajoComponent},
      {path : 'peliculas', component: PeliculasComponent},
      {path : 'personas', component: PersonasComponent},
      {path : 'planetas', component: PlanetasComponent},
      {path : 'especies', component: EspeciesComponent},
      {path : 'naves-espaciales', component: NavesEspacialesComponent},
      {path : 'vehiculos', component: VehiculosComponent},
    ]
  },

  {path : '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {preloadingStrategy: PreloadAllModules}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
