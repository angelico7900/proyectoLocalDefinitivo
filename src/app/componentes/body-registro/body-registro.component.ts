import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { Register } from 'src/app/Models/Register';

@Component({
  selector: 'app-body-registro',
  templateUrl: './body-registro.component.html',
  styleUrls: ['./body-registro.component.css']
})
export class BodyRegistroComponent implements OnInit {
  usuario:Register = new Register();
  @Input() errorBody:boolean;
  @Output() registro:EventEmitter<Register> = new EventEmitter<Register>(); 
  constructor() { }

  ngOnInit(): void {
    
  }
  registrarse(usuario:Register){
    this.registro.emit(usuario);
  }
}
