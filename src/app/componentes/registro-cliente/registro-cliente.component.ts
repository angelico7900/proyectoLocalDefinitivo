import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/Models/Register';
import {LoginServiceService} from 'src/app/services/login/login-service.service'
import { RegistroService } from 'src/app/services/registro/registro.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  error:boolean;
  constructor(private registroService:RegistroService,
    private loginService:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
    if(this.loginService.iniciado() != null){
      this.router.navigate(['']);
    }
  }

  registrar(usuario:Register){
    this.registroService.registrarse(usuario).subscribe(datos =>{
      console.log(datos);
      if(datos.exito == 'OK'){
        this.router.navigate(['']);
      }else{
        this.error = true;
      }
    });
  }
}
