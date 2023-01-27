import { Directive , ViewContainerRef , TemplateRef, Input} from '@angular/core';

@Directive({
  selector: '[appCustomStructuralDirective]'
})
export class CustomStructuralDirectiveDirective {

  constructor(private view : ViewContainerRef ,private Template : TemplateRef<any> ) { }

  @Input() set appCustomStructuralDirective(condition : boolean){
    if (!condition) {
      this.view.createEmbeddedView(this.Template);
    } else {
      this.view.clear();
    }
  } 

}
