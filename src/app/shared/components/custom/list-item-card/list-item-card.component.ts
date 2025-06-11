import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'a[app-list-item-card], button[app-list-item-card]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item-card.component.html',
  styleUrl: './list-item-card.component.scss'
})
export class ListItemCardComponent {
  @Input() icon?: string;
  @Input() iconColorChange = true;
  @Input() iconSize = 16;
  @Input() disabled = false;
  
  @HostBinding('class') get hostClasses() {
    return 'flex items-center gap-3 p-3 rounded-lg border border-border-lighter bg-bg-base cursor-pointer transition-all hover:border-primary hover:bg-primary-lightest disabled:opacity-50 disabled:cursor-not-allowed';
  }

  @HostBinding('attr.disabled') get isDisabled() {
    return this.disabled ? 'disabled' : null;
  }
}
