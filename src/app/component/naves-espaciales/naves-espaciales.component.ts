import { Component } from '@angular/core';
import { NavesEspacialesService } from '../../services/naves-espaciales.service';

@Component({
  selector: 'app-naves-espaciales',
  templateUrl: './naves-espaciales.component.html',
  styleUrls: ['./naves-espaciales.component.css']
})
export class NavesEspacialesComponent  {
  ListaDeNaves: [];

  constructor( private navesService: NavesEspacialesService ){
    this.ListaDeNaves = [];
    this.LlenarListaDeNaves ();
  }

  LlenarListaDeNaves (){

    this.navesService.TraerTodasLasNaves().subscribe(

      (data) => {
          console.log ('DATA:' , data);
          this.ListaDeNaves = data ['results'];
      }
    );
  }
}

