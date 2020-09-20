import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  constructor( private httpClient: HttpClient ) { }

  getEspecies() {
    const especies = {  };
    return especies;
  }

  TraerTodasLasEspecies(){

    return this.httpClient.get ('http://swapi.py4e.com/api/species/?page=1');

  }

}
