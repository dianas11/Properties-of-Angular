import { Directive, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';


@Directive({
  selector: '[appSampleDirective]'
})
export class SampleDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.setBgColor('white')
  }
    // elementRef.nativeElement.style.backgroundColor = '#fff'
  //   renderer.setStyle(elementRef.nativeElement, 'backgroundColor' , '#fff')
  //  }
  
  setBgColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor', color)
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('yellow')
  }

  @HostListener('click') onClick() {
    window.alert('Host Element Clicked');
}

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('white')
  }

  @HostBinding('style.border') border: string;

  @HostListener('mouseover') onMouseOver() {
    this.border = '5px solid green';
}


}
