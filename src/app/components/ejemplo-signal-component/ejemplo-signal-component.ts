import { Component, inject } from '@angular/core';
import { ServiceSignal } from '../../../services/service.signal';

@Component({
  selector: 'app-ejemplo-signal-component',
  standalone: false,
  styleUrl: './ejemplo-signal-component.css',
  templateUrl: './ejemplo-signal-component.html',
})
export class EjemploSignalComponent {
  //recuperamos nuestro serviico utilizando inject
  //para que sea SINGLETON
  private _serviceSignal: ServiceSignal= 
  inject(ServiceSignal);
  public contador = this._serviceSignal.contador;
  public doble = this._serviceSignal.doble;

  reinicarContador(): void {
    this._serviceSignal.reinicarContador();
  }

  incrementarContador(): void {
    this._serviceSignal.incrementarContador();
  }
  
  

}
