import { Component, HostBinding, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrors } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
// import { SvgInlineComponent } from '../svg-inline/svg-inline.component';
import { ValidateErrorAlign } from '@enums/ui.enum';

@Component({
  selector: 'app-validate-error',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    // SvgInlineComponent,
  ],
  templateUrl: './validate-error.component.html',
  styleUrls: ['./validate-error.component.scss'],
})
export class ValidateErrorComponent {
  @HostBinding('class.app-validate-error') error = true;
  @Input() errors: Record<string, ValidationErrors> | null = null;
  @Input() errorMessages?: Record<string, string>;
  @Input() align: ValidateErrorAlign = ValidateErrorAlign.Left;

  customErrorMessages: Record<string, string> = {
    required: 'msg_invalid.required',
    emailNotMatch: 'msg_invalid.mail_pattern',
    otpNotMatched: 'msg_invalid.otp_not_match',
    notFilled: 'msg_invalid.not_filled',
    otpNotFill: 'msg_invalid.otp_notFill',
  };

  ngOnChanges(changes: SimpleChanges): void {
    const { errorMessages } = changes;
    if (errorMessages) {
      this.customErrorMessages = {
        ...this.customErrorMessages,
        ...errorMessages.currentValue,
      };
    }
  }
}
