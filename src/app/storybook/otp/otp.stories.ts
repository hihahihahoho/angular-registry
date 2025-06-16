import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { NgOtpInputComponent } from 'ng-otp-input';
import { ValidateErrorComponent } from '../validate-error/validate-error.component';
import { OTPComponent } from './otp.component';

const meta: Meta<OTPComponent<string>> = {
  title: 'FORMS/OTP',
  component: OTPComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        OTPComponent,
        ValidateErrorComponent,
        NgOtpInputComponent,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
      ],
    }),
  ],
  argTypes: {
    size: {
      control: 'number',
      description: 'Number of OTP input boxes',
      table: {
        defaultValue: { summary: '6' },
      },
    },
    digitOnly: {
      control: 'boolean',
      description: 'Whether to allow only digits',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    hint: {
      control: 'text',
      description: 'Hint text to display below the OTP input',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    showError: {
      control: 'boolean',
      description: 'Whether to show error messages',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    errorMessages: {
      control: 'object',
      description: 'Custom error messages',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<OTPComponent<string>>;

// Basic OTP
export const Basic: Story = {
  args: {
    size: 6,
    digitOnly: true,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<string | null>(null),
    },
    template: `
      <app-otp
        [size]="size"
        [digitOnly]="digitOnly"
        [control]="control"
      ></app-otp>
    `,
  }),
};

// OTP with Hint
export const WithHint: Story = {
  args: {
    size: 6,
    digitOnly: true,
    hint: 'Enter the 6-digit code sent to your phone',
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<string | null>(null),
    },
    template: `
      <app-otp
        [size]="size"
        [digitOnly]="digitOnly"
        [hint]="hint"
        [control]="control"
      ></app-otp>
    `,
  }),
};

// OTP with Custom Error Messages
export const WithCustomErrors: Story = {
  args: {
    size: 6,
    digitOnly: true,
    showError: true,
    errorMessages: {
      required: 'Please enter the OTP code',
      otpNotFill: 'Please enter all digits',
    },
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<string | null>(null),
    },
    template: `
      <app-otp
        [size]="size"
        [digitOnly]="digitOnly"
        [showError]="showError"
        [errorMessages]="errorMessages"
        [control]="control"
      ></app-otp>
    `,
  }),
};

// 4-digit OTP
export const FourDigit: Story = {
  args: {
    size: 4,
    digitOnly: true,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<string | null>(null),
    },
    template: `
      <app-otp
        [size]="size"
        [digitOnly]="digitOnly"
        [control]="control"
      ></app-otp>
    `,
  }),
};

// 8-digit OTP
export const EightDigit: Story = {
  args: {
    size: 8,
    digitOnly: true,
  },
  render: (args) => ({
    props: {
      ...args,
      control: new FormControl<string | null>(null),
    },
    template: `
      <app-otp
        [size]="size"
        [digitOnly]="digitOnly"
        [control]="control"
      ></app-otp>
    `,
  }),
};
