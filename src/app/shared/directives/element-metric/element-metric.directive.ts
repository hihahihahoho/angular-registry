import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appElementMetrics]',
  standalone: true
})
export class ElementMetricsDirective implements AfterViewInit, OnDestroy {
  @Input() cssVariableName: string = '--trigger-to-top';
  @Input() widthCssVariableName: string = '--trigger-width';
  @Input() targetElement?: HTMLElement; // Template reference variable element

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    // Use requestAnimationFrame to ensure DOM is fully rendered
    requestAnimationFrame(() => {
      this.calculateDistanceToTopAndWidth();
    });
  }

  ngOnDestroy() {
    // Clean up the CSS variables when directive is destroyed
    const element = this.getTargetElement();
    element.style.removeProperty(this.cssVariableName);
    element.style.removeProperty(this.widthCssVariableName);
  }

  @HostListener('window:resize')
  @HostListener('window:scroll')
  onWindowChange() {
    this.calculateDistanceToTopAndWidth();
  }

  private getTargetElement(): HTMLElement {
    return this.targetElement || document.documentElement;
  }

  private calculateDistanceToTopAndWidth() {
    if (this.elementRef.nativeElement) {
      const rect = this.elementRef.nativeElement.getBoundingClientRect();
      console.log('Element Metrics:', rect);

      // Distance from top of document to bottom of element
      const distanceToTop = rect.top + window.scrollY + rect.height;
      const width = rect.width;

      // Set CSS variables on target element (or document root if no target)
      const targetElement = this.getTargetElement();
      targetElement.style.setProperty(this.cssVariableName, `${distanceToTop}px`);
      targetElement.style.setProperty(this.widthCssVariableName, `${width}px`);
    }
  }
}
