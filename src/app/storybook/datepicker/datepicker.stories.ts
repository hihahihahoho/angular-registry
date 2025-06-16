import { CommonModule, registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DateMode, Direction, InputShape, InputSize } from '@enums/UI/ui.enum';
import { TranslateModule } from '@ngx-translate/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SvgInlineComponent } from '../svg-inline/svg-inline.component';
import { ValidateErrorComponent } from '../validate-error/validate-error.component';
import { DatepickerComponent } from './datepicker.component';
registerLocaleData(vi);


const meta: Meta<DatepickerComponent<Date>> = {
  title: 'CONTROLS/Datepicker',
  component: DatepickerComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        DatepickerComponent,
        SvgInlineComponent,
        ValidateErrorComponent,
        NzDatePickerModule,
        NzToolTipModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
      ],
    }),
    applicationConfig(
      {
        providers: [
          provideAnimationsAsync(),
          { provide: NZ_I18N, useValue: vi_VN }
        ],
      }
    )
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label of the datepicker',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    dateFormat: {
      control: 'text',
      description: 'Format of the date',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    direction: {
      control: 'select',
      options: Object.values(Direction),
      description: 'Direction of the datepicker',
      table: {
        defaultValue: { summary: Direction.Horizontal },
      },
    },
    allowClear: {
      control: 'boolean',
      description: 'Whether to show clear button',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    disabledTime: {
      control: 'boolean',
      description: 'Whether to disable time selection',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    disabledRangeDate: {
      control: 'boolean',
      description: 'Whether to disable date range selection',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    inline: {
      control: 'boolean',
      description: 'Whether to show inline',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    borderLess: {
      control: 'boolean',
      description: 'Whether to show without border',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    showToday: {
      control: 'boolean',
      description: 'Whether to show today button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    range: {
      control: 'boolean',
      description: 'Whether to show range picker',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    shape: {
      control: 'select',
      options: Object.values(InputShape),
      description: 'Shape of the datepicker',
      table: {
        defaultValue: { summary: InputShape.None },
      },
    },
    size: {
      control: 'select',
      options: Object.values(InputSize),
      description: 'Size of the datepicker',
      table: {
        defaultValue: { summary: InputSize.Large },
      },
    },
    mode: {
      control: 'select',
      options: Object.values(DateMode),
      description: 'Mode of the datepicker',
      table: {
        defaultValue: { summary: DateMode.Date },
      },
    },
    showTooltip: {
      control: 'boolean',
      description: 'Whether to show tooltip',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    showRequired: {
      control: 'boolean',
      description: 'Whether to show required indicator',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Datepicker allows users to select a date or date range. It supports various modes like date, month, year, and week selection. Use it in forms where date input is required.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<DatepickerComponent<Date>>;

// Basic Datepicker
export const Basic: Story = {
  args: {
    label: 'Date',
    placeholder: 'Select date',
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<Date | null>(null),
    },
    template: `
      <app-datepicker
        [label]="label"
        [placeholder]="placeholder"
      ></app-datepicker>
    `,
  }),
};

// Range Datepicker
export const Range: Story = {
  args: {
    label: 'Date Range',
    placeholder: 'Select date range',
    range: true,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<[Date, Date] | null>(null),
    },
    template: `
      <app-datepicker
        [label]="label"
        [placeholder]="placeholder"
        [range]="range"
      ></app-datepicker>
    `,
  }),
};

// Month Picker
export const Month: Story = {
  args: {
    label: 'Month',
    placeholder: 'Select month',
    mode: DateMode.Month,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<Date | null>(null),
    },
    template: `
      <app-datepicker
        [label]="label"
        [placeholder]="placeholder"
        [mode]="mode"
      ></app-datepicker>
    `,
  }),
};

// Year Picker
export const Year: Story = {
  args: {
    label: 'Year',
    placeholder: 'Select year',
    mode: DateMode.Year,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<Date | null>(null),
    },
    template: `
      <app-datepicker
        [label]="label"
        [placeholder]="placeholder"
        [mode]="mode"
      ></app-datepicker>
    `,
  }),
};

// Week Picker
export const Week: Story = {
  args: {
    label: 'Week',
    placeholder: 'Select week',
    mode: DateMode.Week,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<Date | null>(null),
    },
    template: `
      <app-datepicker
        [label]="label"
        [placeholder]="placeholder"
        [mode]="mode"
      ></app-datepicker>
    `,
  }),
};

// Small Datepicker
export const Small: Story = {
  args: {
    label: 'Small Datepicker',
    placeholder: 'Select date',
    size: InputSize.Small,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<Date | null>(null),
    },
    template: `
      <app-datepicker
        [label]="label"
        [placeholder]="placeholder"
        [size]="size"
      ></app-datepicker>
    `,
  }),
};

// Borderless Datepicker
export const Borderless: Story = {
  args: {
    label: 'Borderless Datepicker',
    placeholder: 'Select date',
    borderLess: true,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<Date | null>(null),
    },
    template: `
      <app-datepicker
        [label]="label"
        [placeholder]="placeholder"
        [borderLess]="borderLess"
      ></app-datepicker>
    `,
  }),
};

// Required Datepicker
export const Required: Story = {
  args: {
    label: 'Required Datepicker',
    placeholder: 'Select date',
    showRequired: true,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<Date | null>(null),
    },
    template: `
      <app-datepicker
        [label]="label"
        [placeholder]="placeholder"
        [showRequired]="showRequired"
        [required]="true"
      ></app-datepicker>
    `,
  }),
};
