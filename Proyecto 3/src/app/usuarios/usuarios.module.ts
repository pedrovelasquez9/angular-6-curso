import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AuthInterceptor } from '../services/AuthInterceptor';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [
    CommonModule,
	UsuariosRoutingModule,
	HttpClientModule
  ],
  providers: [{
	  provide: HTTP_INTERCEPTORS,
	  useClass: AuthInterceptor,
	  multi: true
  }]
})
export class UsuariosModule { }
