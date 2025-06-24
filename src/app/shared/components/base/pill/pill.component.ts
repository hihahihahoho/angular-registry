import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { SvgInlineComponent } from '@components/base/svg-inline/svg-inline.component';
import { PillColor, PillSize } from '@enums/ui.enum';

@Component({
  selector: 'app-pill, [app-pill]',
  standalone: true,
  imports: [CommonModule, SvgInlineComponent],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.scss',
})
export class PillComponent {
  @Input() color: PillColor = PillColor.Primary;
  @Input() size: PillSize = PillSize.Md;
  @Input() suffix?: TemplateRef<void> | null;
  @Input() sizeIcon?: number;
  @Input() prefixIcon!: string | null;
  @Input() suffixIcon!: string | null;
  @Input() data!: any | null;
  @Input() labelClick: boolean = false;

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = ['app-pill'];
    if (!this.labelClick) classs.push('app-pill-no-click');
    if (this.size !== PillSize.Md) classs.push('app-pill-' + this.size);
    classs.push('app-pill-' + this.color);
    return classs.join(' ');
  }

  SIZE_ICON = {
    large: 5,
    medium: 4,
    small: 4,
  };
}
