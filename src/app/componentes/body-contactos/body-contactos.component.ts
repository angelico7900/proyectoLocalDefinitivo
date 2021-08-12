import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ObtenerService } from 'src/app/services/gets/obtener.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { RegistroService } from 'src/app/services/registro/registro.service';
import { DomSanitizer } from '@angular/platform-browser';
import {interval,timer} from 'rxjs';

@Component({
  selector: 'app-body-contactos',
  templateUrl: './body-contactos.component.html',
  styleUrls: ['./body-contactos.component.css']
})
export class BodyContactosComponent implements OnInit {
  items : any;
  aparecer : boolean = false;
  pulsado : boolean = false;
  users : any;
  usersUsados = [];
  mensajes = [];
  texto : string = "";
  contacto : string;
  file : any;
  pdf :boolean = true;
  doc : boolean = true;
  file2 : any;
  prueba : string;
  pdf64 : string;
  doc64 : string;
  tipo : string;
  interval : any;
  formulario :FormGroup = new FormGroup({});
  constructor(public obtener:ObtenerService,public login:LoginServiceService,
    private router:Router,private regsitro:RegistroService,private sanitizer:DomSanitizer,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    if(this.login.iniciado() == null){
      this.router.navigate(['']);
    }
    this.obtenerMensajes();
    const contador = interval(5000);
    contador.subscribe(() =>{
      this.obtenerMensajes();
    });
    this.aparecerModal();
   this.buildForm();
  }
  obtenerMensajes(){
    this.obtener.obtenerMensajes(this.login.iniciado()).subscribe(
      datos =>{
        console.log(datos);
        if(datos.exito == 'OK'){
          this.aparecer = true;
          this.items = datos.mensajes;
          this.obtenerUsuarios();
          if(this.contacto != null){
            this.abrirChat(this.contacto);
          }
        }else{
          let texto = document.querySelector('.modal-content p');
          texto.innerHTML = "Ha ocurrido un error al obtener los mensajes, lamentamos las molestias";
          this.clickarModal();
        }
      }
    );
    if(this.contacto != null){
      this.abrirChat(this.contacto);
    }
  }
  index(){
    if(!this.pulsado){
      this.router.navigate(['']);
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
  aparecerModal2(){
    if(document.getElementById("botonOpinion")){
			var modal = document.getElementById("opinion");
			var btn = document.getElementById("botonOpinion");
			var span = document.getElementsByClassName("close")[1];
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
  abrirChat(item:any){
    this.pulsado = true;
    this.mensajes = [];
    this.items.forEach(element => {
      if(element['receptor'] == item){
        this.mensajes.push([0,element['caso']]);
      }else if(element['emisor'] == item){
        this.mensajes.push([1,element['caso']]);
      }
    });
    this.contacto = item;
    this.aparecerModal2();
  }
  buildForm(){
      this.formulario = this.formBuilder.group({
        opinion : ['',[Validators.required,Validators.maxLength(200)]]
      });
  }
  obtenerUsuarios(){
    let user;
    let aux = [];
    let longitud:Number = this.items.length;
    for(let i = 0; i < longitud; ++i){
     user = this.items[i]['emisor'] == this.login.iniciado() ? this.items[i]['receptor'] : this.items[i]['emisor'];
      if(aux.indexOf(user) == -1 && user != this.login.iniciado()){
        aux.push(user);
      }
      this.usersUsados = aux;
    }
  }
  enviarMensaje(){
    this.texto = this.texto.trim();
    if(this.texto.length > 0){
      if(this.texto.length > 0 && this.contacto.length > 0 && this.login.iniciado() != null){
        let objeto = {
          'caso': this.texto,
          'receptor':this.contacto,
          'emisor':this.login.iniciado()
        }
          this.regsitro.subirMensaje(objeto).subscribe(
            datos =>{
              if(datos.exito == 'OK'){
                this.obtener.obtenerMensajes(this.login.iniciado()).subscribe(
                  datos =>{
                    if(datos.exito == 'OK'){
                      this.aparecer = true;
                      this.items = datos.mensajes;
                      this.obtenerUsuarios();
                      this.pulsado = false;
                      this.abrirChat(this.contacto);                      
                    }else{
                      let texto = document.querySelector('.modal-content p');
                      texto.innerHTML = "Ha ocurrido un error al obtener los mensajes, lamentamos las molestias";
                      this.clickarModal();
                    }
                  });
              }
            }
          );
      }
    }
  }
  envioContrato(correo:string){
      let data = {
        'correo' : correo,
        'contrato' : this.pdf64
      };
      this.regsitro.subirContrato(data).subscribe(
        datos =>{
          let texto = document.querySelector('.modal-content p');
          if(datos.exito == 'OK'){
            texto.innerHTML = "Contrato enviado correctamente";
          }else{
            
            texto.innerHTML = "El contrato no se ha podido enviar, por favor inténtelo más tarde";
          }
          this.clickarModal();
        }
      );
  }
  envioDoc(correo:string){
    let json = {
      'fichero' : this.doc64,
      'correo' : correo,
      'tipo' : this.tipo
    }
    this.regsitro.subirDocumento(json).subscribe(datos =>{
      let texto = document.querySelector('.modal-content p');
      if(datos.exito == 'OK'){
        texto.innerHTML = "Documento enviado correctamente";
      }else{
        texto.innerHTML = "El documento no se ha podido enviar, por favor inténtelo más tarde";
      }
      this.clickarModal();
    });
  }

    fileEventContrato(documento:Event):void{ 
    this.file = (<HTMLInputElement>documento.target).files[0];
    if(!(this.file.type == "application/pdf")){
      this.pdf = true;
    }else{
      this.pdf = false;
    }
    this.extraerBase64(this.file).then((pdfEncode : any)=>{
      let aux =  pdfEncode.base;
      this.pdf64 = aux;
    });
    this.pdf64 = this.pdf64.includes("unsafe:") ? this.pdf64.substring(7) : this.pdf64;
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
  fileEventDoc(doc:Event){
    this.doc = false;
    this.file2 = (<HTMLInputElement>doc.target).files[0];
    this.tipo = this.file2.type;
    this.tipo = this.tipo.substring(this.tipo.indexOf("/") + 1);
    if(this.tipo == 'msword'){
      this.tipo = 'doc';
    }else if(this.tipo == 'vnd.openxmlformats-officedocument.wordprocessingml.document'){
      this.tipo = 'docx';
    }else if(this.tipo == 'vnd.oasis.opendocument.text'){
      this.tipo = "odt";
    }
    this.extraerBase64(this.file2).then((docEncode : any)=>{
      let aux :string =  docEncode.base;
      this.doc64 = aux;
    });
    this.doc64 = this.doc64.includes("unsafe:") ? this.doc64.substring(7) : this.doc64;
  }
  enviarOpinion(){
    let error : HTMLElement = document.querySelector("#error") as HTMLElement;
    error.innerHTML = "";
    let datos = {
      'opinion' : this.opinionForm?.value,
      'correoCliente' : this.login.iniciado(),
      'correoAbogado' : this.contacto
    }
    this.regsitro.registrarOpinion(datos).subscribe(
      datos=>{
        if(datos.exito == 'OK'){
          let element : HTMLElement = document.querySelector("#opinion .close") as HTMLElement;
          element.click();
          alert("Gracias por dar su opinión");
        }else{
          error.innerHTML = "No se ha podido enviar el comentario, por favor vuelva a intentarlo"
        }
      }
    );
  }
  get opinionForm(){
    return this.formulario.get('opinion');
  }
}
