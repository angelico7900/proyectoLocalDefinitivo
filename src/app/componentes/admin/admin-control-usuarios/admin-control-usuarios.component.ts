import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-admin-control-usuarios',
  templateUrl: './admin-control-usuarios.component.html',
  styleUrls: ['./admin-control-usuarios.component.css']
})
export class AdminControlUsuariosComponent implements OnInit {

  constructor(private login:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
    if(this.login.iniciadoAdmin() ==null){
      this.router.navigate(['/admin']);
    }
  }
}
