import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    TemplateRef,
    forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@components_base/button/button.component';
import { SvgInlineComponent } from '@components_base/svgInline/svg-inline.component';
import { ValidateErrorComponent } from '@components_base/validateError/validate-error.component';
import { BaseCVADirective } from '@directives/baseCva/base-cva.directive';
import { Direction, InputShape, InputSize, InputType } from '@enums/UI/ui.enum';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidateErrorComponent,
    SvgInlineComponent,
    ButtonComponent,
    NzToolTipModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent<T> extends BaseCVADirective<T> {
  @Input() maxRows: number = 10;
  @Input() label?: string | TemplateRef<T>;
  @Input() direction: Direction = Direction.Horizontal;
  @Input() id: string =
    'input' +
    Math.random().toString(22).substring(2) +
    new Date().getTime().toString(22);
  @Input() size: InputSize = InputSize.Large;
  @Input() clear: boolean = true;
  @Input() placeholder: string = 'Enter content';
  @Input() autocomplete: 'on' | 'off' = 'off';
  @Input() autofocus: boolean = false;
  @Input() errorMessages?: Record<string, string>;
  @Input() type: InputType = InputType.Text;
  @Input() prefix?: TemplateRef<void> | null;
  @Input() suffix?: TemplateRef<void> | null;
  @Input() suffixText?: string;
  @Input() prefixIcon?: string;
  @Input() suffixIcon?: string;
  @Input() extendRight?: TemplateRef<void> | null;
  @Input() extendBottom?: TemplateRef<void> | null;
  @Input() tooltipTpl?: TemplateRef<void> | null;
  @Input() tooltipIcon: string = 'media/icons/outline/alert-information.svg';
  @Input() showTooltip: boolean = false;
  @Input() hint?: string;
  @Input() hintIcon: string = 'media/icons/solid/alert-information.svg';
  @Input() showHintIcon: boolean = false;
  @Input() borderLess: boolean = false;
  @Input() showRequired: boolean = false;
  @Input() iconColorChange: boolean = true;
  @Input() shape: InputShape = InputShape.None;
  @Input() richPlaceholderTpl?: TemplateRef<void> | null;
  @Output() tooltipEvent = new EventEmitter<void>();


  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = ['app-input', this.direction.toString()];
    if (this.size !== InputSize.Medium) classs.push(this.size);
    if (this.shape !== InputShape.None) classs.push('input-' + this.shape);
    if (this.richPlaceholderTpl) classs.push('has-rich-placeholder');
    if (this.borderLess) classs.push('border-less');
    if (this.control.value) classs.push('input-filled');
    return classs.join(' ');
  }

  isShowClearBtn() {
    return (
      this.clear &&
      this.control?.value &&
      !this.control?.disabled &&
      this.control.dirty
    );
  }

  clearFn(e: any) {
    this.control?.setValue(null);
  }

  handleTooltip(e: any) {
    this.tooltipEvent.emit();
    e.stopPropagation();
  }
}
