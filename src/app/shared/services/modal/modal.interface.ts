import { TemplateRef } from '@angular/core';
import {
  ButtonColor,
  ModalActionLayout,
  ModalIconType,
  ModalSize,
  ModalType,
  ModalTypeShow,
} from '@enums/ui.enum';

export type IModalNoticeTypeContent = {
  [key in ModalType]: {
    icon?: string;
    type?: ModalType;
    btnCancel?: {
      color?: ButtonColor;
    };
    btnConfirm?: {
      color?: ButtonColor;
    };
  };
};

export interface IModalOption {
  actionsLayout?: ModalActionLayout;
  title?: string | TemplateRef<void>;
  subTitle?: string | TemplateRef<void>;
  type?: ModalType;
  message?: string | TemplateRef<void>;
  size?: ModalSize;
  class?: string;
  btnConfirm?: {
    title?: string;
    color?: ButtonColor;
  };
  btnCancel?: {
    title?: string;
    color?: ButtonColor;
  };
  typeShow?: ModalTypeShow;
  isNotice?: boolean;
  isServerContent?: boolean; // server returned content popup
  maskClosable?: boolean; // close by esc/click outside,;
  confirm?: () => void;
  cancel?: () => void;
}

export const ModalTypeData: IModalNoticeTypeContent = {
  info: {
    type: ModalType.Info,
    icon: ModalIconType.Info,
    btnCancel: {
   color: ButtonColor.Secondary,
    },
    btnConfirm: {
      color: ButtonColor.Primary,
    },
  },
  success: {
    type: ModalType.Success,
    icon: ModalIconType.Success,
    btnCancel: {
      color: ButtonColor.Secondary,
    },
    btnConfirm: {
      color: ButtonColor.Primary,
    },
  },
  warning: {
    type: ModalType.Warning,
    icon: ModalIconType.Warning,
    btnCancel: {
        color: ButtonColor.Secondary,
    },
    btnConfirm: {
      color: ButtonColor.Primary,
    },
  },
  error: {
    type: ModalType.Error,
    icon: ModalIconType.Error,
    btnCancel: {
     color: ButtonColor.Secondary,
    },
    btnConfirm: {
      color: ButtonColor.Primary,
    },
  },
};
