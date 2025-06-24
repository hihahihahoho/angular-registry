import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, inject } from '@angular/core';
import { ToastService } from '@services/toast/toast.service';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SvgInlineComponent } from '../svg-inline/svg-inline.component';

@Component({
  selector: 'app-copy-button',
  standalone: true,
  imports: [
    CommonModule,
    SvgInlineComponent, // Or your actual SvgComponent
    NzToolTipModule
  ],
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss'],
})
export class CopyButtonComponent {
  @Input() text!: string;
  @Input() size = 6;
  private toastService = inject(ToastService);

  @HostListener('click', ['$event'])
  onHostClick(event: MouseEvent): void {
    event.preventDefault();   // Prevent default action (like navigation if it were an <a>)
    event.stopPropagation(); // Stop the event from bubbling to parent elements
    this.copyTextToClipboard();
  }

  private copyTextToClipboard(): void {
    if (!this.text) {
      console.warn('CopyButtonComponent: No text provided to copy.');
      return;
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(this.text).then(
        () => this.toastService.success({
          title: 'Sao chép thành công'
        }),
        (err) => {
          console.error('Failed to copy: ', err);
          this.toastService.error({
            title: 'Sao chép thất bại'
          });
        }
      );
    } else {
      console.error('Clipboard API not available or context is not secure. Cannot copy.');
      this.toastService.error({
        title: 'Không thể sao chép',
        message: 'Tính năng sao chép không khả dụng trong môi trường này.'
      });
    }
  }
}
