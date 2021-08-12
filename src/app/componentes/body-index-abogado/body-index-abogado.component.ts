import { Component, OnInit } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { ObtenerService } from 'src/app/services/gets/obtener.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { RegistroService } from 'src/app/services/registro/registro.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-body-index-abogado',
  templateUrl: './body-index-abogado.component.html',
  styleUrls: ['./body-index-abogado.component.css']
})
export class BodyIndexAbogadoComponent implements OnInit {
  public payPalConfig ? : IPayPalConfig;
  pagado : boolean = false;
  constructor(private obtener:ObtenerService,private login:LoginServiceService,
    private registro:RegistroService) { }

  ngOnInit(): void {
    this.initConfig();
    this.obtenerAbogadoMoroso();
  }
  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: environment.clientId,
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: '20',
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: '20'
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: '20',
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            actions.order.get().then(details => {
            });

        },
        onClientAuthorization: (data) => {
            this.actualizarPago();
        },
        onCancel: (data, actions) => {

        },
        onError: err => {
        },
        onClick: (data, actions) => {
        },
    };
}
actualizarPago(){
  this.registro.registroPago(this.login.iniciado()).subscribe(
    datos =>{
      if(datos.exito == 'OK'){
        this.pagado = true;
      }
    }
  );

}
  obtenerAbogadoMoroso(){
    this.obtener.obtenerAbogadoMoroso(this.login.iniciado()).subscribe(datos =>{
      console.log(datos);
      if(datos.exito == 'OK'){
        if(datos.pagado == 'OK'){
          this.pagado = true;
        }
      }
    });
  }
}
