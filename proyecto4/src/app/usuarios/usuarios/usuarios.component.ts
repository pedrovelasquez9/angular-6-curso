import { Component, OnInit } from '@angular/core';
import { RemoteDataService } from 'src/app/services/remote-data.service';
import { Response } from 'src/app/Response';
import { Observable, fromEvent, interval } from 'rxjs';

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
  constructor(private remoteDataService: RemoteDataService) {}
	
  ngOnInit() {
	  
  }

  registrarUsuario(){
	  this.remoteDataService.saveUsuario(this.usuario).subscribe(response =>{
		  this.user.push(response);
		  console.log(response);
		  this.usuario = {
			name:"",
			job:""
		  };
	  })
  }

  registrarObservable(){
	  var btn = document.getElementById('btn');
	  fromEvent(btn, 'click').subscribe(()=>{
		  console.log('haz hecho click');
	  })
  }

  editar(data){
	this.usuario = data;
	this.update = true;
  }

  updateUser(){
	this.remoteDataService.updateUsuario(this.usuario).subscribe(res => {
		console.log(res);
	})
  }

}
