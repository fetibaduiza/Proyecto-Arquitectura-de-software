import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent  {

  ListaDePeliculas: [];

  constructor( private peliculasService: PeliculasService){
    this.ListaDePeliculas = [];
    this.LlenarListaDePeliculas ();
  }

  LlenarListaDePeliculas (){

    this.peliculasService.TraerTodasLasPeliculas().subscribe(

      (data) => {
          console.log ('DATA:' , data);
          this.ListaDePeliculas = data ['results'];
      }
    );
  }
}

