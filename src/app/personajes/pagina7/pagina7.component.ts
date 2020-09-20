import { Component} from '@angular/core';
import {  Personas7Service } from 'src/app/services/personas7.service';

@Component({
  selector: 'app-pagina7',
  templateUrl: './pagina7.component.html',
  styleUrls: ['./pagina7.component.css']
})
export class Pagina7Component  {

  ListaDePersonas7: [];

  constructor( private personas5Service: Personas7Service ){
    this.ListaDePersonas7 = [];
    this.LlenarListaDePersonas7 ();
  }

  LlenarListaDePersonas7 (){

    this.personas5Service.TraerTodasLasPersonas7().subscribe(

      (data) => {
          console.log ('DATA:' , data);
          this.ListaDePersonas7 = data ['results'];
      }
    );
  }
 }
