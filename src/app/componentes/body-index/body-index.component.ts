import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObtenerService } from 'src/app/services/gets/obtener.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-body-index',
  templateUrl: './body-index.component.html',
  styleUrls: ['./body-index.component.css']
})
export class BodyIndexComponent implements OnInit {
  items : any;
  public page:number = 1;
  formulario:FormGroup = new FormGroup({});
  constructor(private obtenerService:ObtenerService,private login:LoginServiceService
    ,private router:Router,private formBuilder:FormBuilder) { 
  }

  ngOnInit(): void {
     this.obtenerAbogados();
     this.buildForm();
     this.aparecerModal();
  }
  obtenerAbogados(){
    this.obtenerService.obtenerAbogados().subscribe(
      datos=>{
        console.log(datos);
        if(datos.exito == 'OK'){
           this.items = datos.resultado;
        }
      }
    );
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
  logueado(){
    return this.login.logueado();
  }
  enviarAb(abogado:any){
    this.login.almacenarAbogadoContacto(abogado);
    this.router.navigate(['contactar']);
  }
  enviarFormulario(){
    if(!(this.ciudadForm.value.length == 0)){
      if(this.ciudadForm.value == 'pais'){
        this.obtenerAbogados();
      }else{
        this.obtenerService.obtenerAbogadosFiltro(this.ciudadForm.value).subscribe(datos=>{
          if(datos.exito == 'OK'){
            this.items = datos.abogados;
          }else{
            this.clickarModal();
            this.items = datos.abogados;
          }
        });
      }
    }
    
  }
  buildForm(){
    this.formulario = this.formBuilder.group({
      ciudad: ['',Validators.required]
    });   
  }

  get ciudadForm(){
    return this.formulario.get("ciudad");
  }
}
