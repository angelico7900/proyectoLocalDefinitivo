import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-body-soporte-admin',
  templateUrl: './body-soporte-admin.component.html',
  styleUrls: ['./body-soporte-admin.component.css']
})
export class BodySoporteAdminComponent implements OnInit {
  formulario:FormGroup = new FormGroup({});
  fail : boolean = false;
  constructor(private formBuilder:FormBuilder,private login:LoginServiceService
    ,private router:Router ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
    this.formulario = this.formBuilder.group({
      nombre: ['',Validators.required],
      contrasena: ['',[Validators.required,Validators.maxLength(16)]],
    });   
  }
  get nombreForm(){
    return this.formulario.get('nombre');
  }
  get contrasenaForm(){
    return this.formulario.get('contrasena');
  }
  logg(){
    let datos = [];
    datos['nombre'] = this.nombreForm?.value;
    datos['contrasena'] = this.contrasenaForm?.value;
    this.login.loginAdmin(datos).subscribe(
      datos =>{
        if(datos.exito = 'OK'){
          this.login.iniciarAdmin();
            this.router.navigate(['/adminControl']);          
        }else{

        }
      }
    );
  }
}
