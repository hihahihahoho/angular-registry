import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, inject, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CardEmptyComponent } from '@components/base/card-empty/card-empty.component';
import { SvgInlineComponent } from '@components/base/svg-inline/svg-inline.component';
import { BaseCVADirective } from '@directives/base-cva/base-cva.directive';
import { ElementMetricsDirective } from '@directives/element-metric/element-metric.directive';
import { UI } from '@services/ui/ui.service';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ListItemComponent } from '../list-item/list-item.component';
import { AccountSelectService } from './account-select.class';

export interface IAccount {
  accountNumber: string;
  balance: number;
  currency: string;
}

@Component({
  selector: 'app-account-select',
  standalone: true, imports: [
    CommonModule,
    ReactiveFormsModule,
    NzDropDownModule,
    SvgInlineComponent,
    ElementMetricsDirective,
    CardEmptyComponent,
    ListItemComponent
  ],
  templateUrl: './account-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AccountSelectComponent),
      multi: true,
    },
  ],
  styleUrl: './account-select.component.scss',
})
export class AccountSelectComponent extends BaseCVADirective<string> {
  @Input() placeholder: string = 'Select Account';
  @Output() eChange = new EventEmitter<IAccount>();

  readonly UI = inject(UI);
  private accountService = inject(AccountSelectService);

  accounts: IAccount[] = [];
  showDropdown = false;
  selectedAccount: IAccount | null = null;

  override ngOnInit() {
    this.loadAccounts();
  }

  override writeValue(value: string): void {
    if (value && this.accounts.length > 0) {
      this.selectedAccount = this.accounts.find(account => account.accountNumber === value) || null;
    } else {
      this.selectedAccount = null;
    }
  }

  private loadAccounts(): void {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;

      // If we have a form value, try to set the selected account
      if (this.control?.value) {
        this.selectedAccount = this.accounts.find(account => account.accountNumber === this.control.value) || null;
      } else if (this.accounts.length > 0 && !this.selectedAccount) {
        this.selectedAccount = this.accountService.getDefaultAccount();
        // Set the default value in the form
        if (this.selectedAccount) {
          this._onChange(this.selectedAccount.accountNumber);
          this.eChange.emit(this.selectedAccount);
        }
      }
    });
  }

  visibleChange(visible: boolean): void {
    this.showDropdown = visible;
    if (!visible) {
      this._onTouched();
    }
  }

  selectAccount(account: IAccount): void {
    this.selectedAccount = account;
    this._onChange(account.accountNumber);
    this.eChange.emit(account);
    this.showDropdown = false;
    this._onTouched();
  }

  formatBalance(balance: number): string {
    return balance.toLocaleString('en-US');
  }
}

