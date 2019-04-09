import { Component, OnInit } from '@angular/core';
import { RemoteDataService } from 'src/app/services/remote-data.service';
import { Response } from 'src/app/Response';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [RemoteDataService]
})

export class UsuariosComponent implements OnInit {
	responseLocal: Response;
	user = [];
	public usuario = {
		name:"",
		job:""
	}
	update = false;
	form: FormGroup;
	nombre;
	ocupacion;
  constructor(private remoteDataService: RemoteDataService, private formBuilder: FormBuilder) {}
	
  ngOnInit() {
	  this.form = this.formBuilder.group({
		  name: ['',Validators.required],
		  job: ['',Validators.required]
	  }) 
	  if(localStorage.user!=null){
		  this.user = JSON.parse(localStorage.user);
	  }
  }

  registrarUsuario(){
	  this.remoteDataService.saveUsuario(this.usuario).subscribe(response =>{
		  this.user.push(response);
		  localStorage.user = JSON.stringify(this.user);
		  this.usuario = {
			name:"",
			job:""
		  };
	  })
  }

  editar(data){
	this.usuario = data;
	this.update = true;
  }

  updateUser(){
	this.remoteDataService.updateUsuario(this.usuario).subscribe(res => {
		localStorage.user = JSON.stringify(this.user);
		this.usuario = {
			name:"",
			job:""
		  };
		this.update = false;
	})
  }

  delete(id){
	this.remoteDataService.eliminarUsuario(id).subscribe(res => {
		this.user = this.user.filter(item => {
			return item.id != id;
		})
	}, err => {
		console.log(err);
	})
  }

}
