import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastIconType, ToastType } from '@enums/ui.enum';

export interface IToast {
  title: string;
  type?: ToastType;
  duration?: number;
  message?: string | TemplateRef<unknown>;
  class?: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toast$ = new Subject();

  getToast() {
    return this.toast$.asObservable();
  }

  success(paramater: IToast) {
    const type: ToastType = ToastType.Success;
    const param = {
      icon: ToastIconType.Success,
      ...paramater,
      type: type,
    };
    this.show(param);
  }

  error(paramater: IToast) {
    const type: ToastType = ToastType.Danger;
    const param = {
      icon: ToastIconType.Danger,
      ...paramater,
      type: type,
    };
    this.show(param);
  }

  warning(paramater: IToast) {
    const type: ToastType = ToastType.Warning;
    const param = {
      icon: ToastIconType.Warning,
      ...paramater,
      type: type,
    };
    this.show(param);
  }

  info(paramater: IToast) {
    const type: ToastType = ToastType.Info;
    const param = {
      icon: ToastIconType.Info,
      ...paramater,
      type: type,
    };
    this.show(param);
  }

  show(paramater: IToast) {
    this.toast$.next(paramater);
  }
}
