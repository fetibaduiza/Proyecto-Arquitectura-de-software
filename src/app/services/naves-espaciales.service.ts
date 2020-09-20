import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavesEspacialesService {

  constructor( private httpClient: HttpClient ) { }

  getNaves () {
    const naves = { };
    return naves;
  }

  TraerTodasLasNaves(){

    return this.httpClient.get ('http://swapi.py4e.com/api/starships/?page=1');

  }

}
