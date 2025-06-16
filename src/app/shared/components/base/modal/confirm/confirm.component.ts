import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { ButtonComponent } from '@components_base/Button/button.component';
import { SvgInlineComponent } from '@components_base/svgInline/svg-inline.component';
import { AnySafeType } from '@enums/Type/type.enum';
import { TranslateModule } from '@ngx-translate/core';
import { ReplaceToStyleContentFromServerPipe } from '@pipes/replace-to-style-content-from-server/replace-to-style-content-from-server.pipe';
import { UI } from '@services/UI/ui.service';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { ModalBaseComponent } from '../Base/base.component';

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
