import { Component } from '@angular/core';
import { Personas3Service } from 'src/app/services/personas3.service';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component  {

  ListaDePersonas3: [];

  constructor( private personas3Service: Personas3Service ){
    this.ListaDePersonas3 = [];
    this.LlenarListaDePersonas3 ();
  }

  LlenarListaDePersonas3 (){

    this.personas3Service.TraerTodasLasPersonas3().subscribe(

      (data) => {
          console.log ('DATA:' , data);
          this.ListaDePersonas3 = data ['results'];
      }
    );
  }
 }
