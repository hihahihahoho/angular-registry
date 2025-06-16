import { CommonModule } from '@angular/common';
import {
  Component,
  forwardRef,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { DropdownItemComponent } from '@components/base/dropdown-item/dropdown-item.component';
import { PillComponent } from '@components/base/pill/pill.component';
import { ISelect } from '@components/base/select/select.component';
import { BaseCVADirective } from '@directives/baseCva/base-cva.directive';
import { ClickOutsideDirective } from '@directives/click-outside/click-outside.directive';
import { PillColor, PillSize } from '@enums/UI/ui.enum';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-select-pill, [app-select-pill]',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzDropDownModule,
    PillComponent,
    DropdownItemComponent,
    ClickOutsideDirective,
  ],
  templateUrl: './select-pill.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectPillComponent),
      multi: true,
    },
  ],
  styleUrl: './select-pill.component.scss',
})
export class SelectPillComponent<T>
  extends BaseCVADirective<T>
  implements OnChanges
{
  @HostBinding('class.app-select-pill') pill = true;
  @Input() color: PillColor = PillColor.OutlineGrey;
  @Input() size: PillSize = PillSize.Lg;
  @Input() prefixIcon!: string | null;
  @Input() suffixIcon: string | null = 'media/icons/outline/arrow-down-2.svg';
  @Input() options: ISelect[] = [];

  isActive: boolean = false;
  selectedItem?: ISelect;

  override writeValue(value: string): void {
    this.selectedItem = this.getOptionByValue(value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) this.selectedItem = this.options[0];
  }

  getOptionByValue(value: string): ISelect | undefined {
    return this.options.find((item) => item.value === value);
  }

  handleFocus() {
    this._onTouched;
    this.isActive = !this.isActive;
  }

  handleBlur() {
    this.isActive = false;
  }

  handleChange(item: ISelect) {
    this.selectedItem = item;
    this._onChange(item.value);
  }
}
