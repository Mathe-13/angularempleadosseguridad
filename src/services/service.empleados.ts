import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "../app/models/empleados";
import { environment } from "../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Login } from "../app/models/login";

interface LoginResponse {
    response: string;
}

@Injectable()
export class ServiceEmpleados {
    //logInEmpleadoObservable(login: Login) {
      //throw new Error('Method not implemented.');
    //}
    url = environment.apiEmpleados;
    constructor(
      private _http: HttpClient) { }

    async logIntEmpleados(user: unknown): Promise<LoginResponse> {
        let request = "auth/login";
        let json = JSON.stringify(user);
        let header = new HttpHeaders()
        .set("content-type", "application/json");
        return firstValueFrom(
            this._http.post<LoginResponse>(this.url + request, json, {headers: header})
        )
    }

    async getPerfilEmpleadosAsync(): Promise<Empleado>{
        let request = "api/empleados/perfilempleado";
        let token = sessionStorage.getItem("TOKEN");
        let header = new HttpHeaders()
        .set("Authorization", "Bearer " + token);
        return firstValueFrom(
            this._http.get<Empleado>(this.url + request, {headers: header})
        )
    }

    async getSubordinadosAsync(): Promise<Empleado[]>{
        let request = "api/empleados/subordinados";
        let token = sessionStorage.getItem("TOKEN");
        let header = new HttpHeaders()
        .set("Authorization", "bearer " + token);
        return firstValueFrom(
            this._http.get<Empleado[]>(this.url + request, {headers: header})
        );
    }
}
