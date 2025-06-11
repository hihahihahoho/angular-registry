import { inject, Injectable } from '@angular/core';
import { Language, StorageState } from '@enums/common.enum';
import { TranslateService } from '@ngx-translate/core';
import { NzI18nService, vi_VN, en_US } from 'ng-zorro-antd/i18n';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translate = inject(TranslateService);
  private i18n = inject(NzI18nService);
  private lang$: BehaviorSubject<Language> = new BehaviorSubject<Language>(
    Language.Vi
  );

  LANG_DEFAULT = Object.keys(Language);

  initLang() {
    this.translate.addLangs(this.LANG_DEFAULT);
  }

  setLang(lang?: Language) {
    const language = lang || Language.Vi;
    this.initLang();
    this.translate.use(language);
    this.i18n.setLocale(language === Language.Vi ? vi_VN : en_US);
    this.lang$.next(language);
    localStorage.setItem(StorageState.Language, language);
  }

  getLang(): Observable<any> {
    return this.lang$.asObservable();
  }

  getLangs() {
    return this.translate.getLangs();
  }
}
