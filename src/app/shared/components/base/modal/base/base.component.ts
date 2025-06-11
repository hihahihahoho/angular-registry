import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  Input,
  TemplateRef,
  inject,
} from '@angular/core';
import { ButtonComponent } from '@components/base/button/button.component';
import { ModalActionLayout } from '@enums/ui.enum';
import { TranslateModule } from '@ngx-translate/core';
import { UI } from '@services/ui/ui.service';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-base',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslateModule],
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class ModalBaseComponent {
  @HostBinding('class.w-full') wFull = true;
  @HostBinding('class.modal-base') base = true;
  @HostBinding('class.modal-visible-scroll') @Input() allowScroll: boolean =
    true;

  @Input() title!: string;
  @Input() close: boolean = true;
  @Input() subTitle!: string;
  @Input() actionsLayout: ModalActionLayout = ModalActionLayout.Right;
  @Input() header!: TemplateRef<void>;
  @Input() headerExtendBotTpl!: TemplateRef<void>;
  @Input() footer!: TemplateRef<void>;
  @Input() actions!: TemplateRef<void>;
  @Input() bodyNoPx = false;

  private modalRef = inject(NzModalRef);
  readonly UI = inject(UI);

  closeModal() {
    this.modalRef.destroy();
  }
}
