import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector : '[Basic-directive]'
})
export class BasicDirective implements OnInit {

    constructor(private elementRef : ElementRef){
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.color = 'blue';
    }

}