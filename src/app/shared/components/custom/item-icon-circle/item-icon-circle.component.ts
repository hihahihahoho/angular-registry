import { Component, HostBinding, Input } from '@angular/core';
import { SvgInlineComponent } from '@components/base/svgInline/svg-inline.component';
import { ItemIconCircleSize } from '@enums/UI/ui.enum';


const SIZE_CLASS = {
  md: {
    icon: 6,
    circle: 'size-12',
  },
  lg: {
    icon: 8,
    circle: 'size-14',
  }
};


@Component({
  selector: '[app-item-icon-circle]',
  imports: [SvgInlineComponent],
  templateUrl: './item-icon-circle.component.html',
  styleUrl: './item-icon-circle.component.scss'
})

export class ItemIconCircleComponent {
  @Input() icon!: string;
  @Input() isHover = true
  @Input() size: ItemIconCircleSize = ItemIconCircleSize.Md;
  readonly SIZE_CLASS = SIZE_CLASS;

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = ['app-item-icon-circle'];
    if (this.isHover) {
      classs.push('is-hover');
    }
    return classs.join(' ');
  }
}
