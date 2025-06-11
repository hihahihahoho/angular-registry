import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  Input,
  TemplateRef,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/base/button/button.component';
import { SvgInlineComponent } from '@components/base/svg-inline/svg-inline.component';
import { ValidateErrorComponent } from '@components/base/validate-error/validate-error.component';
import { BaseCVADirective } from '@directives/base-cva/base-cva.directive';
import { Direction, InputSize } from '@enums/ui.enum';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-textarea',
  standalone: true,
  templateUrl: './textarea.component.html',
  styleUrls: ['../input/input.component.scss', './textarea.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidateErrorComponent,
    SvgInlineComponent,
    ButtonComponent,
    NzInputModule,
    NzToolTipModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent<T> extends BaseCVADirective<T> {
  @Input() maxRows: number = 10;
  @Input() label?: string | TemplateRef<T>;
  @Input() direction: Direction = Direction.Horizontal;
  @Input() id: string =
    'textarea' +
    Math.random().toString(22).substring(2) +
    new Date().getTime().toString(22);
  @Input() size: InputSize = InputSize.Large;
  @Input() clear: boolean = true;
  @Input() placeholder: string = 'Enter content';
  @Input() class?: string;
  @Input() autocomplete: 'on' | 'off' = 'off';
  @Input() errorMessages?: Record<string, string>;
  @Input() counter: number = 0;
  @Input() nzAutocomplete!: any;
  @Input() prefix?: TemplateRef<void> | null;
  @Input() suffix?: TemplateRef<void> | null;
  @Input() tooltipTpl?: TemplateRef<void> | null;
  @Input() tooltipIcon: string = 'media/icons/outline/alert-information.svg';
  @Input() showTooltip: boolean = false;
  @Input() showRequired: boolean = false;
  @Input() hint?: string;
  @Input() hintIcon: string = 'media/icons/solid/alert-information.svg';
  @Input() showHintIcon: boolean = false;

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = ['app-textarea', 'w-full', this.direction.toString()];
    if (this.size !== InputSize.Medium) classs.push(this.size);
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
}
