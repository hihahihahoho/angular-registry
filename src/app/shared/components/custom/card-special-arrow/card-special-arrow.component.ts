import { Component, HostBinding, Input } from '@angular/core';
import { CopyButtonComponent } from '@components/base/copy-button/copy-button.component';
import { SvgInlineComponent } from '@components/base/svgInline/svg-inline.component';

@Component({
  selector: '[app-card-special-arrow]',
  imports: [SvgInlineComponent, CopyButtonComponent],
  templateUrl: './card-special-arrow.component.html',
  styleUrl: './card-special-arrow.component.scss'
})
export class CardSpecialArrowComponent {
  @Input() copyText!: string;
  @Input() type: 'lv1' | 'lv2' = 'lv1';

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = ['app-card-special-arrow card'];
    classs.push('app-card-special-arrow-' + this.type);
    return classs.join(' ');
  }
}
