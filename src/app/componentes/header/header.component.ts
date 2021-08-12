import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    this.loginService.cerrarSesion();
    this.router.navigate(['']);
  }
}
