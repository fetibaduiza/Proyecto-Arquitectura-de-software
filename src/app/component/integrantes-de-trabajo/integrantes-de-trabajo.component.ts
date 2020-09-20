import { Component} from '@angular/core';
import {InformacionService} from '../../services/informacion.service';

@Component({
  selector: 'app-integrantes-de-trabajo',
  templateUrl: './integrantes-de-trabajo.component.html',
  styleUrls: ['./integrantes-de-trabajo.component.css']
})
export class IntegrantesDeTrabajoComponent {

  constructor( public _is: InformacionService){}

}
