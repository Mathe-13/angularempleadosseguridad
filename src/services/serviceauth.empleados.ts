import { Injectable, signal } from "@angular/core";
import { Empleado } from "../app/models/empleados";
import { ServiceEmpleados } from "./service.empleados";

@Injectable({providedIn: 'root'})
export class ServiceAuthEmpleados {
    constructor(
        private _service: ServiceEmpleados
    ){}
    public user = signal<Empleado | null>(null);
    async logEmpleadoAsync(token: string): Promise<void>{
        sessionStorage.setItem("TOKEN", token);
        let empleado = await this._service.getPerfilEmpleadosAsync();
        this.user.set(empleado);
    }

    logOutEmpleado(): void{
        sessionStorage.removeItem("TOKEN");
        this.user.set(null);
    }
}