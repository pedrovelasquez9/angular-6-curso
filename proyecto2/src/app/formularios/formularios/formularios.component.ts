import { Component, OnInit } from '@angular/core';
import { Contacto } from './Contacto';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  enviado = false;
  contacto: Contacto;
  public form: FormGroup;
  public name: string = "reactivos";
  public phone;
  public email;
  constructor(private formBuilder:FormBuilder) {
	
   }
	
  ngOnInit() {
	  this.contacto = new Contacto();
	  this.contacto.name = "Pedro";
	  this.contacto.email = "pjpv9011@gmail.com";
	  this.contacto.msg = "Prueba";
	  this.contacto.phone = "642910624";
	  this.contacto.subject = "Subject";
	  this.phone = new FormControl('', Validators.required);
	  this.email = new FormControl('', [Validators.required, Validators.email]);
	  this.form = this.formBuilder.group({
		 email: this.email,
		 phone: this.phone,
		 name:['', Validators.required],
		 msn: '',
		 subject: ''
	  });
  }

  onSubmit(){
	this.enviado = true;
	console.log(this.contacto);
  }

  limpiar(){
	  this.enviado = false;
  }

}
