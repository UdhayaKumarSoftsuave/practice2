import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementRef : ElementRef , private render : Renderer2) { }

  @Input() defaultColor : string = 'transparent';

  @Input('appBetterHighlight') mouseOverColor : string = 'red'
  
  @HostBinding('style.backgroundColor') backgroundColor !: string;
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') 
  mouseEnter() {
    this.backgroundColor = this.mouseOverColor;
  }

  @HostListener('mouseleave') 
  mouseleave() {
    // this.render.setStyle(this.elementRef.nativeElement , 'background-color' , 'green');
    this.backgroundColor = this.defaultColor;
  }
}
