import { Directive, Injector, OnInit, inject } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  Validators,
  NgControl,
  NgModel,
  FormControlName,
  FormGroupDirective,
  FormControlDirective,
} from '@angular/forms';
import { Subject, tap, takeUntil } from 'rxjs';

@Directive({
  selector: '[baseCVA]',
  standalone: true,
})
export class BaseCVADirective<T> implements ControlValueAccessor, OnInit {
  protected control: FormControl = new FormControl();
  protected required: boolean = false;
  private _isDisabled: boolean = false;
  protected _destroy$ = new Subject<void>();
  protected _onChange = (val: any | null) => val;
  protected _onTouched!: () => T;

  private injector: Injector = inject(Injector);

  ngOnInit() {
    this.setControl();
    this.required = this.control?.hasValidator(Validators.required) ?? false;
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  setControl() {
    try {
      const formControl = this.injector.get(NgControl);
      switch (formControl.constructor) {
        case NgModel:
          const { control, update } = formControl as NgModel;
          this.control = control;
          this.control.valueChanges
            .pipe(
              tap((value: T) => update.emit(value)),
              takeUntil(this._destroy$)
            )
            .subscribe();
          break;
        case FormControlName:
          this.control = this.injector
            .get(FormGroupDirective)
            .getControl(formControl as FormControlName);
          break;
        default:
          this.control = (formControl as FormControlDirective)
            .form as FormControl;
          break;
      }
    } catch (error) {
      this.control = new FormControl();
    }
  }

  writeValue(value: any): void {}

  registerOnChange(fn: (val: T | null) => T): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => T): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }
}
