export enum AccordionType {
  Box = "box",
  Arrow = "arrow",
  UnBox = "unbox",
}

export enum AccordionSize {
  Sm = "sm",
  Md = "md",
  Lg = "lg",
}

export enum ItemIconCircleSize {
  Md = "md",
  Lg = "lg",
}

export enum AvatarSize {
  Xs = "xs",
  Sm = "sm",
  Md = "md",
  midMd = "midMd",
  Lg = "lg",
  Xxl = "xxl",
}

export enum AvatarType {
  Image = "image",
  Icon = "icon",
  Text = "text",
}

export enum AvatarStyle {
  Bank = "bank",
  Light = "light",
}

export enum AuthMethod {
  SMS_OTP = "sms_otp",
  SMART_OTP = "smartotp",
  SOFT_OTP = "softotp",
  PASSWORD = "password",
}

export enum BadgeColor {
  Success = "success",
  Warning = "warning",
  Disable = "disable",
  NonSemantic = "non-semantic",
  Error = "error",
  Info = "info",
}

export enum BadgeIconTypes {
  Success = "media/icons/solid/ic_checkmark_circle_solid.svg",
  Warning = "media/icons/solid/ic_alert_solid.svg",
  Disable = "media/icons/solid/ic_alert_circle_solid.svg",
  NonSemantic = "media/icons/solid/ic_circle_dashed.svg",
  Error = "media/icons/solid/alert-circle.svg",
  Info = "media/icons/solid/ic_information_circle_solid.svg",
}

export enum BadgeNumberColor {
  Primary = "primary",
  Secondary = "secondary",
}

export enum BadgeSize {
  Sm = "sm",
  Md = "md",
  Lg = "lg",
}

export enum ButtonShape {
  Circle = "circle",
  Around = "around",
  None = "none",
}

export enum ButtonSize {
  Xs = "xs",
  Sm = "sm",
  Md = "md",
  Lg = "lg",
}

export enum ButtonColor {
  Primary = "primary",
  Secondary = "secondary",
  LinkPrimary = "link-primary",
  LinkSecondary = "link-secondary",
  LinkOnColor = "link-on-color",
  SubDanger = "sub-danger",
}

export enum ButtonAlign {
  Start = "start",
  End = "end",
  Center = "center",
  Between = "between",
}

export enum CardEmptyType {
  List = "list",
  User = "user",
}

export enum CardEmptyIconType {
  List = "media/empty-state/folder.svg",
  User = "media/empty-state/user.svg",
}

export enum DateMode {
  Date = "date",
  Week = "week",
  Month = "month",
  Year = "year",
  Quarter = "quarter",
}

export enum Direction {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export enum IconType {
  Avatar = "avatar",
  Card = "card",
  Service = "service",
}

export enum InputSize {
  Small = "small",
  Medium = "default",
  Large = "large",
}

export enum InputType {
  Text = "text",
  Password = "password",
}

export enum InputShape {
  Around = "around",
  None = "none",
}

export type ImageFormatType = "svg" | "png" | "jpg" | "jpeg" | "unknown";

export enum ModalActionLayout {
  Fill = "fill",
  Right = "right",
  Left = "left",
  Center = "center",
}

export enum ModalSize {
  XSmall = "xs",
  Small = "sm",
  XMedium = "xmd",
  Medium = "md",
  Large = "lg",
  XLarge = "xl",
}

export enum ModalTypeShow {
  Popup = "popup",
  Sheet = "sheet",
}

export enum ModalTypeColor {
  Process = "process",
  Success = "success",
  Warning = "warning",
  Error = "error",
}

export enum ModalType {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Info = "info",
}

export enum ModalIconType {
  Success = "media/icons/semantic/success.svg",
  Error = "media/icons/semantic/error.svg",
  Warning = "media/icons/semantic/alert.svg",
  Info = "media/icons/semantic/info.svg",
}

export enum PageWrapperSize {
  XSmall = "xsmall",
  Small = "small",
  Medium = "medium",
  Large = "large",
  XLarge = "xlarge",
  Full = "full",
}

export enum PillColor {
  Primary = "primary",
  SubPrimary = "sub-primary",
  Outline = "outline",
  OutlineGrey = "outline-grey",
  Secondary = "secondary",
  SubSecondary = "sub-secondary",
  Danger = "danger",
  SubDanger = "sub-danger",
  Success = "success",
  SubSuccess = "sub-success",
  Warning = "warning",
  SubWarning = "sub-warning",
  Transparent = "transparent",
  Select = "select",
}

export enum PillSize {
  Sm = "small",
  Md = "medium",
  Lg = "large",
}

export enum ProcessDirection {
  Rtl = "rtl",
  Ltr = "ltr",
}

export enum ProcessType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
  Secondary = "secondary",
}

export enum RankingType {
  Silver = "silver",
  Gold = "gold",
  Titanium = "titanium",
  Platinum = "platinum",
  None = "none",
}

export enum StepType {
  Full = "full",
  Bar = "bar",
}

export enum TabSize {
  Sm = "sm",
  Md = "md",
  Lg = "lg",
}

export enum TabType {
  Pill = "pill",
  ButtonPill = "button-pill",
}

export enum TabTheme {
  Default = "default",
  Brand = "brand",
}

export const TOAST_DURATION = 3000;

export enum ToastType {
  Info = "info",
  Success = "success",
  Warning = "warning",
  Danger = "danger",
}

export enum ToastIconType {
  Info = "media/icons/solid/alert-info-toast.svg",
  Warning = "media/icons/solid/alert-warning-toast.svg",
  Danger = "media/icons/solid/alert-error-toast.svg",
  Success = "media/icons/solid/alert-success-toast.svg",
}

export enum ValidateErrorAlign {
  Left = "left",
  Center = "center",
  Right = "right",
}
