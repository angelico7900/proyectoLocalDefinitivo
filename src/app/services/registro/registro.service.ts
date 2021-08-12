import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Abogado } from 'src/app/Models/Abogado';
import { Register } from 'src/app/Models/Register';
import { LoginServiceService } from '../login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
 private url:string = "http://localhost/api/";
  constructor(private http:HttpClient,private router:Router,private login:LoginServiceService) { }

  registrarse(usuario:Register):Observable<any>{
    let datos = {
      'correo' : usuario.correo,
      'contrasena' : usuario.contrasena,
      'provincia' : usuario.provincia,
      'nombre' : usuario.nombre,
      'apellidos' : usuario.apellidos
    };
    return this.http.post(this.url + "registro.php",JSON.stringify(datos));
  }
  registroProfesional(abogado:Abogado):Observable<any>{
    let json = JSON.stringify(abogado);
    console.log("as" + json);
    return this.http.post<Abogado>(this.url + "registroAbogado.php",json);
   }
   subirImagen(imagen:string):Observable<any>{
     let envio = {
       'archivo' : imagen,
       'correo' : this.login.iniciado()
     }
     let json = JSON.stringify(envio);
    return this.http.post<File>(this.url + "subirImagenAbogado.php",json);
   }
   subirMensaje(cuerpo:any):Observable<any>{
     let json = JSON.stringify(cuerpo);
    return this.http.post(this.url + "enviarMensaje.php",json);
   }
   subirCorreo(correos:any):Observable<any>{
     let json = JSON.stringify(correos);
     if(this.login.tipoUser() == 'cliente'){
      return this.http.post(this.url + "cambiarCorreoCliente.php",json);
     }else if(this.login.tipoUser() == 'abogado'){
      return this.http.post(this.url + "cambiarCorreoAbogado.php",json);
     }else{
       return null;
     }


   }
   subirContraseña(contraseñas:{}):Observable<any>{
    let json = JSON.stringify(contraseñas);
     if(this.login.tipoUser() == 'cliente'){
     return this.http.post(this.url + "modificarContrasennaCliente.php",json);
     }else if(this.login.tipoUser() == 'abogado'){
      return this.http.post(this.url + "modificarContrasennaAbogado.php",json);
     }else{
       return null;
     }
   }
   subirContrato(datos:any):Observable<any>{
    return this.http.post(this.url+"enviarCorreoDocumento.php",JSON.stringify(datos));
   }
   subirDocumento(datos:any):Observable<any>{
    return this.http.post(this.url+"enviarDocumento.php",JSON.stringify(datos));
   }
   registrarOpinion(datos:any):Observable<any>{
     return this.http.post(this.url+"enviarOpinion.php",JSON.stringify(datos));
   }
   registroPago(datos:any):Observable<any>{
     let json = {
       'correo' : datos
     }
     return this.http.post(this.url + "registrarPago.php",JSON.stringify(json));
   }
   registrarAsunto(datos):Observable<any>{
    let json = {
      'nombre' : datos['nombre'],
      'apellidos' : datos['apellidos'],
      'correo' : datos['correo'],
      'asunto' : datos['asunto']
    };
    return this.http.post(this.url + "enviarAsunto.php",JSON.stringify(json));
   }
   subirClienteAdmin(datos : any):Observable<any>{
    let json = {
      'nombre': datos.nombre,
      'apellidos' : datos.apellidos,
      'correo' : datos.correo,
      'provincia' : datos.provincia
    };
    return this.http.post(this.url + "actualizarClienteAdmin.php",JSON.stringify(json));
   }
   subirAbogadoAdmin(datos : any):Observable<any>{
    let json = {
      'nombre': datos.nombre,
      'apellidos' : datos.apellidos,
      'correo' : datos.correo,
      'provincia' : datos.provincia
    };
    return this.http.post(this.url + "actualizarAbogadoAdmin.php",JSON.stringify(json));
   }
}
