import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Abogado } from 'src/app/Models/Abogado';

@Component({
  selector: 'app-body-resgistro-profesional',
  templateUrl: './body-resgistro-profesional.component.html',
  styleUrls: ['./body-resgistro-profesional.component.css']
})
export class BodyResgistroProfesionalComponent implements OnInit {
  profesional:Abogado = new Abogado();
@Output() registro:EventEmitter<Abogado> = new EventEmitter<Abogado>();
@Output() imagen:EventEmitter<string> = new EventEmitter<string>();
  constructor() {
   }

  ngOnInit(): void {
  }
  registrarse(profesional:Abogado){
    this.registro.emit(profesional);
  }
}
