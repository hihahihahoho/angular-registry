import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { PageWrapperSize } from '@enums/ui.enum';

@Component({
  selector: 'app-pagewrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
})
export class PageWrapperComponent {
  @Input() size: PageWrapperSize = PageWrapperSize.Medium;
  @Input() padding: boolean = true;

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = ['app-page-wrapper'];
    classs.push('app-page-wrapper-' + this.size);
    if (!this.padding) classs.push('no-padding');
    return classs.join(' ');
  }
}
