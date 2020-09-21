import { Component } from '@angular/core';
import { InformacionService } from '@core/services/informacion.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  informacion = [];


  constructor(
    public informacionService: InformacionService,

         ){}

    }
