import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	peliculas = [
		{
			titulo: 'Episodio I - The phantom menace',
			poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
		},
		{
			titulo: 'Episodio II - Attack of the clones',
			poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
		},
		{
			titulo: 'Episodio III - Vengance of the Sith',
			poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
		},
		{
			titulo: 'Episodio IV - A new hope',
			poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
		},
		{
			titulo: 'Episodio V - The Empire strikes back',
			poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
		},
		{
			titulo: 'Episodio VI - Return of the Jedi',
			poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
		},
		{
			titulo: 'Episodio VII - The force awakens',
			poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
		},
		{
			titulo: 'Episodio VIII - The last Jedi',
			poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'
		},
		{
			titulo: 'Episodio IX - The rise of Skywalker',
			poster: 'https://cdn1-www.comingsoon.net/assets/uploads/2019/04/swriseheader.jpg'
		}
	];

	drop(event: CdkDragDrop<string[]>){
		moveItemInArray(this.peliculas, event.previousIndex, event.currentIndex);
	}

	comida = [
		{
			valor: 'carne',
			nombre: 'Carne'
		},
		{
			valor: 'Pizza',
			nombre: 'Pizza'
		},
		{
			valor: 'Tacos',
			nombre: 'Tacos'
		},
		{
			valor: 'Paella',
			nombre: 'Paella'
		}
	]

}
