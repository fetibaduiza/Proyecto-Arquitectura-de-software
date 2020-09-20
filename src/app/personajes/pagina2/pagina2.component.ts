import { Component} from '@angular/core';
import { Personas2Service } from 'src/app/services/personas2.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component  {

  ListaDePersonas2: [];

  constructor( private personas2Service: Personas2Service){
    this.ListaDePersonas2 = [];
    this.LlenarListaDePersonas2 ();
  }

  LlenarListaDePersonas2 (){

    this.personas2Service.TraerTodasLasPersonas2().subscribe(

      (data) => {
          console.log ('DATA:' , data);
          this.ListaDePersonas2 = data ['results'];
      }
    );
  }
 }
