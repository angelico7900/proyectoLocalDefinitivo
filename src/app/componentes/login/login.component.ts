import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginServiceService} from 'src/app/services/login/login-service.service'
import {User} from '../../Models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:User = new User();
  error:boolean;
  constructor(private loginService:LoginServiceService,
    private router:Router,
    private route:ActivatedRoute) { 
  }
  returnUrl:string = "";

  ngOnInit(): void {
    if(this.loginService.iniciado() != null){
      this.router.navigate(['']);
    }
  }
  errorInicio():void{
    this.error = true;
  }
  loginUsuario(user:User){
    this.loginService.loginUsuario(user).subscribe(
      datos =>{
        if(datos.exito == 'OK'){
            this.loginService.iniciarSesion(user);
        }else{
          this.errorInicio();
        }
      }
    )
  
  }
}
