import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SmsOtpComponent } from '@components_base/smsOtp/sms-otp.component';
import { AuthMethod } from '@enums/UI/ui.enum';

@Component({
  selector: 'app-auth-method',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SmsOtpComponent
  ],
  templateUrl: './auth-method.component.html',
  styleUrl: './auth-method.component.scss',
})
export class AuthMethodComponent {
  @Input() type: AuthMethod = AuthMethod.SMS_OTP;

  @HostBinding('class.auth-method') auth = true;

  authType = AuthMethod;

}
