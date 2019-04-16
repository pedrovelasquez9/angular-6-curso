import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularCDK';

  item = [];

  ngOnInit(){
	for(let index = 0; index < 1000; index++){
		this.item.push("registro "+index);
	}
  }
}
