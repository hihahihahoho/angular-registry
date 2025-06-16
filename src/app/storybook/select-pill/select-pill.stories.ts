import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SvgInlineComponent } from '@components/base/svgInline/svg-inline.component';
import { ValidateErrorComponent } from '@components/base/validate-error/validate-error.component';
import { PillColor, PillSize } from '@enums/UI/ui.enum';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SelectPillComponent } from './select-pill.component';

interface SelectOption {
  label: string;
  value: string;
}

const meta: Meta<SelectPillComponent<SelectOption>> = {
  title: 'FORMS/SelectPill',
  component: SelectPillComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SelectPillComponent,
        SvgInlineComponent,
        ValidateErrorComponent,
        NzSelectModule,
        NzToolTipModule,
      ],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(PillColor),
      description: 'Color of the select pill',
      table: {
        defaultValue: { summary: PillColor.OutlineGrey },
      },
    },
    size: {
      control: 'select',
      options: Object.values(PillSize),
      description: 'Size of the select pill',
      table: {
        defaultValue: { summary: PillSize.Lg },
      },
    },
    prefixIcon: {
      control: 'text',
      description: 'Prefix icon path',
      table: {
        defaultValue: { summary: 'null' },
      },
    },
    suffixIcon: {
      control: 'text',
      description: 'Suffix icon path',
      table: {
        defaultValue: { summary: 'media/icons/outline/arrow-down-2.svg' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<SelectPillComponent<SelectOption>>;

const options: SelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

// Basic Select Pill
export const Basic: Story = {
  args: {
    options: options,
  },
  render: (args: any) => ({
    props: {
      ...args,
      control: new FormControl(null),
    },
    template: `
      <app-select-pill
        [options]="options"
        [formControl]="control"
      ></app-select-pill>
    `,
  }),
};

// Small Select Pill
export const Small: Story = {
  args: {
    options: options,
    size: PillSize.Sm,
  },
  render: (args: any) => ({
    props: {
      ...args,
      control: new FormControl(null),
    },
    template: `
      <app-select-pill
        [options]="options"
        [size]="size"
        [formControl]="control"
      ></app-select-pill>
    `,
  }),
};

// With Prefix Icon
export const WithPrefixIcon: Story = {
  args: {
    options: options,
    prefixIcon: 'media/icons/outline/alert-information.svg',
  },
  render: (args: any) => ({
    props: {
      ...args,
      control: new FormControl(null),
    },
    template: `
      <app-select-pill
        [options]="options"
        [prefixIcon]="prefixIcon"
        [formControl]="control"
      ></app-select-pill>
    `,
  }),
};

// Custom Color
export const CustomColor: Story = {
  args: {
    options: options,
    color: PillColor.Primary,
  },
  render: (args: any) => ({
    props: {
      ...args,
      control: new FormControl(null),
    },
    template: `
      <app-select-pill
        [options]="options"
        [color]="color"
        [formControl]="control"
      ></app-select-pill>
    `,
  }),
};
