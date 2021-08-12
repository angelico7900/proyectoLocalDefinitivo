import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-admin-control-morosos',
  templateUrl: './admin-control-morosos.component.html',
  styleUrls: ['./admin-control-morosos.component.css']
})
export class AdminControlMorososComponent implements OnInit {

  constructor(private login:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
    if(this.login.iniciadoAdmin() ==null){
      this.router.navigate(['/admin']);
    }
  }
}
