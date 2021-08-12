import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from 'src/app/Models/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Abogado } from 'src/app/Models/Abogado';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  userLoggedIn: boolean = false;

  URL = "http://localhost/api/login.php"
  URLPro = "http://localhost/api/loginAbogado.php";
  URLAd =  "http://localhost/api/loginAdmin.php";
  constructor(private http:HttpClient, private router:Router) {
   }
   loginUsuario(login:User):Observable<any>{
     login.tipo = login.tipo.toLowerCase();
     let json = JSON.stringify(login);
     return this.http.post<User>(this.URL,json);
   }
   logOut(){
     sessionStorage.removeItem('usuario');
     this.userLoggedIn = false;
   }
   logueado(){
    if(sessionStorage.getItem('usuario') == null){
      return false;
    }else{
      return true;
    }
   }
   iniciarSesion(usuario:User){
     sessionStorage.setItem('usuario',usuario.correo.toLowerCase());
     sessionStorage.setItem('tipo',usuario.tipo);
     this.router.navigate(['']);
   }
   iniciado(){
     return sessionStorage.getItem('usuario');
   }
   cerrarSesion(){
     sessionStorage.removeItem('usuario');
     sessionStorage.removeItem('tipo');
     this.router.navigate(['']);
     window.location.reload();
   }
  tipoUser(){
    return sessionStorage.getItem('tipo');
  }
  almacenarAbogadoContacto(abogado:Abogado){
    if(this.obtenerAbogadoContacto() != null){
      sessionStorage.removeItem('abogado');
    }else{
    }
    sessionStorage.setItem('abogado',abogado.correo);
  }
  obtenerAbogadoContacto(){
    return sessionStorage.getItem('abogado');
  }
  loginAdmin(datos : any):Observable<any>{
    let json = {
      'nombre' : datos['nombre'],
      'contrasena' : datos['correo']
      };
      return this.http.post(this.URLAd,JSON.stringify(json));
  }
  iniciarAdmin(){
    sessionStorage.setItem('admin','admin');
  }
  iniciadoAdmin(){
    return sessionStorage.getItem('admin');
  }
}
