import { Component, OnInit, Output,Input } from '@angular/core';
import { User } from 'src/app/Models/User';
import {EventEmitter} from '@angular/core';
import { ObtenerService } from 'src/app/services/gets/obtener.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-body-login',
  templateUrl: './body-login.component.html',
  styleUrls: ['./body-login.component.css']
})
export class BodyLoginComponent implements OnInit {
  usuario:User;
  @Input() msgErrorBody:boolean;
  @Output() logeo: EventEmitter<User> = new EventEmitter<User>();
  correoRecuperacion : string;
  constructor(private obtener : ObtenerService,private login:LoginServiceService) {
    this.usuario = new User();
   }

  ngOnInit(): void {
    this.aparecerModal();
  }
  clickarModal(){
    let element : HTMLElement = document.querySelector("#btnModal") as HTMLElement;
    element.click();
  }
  aparecerModal(){
    if(document.getElementById("btnModal")){
			var modal = document.getElementById("tvesModal");
			var btn = document.getElementById("btnModal");
			var span = document.getElementsByClassName("close")[0];
			var body = document.getElementsByTagName("body")[0];

			btn.onclick = function() {
				modal.style.display = "block";

				body.style.position = "static";
				body.style.height = "100%";
				body.style.overflow = "hidden";
			}
      span.addEventListener('click',clickar);
			function clickar () {
				modal.style.display = "none";

				body.style.position = "inherit";
				body.style.height = "auto";
				body.style.overflow = "visible";
			}

			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";

					body.style.position = "inherit";
					body.style.height = "auto";
					body.style.overflow = "visible";
				}
			}
		}
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
  olvidarContra(){
    let element : HTMLElement = document.querySelector("#formLogin") as HTMLElement;
    element.style.display = "none";
    let element2 : HTMLElement = document.querySelector("#reset") as HTMLElement;
    element2.style.display = "block";
  }
  recuperarContra(){
    console.log(this.correoRecuperacion);
    if(this.usuario.correo.length == 0){

    }else{
      this.obtener.obtenerRecuperadorContrasenna(this.correoRecuperacion).subscribe(
        datos =>{
          console.log(datos);
          let element : HTMLElement = document.querySelector("#tvesModal p") as HTMLElement;
          if(datos.exito == 'OK'){
            element.innerHTML = "Correo enviado para recuperar la contraseña";
          }else{
            element.innerHTML = "Error al enviar el correo";
          }
          this.clickarModal();
        }
      )
    }
  }
}
