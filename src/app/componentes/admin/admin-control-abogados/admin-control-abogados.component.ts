import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-admin-control-abogados',
  templateUrl: './admin-control-abogados.component.html',
  styleUrls: ['./admin-control-abogados.component.css']
})
export class AdminControlAbogadosComponent implements OnInit {

  constructor(private login:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
    if(this.login.iniciadoAdmin() ==null){
      this.router.navigate(['/admin']);
    }
  }

}
