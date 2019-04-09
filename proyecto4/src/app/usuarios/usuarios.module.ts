import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AuthInterceptor } from '../services/AuthInterceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [UsuariosComponent],
  imports: [
	  FormsModule,
    CommonModule,
	UsuariosRoutingModule,
	HttpClientModule,
	ReactiveFormsModule
  ],
  providers: [{
	  provide: HTTP_INTERCEPTORS,
	  useClass: AuthInterceptor,
	  multi: true
  }]
})
export class UsuariosModule { }
