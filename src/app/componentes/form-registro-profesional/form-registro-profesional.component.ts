import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Abogado } from '../../Models/Abogado';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-form-registro-profesional',
  templateUrl: './form-registro-profesional.component.html',
  styleUrls: ['./form-registro-profesional.component.css']
})
export class FormRegistroProfesionalComponent implements OnInit {
  usuario : Abogado = new Abogado();
  @Output() registroAbogado:EventEmitter<Abogado> = new EventEmitter<Abogado>();
  @Output() SubirImagen:EventEmitter<string> = new EventEmitter<string>();
  formulario:FormGroup = new FormGroup({});
  file:any;
  maxSize : boolean = false;
  public imagenes : any;
  constructor(private formBuilder:FormBuilder,private sanitizer:DomSanitizer) { 
    this.buildForm();
  }
  ngOnInit(): void {
  }
  registrarse(event:Event){
    event.preventDefault();
    if(this.formulario.valid){
      this.registroAbogado.emit(this.usuario);
    }else{
      this.formulario.markAllAsTouched();
    }
  }
  
    buildForm(){
      this.formulario = this.formBuilder.group({
        correo: ['',[Validators.required,Validators.email]],
        contrasena: ['',[Validators.required,Validators.maxLength(16)]],
        contrasena2: ['',[Validators.required]],
        nombre: ['',[Validators.required,Validators.maxLength(16)]],
        apellidos:['',[Validators.required,Validators.pattern("^[a-zA-ZáéíóúÁÉÍÓÚ ]{1,}$")]],
        provincia: ['',[Validators.required]],
        dni: ['',[Validators.required,Validators.pattern("[0-9]{8}[a-zA-Z]{1}")]],
        nLetrado : ['',[Validators.required,Validators.pattern("[0-9]{1,}")]],
        imagen : ['',[Validators.required]],
        descripcion : ['']
      });   
    }

  comprobarContra():boolean{
    if(this.contrasenaForm?.value != '' && this.contrasenaForm2?.value != this.contrasenaForm){
      return true;
    }else{
      return false
    }
  }
  cambioContra(){
    let ojo = document.querySelector("i");
    let pass = document.querySelectorAll("input[id$=password]");
    let typ = document.createAttribute("type");
    let typ2 = document.createAttribute("type");
    if(ojo?.classList.contains("fa-eye")){
      ojo?.classList.replace("fa-eye","fa-eye-slash");
      typ.value='password';
      typ2.value='password';
    }else{
      ojo?.classList.replace("fa-eye-slash","fa-eye");
      typ.value = 'text';
      typ2.value = 'text';
    }
    pass[0]?.attributes.setNamedItem(typ);
    pass[1]?.attributes.setNamedItem(typ2);
    
  }
  get descripcionForm(){
    return this.formulario.get('descripcion');
  }
  get imagenForm(){
    return this.formulario.get('imagen');
  }
  get correoForm(){
    return this.formulario.get('correo');
  }
  get nombreForm(){
    return this.formulario.get('nombre');
  }
  get apellidosForm(){
    return this.formulario.get('apellidos');
  }
  get contrasenaForm(){
    return this.formulario.get('contrasena');
  }
  get contrasenaForm2(){
    return this.formulario.get('contrasena2');
  }
  get provinciaForm(){
    return this.formulario.get('provincia');
  }
  get dniForm(){
    return this.formulario.get('dni');
  }
  get nLetradoForm(){
    return this.formulario.get('nLetrado');
  }
  fileEvent(imagen:Event){
    this.file = (<HTMLInputElement>imagen.target).files[0];
    if(this.file.type == "image/png" || this.file.type == "image/jpg" || this.file.type == "image/jpeg"){
      if(this.file.size > 6291456){
        this.maxSize = true;
        this.imagenForm?.setErrors({'incorrect':true})
      }else{
        this.maxSize = false;
      }
      this.extraerBase64(this.file).then((imagen:any) =>{
        let aux : string = imagen.base;
        this.imagenes = aux;
        this.usuario.imagen = aux;
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
  
}
