import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ColoredDirective } from './colored.directive';
import {FloatDirective} from './DirectivaAngular';
import { MyDirectiveDirective } from './my-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
	ColoredDirective,
	FloatDirective,
	MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
