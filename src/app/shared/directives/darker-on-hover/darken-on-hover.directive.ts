import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective { 

    @Input() brightness = '70';
    
    constructor(private elemento: ElementRef, private render: Renderer){ }

    @HostListener('mouseover')
    darkOn(){
        this.render.setElementStyle(this.elemento.nativeElement, 'filter', `brightness(${this.brightness}%)`);
    }

    @HostListener('mouseleave')
    darkOff(){
        this.render.setElementStyle(this.elemento.nativeElement, 'filter', 'brightness(100%)');
    }
}