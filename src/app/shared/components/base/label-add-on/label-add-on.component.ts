import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { SvgInlineComponent } from '../svg-inline/svg-inline.component';

@Component({
  selector: '[app-label-add-on]',
  imports: [SvgInlineComponent, CommonModule],
  templateUrl: './label-add-on.component.html',
  styleUrl: './label-add-on.component.scss'
})
export class LabelAddOnComponent {
  @Input() prefixIcon!: string;
  @Input() suffixIcon!: string;

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = ['app-label-add-on'];
    if (this.prefixIcon) classs.push('app-label-add-on-prefix');
    if (this.suffixIcon) classs.push('app-label-add-on-suffix');
    return classs.join(' ');
  }
}
