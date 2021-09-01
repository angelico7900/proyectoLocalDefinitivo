import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EliminarService } from 'src/app/services/eliminar/eliminar.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-body-eliminar-cuenta',
  templateUrl: './body-eliminar-cuenta.component.html',
  styleUrls: ['./body-eliminar-cuenta.component.css']
})
export class BodyEliminarCuentaComponent implements OnInit {
  error : boolean = false;
  contra : string = "";
  contra2 : string = "";
  del : boolean = false;
  constructor(private eliminar:EliminarService,private login:LoginServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.aparecerModal();
  }

  modificar(){
    this.contra = this.contra.trim();
    this.contra2 = this.contra2.trim();
    if((this.contra != this.contra2) || this.contra.length == 0){
      this.error = true;
    }else{
      let datos = [];
      datos['contrasena'] = this.contra;
      datos['correo'] = this.login.iniciado();

      this.eliminar.eliminarCuenta(datos).subscribe(datos =>{
        let texto = document.querySelector('.modal-content p');
        if(datos.exito == 'OK'){
          this.del = true;
          texto.innerHTML = "Cuenta eliminada";
          this.clickarModal();
          this.login.cerrarSesion();
          this.router.navigate(['/']);
        }else if(datos.exito == 'ERR'){
          texto.innerHTML = "Error al eliminar la cuenta";
        }else if(datos.exito == 'FOUND'){
        this.login.cerrarSesion();
        }else{
          texto.innerHTML = "La contraseña no coincide con la establecida";
        }
        this.clickarModal();
      });
    }
  }
  cerrar(){
    if(this.del){
      this.login.cerrarSesion();
    }

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
  clickarModal(){
    let element : HTMLElement = document.querySelector("#btnModal") as HTMLElement;
    element.click();
  }
}
