import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './components/login-component/login-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SuborninadosComponent } from './components/suborninados-component/suborninados-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceEmpleados } from '../services/service.empleados';
import { TokenStorageService } from '../services/tokenstorage.service';

@NgModule({
  declarations: [App,
    LoginComponent,
    PerfilComponent,
    SuborninadosComponent,
    MenuComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient(),
    ServiceEmpleados,
    TokenStorageService,
  provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule { }
