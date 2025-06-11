import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  TemplateRef,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { SvgInlineComponent } from '@components/base/svg-inline/svg-inline.component';
import { ValidateErrorComponent } from '@components/base/validate-error/validate-error.component';
import { BaseCVADirective } from '@directives/base-cva/base-cva.directive';
import { DateMode, Direction, InputShape, InputSize } from '@enums/ui.enum';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
export const DROPDOWN_CLASS_NAME = {
  sm: 'ant-picker-small',
  md: 'ant-picker-default',
  lg: 'ant-picker-large',
};

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    CommonModule,
    NzDatePickerModule,
    SvgInlineComponent,
    ReactiveFormsModule,
    ValidateErrorComponent,
    NzToolTipModule,
  ],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
  ],
})
export class DatepickerComponent<T>
  extends BaseCVADirective<T>
  implements OnChanges
{
  @Input() id: string =
    'picker' +
    Math.random().toString(22).substring(2) +
    new Date().getTime().toString(22);
  @Input() placeholder!: string;
  @Input() dateFormat!: string;
  @Input() direction: Direction = Direction.Horizontal;
  @Input() allowClear: boolean = true;
  @Input() label!: string | TemplateRef<void>;
  @Input() disabledTime: boolean = true;
  @Input() disabledRangeDate: boolean = true;
  @Input() inline: boolean = false;
  @Input() borderLess: boolean = false;
  @Input() showToday: boolean = false;
  @Input() range: boolean = false;
  @Input() shape: InputShape = InputShape.None;
  @Input() rangeSeparator = '-';
  @Input() size: InputSize = InputSize.Large;
  @Input() mode: DateMode = DateMode.Date;
  @Input() maxDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).setHours(
    23,
    59,
    59
  );
  @Input() minDate: Date | null = new Date(
    Date.now() - 365 * 24 * 60 * 60 * 1000
  );
  @Input() errorMessages?: Record<string, string>;
  @Input() tooltipTpl?: TemplateRef<void> | null;
  @Input() tooltipIcon: string = 'media/icons/outline/alert-information.svg';
  @Input() showTooltip: boolean = false;
  @Input() showRequired: boolean = false;
  @Input() hint!: string;
  @Output() eOpen = new EventEmitter<boolean>();
  @Output() tooltipEvent = new EventEmitter<void>();

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  initClass() {
    let classs = [this.direction.toString()];
    if (this.shape !== InputShape.None)
      classs.push('app-datepicker-' + this.shape);
    if (this.size !== InputSize.Medium) classs.push(this.size);
    return classs.join(' ');
  }

  dropDownClassName = DROPDOWN_CLASS_NAME.md;

  ngOnChanges() {
    this.initStyle();
    this.initFormatPicker();
    dayjs.extend(customParseFormat);
    dayjs.extend(weekOfYear);
  }

  initFormatPicker() {
    if (!this.dateFormat) {
      this.dateFormat = this.formatPickerDefault(this.mode);
    }

    if (!this.placeholder) {
      this.placeholder = this.formatPickerDefault(this.mode);
    }
  }

  formatPickerDefault(type: any) {
    switch (this.mode) {
      case 'year':
        return 'yyyy';
      case 'month':
        return 'MM/yyyy';
      case 'week':
        return 'ww/yyyy';
      default:
        return 'dd/MM/yyyy';
    }
  }

  initStyle() {
    this.initFormatPicker();
    switch (this.size) {
      case 'small':
        this.dropDownClassName = DROPDOWN_CLASS_NAME.sm;
        break;
      case 'large':
        this.dropDownClassName = DROPDOWN_CLASS_NAME.lg;
        break;
      default:
        this.dropDownClassName = DROPDOWN_CLASS_NAME.md;
        break;
    }
  }

  disabledDate(dateRange: any): boolean {
    return this.disabledTime
      ? this.disabledRangeDate &&
          !(
            dayjs(dateRange).isBefore(this.maxDate) &&
            (this.minDate ? dayjs(dateRange).isAfter(this.minDate) : true)
          )
      : false;
  }

  showClear(): boolean {
    return this.allowClear && this.control.dirty;
  }

  open(e: boolean) {
    this.eOpen.emit(e);
  }

  handleTooltip(e: any) {
    this.tooltipEvent.emit();
    e.stopPropagation();
  }
}
