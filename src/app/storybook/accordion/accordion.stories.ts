import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AccordionComponent } from '@components/base/accordion/accordion.component';
import { AccordionSize, AccordionType } from '@enums/UI/ui.enum';
import { TranslateModule } from '@ngx-translate/core';
import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';


const meta: Meta<AccordionComponent> = {
  title: 'CONTROLS/Accordion',
  component: AccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule,TranslateModule.forRoot(),],
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
    isActive: {
      control: 'boolean',
      description: 'Whether the accordion is active',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the accordion is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: Object.values(AccordionSize),
      description: 'Size of the accordion',
      table: {
        defaultValue: { summary: AccordionSize.Lg },
      },
    },
    type: {
      control: 'select',
      options: Object.values(AccordionType),
      description: 'Type of the accordion',
      table: {
        defaultValue: { summary: AccordionType.Arrow },
      },
    },
    header: {
      control: 'text',
      description: 'Header content of the accordion',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<AccordionComponent>;

export const Basic: Story = {
  args: {
    isActive: false,
    isDisabled: false,
    size: AccordionSize.Lg,
    type: AccordionType.Arrow,
    header: 'Accordion Header',
  },
  render: (args) => ({
    props: args,
    template: `
      <div app-accordion [header]="header">
        <div>Accordion Content</div>
      </div>
    `,
  }),
};

export const Active: Story = {
  args: {
    isActive: true,
    isDisabled: false,
    size: AccordionSize.Lg,
    type: AccordionType.Arrow,
    header: 'Accordion Header',
  },
  render: (args) => ({
    props: args,
    template: `
      <div app-accordion [header]="header" [type]="type" [isActive]="isActive">
        <div>Accordion Content</div>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    isActive: false,
    isDisabled: true,
    size: AccordionSize.Lg,
    type: AccordionType.Arrow,
    header: 'Accordion Header',
  },
  render: (args) => ({
    props: args,
    template: `
      <div app-accordion [header]="header" [type]="type" [isDisabled]="isDisabled">
        <div>Accordion Content</div>
      </div>
    `,
  }),
};

export const Small: Story = {
  args: {
    isActive: false,
    isDisabled: false,
    size: AccordionSize.Sm,
    type: AccordionType.Arrow,
    header: 'Accordion Header',
  },
  render: (args) => ({
    props: args,
    template: `
      <div app-accordion [header]="header" [type]="type" [isActive]="isActive" [isDisabled]="isDisabled" [size]="size">
        <div>Small Accordion Content</div>
      </div>
    `,
  }),
};

export const Medium: Story = {
  args: {
    isActive: false,
    isDisabled: false,
    size: AccordionSize.Md,
    type: AccordionType.Arrow,
    header: 'Accordion Header',
  },
  render: (args) => ({
    props: args,
    template: `
      <div app-accordion [header]="header" [type]="type" [isActive]="isActive" [isDisabled]="isDisabled" [size]="size">
        <div>Medium Accordion Content</div>
      </div>
    `,
  }),
};
