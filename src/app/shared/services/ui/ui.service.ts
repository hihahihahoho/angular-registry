import { Injectable } from '@angular/core';
import {
  AccordionSize,
  AccordionType,
  AvatarSize,
  AvatarStyle,
  AvatarType,
  BadgeColor,
  BadgeIconTypes,
  BadgeNumberColor,
  BadgeSize,
  ButtonAlign,
  ButtonColor,
  ButtonShape,
  ButtonSize,
  CardEmptyType,
  Direction,
  IconType,
  InputShape,
  InputSize,
  InputType,
  ItemIconCircleSize,
  ModalActionLayout,
  ModalSize,
  ModalType,
  PageWrapperSize,
  PillColor,
  PillSize,
  ProcessDirection,
  ProcessType,
  StepType,
  TabSize,
  TabTheme,
  TabType,
  ValidateErrorAlign
} from '@enums/UI/ui.enum';

@Injectable({
  providedIn: 'root',
})
export class UI {
  AvatarSize = AvatarSize;
  AvatarType = AvatarType;
  AvatarStyle = AvatarStyle;
  AccordionType = AccordionType;
  AccordionSize = AccordionSize;

  ItemIconCircleSize = ItemIconCircleSize;

  BadgeColor = BadgeColor;
  BadgeSize = BadgeSize;
  BadgeIconTypes = BadgeIconTypes;

  BadgeNumberColor = BadgeNumberColor;

  ButtonAlign = ButtonAlign;
  ButtonShape = ButtonShape;
  ButtonColor = ButtonColor;
  ButtonSize = ButtonSize;

  CardEmptyType = CardEmptyType;
  Direction = Direction;

  IconType = IconType;

  InputSize = InputSize;
  InputShape = InputShape;
  InputType = InputType;

  ModalSize = ModalSize;
  ModalType = ModalType;
  ModalActionLayout = ModalActionLayout;

  ModalOTPSize = ModalSize.XMedium;

  PageWrapperSize = PageWrapperSize;
  PillColor = PillColor;
  PillSize = PillSize;

  ProcessDirection = ProcessDirection;
  ProcessType = ProcessType;

  TabSize = TabSize;
  TabType = TabType;
  TabTheme = TabTheme;

  StepType = StepType;

  OptionHeightSelectCard = 108;
  OptionHeightSelectCardShorten = 80;
  ValidateErrorAlign = ValidateErrorAlign;
}
