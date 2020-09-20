import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';




@Injectable()
 export class InformacionService {

    info: any = {};
    cargada: boolean = false;

constructor( public HttpClientModule: HttpClient ) {



 this.HttpClientModule.get("assets/datosjson/informacion.pagina.json")
      .subscribe(datosjson => {
          console.log(datosjson);
          this.cargada = true;
          this.info = datosjson;
})
 }
}
