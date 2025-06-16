import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { ProcessDirection, ProcessType } from '@enums/UI/ui.enum';

@Component({
  selector: 'app-process-bar, [app-process-bar]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-bar.component.html',
  styleUrls: ['./process-bar.component.scss'],
})
export class ProcessBarComponent {
  @Input() percentage = 0;
  @Input() direction: ProcessDirection = ProcessDirection.Ltr;
  @Input() type: ProcessType = ProcessType.Info;

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = ['app-process', this.direction.toString()];
    if (this.type !== ProcessType.Info) classs.push('app-process-' + this.type);
    return classs.join(' ');
  }
}
