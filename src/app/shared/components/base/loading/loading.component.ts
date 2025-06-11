import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LoadingComponent {
  @HostBinding('class.app-spiner') spiner = true;
  @HostBinding('class.inbox') @Input() inBox?: boolean;
}
