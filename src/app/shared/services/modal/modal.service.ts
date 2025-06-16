import { inject, Injectable, TemplateRef, Type } from '@angular/core';
import { ModalConfirmComponent } from '@components_base/modal/Confirm/confirm.component';
import { ModalNoticeComponent } from '@components_base/modal/Notice/notice.component';
import {
  ButtonColor,
  ModalActionLayout,
  ModalSize,
  ModalTypeShow,
} from '@enums/UI/ui.enum';
import {
  IModalNoticeTypeContent,
  IModalOption,
  ModalTypeData,
} from '@services/Modal/modal.interface';
import { NzModalService } from 'ng-zorro-antd/modal';

export interface IModalBaseOption {
  title?: string | TemplateRef<void>;
  subTitle?: string | TemplateRef<void>;
  type?: IModalNoticeTypeContent;
  message?: string | TemplateRef<void>;
  size?: ModalSize;
  class?: string;
  btnConfirm?: string;
  btnCancel?: string;
  typeShow?: ModalTypeShow;
  maskClosable?: boolean; // close by esc/click outside,
  confirm?: () => void;
  cancel?: () => void;
  isNotice?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private nzModalService = inject(NzModalService);

  open<T>(modalComponent: Type<T> | TemplateRef<void>, options?: any) {
    const size: ModalSize = options?.size || ModalSize.Medium;
    const isCenter = options?.typeShow === ModalTypeShow.Popup || true;
    const classWrapper = isCenter
      ? 'modal-wrapper'
      : 'modal-wrapper modal-sheet-wrapper';
    const className = `${
      options?.isNotice ? 'app-modal-notice' : 'app-modal-form'
    } ${
      options?.isServerContent ? 'modal-server-return-content' : ''
    } app-modal app-modal-${size} ${options?.class || ''}`;
    return this.nzModalService.create({
      nzContent: modalComponent,
      nzFooter: null,
      nzData: options,
      nzCentered: isCenter,
      nzClosable: false,
      nzWrapClassName: classWrapper,
      nzClassName: className,
      nzMaskClosable:
        !options?.maskClosable && options?.maskClosable !== undefined
          ? false
          : true,
    });
  }

  notice(options: Partial<IModalOption>) {
    const type = options?.type && ModalTypeData[options?.type];
    let modalOptions = {
      title: 'common.thong_bao',
      size: options?.size || ModalSize.Small,
      typeShow: options?.typeShow || ModalTypeShow.Popup,
      isNotice: true,
      actionsLayout: ModalActionLayout.Fill,
      maskClosable: true,
      ...options,
      btnConfirm: {
        title: options?.btnConfirm?.title || 'common.dong',
        color: options?.btnConfirm?.color || ButtonColor.Primary,
      },
      type: type,
    };
    return this.open(ModalNoticeComponent, modalOptions);
  }

  confirm(options: Partial<IModalOption>) {
    const type = options?.type && ModalTypeData[options?.type];
    let modalOptions = {
      title: 'common.thong_bao',
      size: options?.size || ModalSize.Small,
      typeShow: options?.typeShow || ModalTypeShow.Popup,
      isNotice: true,
      actionsLayout: ModalActionLayout.Fill,
      maskClosable: false,
      ...options,
      btnConfirm: {
        title: options?.btnConfirm?.title || 'common.dong_y',
        color: options?.btnConfirm?.color || ButtonColor.Primary,
      },
      btnCancel: {
        title: options?.btnCancel?.title || 'common.dong',
        color: options?.btnCancel?.color || ButtonColor.Secondary,
      },
      type: ModalTypeData.info,
    };

    console.log(options?.btnConfirm?.color, modalOptions);

    return this.open(ModalConfirmComponent, modalOptions);
  }
}
