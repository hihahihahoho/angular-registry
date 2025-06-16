import { Directive, HostListener } from '@angular/core';
import { CommonService } from '@services/Common/common.service';

@Directive({
  selector: '[onlyNumber]',
  standalone: true,
})
export class OnlyNumberDirective {
  constructor(private commonService: CommonService) {}

  @HostListener('paste', ['$event']) onPaste(event: any) {
    if (this.commonService.allowMetaKey(event)) {
      return;
    }
    const value = event.clipboardData.getData('text');
    if (value.search(/^\d+$/) < 0) {
      event.preventDefault();
    }
  }

  @HostListener('keypress', ['$event']) onKeydown(event: KeyboardEvent) {
    if (this.commonService.allowMetaKey(event)) {
      return;
    }
    const isDigit = /\d/.test(event.key);
    if (!isDigit) event.preventDefault();
  }
}
