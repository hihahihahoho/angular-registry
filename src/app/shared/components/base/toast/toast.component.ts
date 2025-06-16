import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SvgInlineComponent } from '@components/base/svgInline/svg-inline.component';
import { TOAST_DURATION } from '@enums/UI/ui.enum';
import { ToastService } from '@services/Toast/toast.service';
import {
  NzNotificationDataOptions,
  NzNotificationService,
} from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, SvgInlineComponent],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @Input() data!: any;

  @ViewChild('toastTpl', { static: false }) toastTpl!: TemplateRef<any>;
  @ViewChild('closeTpl', { static: false }) closeTpl!: TemplateRef<any>;

  private nzNotificationService = inject(NzNotificationService);
  private toastService = inject(ToastService);
  private destroyRef = inject(DestroyRef);

  private toast$!: Observable<any>;

  ngOnInit() {
    this.toast$ = this.toastService.getToast();
    this.toast$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((param: any) => {
        const toastConfig: NzNotificationDataOptions = {
          nzData: param,
          nzDuration: param.duration || TOAST_DURATION,
          nzPlacement: param.placement || 'topRight',
          nzClass: param.class || '' + ' toast-type-' + param.type,
          nzCloseIcon: this.closeTpl,
          nzAnimate: true,
        };
        this.nzNotificationService.template(this.toastTpl, toastConfig);
      });
  }

  closeToast() {
    this.nzNotificationService.remove();
  }
}
