import { Component, OnInit } from '@angular/core';
import { Personas6Service } from 'src/app/services/personas6.service';

@Component({
  selector: 'app-pagina6',
  templateUrl: './pagina6.component.html',
  styleUrls: ['./pagina6.component.css']
})
export class Pagina6Component  {

  ListaDePersonas6: [];

  constructor( private personas5Service: Personas6Service ){
    this.ListaDePersonas6 = [];
    this.LlenarListaDePersonas6 ();
  }

  LlenarListaDePersonas6 (){

    this.personas5Service.TraerTodasLasPersonas6().subscribe(

      (data) => {
          console.log ('DATA:' , data);
          this.ListaDePersonas6 = data ['results'];
      }
    );
  }
 }
