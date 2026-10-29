import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleados';
import { ServiceEmpleados } from '../../../services/service.empleados';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit {
  public empleado: Empleado | null = null;
  public error = '';
  public cargando = true;

  constructor(
    private _service: ServiceEmpleados,
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.empleado = await this._service.getPerfilEmpleadosAsync();
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        this.error = error.status === 401
          ? 'Tu sesión ha caducado. Inicia sesión de nuevo.'
          : `No se pudo cargar el perfil (error ${error.status}).`;
        return;
      }
      throw error;
    } finally {
      this.cargando = false;
    }
  }
}