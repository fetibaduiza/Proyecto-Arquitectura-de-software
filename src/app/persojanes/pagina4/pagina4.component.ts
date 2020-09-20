import { Component } from '@angular/core';
import { Personas4Service } from 'src/app/services/personas4.service';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.css']
})
export class Pagina4Component  {

  ListaDePersonas4: [];

 constructor( private personasService: Personas4Service){
   this.ListaDePersonas4 = [];
   this.LlenarListaDePersonas ();
 }

 LlenarListaDePersonas (){

   this.personasService.TraerTodasLasPersonas4().subscribe(

     (data) => {
         console.log ('DATA:' , data);
         this.ListaDePersonas4 = data ['results'];
     }
   );
 }
}
