import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EliminarService } from 'src/app/services/eliminar/eliminar.service';
import { ObtenerService } from 'src/app/services/gets/obtener.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { RegistroService } from 'src/app/services/registro/registro.service';

@Component({
  selector: 'app-body-admin-control-morosos',
  templateUrl: './body-admin-control-morosos.component.html',
  styleUrls: ['./body-admin-control-morosos.component.css']
})
export class BodyAdminControlMorososComponent implements OnInit {
  items : any;
  public page : number = 1;
  constructor(private obtener:ObtenerService,private registro:RegistroService,
    private eliminar:EliminarService,private login:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
    if(this.login.iniciadoAdmin() != 'admin'){
      this.router.navigate(['/admin']);
    }
    this.obtener.obtenerAbogadosMorosos().subscribe(
      datos =>{
        console.log(datos);
        if(datos.exito = 'OK'){
          this.items = datos.abogados;
        }
      }
    )
  }
avisar(){

}
}
