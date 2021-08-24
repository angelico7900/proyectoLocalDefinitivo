import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Abogado } from 'src/app/Models/Abogado';

@Injectable({
  providedIn: 'root'
})
export class ObtenerService {
  url : string = "http://localhost/api";
  urlAbs:string = this.url + "/obtenerAbogados.php";
  urlAb:string = this.url + "/obtenerAbogado.php";
  urlCasos:string = this.url + "/obtenerCasos.php";
  urlCli :string =  this.url + "/obtenerCliente.php";
  urlMen : string = this.url + "/obtenerMensajes.php"
  urlOp : string =  this.url + "/obtenerOpiniones.php"
  urlAbF : string = this.url + "/obtenerAbogadoWhere.php"
  urlAbM : string = this.url + "/obtenerAbogadoMoroso.php"
  urlClis : string = this.url + "/obtenerClientes.php"
  urlAbsM : string = this.url + "/obtenerAbogadosMorosos.php"
  urlAv : string = this.url + "/avisar.php";
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
  obtenerAbogadosMorosos():Observable<any>{

    return this.http.post(this.urlAbsM,"");
  }
  obtenerClientes():Observable<any>{
    return this.http.post(this.urlClis,"");
  }
  obtenerAviso(correo):Observable<any>{
    let json = {
      'correo' : correo
    }
    return this.http.post(this.urlAv,json);
  }
}
