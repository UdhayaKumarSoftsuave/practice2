import { Directive , ElementRef , Renderer2 , HostListener} from '@angular/core';

@Directive({
  selector: '[appDropDownDirective]'
})
export class DropDownDirectiveDirective {

  constructor(private Element : ElementRef , private render : Renderer2) { }

  click : boolean = false;

  @HostListener('click') 
  onClick(){
    this.click = !this.click;
    if (this.click) {
      this.render.addClass(this.Element.nativeElement , 'open');
    } else{
      this.render.removeClass(this.Element.nativeElement , 'open');
    }
  }
}
