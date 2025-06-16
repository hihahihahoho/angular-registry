import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { SvgInlineComponent } from '@components_base/svgInline/svg-inline.component';
import { AccordionSize, AccordionType } from '@enums/UI/ui.enum';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'app-accordion, [app-accordion]',
  standalone: true,
  imports: [CommonModule, NzCollapseModule, SvgInlineComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  @Input() header?: string;
  @Input() expandIconSrc: string = 'media/icons/outline/chevron-down-2.svg';
  @Input() expandIconPosition: 'end' | 'start' = 'end';
  @Input() headerTpl?: TemplateRef<void>;
  @Input() extraTpl?: TemplateRef<void>;
  @Input() isActive: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() showArrow: boolean = true;
  @Input() headerCenter: boolean = false;
  @Input() reverse: boolean = false;
  @Input() type: AccordionType = AccordionType.Box;
  @Input() size: AccordionSize = AccordionSize.Lg;

  readonly AccordionType = AccordionType;

  @HostBinding('class') get hostClass() {
    return `app-accordion
    app-accordion-${this.type}
    app-accordion-${this.size}
    ${this.isActive ? 'app-accordion-active' : ''}
    ${this.headerCenter ? 'app-accordion-header-center' : ''}
    ${this.reverse ? 'app-accordion-reverse' : ''}
    `;
  }

  changeActive(active: boolean) {
    this.isActive = active;
  }
}
