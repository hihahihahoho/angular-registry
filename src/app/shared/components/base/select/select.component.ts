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
  inject,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { AvatarComponent } from '@components/base/avatar/avatar.component';
import { ButtonComponent } from '@components/base/button/button.component';
import { CardEmptyComponent } from '@components/base/card-empty/card-empty.component';
import { SvgInlineComponent } from '@components/base/svg-inline/svg-inline.component';
import { ValidateErrorComponent } from '@components/base/validate-error/validate-error.component';
import { BaseCVADirective } from '@directives/base-cva/base-cva.directive';
import {
  AvatarSize,
  AvatarType,
  Direction,
  IconType,
  InputSize,
} from '@enums/ui.enum';
import { CommonService } from '@services/common/common.service';
export interface ISelect {
  label: string;
  value: string | number;
  code?: string | number;
  image?: string;
  sub?: string;
  disabled?: boolean;
  extend?: any;
}

export type ISelectProperty = 'label' | 'value' | 'code' | 'image' | 'sub';

export const SELECT_DROPDOWN_CLASSNAME = {
  sm: ['ant-select-style-checked', 'ant-select-size-sm'],
  md: ['ant-select-style-checked', 'ant-select-size-md'],
  lg: ['ant-select-style-checked', 'ant-select-size-lg'],
};

export const SELECT_OPTION_HEIGHT = {
  // sm: 44,
  sm: 36,
  smSub: 60,
  md: 44,
  mdSub: 60,
  lg: 52,
  lgSub: 76,
};

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    SvgInlineComponent,
    AvatarComponent,
    ButtonComponent,
    NzSelectModule,
    CardEmptyComponent,
    ValidateErrorComponent,
    NzToolTipModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent<T>
  extends BaseCVADirective<T>
  implements OnChanges
{
  @Input() id: string =
    'select' +
    Math.random().toString(22).substring(2) +
    new Date().getTime().toString(22);
  @Input() label?: string | TemplateRef<void>;
  @Input() direction: Direction = Direction.Horizontal;
  @Input() options: ISelect[] = [];
  @Input() placeholder: string = 'Select';
  @Input() allowSearch: boolean = true;
  @Input() allowClear: boolean = false;
  @Input() multiple!: boolean;
  @Input() class!: string;
  @Input() maxLengthSearchKeyWord!: number;
  @Input() noSpecialSearchKeyWord: boolean = false;
  @Input() isPagination: boolean = false;
  @Input() size: InputSize = InputSize.Large;
  @Input() showArrow: boolean = true;
  @Input() hasSub: boolean = false;
  @Input() showSub: boolean = false;
  @Input() borderLess: boolean = false;
  @Input() allowAll: boolean = false;
  @Input() disabledAll: boolean = false;
  @Input() iconType: IconType = IconType.Avatar;
  @Input() avatarType: AvatarType = AvatarType.Image;
  @Input() iconSize: AvatarSize = AvatarSize.Xs;
  @Input() filterBy: ISelectProperty[] = ['label', 'value'];
  @Input() moreBlock!: TemplateRef<void>;
  @Input() errorBlock!: TemplateRef<void>;
  @Input() extendRight!: TemplateRef<void> | null;
  @Input() suffix!: string;
  @Input() dropdownRender!: TemplateRef<void>;
  @Input() dropdownClass!: string;
  @Input() emptyTpl!: TemplateRef<void>;
  @Input() optionTpl!: TemplateRef<any>;
  @Input() resultTpl!: TemplateRef<any>;
  @Input() titleTpl!: TemplateRef<any>;
  @Input() subTpl!: TemplateRef<any>;
  @Input() optionHeight!: number;
  @Input() tooltipTpl?: TemplateRef<void> | null;
  @Input() tooltipIcon: string = 'media/icons/outline/alert-information.svg';
  @Input() showTooltip: boolean = false;
  @Input() showRequired: boolean = false;
  @Input() showInvalid: boolean = true;
  @Input() hint!: string;
  @Input() optionOverflowSize = 6;
  @Input() errorMessages!: Record<string, string>;
  @Output() eOpen = new EventEmitter<boolean>();
  @Output() eBlur = new EventEmitter<void>();
  @Output() scrollToBottom = new EventEmitter<any>();

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  private commonService = inject(CommonService);
  private translationService = inject(TranslateService);

  initClass() {
    let classs = ['app-select', this.direction.toString()];
    if (this.size !== InputSize.Medium) classs.push(this.size);
    return classs.join(' ');
  }

  dropdownClassName = SELECT_DROPDOWN_CLASSNAME.md;
  itemSelected: any;

  ngOnChanges() {
    this.initSelect(this.size);
  }

  initSelect(size: InputSize) {
    this.initDropdownClassName(size);
    this.initOptionHeight(size);

    if (this.moreBlock) {
      this.borderLess = true;
    }
  }

  initDropdownClassName(size: InputSize) {
    switch (size) {
      case InputSize.Large:
        this.dropdownClassName = SELECT_DROPDOWN_CLASSNAME.lg;
        break;
      case InputSize.Small:
        this.dropdownClassName = SELECT_DROPDOWN_CLASSNAME.sm;
        break;
      default:
        this.dropdownClassName = SELECT_DROPDOWN_CLASSNAME.md;
        break;
    }

    this.dropdownClassName = [...this.dropdownClassName, this.dropdownClass];
  }

  initOptionHeight(size: InputSize) {
    if (!this.optionHeight) {
      switch (size) {
        case InputSize.Large:
          this.optionHeight = this.hasSub
            ? SELECT_OPTION_HEIGHT.lgSub
            : SELECT_OPTION_HEIGHT.lg;
          break;
        case InputSize.Small:
          this.optionHeight = this.hasSub
            ? SELECT_OPTION_HEIGHT.smSub
            : SELECT_OPTION_HEIGHT.sm;
          break;
        default:
          this.optionHeight = this.hasSub
            ? SELECT_OPTION_HEIGHT.mdSub
            : SELECT_OPTION_HEIGHT.md;
          break;
      }
    }
  }

  handleFilterWhenChangeSearch(searchValue: string, option: any): boolean {
    if (!searchValue) return false;

    const itemMapping: any =
      this.options.find((item) => item.value === option.nzValue) || null;
    if (itemMapping === null || itemMapping === undefined) return false;
    searchValue = this.commonService
      .convertVNtoUnicode(searchValue)
      .toLowerCase();

    return this.filterBy.some((key) => {
      return this.commonService
        .convertVNtoUnicode(itemMapping[key].toString())
        .toLowerCase()
        .includes(searchValue);
    });
  }

  getItem(value: any): ISelect | null {
    if (value.nzValue === 'all')
      return {
        label: this.translationService.instant('common.tat_ca'),
        value: value,
      };
    return this.options.find((item) => item.value == value.nzValue) || null;
  }

  open(e: boolean) {
    this.eOpen.emit(e);
  }

  handleBlur(e: any) {
    this.eBlur.emit(e);
  }

  handleScrollToBottom() {
    this.scrollToBottom.emit();
  }

  isShowClear() {
    return this.allowClear && this.control.touched && !this.control.disabled;
  }

  clear() {
    this._onTouched();
  }
}
