import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleados } from "../app/models/empleados";

@Injectable()
export class ServiceEmpleados {
    constructor(
        private _http: HttpClient) { }

    async getEmpleados(): Promise<Empleados[]> {
        let request = "api/empleados";
    }
}
