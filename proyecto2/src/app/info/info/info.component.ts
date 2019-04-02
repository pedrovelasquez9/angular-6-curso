import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
nombre:string = "Pedro";
precio: number = 80;
fecha = new Date();

  constructor() { }

  ngOnInit() {
  }

}
