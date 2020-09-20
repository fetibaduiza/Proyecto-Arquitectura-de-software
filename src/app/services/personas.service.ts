import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor( private httpClient: HttpClient ) { }

  getPersonas () {
    const Personas = [];
    return Personas;
  }

  TraerTodasLasPersonas(){

    return this.httpClient.get ('https://swapi.py4e.com/api/people/?page=1');

  }
}
