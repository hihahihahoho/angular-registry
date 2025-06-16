import { Component, HostBinding, Input } from '@angular/core';
import { BadgeNumberColor } from '@enums/UI/ui.enum';

@Component({
  selector: 'app-badge-number, [app-badge-number]',
  imports: [],
  templateUrl: './badge-number.component.html',
  styleUrl: './badge-number.component.scss'
})
export class BadgeNumberComponent {
  @Input() color: BadgeNumberColor = BadgeNumberColor.Primary;

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = ['app-badge-number'];
    classs.push('app-badge-number-' + this.color);
    return classs.join(' ');
  }
}
