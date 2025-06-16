import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@components/base/Button/button.component';
import { CopyButtonComponent } from '@components/base/copy-button/copy-button.component';
import { SvgInlineComponent } from '@components/base/svgInline/svg-inline.component';
import { UI } from '@services/UI/ui.service';

@Component({
  selector: 'app-card-account-homepage',
  imports: [
    CommonModule,
    CopyButtonComponent,
    ButtonComponent,
    SvgInlineComponent,
  ],
  templateUrl: './card-account-homepage.component.html',
  styleUrl: './card-account-homepage.component.scss',
})
export class CardAccountHomepageComponent {
  readonly UI = inject(UI);
  accountDetails: any = {
    balance: 350000000,
    availableBalance: 350000000,
    overdraftLimit: 50000000,
    rate: '0.1%',
    openDate: '01/02/2023',
    branch: 'CN Tây Hồ',
    isDefault: true,
    accountNumber: '1234567890',
    accountName: 'NGUYEN HAI DANG',
    ccy: 'VND',
  };
  isVisible = true;
  eyeIcons = {
    visible: 'media/icons/doutone/eyes.svg',
    hidden: 'media/icons/doutone/eyes-off-mass.svg',
  };
  handleClick() {
    this.isVisible = !this.isVisible;
  }
}
