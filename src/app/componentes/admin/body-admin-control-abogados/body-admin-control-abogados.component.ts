import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EliminarService } from 'src/app/services/eliminar/eliminar.service';
import { ObtenerService } from 'src/app/services/gets/obtener.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { RegistroService } from 'src/app/services/registro/registro.service';

@Component({
  selector: 'app-body-admin-control-abogados',
  templateUrl: './body-admin-control-abogados.component.html',
  styleUrls: ['./body-admin-control-abogados.component.css']
})
export class BodyAdminControlAbogadosComponent implements OnInit {
  items : any;
  public page : number = 1;
  constructor(private obtener:ObtenerService,private registro:RegistroService,
    private eliminar:EliminarService,private login:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
    if(this.login.iniciadoAdmin() != 'admin'){
      this.router.navigate(['/admin']);
    }
    this.obtenerAbogados();
  }
  obtenerAbogados(){
    this.obtener.obtenerAbogados().subscribe(
      datos=>{
        console.log(datos);
        if(datos.exito == 'OK'){
           this.items = datos.resultado;
        }
      }
    );
  }
  normalizarString(valor :string){
    return valor.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  }
  actualizarUsuario(item : any){
    console.log(item);
    this.registro.subirAbogadoAdmin(item).subscribe(
      datos=>{
        console.log(datos);
        if(datos.exito == 'OK'){
          location.reload();
        }else{
          alert('No se ha podido actualizar');
        }
      }
    );

  }
  eliminarUsuario(item : any){
    this.eliminar.eliminarAbogadoAdmin(item).subscribe(
      datos =>{
        if(datos.exito == 'OK'){
          location.reload();
        }else{
          alert("no se ha podido eliminar al abogado");
        }
      }
    );
    
  }

}
