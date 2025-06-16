import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { TabSize, TabTheme, TabType } from '@enums/UI/ui.enum';
import { TranslateModule } from '@ngx-translate/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule, NzTabsModule, TranslateModule],
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() size: TabSize = TabSize.Md;
  @Input() type: TabType = TabType.Pill;
  @Input() fill: boolean = false;
  @Input() tabCenter: boolean = false;
  @Input() theme: TabTheme = TabTheme.Brand;
  @Input() initIndex: number = 0;
  @Input() tabs!: any[];
  @Input() tabTitleTpl!: TemplateRef<any>;
  @Output() tabChangeIndex = new EventEmitter<number>();

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = ['app-tab', 'app-tab-' + this.type];
    if (this.fill) classs.push('app-tab-fill');
    if (this.size !== TabSize.Md) classs.push('app-tab-' + this.size);
    if (this.theme !== TabTheme.Default) classs.push('app-tab-' + this.theme);
    return classs.join(' ');
  }

  tabChange(index: number) {
    this.tabChangeIndex.emit(index);
    this.initIndex = index;
  }
}
