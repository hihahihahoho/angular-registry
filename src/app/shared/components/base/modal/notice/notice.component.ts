import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { ButtonComponent } from '@components/base/Button/button.component';
import { SvgInlineComponent } from '@components/base/svgInline/svg-inline.component';
import { AnySafeType } from '@enums/Type/type.enum';
import { TranslateModule } from '@ngx-translate/core';
import { ReplaceToStyleContentFromServerPipe } from '@pipes/replace-to-style-content-from-server/replace-to-style-content-from-server.pipe';
import { UI } from '@services/UI/ui.service';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { ModalBaseComponent } from '../Base/base.component';

@Component({
  selector: 'app-modal-notice',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ModalBaseComponent,
    SvgInlineComponent,
    ButtonComponent,
    ReplaceToStyleContentFromServerPipe,
  ],
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class ModalNoticeComponent {
  readonly UI = inject(UI);
  readonly data: AnySafeType = inject(NZ_MODAL_DATA);

  constructor(private modal: NzModalRef) {}

  @HostListener('document:keydown.enter', ['$event']) onEnterEvent(
    event: KeyboardEvent
  ) {
    this.confirmModal();
  }

  confirmModal() {
    if (this.data.confirm) {
      this.data.confirm();
    }
    this.destroyModal();
  }

  destroyModal() {
    this.modal.destroy();
  }

  typeOf(value: any) {
    return typeof value;
  }
}
