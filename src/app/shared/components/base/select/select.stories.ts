import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Direction, InputSize } from '@enums/ui.enum';
import { TranslateModule } from '@ngx-translate/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SvgInlineComponent } from '../svg-inline/svg-inline.component';
import { SelectComponent } from './select.component';

interface SelectOption {
  label: string;
  value: string;
}

const meta: Meta<SelectComponent<SelectOption>> = {
  title: 'FORMS/Select',
  component: SelectComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SelectComponent,
        SvgInlineComponent,
        TranslateModule.forRoot(),
        NzSelectModule,
        NzToolTipModule
      ],
    }),
    applicationConfig(
      {
        providers: [
          provideAnimationsAsync(),
        ],
      }
    )
  ],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(InputSize),
      description: 'Size of the select',
      table: {
        defaultValue: { summary: InputSize.Large },
      },
    },
    direction: {
      control: 'select',
      options: Object.values(Direction),
      description: 'Direction of the select layout',
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
    borderLess: {
      control: 'boolean',
      description: 'Whether the select has no border',
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
    showTooltip: {
      control: 'boolean',
      description: 'Whether to show tooltip',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Whether to allow multiple selection',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    allowSearch: {
      control: 'boolean',
      description: 'Whether to allow searching',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<SelectComponent<SelectOption>>;

const options: SelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

// Basic Select
export const Basic: Story = {
  args: {
    label: 'Basic Select',
    placeholder: 'Select an option',
    options: options,
  },
  render: (args: any) => ({
    props: {
      ...args,
      control: new FormControl('5'),
    },
    template: `
      <app-select
          [label]="'Select'"
          [placeholder]="'Chọn'"
          [options]="options"
        />
    `,
  }),
};

// Multiple Select
export const Multiple: Story = {
  args: {
    label: 'Multiple Select',
    placeholder: 'Select multiple options',
    options: options,
    multiple: true,
  },
  render: (args: any) => ({
    props: {
      ...args,
      control: new FormControl([]),
    },
    template: `
      <app-select
        [label]="label"
        [placeholder]="placeholder"
        [options]="options"
        [multiple]="multiple"
        [formControl]="control"
      ></app-select>
    `,
  }),
};

// Searchable Select
export const Searchable: Story = {
  args: {
    label: 'Searchable Select',
    placeholder: 'Search and select an option',
    options: options,
    allowSearch: true,
  },
  render: (args: any) => ({
    props: {
      ...args,
      control: new FormControl(null),
    },
    template: `
      <app-select
        [label]="label"
        [placeholder]="placeholder"
        [options]="options"
        [allowSearch]="allowSearch"
        [formControl]="control"
      ></app-select>
    `,
  }),
};

// Small Select
export const Small: Story = {
  args: {
    label: 'Small Select',
    placeholder: 'Select an option',
    options: options,
    size: InputSize.Small,
  },
  render: (args: any) => ({
    props: {
      ...args,
      control: new FormControl(null),
    },
    template: `
      <app-select
        [label]="label"
        [placeholder]="placeholder"
        [options]="options"
        [size]="size"
        [formControl]="control"
      ></app-select>
    `,
  }),
};

// Borderless Select
export const Borderless: Story = {
  args: {
    label: 'Borderless Select',
    placeholder: 'Select an option',
    options: options,
    borderLess: true,
  },
  render: (args: any) => ({
    props: {
      ...args,
      control: new FormControl(null),
    },
    template: `
      <app-select
        [label]="label"
        [placeholder]="placeholder"
        [options]="options"
        [borderLess]="borderLess"
        [formControl]="control"
      ></app-select>
    `,
  }),
};

// Required Select
export const Required: Story = {
  args: {
    label: 'Required Select',
    placeholder: 'Select an option',
    options: options,
    showRequired: true,
  },
  render: (args: any) => ({
    props: {
      ...args,
      control: new FormControl(null),
    },
    template: `
      <app-select
        [label]="label"
        [placeholder]="placeholder"
        [options]="options"
        [showRequired]="showRequired"
        [formControl]="control"
      ></app-select>
    `,
  }),
};

// Select with Tooltip
export const WithTooltip: Story = {
  args: {
    label: 'Select with Tooltip',
    placeholder: 'Select an option',
    options: options,
    showTooltip: true,
    tooltipIcon: 'media/icons/outline/alert-information.svg',
  },
  render: (args: any) => ({
    props: {
      ...args,
      control: new FormControl(null),
    },
    template: `
      <app-select
        [label]="label"
        [placeholder]="placeholder"
        [options]="options"
        [showTooltip]="showTooltip"
        [tooltipIcon]="tooltipIcon"
        [formControl]="control"
      ></app-select>
    `,
  }),
};
