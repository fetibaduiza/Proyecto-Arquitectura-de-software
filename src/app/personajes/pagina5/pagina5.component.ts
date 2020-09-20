import { Component, OnInit } from '@angular/core';
import { Personas5Service } from 'src/app/services/personas5.service';

@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.component.html',
  styleUrls: ['./pagina5.component.css']
})
export class Pagina5Component  {

  ListaDePersonas5: [];

  constructor( private personas5Service: Personas5Service ){
    this.ListaDePersonas5 = [];
    this.LlenarListaDePersonas5 ();
  }

  LlenarListaDePersonas5 (){

    this.personas5Service.TraerTodasLasPersonas5().subscribe(

      (data) => {
          console.log ('DATA:' , data);
          this.ListaDePersonas5 = data ['results'];
      }
    );
  }
 }

