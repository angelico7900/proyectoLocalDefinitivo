import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ObtenerService } from 'src/app/services/gets/obtener.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro/registro.service';
@Component({
  selector: 'app-body-perfil',
  templateUrl: './body-perfil.component.html',
  styleUrls: ['./body-perfil.component.css']
})
export class BodyPerfilComponent implements OnInit {
  nombre : string;
  apellidos : string;
  formulario:FormGroup = new FormGroup({});
  formulario2:FormGroup = new FormGroup({});
  formulario3:FormGroup = new FormGroup({});
  correo : string;
  cliente : any;
  imagen : any;
  maxSize : boolean = false;
  file:any;
  public imagenes : any;
  constructor(private formBuilder:FormBuilder,public login:LoginServiceService
    ,private obtener:ObtenerService,private sanitizer:DomSanitizer,private router:Router,
    private subir:RegistroService) { 
  this.buildForm();
  this.buildForm2();
  this.buildForm3();
  }

  ngOnInit(): void {
    this.obtenerDatos();
    this.aparecerModal();
  }
  buildForm(){
    this.formulario = this.formBuilder.group({
      contrasenaActual : ['',Validators.required],
      contrasenaNueva : ['',Validators.required],
      contrasenaNueva2 : ['',Validators.required]
    });
  }
  buildForm2(){
    this.formulario2 = this.formBuilder.group({
      correo : ['',[Validators.required,Validators.email]]
    });
  }
  buildForm3(){
    this.formulario3 = this.formBuilder.group({
      imagen : ['',Validators.required]
    });
  }
  get contrasenaForm(){
    return this.formulario.get('contrasenaActual');
  }
  get contrasenaNuevaForm(){
    return this.formulario.get('contrasenaNueva');
  }
  get contrasenaNueva2Form(){
    return this.formulario.get('contrasenaNueva2');
  }
  get imagenForm(){
    return this.formulario3.get('imagen');
  }
  get correoForm(){
    return this.formulario2.get('correo');
  }
  fileEvent(imagen:Event){
    this.file = (<HTMLInputElement>imagen.target).files[0];
    if(this.file.type == "image/png" || this.file.type == "image/jpg" || this.file.type == "image/jpeg"){
        if(this.file.size > 2097152){
          this.maxSize = true;
          this.imagenForm?.setErrors({'incorrect':true})
        }else{
          this.maxSize = false;
        }
      this.extraerBase64(this.file).then((imagen:any) =>{
        let aux : string = imagen.base;
        this.imagenes = aux;
      })
    }
  }
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  });
  enviarCorreo(correo:string){
    let tipo:string = this.login.tipoUser();
    let correoActual:string = this.login.iniciado();
    let correos = {'correoNuevo' : correo,'correoActual' : correoActual};
    this.subir.subirCorreo(correos).subscribe(
      datos =>{
        if(datos.exito == 'OK'){
          this.modificarSesion(correo,tipo);
          location.reload();
        }else if(datos.exito == 'EXISTS'){
          let texto = document.querySelector('.modal-content p');
          texto.innerHTML = "El correo electrónico usado ya está en uso";
          this.clickarModal();
        }else{
          let texto = document.querySelector('.modal-content p');
          texto.innerHTML = "Ha ocurrido un error intentelo de nuevo";
          this.clickarModal();
        }
      }
    );
  }
  obtenerDatos(){
    this.correo = this.login.iniciado();
    if(this.login.tipoUser() == 'cliente'){
      this.obtener.obtenerCliente(this.correo).subscribe(
        datos =>{
          if(datos.exito == 'OK'){
            this.nombre = datos.nombre;
            this.apellidos = datos.apellidos;
          }else{
          }
      });
    }else{
      this.obtener.obtenerAbogado(this.correo).subscribe(
        datos =>{
          if(datos.exito == 'OK'){
            this.nombre = datos.nombre;
            this.apellidos = datos.apellidos;
            this.imagen = datos.imagen;
            this.imagenes = this.imagen;
          }
        }
      );
    }
    this.correo = this.login.iniciado();
    this.correoForm.setValue(this.correo);
  }
  modificarSesion(correo,tipo){
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('tipo');
    sessionStorage.setItem('usuario',correo);
    sessionStorage.setItem('tipo',tipo);
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
  modificarContra(){
    let datosOb = {
      'contrasennaActual' : this.contrasenaForm?.value,
      'contrasennaNueva' : this.contrasenaNuevaForm?.value,
      'correo' : this.login.iniciado()
    }
    this.subir.subirContraseña(datosOb).subscribe(
      datos =>{
        let texto = document.querySelector('.modal-content p');
        if(datos.exito == 'OK'){
          texto.innerHTML = "Contraseña modificada con exito";
        }else if(datos.exito == 'EXISTS'){
          texto.innerHTML = "La contraseña no coincide con la establecida para la cuenta";
        }else{
          texto.innerHTML = "Ha ocurrido un error en el procesamiento";
        }
        this.clickarModal();
        this.contrasenaForm?.setValue('');
        this.contrasenaNuevaForm?.setValue('');
        this.contrasenaNueva2Form?.setValue('');
        this.formulario.markAsUntouched();
      }
    );
  }
  enviarImagen(){
    this.subir.subirImagen(this.imagenes).subscribe(
      datos =>{
        if(datos.exito == 'OK'){
          location.reload();
        }else{
          let texto = document.querySelector('.modal-content p');
          texto.innerHTML = "No se ha podido subir la imagen";
          this.clickarModal();
        }
      }
    );
  }
}
