import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColored]'
})
export class ColoredDirective {

  constructor(el: ElementRef) { 
	  el.nativeElement.style.background = 'blue'
	  el.nativeElement.style.color = 'white'
  }

}
