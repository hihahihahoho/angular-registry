import { registerLocaleData } from '@angular/common';
import { HttpBackend, provideHttpClient } from '@angular/common/http';
import en from '@angular/common/locales/en';
import vi from '@angular/common/locales/vi';
import {
  ApplicationConfig,
  importProvidersFrom,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  InMemoryScrollingOptions
} from '@angular/router';
import { CardEmptyDefaultComponent } from '@components/base/card-empty-default/card-empty-default.component';
import { Language } from '@enums/common.enum';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { en_US, NZ_I18N, provideNzI18n, vi_VN } from 'ng-zorro-antd/i18n';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
// import { routes } from './app.routes';
registerLocaleData(vi);
registerLocaleData(en);

const ngZorroConfig: NzConfig = {
  notification: { nzTop: 80, nzBottom: 20 },
  pagination: {
    nzSimple: false,
  },
  table: {
    nzSimple: false,
  },
  empty: {
    nzDefaultEmptyContent: CardEmptyDefaultComponent,
  }
};

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

export function HttpLoaderFactory(http: HttpBackend) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: 'i18n/common/', suffix: '.json' },
  ]);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(
    //   routes,
    //   withComponentInputBinding(),
    //   withInMemoryScrolling(scrollConfig)
    // ),
    provideNzI18n(vi_VN),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    importProvidersFrom([
      FormsModule,
      NzModalModule,
      NzDrawerModule,
      TranslateModule.forRoot({
        defaultLanguage: Language.Vi,
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpBackend],
        },
        isolate: true,
        extend: true,
      }),
    ]),
    {
      provide: NZ_I18N,
      useFactory: (localId: string) => {
        let langConfig = vi_VN;
        switch (localId) {
          case 'en':
            langConfig = en_US;
            break;
          case 'vi':
            langConfig = vi_VN;
            break;
        }

        return {
          ...langConfig,
          ...{
            Pagination: {
              items_per_page: '',
            },
          },
        };
      },
      deps: [LOCALE_ID],
    },
  ],
};
