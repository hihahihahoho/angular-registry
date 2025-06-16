import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    inject,
    Input,
    OnChanges,
    Output,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@components_base/button/button.component';
import { SvgInlineComponent } from '@components_base/svgInline/svg-inline.component';
import { ValidateErrorComponent } from '@components_base/validateError/validate-error.component';
import { BaseCVADirective } from '@directives/baseCva/base-cva.directive';
import { CCY } from '@enums/CCY/ccy.enum';
import { Language } from '@enums/Common/common.enum';
import { AnySafeType } from '@enums/Type/type.enum';
import { Direction, InputSize } from '@enums/UI/ui.enum';
import { CapitalizeFirstCharPipe } from '@pipes/capitalize-first-char/capitalize-first-char.pipe';
import { NumberToTextPipe } from '@pipes/numberToText/number-to-text.pipe';
import { TranslationService } from '@services/Translation/translation.service';
import { UI } from '@services/UI/ui.service';
import { CleaveOptions } from 'cleave.js/options';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-input-money',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzToolTipModule,
    NzDropDownModule,
    NgxCleaveDirectiveModule,
    CapitalizeFirstCharPipe,
    NumberToTextPipe,
    ButtonComponent,
    ValidateErrorComponent,
    SvgInlineComponent
  ],
  templateUrl: './money-input.component.html',
  styleUrls: ['../input/input.component.scss', './money-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MoneyInputComponent),
      multi: true,
    },
  ],
})
export class MoneyInputComponent<T>
  extends BaseCVADirective<T>
  implements OnChanges {
  @HostBinding('class') get hostClass() {
    return this.initClass();
  }
  @Input() id: string =
    'input-money' +
    Math.random().toString(22).substring(2) +
    new Date().getTime().toString(22);
  @Input() label?: string | TemplateRef<T>;
  @Input() direction: Direction = Direction.Horizontal;
  @Input() size: InputSize = InputSize.Large;
  @Input() allowClear = true;
  @Input() placeholder = 'Placeholder';
  @Input() prefix?: TemplateRef<void> | null;
  @Input() prefixIcon?: string;
  @Input() suffix?: string;
  @Input() suffixTpl?: TemplateRef<void> | null;
  @Input() suffixIcon?: string;
  @Input() extendRight?: TemplateRef<void> | null;
  @Input() extendBottom?: TemplateRef<void> | null;
  @Input() iconColorChange: boolean = false;
  /**
   * Hiện tooltip
   **/
  @Input() showTooltip: boolean = false;
  @Input() tooltipTpl?: TemplateRef<void> | null;
  @Input() tooltipIcon: string = 'media/icons/outline/alert-information.svg';
  /**
   * Hiện numbertotex
   **/
  @Input() numberToText: boolean = true;
  /**
   * Dạng rút gọn (không có numbertotext)
   **/
  @Input() isSimple: boolean = true;
  /**
   * Hiện dấu hoa thị biểu thị required
   **/
  @Input() showRequired: boolean = false;
  /**
   * Chỉ cho phép nhận số dương
   **/
  @Input() numberPositiveOnly: boolean = true;
  /**
   * Độ dài tối đa, không kể kí tự phân tách (delimiter) và phần thập phân)
   **/
  @Input() maxLength: number = 18;
  /**
   * Cho phép nhận số thập phân
   **/
  @Input() allowDecimal: boolean = false;
  /**
   * Số chữ số thập phân (số chữ số sau dấu chấm)
   **/
  @Input() decimalLength: number = 2;
  /**
   * Kí tự phân tách cụm 3 số
   **/
  @Input() delimiter: string = ',';
  /**
   * Loại tiền tệ
   **/
  @Input() ccy?: CCY = CCY.VND;
  /**
   * Thay đổi loại tiền tệ
   **/
  @Input() changeCCY?: boolean = false;
  /**
   * Mảng loại tiền tệ
   **/
  @Input() ccys = [
    {
      label: 'VND',
      value: 'VND',
    },
    {
      label: 'USD',
      value: 'USD',
    },
    {
      label: 'CAD',
      value: 'CAD',
    },
  ];
  /**
   * Danh sách message lỗi tương ứng
   **/
  @Input() errorMessages?: Record<string, string>;
  /**
   * Gợi ý
   **/
  @Input() hint?: string;

  @Output() tooltipEvent = new EventEmitter<void>();
  @Output() ccyChangeEvent = new EventEmitter<void>();

  @ViewChild('moneyInput', { static: false }) moneyInput!: ElementRef;

  private translationService = inject(TranslationService);
  readonly UI = inject(UI);
  rawValue!: AnySafeType;
  language$!: Observable<Language>;

  visibleChangeCCYDropdown: boolean = false;

  cleaveOptions: CleaveOptions = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    numeralIntegerScale: this.maxLength,
    delimiter: this.delimiter,
    numeralPositiveOnly: this.numberPositiveOnly,
    numeralDecimalScale: this.allowDecimal ? this.decimalLength : 0,
    onValueChanged: (target: AnySafeType) => {
      if (target.target.rawValue > 0) {
        this.rawValue = target.target.rawValue;
        this._onChange(this.rawValue);
      } else {
        this.rawValue = null;
        this._onChange(null);
        this.moneyInput.nativeElement.value = '';
      }

    },
  };

  ngOnChanges(): void {
    this.language$ = this.translationService.getLang();
  }

  initClass() {

    return `app-input-money ${this.direction}
    ${this.size !== InputSize.Medium ? this.size : ''}
    ${this.control.value && ' input-filled'}
    `.trim();

  }

  handleSetValue(value: AnySafeType) {
    this.handleChangeValue(value);
  }

  onClearInput() {
    this.handleChangeValue(null);
  }

  handleChangeValue(value: AnySafeType) {
    this.control.patchValue(value);
    const event = new Event('input', { bubbles: true });
    this.moneyInput.nativeElement.dispatchEvent(event);
    this._onTouched;
  }

  isShowClearBtn() {
    return (
      this.control.value &&
      this.allowClear &&
      !this.control.disabled &&
      this.control.dirty &&
      this.control.touched
    );
  }

  handleTooltip(e: any) {
    this.tooltipEvent.emit();
    e.stopPropagation();
  }

  handleSelectCCY(item: any) {
    this.ccy = item.value;
    this.ccyChangeEvent.emit(item);
  }

  visibleChangeDropdownCCY(visible: boolean) {
    console.log('haha:', visible);
    this.visibleChangeCCYDropdown = visible;
  }
}
