import { Component, OnInit } from '@angular/core';
import { RemoteDataService } from 'src/app/services/remote-data.service';
import { Response } from 'src/app/Response';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [RemoteDataService]
})
export class UsuariosComponent implements OnInit {
	responseLocal: Response;
	usuario= {
		"name": "Pedro",
		"job": "Developer"
	}
  constructor(private remoteDataService: RemoteDataService) { }
	
  ngOnInit() {
	  this.registrarUsuario();
	  this.remoteDataService.getUsuario().subscribe(response => {
		  this.responseLocal = response;
		  console.log(this.responseLocal);
	  }, err => {
		  console.log(err);
	  })
  }

  registrarUsuario(){
	  this.remoteDataService.saveUsuario(this.usuario).subscribe(response =>{
		  console.log(response);
	  })
  }

}
