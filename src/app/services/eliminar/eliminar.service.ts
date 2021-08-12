import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Abogado } from 'src/app/Models/Abogado';
import { LoginServiceService } from '../login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class EliminarService {
  url : string = 'http://localhost/api/';

  constructor(private http:HttpClient,private router:Router,private login:LoginServiceService) { }
  eliminarCuenta(datos:any):Observable<any>{
    let json = {
      'correo' :datos['correo'],
      'contrasena' : datos['contrasena'],
      'tipo' : this.login.tipoUser()

    }
    return this.http.post(this.url + "eliminarCuenta.php",JSON.stringify(json));
  }
  eliminarClienteAdmin(correo : string):Observable<any>{
    let json = {
      'correo' : correo
    };
    return this.http.post(this.url + "eliminarClienteAdmin.php",JSON.stringify(json));
  }
  eliminarAbogadoAdmin(correo : string):Observable<any>{
    let json = {
      'correo' : correo
    };
    return this.http.post(this.url + "eliminarAbogadoAdmin.php",JSON.stringify(json));
  }
}
