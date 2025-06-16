import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { SvgInlineComponent } from '@components_base/svgInline/svg-inline.component';
import { BadgeColor, BadgeSize } from '@enums/UI/ui.enum';

@Component({
  selector: 'app-badge, [app-badge]',
  standalone: true,
  imports: [CommonModule, SvgInlineComponent],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() color: BadgeColor = BadgeColor.Success;
  @Input() size: BadgeSize = BadgeSize.Md;
  @Input() prefixIcon!: string;
  @Input() suffixIcon!: string;

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = ['app-badge'];
    classs.push('app-badge-' + this.color);
    if (this.size !== BadgeSize.Md) classs.push('app-badge-' + this.size);
    if (this.prefixIcon) classs.push('app-badge-icon-prefix');
    if (this.suffixIcon) classs.push('app-badge-icon-suffix');
    return classs.join(' ');
  }
}
