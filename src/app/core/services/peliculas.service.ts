import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private httpClient: HttpClient ) { }

  getPelicula () {
    const Pelicula = { title: 'The Force Awakens', episode_id : 1 , director: 'Cristhian', opening_crawl: 'aqui va algo', producer: 'Gary Kurtz, Rick McCallum', release_date: '1977-05-25' };
    return Pelicula;
  }

  TraerTodasLasPeliculas(){

    return this.httpClient.get ('https://swapi.py4e.com/api/films/');

  }
}
