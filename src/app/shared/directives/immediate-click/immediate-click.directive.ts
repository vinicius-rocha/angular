import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlataformDetectorService } from '../../../core/plataform-detector/plataform-detector.service';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private plataFormDetector: PlataformDetectorService
  ) { }

  ngOnInit(): void {
    this.plataFormDetector.isPlatformBrowser() && this.element.nativeElement.click();
  }
}