import { inject, Injectable } from '@angular/core';
import {
  Observable,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  startWith,
} from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { ScreenSizeMap } from '@constants/common';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private router = inject(Router);
  private location = inject(Location);

  /**
   *
   * @param input : string
   * @returns
   */
  convertVNtoUnicode(input: string): string {
    if (typeof input !== 'string') return input;

    return input
      .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
      .replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
      .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
      .replace(/E|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
      .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
      .replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
      .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
      .replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
      .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
      .replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
      .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
      .replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  }

  allowMetaKey(event: KeyboardEvent): boolean {
    if (
      [
        'Delete',
        'Backspace',
        'Tab',
        'Escape',
        'Enter',
        'NumLock',
        'ArrowLeft',
        'ArrowRight',
        'End',
        'Home',
      ].indexOf(event.key) !== -1 ||
      (event.key === 'a' && (event.ctrlKey || event.metaKey)) ||
      (event.key === 'c' && (event.ctrlKey || event.metaKey)) ||
      (event.key === 'v' && (event.ctrlKey || event.metaKey)) ||
      (event.key === 'x' && (event.ctrlKey || event.metaKey))
    ) {
      return true;
    }
    return false;
  }

  private getScreenSize(screenSize: any[]): any {
    return screenSize.find(([nameScreen, mediaQuery]) => {
      return window.matchMedia(mediaQuery).matches;
    })[0];
  }

  getCurrentScreenSize(
    screenSizeMap: Map<string, string> = ScreenSizeMap
  ): Observable<string> {
    const screenSizes = [...screenSizeMap.entries()];
    return fromEvent(window, 'resize').pipe(
      startWith(this.getScreenSize(screenSizes)),
      map((event: Event) => {
        return this.getScreenSize(screenSizes);
      }),
      distinctUntilChanged()
    );
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  historyBack() {
    this.location.back();
  }

  getCardTheStatus(status: any): 'actived' | 'locked' | 'not-actived' {
    switch (status) {
      case '0':
      case 'A': {
        return 'actived';
      }
      case '1':
      case 'N': {
        return 'not-actived';
      }
      default:
        return 'locked';
    }
  }

  routeIsParamaters(routers: string[]): Observable<boolean> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => routers.includes(this.router.url)),
      startWith(routers.includes(this.router.url))
    );
  }

  addBodyClass(className: string) {
    const bodyElement = document.body;
    if (!bodyElement) {
      return;
    }
    bodyElement.classList.add(className);
  }

  removeBodyClass(className: string) {
    const bodyElement = document.body;
    if (!bodyElement) {
      return;
    }
    bodyElement.classList.remove(className);
  }

  clearBodyClass() {
    const bodyElement = document.body;
    if (!bodyElement) {
      return;
    }
    bodyElement.removeAttribute('class');
  }

  toSlug(str: string) {
    str = str.toLowerCase();
    // convert to unicode
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // replace char: đĐ
    str = str.replace(/[đĐ]/g, 'd');
    // replace special char to ''
    str = str.replace(/([^0-9a-z-\s])/g, '');
    // replace space char to -
    str = str.replace(/(\s+)/g, '-');
    // delete char - adjacent
    str = str.replace(/-+/g, '-');
    // delete char - first/last
    str = str.replace(/^-+|-+$/g, '');
    return str;
  }
}
