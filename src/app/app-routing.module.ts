import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RegistroClienteComponent } from './componentes/registro-cliente/registro-cliente.component';
import {ContactarComponent} from './componentes/contactar/contactar.component'
import { ResgistroProfesionalComponent } from './componentes/resgistro-profesional/resgistro-profesional.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { SoporteComponent } from './componentes/soporte/soporte.component';
import { EliminarCuentaComponent } from './componentes/eliminar-cuenta/eliminar-cuenta.component';
import { SoporteAdminComponent } from './componentes/admin/soporte-admin/soporte-admin.component';
import { AdminControlComponent } from './componentes/admin/admin-control/admin-control.component';
import { AdminControlUsuariosComponent } from './componentes/admin/admin-control-usuarios/admin-control-usuarios.component';
import { AdminControlAbogadosComponent } from './componentes/admin/admin-control-abogados/admin-control-abogados.component';
import { AdminControlMorososComponent } from './componentes/admin/admin-control-morosos/admin-control-morosos.component';

const routes: Routes = [
  {
    path : '',
    component : IndexComponent
  },{
    path : 'login',
    component : LoginComponent
  },{
    path : 'registro',
    component : RegistroComponent
  },{
    path : 'registro-cliente',
    component : RegistroClienteComponent
  },{
    path : 'contactar',
    component : ContactarComponent
  },{
    path : 'registro-profesional',
    component : ResgistroProfesionalComponent
  },{
    path : 'perfil',
    component : PerfilComponent
  },{
    path : 'contactos',
    component : ContactosComponent
  },{
    path : 'soporte',
    component : SoporteComponent
  },{
    path : 'eliminar-cuenta',
    component : EliminarCuentaComponent
  },{
    path : 'admin',
    component : SoporteAdminComponent
  },{
    path : 'adminControl',
    component : AdminControlComponent
  },{
    path : 'adminControlUsuarios',
    component : AdminControlUsuariosComponent
  },{
    path : 'adminControlAbogados',
    component : AdminControlAbogadosComponent
  },{
    path : 'adminControlMorosos',
    component : AdminControlMorososComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
