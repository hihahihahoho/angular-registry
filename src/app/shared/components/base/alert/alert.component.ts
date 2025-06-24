import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { SvgInlineComponent } from '../svg-inline/svg-inline.component';

export type AlertColor = 'info' | 'success' | 'alert' | 'error';

const ALERT_COLOR_ICON_MAP: {
  [key in AlertColor]: string;
} = {
  info: 'media/icons/outline/information-circle.svg',
  success: 'media/icons/outline/checkmark-circle.svg',
  alert: 'media/icons/outline/alert.svg',
  error: 'media/icons/outline/alert-circle.svg',
};

@Component({
  selector: '[app-alert]',
  imports: [CommonModule, SvgInlineComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})


export class AlertComponent {
  @Input() color: AlertColor = 'info';
  @Input() title: string = '';
  @Input() isCardHeader = false;
  @Input() styleAlert: '1' | '2' = '1';

  icon = 'media/icons/outline/alert-circle.svg'
  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  ngOnInit(): void {
    this.icon = ALERT_COLOR_ICON_MAP[this.color];
  }

  initClass() {
    let classs = ['alert-c', `alert-c-${this.color}`];
    if (this.isCardHeader) {
      classs.push('alert-c-card-header');
    }
    return classs.join(' ');
  }
}
