import { Directive , ElementRef , Renderer2 , HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropDownDirective]'
})
export class DropDownDirectiveDirective {

  constructor(private Element : ElementRef , private render : Renderer2) { }


  @HostBinding("class.open")  click : boolean = false;

  @HostListener('click') 
  onClick(){
    this.click = !this.click;
  }
}
