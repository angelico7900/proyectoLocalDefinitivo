import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Abogado } from 'src/app/Models/Abogado';

@Injectable({
  providedIn: 'root'
})
export class ObtenerService {
  urlAbs:string = "http://localhost/api/obtenerAbogados.php";
  urlAb:string = "http://localhost/api/obtenerAbogado.php";
  urlCasos:string = "http://localhost/api/obtenerCasos.php";
  urlCli :string =  "http://localhost/api/obtenerCliente.php";
  urlMen : string = "http://localhost/api/obtenerMensajes.php"
  urlOp : string =  "http://localhost/api/obtenerOpiniones.php"
  urlAbF : string = "http://localhost/api/obtenerAbogadoWhere.php"
  urlAbM : string = "http://localhost/api/obtenerAbogadoMoroso.php"
  urlClis : string = "http://localhost/api/obtenerClientes.php"
  urlAbsM : string = "http://localhost/api/obtenerAbogadosMorosos.php"
  constructor(private http:HttpClient,private router:Router) { }
  obtenerAbogados():Observable<any>{
    return this.http.post(this.urlAbs,"");
  }
  obtenerCasos(){
    return this.http.get(this.urlCasos);
  }
  obtenerAbogado(abogado:string):Observable<any>{
    let objectAux = {
      'correo' : abogado
    }
    return this.http.post(this.urlAb,JSON.stringify(objectAux));
  }
  obtenerCliente(cliente:string):Observable<any>{
    let jsonAux = {
      'correo' : cliente
    }
    return this.http.post(this.urlCli,JSON.stringify(jsonAux));
  }
  obtenerMensajes(correo:string):Observable<any>{
    let json = JSON.stringify({
      'correo' : correo
    });
    return this.http.post(this.urlMen,json);
  }
  obtenerOpiniones(abogado : string):Observable<any>{
    let json = {
      'correo' : abogado
    }
    return this.http.post(this.urlOp,JSON.stringify(json));
  }
  obtenerAbogadosFiltro(datos:string):Observable<any>{
    let json ={
      'ciudad' :  datos
    }
    return this.http.post(this.urlAbF,JSON.stringify(json));
  }
  obtenerAbogadoMoroso(datos:string):Observable<any>{
    let json = {
      'correo' : datos
    }
    return this.http.post(this.urlAbM,JSON.stringify(json));
  }
  obtenerAbogadosMorosos(){

    return this.http.post(this.urlAbsM,"");
  }
  obtenerClientes():Observable<any>{
    return this.http.post(this.urlClis,"");
  }
}
