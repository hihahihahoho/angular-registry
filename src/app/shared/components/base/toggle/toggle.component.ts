import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BaseCVADirective } from '@directives/base-cva/base-cva.directive';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'app-toggle',
  imports: [CommonModule, NzSwitchModule, ReactiveFormsModule],
  templateUrl: './toggle.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true,
    },
  ],
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent<T>
  extends BaseCVADirective<T> {
  @HostBinding('class.app-switch') switch = true;
  @Input() label?: string;
  @Input() nzControl: boolean = false;
  @Input() labelLeftTpl?: TemplateRef<void> | null;

  @Output() clickEvent = new EventEmitter<void>();

  handleClick() {
    this.clickEvent.emit();
  }

  handleLabelClick() {
    if (!this.control.disabled) {
      this.control.setValue(!this.control.value);
      this.clickEvent.emit();
    }
  }
}
