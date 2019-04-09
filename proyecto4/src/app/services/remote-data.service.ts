import { Injectable } from '@angular/core';
import { Response } from '../Response';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RemoteDataService {

  constructor(private httpClient: HttpClient) { 
  }

  getUsuario() {
	  return this.httpClient.get<Response>('https://reqres.in/api/users');
  }

  getOne(id){
	return this.httpClient.get('https://reqres.in/api/users/'+id);
  }

  saveUsuario(data){
	  return this.httpClient.post('https://reqres.in/api/users', data);
  }

  updateUsuario(data){
	return this.httpClient.put('https://reqres.in/api/users/'+data.id, data);
  }

  eliminarUsuario(id){
	  return this.httpClient.delete('https://reqres.in/api/users/'+id);
  }
}
