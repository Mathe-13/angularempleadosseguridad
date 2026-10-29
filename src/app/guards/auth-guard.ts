import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  MaybeAsync,
  GuardResult
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if (sessionStorage.getItem("TOKEN")){
      //si tenemos token dejaamos pasar
      return true;
    }else{
      //si el usuario no esta autorizado lo llevamos a la pagina de login
      //tenemos que enviar tambien el estado de la ulr, para que no se pierda 
      //los parametros
      return this._router.createUrlTree(['/login'],
        {queryParams: {returnUrl: state.url}}
      )
    }
  }

}