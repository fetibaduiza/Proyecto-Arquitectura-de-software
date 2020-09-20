import { Component } from '@angular/core';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent {
  ListaDeVehiculos: [];

  constructor( private vehiculosService: VehiculosService){
    this.ListaDeVehiculos = [];
    this.LlenarListaDeVehiculos ();
  }

  LlenarListaDeVehiculos (){

    this.vehiculosService.TraerTodosLosVehiculos().subscribe(

      (data) => {
          console.log ('DATA:' , data);
          this.ListaDeVehiculos = data ['results'];
      }
    );
  }
}


