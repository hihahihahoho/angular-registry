import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateModule } from '@ngx-translate/core';
import { applicationConfig, moduleMetadata, type Preview } from '@storybook/angular';

const decorators = [
  applicationConfig({
    providers: [
      importProvidersFrom(HttpClientModule),
      provideAnimationsAsync()
    ]
  }),
  moduleMetadata({
    imports: [
      TranslateModule.forRoot(),
    ],
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: {
        compodoc: '../documentation.json',
      }
    }
  },
  decorators,
  tags: ['autodocs'],
};

export default preview;
