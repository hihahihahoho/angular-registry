import { Component, HostBinding, Input } from '@angular/core';
import { SvgInlineComponent } from '@components/base/svgInline/svg-inline.component';

@Component({
  selector: '[app-list-item]',
  imports: [SvgInlineComponent],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() prefixIcon: string = '';
  @Input() prefixLogo: string = '';

  @HostBinding('class') get hostClasses() {
    return 'c-list-item';
  }
}
