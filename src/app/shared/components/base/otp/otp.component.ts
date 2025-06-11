import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  inject,
  Input,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidateErrorComponent } from '@components/base/validate-error/validate-error.component';
import { BaseCVADirective } from '@directives/base-cva/base-cva.directive';
import { UI } from '@services/ui/ui.service';
import { NgOtpInputComponent } from 'ng-otp-input';
@Component({
  selector: 'app-otp',
  standalone: true,
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidateErrorComponent,
    NgOtpInputComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OTPComponent),
      multi: true,
    },
  ],
})
export class OTPComponent<T> extends BaseCVADirective<T> {
  @HostBinding('class.app-otp') otp = true;
  @Input() size: number = 6;
  @Input() digitOnly: boolean = true;
  @Input() hint!: string;
  @Input() showError: boolean = true;
  @Input() errorMessages?: Record<string, string>;
  @Input() otpValue?: string;
  @Output() otpValueChange = new EventEmitter<string>();

  readonly UI = inject(UI);

  private fb = inject(FormBuilder);

  config = {
    allowNumbersOnly: true,
    showError: this.showError,
    placeholder: '-',
    length: this.size,
    inputClass: 'input-otp',
  };

  formOTP!: FormGroup;
  errors: Record<string, any> | null = null;
  invalid: boolean = true;

  override ngOnInit() {
    super.ngOnInit();
    this.formOTP = this.fb.group({
      otp: [this.control.value, Validators.required],
    });
  }

  onOtpChange(event: string) {
    this.otpValueChange.emit(event);
    this.formOTP.get('otp')?.setValue(event);
    this.invalid = !this.formOTP.valid;
    this.errors = this.formOTP.get('otp')?.errors || null;
  }

  get otpControl(): FormControl {
    return this.formOTP.get('otp') as FormControl;
  }
}
