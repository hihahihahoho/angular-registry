import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAccount } from './account-select.component';

@Injectable({
  providedIn: 'root'
})
export class AccountSelectService {

  private fakeAccounts: IAccount[] = [
    {
      accountNumber: '1688 0000 888',
      balance: 528213000156,
      currency: 'VND'
    },
    {
      accountNumber: '1688 0000 666',
      balance: 100000000,
      currency: 'VND'
    },
    {
      accountNumber: '1688 0000 1111',
      balance: 300000000,
      currency: 'VND'
    },
    {
      accountNumber: '1688 0000 2222',
      balance: 50000000,
      currency: 'VND'
    }
  ];

  getAccounts(): Observable<IAccount[]> {
    return of(this.fakeAccounts);
  }

  getDefaultAccount(): IAccount {
    return this.fakeAccounts[0];
  }
}
