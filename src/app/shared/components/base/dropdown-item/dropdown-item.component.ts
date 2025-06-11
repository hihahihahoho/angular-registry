import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { SvgInlineComponent } from '@components/base/svg-inline/svg-inline.component';

@Component({
  selector: 'app-dropdown-item',
  standalone: true,
  imports: [CommonModule, SvgInlineComponent],
  templateUrl: './dropdown-item.component.html',
  styleUrl: './dropdown-item.component.scss',
})
export class DropdownItemComponent {
  @HostBinding('class.app-dropdown-item') dropdown = true;

  @Input() icon!: string;
  @Input() iconSize: number = 6;
  @Input() iconClass!: string;
  @Input() iconColorChange: boolean = true;
}
