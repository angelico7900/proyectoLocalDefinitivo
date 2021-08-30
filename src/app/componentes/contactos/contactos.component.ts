import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObtenerService } from 'src/app/services/gets/obtener.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  resultado : boolean = false;

  constructor(private login : LoginServiceService,private router : Router,private obtener : ObtenerService) { }

  ngOnInit(): void {

    if(this.login.iniciado() == null){
      this.router.navigate(['']);
    }else if(this.login.tipoUser() == "abogado" && this.obtenerAbogadoMoroso()){
      console.log("hola");
      this.router.navigate(['/'])
    }else{
      console.log("adios");
    }
    console.log(this.resultado);
  }
  obtenerAbogadoMoroso(){
    this.obtener.obtenerAbogadoMoroso(this.login.iniciado()).subscribe(datos =>{
      if(datos.exito == 'OK'){
        if(datos.pagado == 'OK'){
        }else{
          this.resultado = true;
        }
      }else{
        this.resultado = true;
      }
    });
    return this.resultado;
  }

}
