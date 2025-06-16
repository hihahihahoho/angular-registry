import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { SvgInlineComponent } from '@components_base/svgInline/svg-inline.component';
import {
  ButtonAlign,
  ButtonColor,
  ButtonShape,
  ButtonSize,
} from '@enums/UI/ui.enum';

function toButtonColor(value: string): ButtonColor {
  const colorKey = Object.keys(ButtonColor).find(
    (key) => ButtonColor[key as keyof typeof ButtonColor] === value
  );
  return colorKey
    ? ButtonColor[colorKey as keyof typeof ButtonColor]
    : ButtonColor.Primary;
}

function toButtonSize(value: string): ButtonSize {
  const sizeKey = Object.keys(ButtonSize).find(
    (key) => ButtonSize[key as keyof typeof ButtonSize] === value
  );
  return sizeKey
    ? ButtonSize[sizeKey as keyof typeof ButtonSize]
    : ButtonSize.Lg;
}

@Component({
  selector: '[app-button]',
  standalone: true,
  imports: [CommonModule, SvgInlineComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input({ transform: toButtonSize }) size: ButtonSize = ButtonSize.Lg;
  @Input() prefixIcon!: string | null;
  @Input() suffixIcon!: string | null;
  @Input() suffix!: TemplateRef<void>;
  @Input() iconOnly: boolean = false;
  @Input() mute!: boolean;
  @Input() shape?: ButtonShape = ButtonShape.Around;
  @Input({ transform: toButtonColor }) color: ButtonColor = ButtonColor.Primary;
  @Input() iconColorChange: boolean = true;
  @Input() iconSize?: number;
  @Input() wFull: boolean = false;
  @Input() isHug: boolean = true;
  @Input() align: ButtonAlign = ButtonAlign.Center;

  SIZE_ICON = {
    xs: 4,
    sm: 5,
    md: 5,
    lg: 6,
  };

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = ['btn'];
    if (this.wFull) classs.push('w-full');
    if (this.align != ButtonAlign.Center) classs.push('btn-' + this.align);
    if (this.mute) classs.push('btn-mute');
    if (this.color) classs.push('btn-' + this.color);
    if (this.shape != 'none') classs.push('btn-' + this.shape);
    if (this.size !== ButtonSize.Md) classs.push('btn-' + this.size);
    if (this.iconOnly) classs.push('icon-only');
    if (this.isHug) classs.push('btn-hug');
    if (!this.mute && !this.iconOnly) {
      if (this.prefixIcon && !this.suffixIcon) classs.push('no-suffix');
      if (this.suffixIcon && !this.prefixIcon) classs.push('no-prefix');
    }
    return classs.join(' ');
  }
}
