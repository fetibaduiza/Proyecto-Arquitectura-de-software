import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Personas2Service {


  constructor( private httpClient: HttpClient ) { }

  getPersonas () {
    const Personas = [];
    return Personas;
  }

  TraerTodasLasPersonas2(){

    return this.httpClient.get ('https://swapi.py4e.com/api/people/?page=2');

  }
}
