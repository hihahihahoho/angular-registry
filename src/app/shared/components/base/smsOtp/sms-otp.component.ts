import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OTPComponent } from '@components_base/Otp/otp.component';
import { SvgInlineComponent } from '@components_base/svgInline/svg-inline.component';
import { AuthMethod } from '@enums/UI/ui.enum';
import { StepsService } from '@services/Steps/steps.service';
import { UI } from '@services/UI/ui.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sms-otp',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SvgInlineComponent,
    OTPComponent
  ],
  templateUrl: './sms-otp.component.html',
  styleUrl: './sms-otp.component.scss'
})
export class SmsOtpComponent {
  @Input() size: number = 6;
  @Input() otp: string = '123123';
  @Input() initialTime: number = 60; // Default time in seconds

  private fb = inject(FormBuilder);
  private stepService = inject(StepsService);

  @HostBinding('class.auth-method') auth = true;
  form!: FormGroup;
  step$: Observable<number> = this.stepService.getStep();
  readonly UI = inject(UI);
  authType = AuthMethod;
  qrImage = 'media/default/qr.png'

  showGuide = false;
  remainingTime = this.initialTime;

  toggleGuide(): void {
    this.showGuide = !this.showGuide;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      sms_otp: new FormControl(this.otp),
    });
  }

  onOtpValueChange(otpValue: string): void {
    this.form.get('sms_otp')?.setValue(otpValue);

    if (otpValue && otpValue.length === 6 && /^\d{6}$/.test(otpValue)) {
      console.log('Valid 6-digit OTP detected, submitting form...');
      this.submitForm();
    }
  }

  private submitForm(): void {
    if (this.form.valid) {
      console.log('Form submitted with OTP:', this.form.get('sms_otp')?.value);
      this.handleNext();
    }
  }

  handleBack() {
    this.stepService.prev();
  }

  handleNext() {
    this.stepService.next();
  }
}
