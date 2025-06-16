import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { CardEmptyIconType, CardEmptyType } from '@enums/UI/ui.enum';

@Component({
  selector: 'app-card-empty, [app-card-empty]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-empty.component.html',
  styleUrl: './card-empty.component.scss',
})
export class CardEmptyComponent {
  @Input() type: CardEmptyType = CardEmptyType.List;
  @Input() title!: string;
  @Input() moreContent!: TemplateRef<void>;

  @HostBinding('class.app-card-empty') card = true;

  mediaSrc!: string;

  ngOnInit() {
    switch (this.type) {
      case CardEmptyType.User:
        this.mediaSrc = CardEmptyIconType.User;
        break;
      default:
        this.mediaSrc = CardEmptyIconType.List;
        break;
    }
  }
}
