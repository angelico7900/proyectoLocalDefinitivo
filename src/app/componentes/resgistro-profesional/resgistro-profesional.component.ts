import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Abogado } from 'src/app/Models/Abogado';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { RegistroService } from 'src/app/services/registro/registro.service';

@Component({
  selector: 'app-resgistro-profesional',
  templateUrl: './resgistro-profesional.component.html',
  styleUrls: ['./resgistro-profesional.component.css']
})
export class ResgistroProfesionalComponent implements OnInit {
  repetido:boolean = false;

  constructor(private registroService:RegistroService,private router:Router,
    private login:LoginServiceService) { }

  ngOnInit(): void {
    if(this.login.iniciado() != null){
      this.router.navigate(['']);
    }
  }
  registrarse(profesional:Abogado){
    console.log(profesional);
    this.registroService.registroProfesional(profesional).subscribe(datos =>{
      if(datos.exito == 'OK'){
        this.router.navigate(['']);
      }else if(datos.exito == 'EXISTS'){
        this.repetido = true;
      }else if(datos.exito == 'ERR'){
      }
    });
  }
}
