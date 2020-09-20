
import { Component } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent  {

 ListaDePersonas: [];

 constructor( private personasService: PersonasService){
   this.ListaDePersonas = [];
   this.LlenarListaDePersonas ();
 }

 LlenarListaDePersonas (){

   this.personasService.TraerTodasLasPersonas().subscribe(

     (data) => {
         console.log ('DATA:' , data);
         this.ListaDePersonas = data ['results'];
     }
   );
 }
}


