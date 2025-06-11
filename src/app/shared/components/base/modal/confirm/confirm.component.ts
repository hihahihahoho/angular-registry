import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { TranslateModule } from '@ngx-translate/core';
import { ModalBaseComponent } from '../base/base.component';
import { UI } from '@services/ui/ui.service';
import { ReplaceToStyleContentFromServerPipe } from '@pipes/replace-to-style-content-from-server/replace-to-style-content-from-server.pipe';
import { ButtonComponent } from '@components/base/button/button.component';
import { SvgInlineComponent } from '@components/base/svg-inline/svg-inline.component';
import { AnySafeType } from '@enums/type.enum';

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ModalBaseComponent,
    SvgInlineComponent,
    ButtonComponent,
    ReplaceToStyleContentFromServerPipe,
  ],
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ModalConfirmComponent {
  readonly UI = inject(UI);
  readonly data: AnySafeType = inject(NZ_MODAL_DATA);

  constructor(private modal: NzModalRef) {}

  @HostListener('document:keydown.escape', ['$event']) onKeydownEvent(
    event: KeyboardEvent
  ) {
    // if (!this.data.maskClosable ){
    //   event.preventDefault();
    //   return;
    // }

    this.closeModal();
  }

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

  closeModal() {
    if (this.data.cancel) {
      this.data.cancel();
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
