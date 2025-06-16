import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@components/base/Button/button.component';
import { SvgInlineComponent } from '@components/base/svgInline/svg-inline.component';
import { ValidateErrorComponent } from '@components/base/validate-error/validate-error.component';
import { Direction, InputShape, InputSize, InputType } from '@enums/UI/ui.enum';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent<string>> = {
  title: 'FORMS/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        InputComponent,
        ValidateErrorComponent,
        SvgInlineComponent,
        ButtonComponent,
        NzToolTipModule,
      ],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(InputSize),
      description: 'Size of the input field',
      table: {
        defaultValue: { summary: InputSize.Large },
      },
    },
    type: {
      control: 'select',
      options: Object.values(InputType),
      description: 'Type of the input field',
      table: {
        defaultValue: { summary: InputType.Text },
      },
    },
    direction: {
      control: 'select',
      options: Object.values(Direction),
      description: 'Direction of the input layout',
      table: {
        defaultValue: { summary: Direction.Horizontal },
      },
    },
    shape: {
      control: 'select',
      options: Object.values(InputShape),
      description: 'Shape of the input field',
      table: {
        defaultValue: { summary: InputShape.None },
      },
    },
    clear: {
      control: 'boolean',
      description: 'Whether to show clear button',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    borderLess: {
      control: 'boolean',
      description: 'Whether the input has no border',
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
    showHintIcon: {
      control: 'boolean',
      description: 'Whether to show hint icon',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Input fields allow users to enter text or data. They can be customized with various properties like size, type, and validation states. Use them in forms, search fields, or any place where user input is required.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent<string>>;

// Basic Input
export const Basic: Story = {
  args: {
    label: 'Basic Input',
    placeholder: 'Enter text here',
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Required Input
export const Required: Story = {
  args: {
    label: 'Required Input',
    placeholder: 'This field is required',
    showRequired: true,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [showRequired]="showRequired"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Input with Tooltip
export const WithTooltip: Story = {
  args: {
    label: 'Input with Tooltip',
    placeholder: 'Hover for more info',
    showTooltip: true,
    tooltipIcon: 'media/icons/outline/alert-information.svg',
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [showTooltip]="showTooltip"
        [tooltipIcon]="tooltipIcon"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Input with Hint
export const WithHint: Story = {
  args: {
    label: 'Input with Hint',
    placeholder: 'Enter your email',
    hint: 'We will never share your email',
    showHintIcon: true,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [hint]="hint"
        [showHintIcon]="showHintIcon"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Borderless Input
export const Borderless: Story = {
  args: {
    label: 'Borderless Input',
    placeholder: 'No border style',
    borderLess: true,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [borderLess]="borderLess"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Different Sizes
export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size input',
    size: InputSize.Small,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [size]="size"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

export const Medium: Story = {
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size input',
    size: InputSize.Medium,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [size]="size"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Different Shapes
export const Rounded: Story = {
  args: {
    label: 'Rounded Input',
    placeholder: 'Rounded shape input',
    shape: InputShape.Around,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [shape]="shape"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Different Types
export const Password: Story = {
  args: {
    label: 'Password Input',
    placeholder: 'Enter your password',
    type: InputType.Password,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [type]="type"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Input with Prefix Icon
export const WithPrefixIcon: Story = {
  args: {
    label: 'Input with Prefix Icon',
    placeholder: 'Search here',
    prefixIcon: 'media/icons/outline/search.svg',
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [prefixIcon]="prefixIcon"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Input with Suffix Icon
export const WithSuffixIcon: Story = {
  args: {
    label: 'Input with Suffix Icon',
    placeholder: 'Enter amount',
    suffixIcon: 'media/icons/outline/money.svg',
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [suffixIcon]="suffixIcon"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Input with Suffix Text
export const WithSuffixText: Story = {
  args: {
    label: 'Input with Suffix Text',
    placeholder: 'Enter amount',
    suffixText: 'USD',
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [suffixText]="suffixText"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Input with Rich Placeholder
export const WithRichPlaceholder: Story = {
  args: {
    label: 'Input with Rich Placeholder',
    placeholder: 'Enter text here',
    richPlaceholderTpl: null,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [richPlaceholderTpl]="richPlaceholderTpl"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Input with Error State
export const WithError: Story = {
  args: {
    label: 'Input with Error',
    placeholder: 'Enter text here',
    errorMessages: {
      required: 'This field is required',
      pattern: 'Invalid format'
    },
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl('', { validators: [Validators.required] }),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [errorMessages]="errorMessages"
        [formControl]="control"
      ></app-input>
    `,
  }),
};

// Input with Custom Template
export const WithCustomTemplate: Story = {
  args: {
    label: 'Input with Custom Template',
    placeholder: 'Enter text here',
    prefix: null,
    suffix: null,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [prefix]="prefix"
        [suffix]="suffix"
        [formControl]="control"
      >
        <ng-template #prefix>
          <span class="prefix-template">$</span>
        </ng-template>
        <ng-template #suffix>
          <span class="suffix-template">.00</span>
        </ng-template>
      </app-input>
    `,
  }),
};

// Input with Extend Right
export const WithExtendRight: Story = {
  args: {
    label: 'Input with Extend Right',
    placeholder: 'Enter text here',
    extendRight: null,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [extendRight]="extendRight"
        [formControl]="control"
      >
        <ng-template #extendRight>
          <button app-button color="primary">Action</button>
        </ng-template>
      </app-input>
    `,
  }),
};

// Input with Extend Bottom
export const WithExtendBottom: Story = {
  args: {
    label: 'Input with Extend Bottom',
    placeholder: 'Enter text here',
    extendBottom: null,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl(''),
    },
    template: `
      <app-input
        [label]="label"
        [placeholder]="placeholder"
        [extendBottom]="extendBottom"
        [formControl]="control"
      >
        <ng-template #extendBottom>
          <div class="extend-bottom-content">
            Additional information or actions can be placed here
          </div>
        </ng-template>
      </app-input>
    `,
  }),
};
