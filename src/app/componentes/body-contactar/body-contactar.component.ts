import { Component, OnInit,Input} from '@angular/core';
import { ObtenerService } from 'src/app/services/gets/obtener.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { RegistroService } from 'src/app/services/registro/registro.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { WebElementPromise } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-contactar',
  templateUrl: './body-contactar.component.html',
  styleUrls: ['./body-contactar.component.css']
})
export class BodyContactarComponent implements OnInit {
  abogado:any;
  caso:string;
  formulario : FormGroup = new FormGroup({});
  nombre:string;
  apellidos:string;
  imagen:string;
  descripcion:string;
  numero : number;
  opiniones : any;
  opBool : boolean = false;
  constructor(private obtener:ObtenerService,private login:LoginServiceService,
    private subir:RegistroService,private formBuilder:FormBuilder,
    private router:Router) { 
      this.buildForm();
    }

  ngOnInit(): void {
    if(this.login.iniciado() == null){
      this.router.navigate(['/login']);
    }
      this.aparecerModal();
      this.obtenerAbogado()    
      this.obtenerOpiniones();
     
  }
  obtenerAbogado(){
    let abogadoAux = this.login.obtenerAbogadoContacto();
    this.obtener.obtenerAbogado(abogadoAux).subscribe(
      datos =>{
        this.nombre = datos.nombre;
        this.apellidos = datos.apellidos;
        this.imagen = datos.imagen;
        this.descripcion = datos.descripcion;
        this.numero = datos.numero;
        this.abogado = datos.correo;
      }
    );
  }
  obtenerOpiniones(){
  let abogadoAux = this.login.obtenerAbogadoContacto();
  this.obtener.obtenerOpiniones(abogadoAux).subscribe(
    datos =>{
      if(datos.exito == 'OK'){
        this.opBool = true;
        this.opiniones = datos.opiniones;
      }else{

      }
    }
  );
  }
  enviarCaso(caso:FormGroup){
    let textoCaso : string = this.casoForm.value;
    let objeto = {
      'caso': textoCaso,
      'receptor':this.abogado,
      'emisor':this.login.iniciado()
    }
    this.subir.subirMensaje(objeto).subscribe(
      datos =>{
        console.log(datos);
        if(datos.exito == 'OK'){
          this.clickarModal();
        }else{
          let texto = document.querySelector('.modal-content p');
          texto.innerHTML = "Ha ocurrido un error al enviar el mensaje, lamentamos las molestias";
          this.clickarModal();
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
  buildForm(){
    this.formulario = this.formBuilder.group({
      caso : ['',Validators.required]
    });
  }
  get casoForm(){
    return this.formulario.get('caso');
  }
}
