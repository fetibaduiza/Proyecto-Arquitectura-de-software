import { Component, OnInit } from '@angular/core';
import {  Personas9Service } from 'src/app/services/persona9.service';

@Component({
  selector: 'app-pagina9',
  templateUrl: './pagina9.component.html',
  styleUrls: ['./pagina9.component.css']
})
export class Pagina9Component  {

  ListaDePersonas9: [];

  constructor( private personas5Service: Personas9Service ){
    this.ListaDePersonas9 = [];
    this.LlenarListaDePersonas9 ();
  }

  LlenarListaDePersonas9 (){

    this.personas5Service.TraerTodasLasPersonas9().subscribe(

      (data) => {
          console.log ('DATA:' , data);
          this.ListaDePersonas9 = data ['results'];
      }
    );
  }
 }
