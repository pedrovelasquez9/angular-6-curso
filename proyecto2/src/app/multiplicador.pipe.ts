import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'multiplicador'
})

export class MultiplicadorPipe implements PipeTransform {
	transform(valorRecibido: number, factor:string): number {
		let fac = parseFloat(factor);
		let mult = valorRecibido * fac;
		return mult;
	}
}