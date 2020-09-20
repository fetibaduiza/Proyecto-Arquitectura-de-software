import { Component } from '@angular/core';
import { PlanetasService } from '../../services/planetas.service';





@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent  {

 ListaDePlanetas: [];


 constructor( private planetasService: PlanetasService){
   this.ListaDePlanetas = [];
   this.LlenarListaDePlanetas ();

 }

 LlenarListaDePlanetas (){

   this.planetasService.TraerTodosLosPlanetas().subscribe(

     (data) => {
         console.log ('DATA:' , data);
         this.ListaDePlanetas = data ['results'];
     }
   );
    }
  }
