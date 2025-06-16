import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  Input
} from '@angular/core';
import { SvgInlineComponent } from '@components/base/svgInline/svg-inline.component';
import { ItemIconCircleComponent } from '@components/custom/item-icon-circle/item-icon-circle.component';
import { CCY } from '@enums/CCY/ccy.enum';


@Component({
  selector: 'app-base-result',
  standalone: true,
  imports: [
    CommonModule,
    SvgInlineComponent,
    ItemIconCircleComponent
  ],
  templateUrl: './base-result.component.html',
  styleUrl: './base-result.component.scss',
})
export class BaseResultComponent {
  @HostBinding('class.layout-base-result') result = true;
  @Input() error = false
  @Input() code!: string
  @Input() showScreenShotButton = true;
  @Input() amount!: number;
  @Input() amountCcy: string = CCY.VND;
  @Input() time: string = '';
  @Input() showActionsFuction = true;
  icon = 'media/icons/illustrations/success.svg';
  logo = 'media/logo/logo-PGBank.svg'

  ngOnInit() {
    this.icon = this.error ? 'media/icons/illustrations/error.svg' : 'media/icons/illustrations/success.svg';
  }
}
