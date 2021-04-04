import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{

    @HostBinding('class.open') isOpen:boolean = false;

    constructor(private element:ElementRef,renderer:Renderer2){
        
    }

    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }

    @HostListener('document:click',['$event']) toggleOpen(event:Event){
        // console.log(event);
        // console.log(this.element.nativeElement);
        this.isOpen = this.element.nativeElement.contains(event.target) ? !this.isOpen :false;
    }

}