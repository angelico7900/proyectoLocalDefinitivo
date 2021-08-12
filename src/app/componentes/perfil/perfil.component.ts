import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private login:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
    if(this.login.iniciado() == null){
      this.router.navigate(['']);
    }
  }

}
