import { Component, } from '@angular/core';
import { EspeciesService } from 'src/app/services/especies.service';


@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent  {

  ListaDeEspecies: [];

  constructor( private especiesService: EspeciesService){
    this.ListaDeEspecies = [];
    this.LlenarListaDeEspecies ();
  }

  LlenarListaDeEspecies (){

    this.especiesService.TraerTodasLasEspecies().subscribe(

      (data) => {
          console.log ('DATA:' , data);
          this.ListaDeEspecies = data ['results'];
      }
    );
  }
}
