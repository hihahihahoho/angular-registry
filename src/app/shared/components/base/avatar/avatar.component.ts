import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  inject,
} from '@angular/core';
import { ButtonComponent } from '@components/base/button/button.component';
import { SvgInlineComponent } from '@components/base/svg-inline/svg-inline.component';
import {
  AvatarSize,
  AvatarStyle,
  AvatarType,
  ButtonColor,
  RankingType,
} from '@enums/ui.enum';
import { ShortenNamePipe } from '@pipes/shorten-name/shorten-name.pipe';
import { UI } from '@services/ui/ui.service';

function toAvatarSize(value: string): AvatarSize {
  const sizeKey = Object.keys(AvatarSize).find(
    (key) => AvatarSize[key as keyof typeof AvatarSize] === value
  );
  return sizeKey
    ? AvatarSize[sizeKey as keyof typeof AvatarSize]
    : AvatarSize.Md;
}

@Component({
  selector: 'app-avatar, [app-avatar]',
  standalone: true,
  imports: [CommonModule, SvgInlineComponent, ShortenNamePipe, ButtonComponent],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() rank: RankingType = RankingType.None;
  @Input({ transform: toAvatarSize }) size: AvatarSize = AvatarSize.Md;
  @Input() type: AvatarType = AvatarType.Icon;
  @Input() content: string = 'media/default/avatar.svg';
  @Input() round: boolean = false;
  @Input() style: AvatarStyle = AvatarStyle.Bank;
  @Input() changeColorIcon: boolean = false;
  @Input() enableChange: boolean = false;
  @Input() iconChange: string = 'media/icons/doutone/edit.svg';
  @Input() iconChange2Color: boolean = true;
  @Input() btnChangeColor: ButtonColor = ButtonColor.Primary;
  @Input() active: boolean = false;

  @Output() changeAvt = new EventEmitter();

  @HostBinding('class') get hostClass() {
    return this.initClass();
  }

  SIZE_ICON_CONTENT = {
    bank: {
      xs: 4,
      sm: 6,
      md: 8,
      midMd: 8,
      lg: 12,
      xxl: 14,
    },
    light: {
      xs: 4,
      sm: 4,
      md: 5,
      midMd: 5,
      lg: 8,
      xxl: 10,
    },
  };

  SIZE_ICON_BTN = {
    xs: 1,
    sm: 2,
    md: 2,
    midMd: 2,
    lg: 3,
    xxl: 4,
  };

  initClass() {
    let classs = ['app-avt'];
    classs.push('app-avt-' + this.type);
    if (this.size !== AvatarSize.Md) classs.push('app-avt-' + this.size);
    if (this.rank !== RankingType.None) classs.push('rank-' + this.rank);
    if (this.round) classs.push('rounded');
    if (this.active) classs.push('app-avt-active');
    classs.push('bg-' + this.style);
    return classs.join(' ');
  }

  readonly UI = inject(UI);

  handleChangeAvt() {
    this.changeAvt.emit();
  }
}
