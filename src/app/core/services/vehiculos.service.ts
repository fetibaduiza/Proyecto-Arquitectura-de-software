import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor( private httpClient: HttpClient ) { }

  getVehiculos () {
    const vehiculos = { };
    return vehiculos;
  }

  TraerTodosLosVehiculos(){

    return this.httpClient.get ('https://swapi.py4e.com/api/vehicles/');

  }

}
