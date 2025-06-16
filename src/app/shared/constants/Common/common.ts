
export const ScreenSizeMap = new Map([
  ['xs', '(min-width: 0) and (max-width: 575.98px)'],
  ['sm', '(min-width: 576px) and (max-width: 767.98px)'],
  ['md', '(min-width: 768px) and (max-width: 991.98px)'],
  ['lg', '(min-width: 992px) and (max-width: 1023.98px)'],
  ['xl', '(min-width: 1024px) and (max-width: 1279.98px)'],
  ['xxl', '(min-width: 1280px)'],
]);

export enum ScreenSize {
  Xs = 'xs',
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
  Xxl = 'xxl',
}
