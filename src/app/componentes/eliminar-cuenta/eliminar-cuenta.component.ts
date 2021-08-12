import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-eliminar-cuenta',
  templateUrl: './eliminar-cuenta.component.html',
  styleUrls: ['./eliminar-cuenta.component.css']
})
export class EliminarCuentaComponent implements OnInit {

  constructor(private login:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
    if(this.login.iniciado() == null){
      this.router.navigate(['']);
    }
  }

}
