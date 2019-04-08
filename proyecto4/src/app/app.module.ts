import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './services/AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	BrowserModule,
	AppRoutingModule
  ],
  providers: [{
	  provide: HTTP_INTERCEPTORS,
	  useClass: AuthInterceptor,
	  multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
