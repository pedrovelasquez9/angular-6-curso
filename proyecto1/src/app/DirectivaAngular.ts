import {Directive, ElementRef, Input} from '@angular/core';

@Directive ({
    selector: '[floatSide]'
})

export class FloatDirective{
	@Input() side: string;
	constructor(el: ElementRef){
		console.log(this.side);
		switch(this.side)
        {
            case 'left':
            el.nativeElement.style.float = 'left';
            break;
            case 'center':
            el.nativeElement.style.float = 'center';
            break;
            case 'right':
            el.nativeElement.style.float = 'right';
            break;
            default:            

            break;
        }
    }
}