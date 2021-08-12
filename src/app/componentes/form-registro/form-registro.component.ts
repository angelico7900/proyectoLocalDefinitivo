import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Register } from '../../Models/Register';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
  usuario : Register = new Register();
  @Output() registro:EventEmitter<Register> = new EventEmitter<Register>();
  @Input() errorForm:boolean;
  formulario:FormGroup = new FormGroup({});
  constructor(private formBuilder:FormBuilder) { 
    this.buildForm();
  }
  ngOnInit(): void {
  }
  registrarse(event:Event){
    event.preventDefault();
    if(this.formulario.valid){
      this.registro.emit(this.usuario);
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
      apellidos:['',[Validators.required,Validators.pattern("[a-zA-ZáéíóúÁÉÍÓÚ ]{1,}")]],
      provincia: ['',[Validators.required]]
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
}
