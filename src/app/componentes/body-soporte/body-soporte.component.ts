import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro/registro.service';

@Component({
  selector: 'app-body-soporte',
  templateUrl: './body-soporte.component.html',
  styleUrls: ['./body-soporte.component.css']
})
export class BodySoporteComponent implements OnInit {
  datos : any = [];
  public nombre : string = "";
  public apellidos : string = "";
  public asunto : string = "";
  public correo : string = "";
  constructor(private registro:RegistroService) { }

  ngOnInit(): void {
    this.aparecerModal();
  }
  enviarAsunto(){
    let datos = [];
    datos['nombre'] = this.nombre;
    datos['apellidos']  = this.apellidos;
    datos['asunto'] = this.asunto;
    datos['correo'] = this.correo;
    this.registro.registrarAsunto(datos).subscribe(datos =>{
      if(datos.exito == 'OK'){
        let texto = document.querySelector('.modal-content p');
        texto.innerHTML = "Mensje enviado";
      }else{
        let texto = document.querySelector('.modal-content p');
        texto.innerHTML = "Mensaje no enviado";
      }
      this.clickarModal();
    });
  }
  vacios(){
    if(this.nombre == "" || this.apellidos == "" || this.correo == "" ||  this.asunto == ""){
      return true;
    }else{
      return false;
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
