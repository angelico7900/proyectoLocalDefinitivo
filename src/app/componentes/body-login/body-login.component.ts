import { Component, OnInit, Output,Input } from '@angular/core';
import { User } from 'src/app/Models/User';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-body-login',
  templateUrl: './body-login.component.html',
  styleUrls: ['./body-login.component.css']
})
export class BodyLoginComponent implements OnInit {
  usuario:User;
  @Input() msgErrorBody:boolean;
  @Output() logeo: EventEmitter<User> = new EventEmitter<User>();
  constructor() {
    this.usuario = new User();
   }

  ngOnInit(): void {
  }
  cambioContra(){
    let ojo = document.querySelector("i");
    let pass = document.querySelectorAll("input")[1];
    let typ = document.createAttribute("type");
    if(ojo?.classList.contains("fa-eye")){
      ojo?.classList.replace("fa-eye","fa-eye-slash");
      typ.value='password';
      pass?.attributes.setNamedItem(typ);
    }else{
      ojo?.classList.replace("fa-eye-slash","fa-eye");
      typ.value = 'text';
      pass?.attributes.setNamedItem(typ);

    }
    
  }
  logearse(user:User){
    this.logeo.emit(user);

  }
}
