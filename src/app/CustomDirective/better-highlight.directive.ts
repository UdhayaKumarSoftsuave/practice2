import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementRef : ElementRef , private render : Renderer2) { }

  ngOnInit() {
    // this.render.setStyle(this.elementRef.nativeElement , 'background-color' , 'red');
  }

  @HostListener('mouseenter') 
  mouseEnter() {
    this.render.setStyle(this.elementRef.nativeElement , 'background-color' , 'red');
  }

  @HostListener('mouseleave') 
  mouseleave() {
    this.render.setStyle(this.elementRef.nativeElement , 'background-color' , 'green');
  }
}
