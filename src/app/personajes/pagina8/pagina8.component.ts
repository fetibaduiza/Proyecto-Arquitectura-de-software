import { Component, OnInit } from '@angular/core';
import {  Personas8Service } from 'src/app/services/persona8.service';

@Component({
  selector: 'app-pagina8',
  templateUrl: './pagina8.component.html',
  styleUrls: ['./pagina8.component.css']
})
export class Pagina8Component  {

  ListaDePersonas8: [];

  constructor( private personas5Service: Personas8Service ){
    this.ListaDePersonas8 = [];
    this.LlenarListaDePersonas8 ();
  }

  LlenarListaDePersonas8 (){

    this.personas5Service.TraerTodasLasPersonas8().subscribe(

      (data) => {
          console.log ('DATA:' , data);
          this.ListaDePersonas8 = data ['results'];
      }
    );
  }
 }
