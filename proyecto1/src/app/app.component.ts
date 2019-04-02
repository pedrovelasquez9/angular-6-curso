import { LogsService } from './logs.service';
import { Component, OnInit } from '@angular/core';
import {validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
	
	constructor(public log: LogsService){
		this.log.error('este es un error por consola');
	}
	public modelo = {
		texto:''
	}

	public finalizado: boolean = true;
	public important: boolean = true;

	ngOnInit(){
		console.log('ng on init');
		let post = new Post();
		post.title = "Hello"; // should not pass
		post.text = "this is a great post about hell world"; // should not pass
		post.rating = 11; // should not pass
		post.email = "google.com"; // should not pass
		post.site = "googlecom"; // should not pass

		validate(post).then(errors => { // errors is an array of validation errors
			if (errors.length > 0) {
				console.log("validation failed. errors: ", errors);
			} else {
				console.log("validation succeed");
			}
		});
	}

	public saludar(){
		alert('hola mundo');
	}

	  title = 'Mi primera app con Angular 7';
	  usuario = {
		nombre : "Pedro",
		apellido : "Plasencia",
		edad : 28,
		trabaja: true
	  };

	  cursos = [
		  {id:1, titulo:"Angular 7", horas:20},
		  {id:2, titulo:"JavaScript", horas:16},
		  {id:3, titulo:"DevOps", horas:24},
		  {id: 4, titulo:"Java", horas:10}
	  ];

	  value: number = 0;

	  seleccion(curso){
		  console.log("ha seleccionado el curso: ", curso.titulo);
	  }

	  //directiva css
	  getClass(modo: string){
		let classes;
		if(modo == 'noche'){
			classes = {
				'uno':true,
				'dos':true
			}
		}else{
			classes = {
				'tres':true,
				'cuatro':true
			}
		}
		return classes;
	  }

	  getModel(){
		  console.log(this.modelo);
	  }

	  setStyles(){
		  let styles = {
			  'text-decoration' : this.finalizado ? 'line-through' : 'none',
			  'font-weight': this.important ? '600' : 'normal'
		  }
		  return styles;
	  }
}