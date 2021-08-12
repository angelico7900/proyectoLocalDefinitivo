import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginServiceService } from './services/login/login-service.service';
import { BodyIndexComponent } from './componentes/body-index/body-index.component';
import { HeaderAccountComponent } from './componentes/header-account/header-account.component';
import { BodyLoginComponent } from './componentes/body-login/body-login.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodyRegistroComponent } from './componentes/body-registro/body-registro.component';
import { RegistroService } from './services/registro/registro.service';
import { FormRegistroComponent } from './componentes/form-registro/form-registro.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RegistroClienteComponent } from './componentes/registro-cliente/registro-cliente.component';
import { BodyRegistroOptionComponent } from './componentes/body-registro-option/body-registro-option.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContactarComponent } from './componentes/contactar/contactar.component';
import { ResgistroProfesionalComponent } from './componentes/resgistro-profesional/resgistro-profesional.component';
import { BodyResgistroProfesionalComponent } from './componentes/body-resgistro-profesional/body-resgistro-profesional.component';
import { FooterAccountComponent } from './componentes/footer-account/footer-account.component';
import { FormRegistroProfesionalComponent } from './componentes/form-registro-profesional/form-registro-profesional.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { BodyPerfilComponent } from './componentes/body-perfil/body-perfil.component';
import { BodyContactarComponent } from './componentes/body-contactar/body-contactar.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { BodyContactosComponent } from './componentes/body-contactos/body-contactos.component';
import { BodyIndexAbogadoComponent } from './componentes/body-index-abogado/body-index-abogado.component';
import {NgxPayPalModule} from 'ngx-paypal';
import {NgxSpinnerModule} from 'ngx-spinner';
import { SoporteComponent } from './componentes/soporte/soporte.component';
import { BodySoporteComponent } from './componentes/body-soporte/body-soporte.component';
import { EliminarCuentaComponent } from './componentes/eliminar-cuenta/eliminar-cuenta.component';
import { BodyEliminarCuentaComponent } from './componentes/body-eliminar-cuenta/body-eliminar-cuenta.component';
import { SoporteAdminComponent } from './componentes/admin/soporte-admin/soporte-admin.component';
import { BodySoporteAdminComponent } from './componentes/admin/body-soporte-admin/body-soporte-admin.component';
import { AdminControlComponent } from './componentes/admin/admin-control/admin-control.component';
import { BodyAdminControlComponent } from './componentes/admin/body-admin-control/body-admin-control.component';
import { AdminControlUsuariosComponent } from './componentes/admin/admin-control-usuarios/admin-control-usuarios.component';
import { AdminControlAbogadosComponent } from './componentes/admin/admin-control-abogados/admin-control-abogados.component';
import { AdminControlMorososComponent } from './componentes/admin/admin-control-morosos/admin-control-morosos.component';
import { BodyAdminControlMorososComponent } from './componentes/admin/body-admin-control-morosos/body-admin-control-morosos.component';
import { BodyAdminControlUsuariosComponent } from './componentes/admin/body-admin-control-usuarios/body-admin-control-usuarios.component';
import { BodyAdminControlAbogadosComponent } from './componentes/admin/body-admin-control-abogados/body-admin-control-abogados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    RegistroComponent,
    BodyIndexComponent,
    HeaderAccountComponent,
    BodyLoginComponent,
    BodyRegistroComponent,
    FormRegistroComponent,
    RegistroClienteComponent,
    BodyRegistroOptionComponent,
    ContactarComponent,
    ResgistroProfesionalComponent,
    BodyResgistroProfesionalComponent,
    FooterAccountComponent,
    FormRegistroProfesionalComponent,
    PerfilComponent,
    BodyPerfilComponent,
    BodyContactarComponent,
    ContactosComponent,
    BodyContactosComponent,
    BodyIndexAbogadoComponent,
    SoporteComponent,
    BodySoporteComponent,
    EliminarCuentaComponent,
    BodyEliminarCuentaComponent,
    SoporteAdminComponent,
    BodySoporteAdminComponent,
    AdminControlComponent,
    BodyAdminControlComponent,
    AdminControlUsuariosComponent,
    AdminControlAbogadosComponent,
    AdminControlMorososComponent,
    BodyAdminControlMorososComponent,
    BodyAdminControlUsuariosComponent,
    BodyAdminControlAbogadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxPayPalModule,
    NgxSpinnerModule

  ],
  providers: [
    LoginServiceService,
    RegistroService,
    {provide: LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
