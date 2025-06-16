import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemIconCircleComponent } from '@components/custom/item-icon-circle/item-icon-circle.component';
import { MainRoute } from '@enums/Route/route.enum';
import { UI } from '@services/UI/ui.service';

@Component({
  selector: 'app-card-features-homepage',
  imports: [CommonModule, ItemIconCircleComponent,RouterLink],
  templateUrl: './card-features-homepage.component.html',
  styleUrl: './card-features-homepage.component.scss'
})
export class CardFeaturesHomepageComponent {
  readonly UI = inject(UI);
  features =  [
    { icon: 'doutone/vi.svg', label: 'Tài khoản', routerLink: MainRoute.Account },
    { icon: 'doutone/chuyen-tien.svg', label: 'Chuyển tiền', routerLink: MainRoute.Transfer },
    { icon: 'doutone/tiet-kiem.svg', label: 'Tiết kiệm', routerLink: '' },
    { icon: 'doutone/dich-vu-the.svg', label: 'Dịch vụ Thẻ', routerLink:'' },
    { icon: 'doutone/thanh-toan.svg', label: 'Thanh toán', routerLink: '' },
    { icon: 'doutone/nap-tien.svg', label: 'Nạp tiền', routerLink: '' },
  ]
}
