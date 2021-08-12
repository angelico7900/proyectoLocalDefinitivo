import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/Models/Register';
import {LoginServiceService} from 'src/app/services/login/login-service.service'
import { RegistroService } from 'src/app/services/registro/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  constructor(private registroService:RegistroService,
    private loginService:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
    if(this.loginService.iniciado() != null){
      this.router.navigate(['']);
    }
  }
}
