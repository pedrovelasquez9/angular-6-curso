import {IsDate, IsCurrency, IsInt, Length, Max, Min} from 'class-validator';
export class Curso{
	id: number;
	nombre: string;
	descripcion: string;
	duracion: string;
	precio: number;
}